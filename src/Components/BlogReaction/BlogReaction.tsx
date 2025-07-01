'use client';
import { TBlog, TReaction } from "@/app/posts/types";
import ThumbsDown from "../Icons/ThumbsDown/ThumbsDown";
import ThumbsUp from "../Icons/ThumbsUp/ThumbsUp";
import style from './BlogReaction.module.css';
import { useState } from "react";
import config from "@/config";

interface IBlogReaction {
    id: string | undefined;
    likes: number | undefined;
    dislikes: number | undefined;
}

const BlogReaction = ({likes, dislikes, id}: IBlogReaction): JSX.Element => {
    const [disableButton, setDisableButton] = useState<boolean>(false);
    const [activeReaction, setActiveReaction] = useState<TBlog | undefined>(undefined);

    const handleReaction = async(id: string | number, reaction: TReaction) => {
        setDisableButton(true);

        const res = await updateReaction(id, reaction);
        setActiveReaction(res);
       
        setTimeout(() => {
            setDisableButton(false);
        }, 1000);
    }

    const updateReaction = async (id: string | number, reaction: TReaction): Promise<TBlog | undefined> => {
        try {
            const res = await fetch(`${config.apiUrl}/posts/${id}`, {
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({reaction})
            });
            return await res.json();
        } catch (e) {
            console.log(e);
            return undefined;
        }
    }

    return (
        <>
            <h4>Reactions</h4>
            <ul className={style['blog-popularity']}>
                <li>
                    <span className={style['blog-detail-sub-title']}>
                        <button 
                            disabled={disableButton} 
                            className={style['reaction-button']} 
                            onClick={() => handleReaction(id, "likes")}>
                                <ThumbsUp />
                        </button>
                    </span>
                    <span className={style['blog-detail-sub-title']}>
                        {activeReaction?.reactions?.likes ?? likes}
                    </span>
                </li>
                <li>
                    <span className={style['blog-detail-sub-title']}>
                        <button disabled={disableButton} 
                            className={style['reaction-button']} 
                            onClick={() => handleReaction(id, "dislikes")}>
                                <ThumbsDown />
                        </button>
                    </span>
                    <span className={style['blog-detail-sub-title']}>
                        {activeReaction?.reactions?.dislikes ?? dislikes}
                    </span>
                </li>
            </ul>
        </>
    )
}

export default BlogReaction;
