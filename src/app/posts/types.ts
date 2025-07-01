export type TBlog = {
    id: string;
    title: string;
    body: string;
    tags: string[];
    reactions: TBlogReaction;
    views: number;
    userId: string;
    user?: Omit<TUser, 'password'>;
}

export type TBlogReaction = {
    likes: number;
    dislikes: number;
}

export interface IBlogPosts {
    posts?: TBlog[];
    tagsGroup?: string[];
}

export interface IBodyBLog  {
    dataBody: TBlog;
}

export type TReaction = 'likes' | 'dislikes';

export type TUser = {
    name: string;
    id: string;
    password: string;
    username: string;
}