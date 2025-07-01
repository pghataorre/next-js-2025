import PageLayout from "@/Components/PageLayout/PageLayout";
import style from '../Posts.module.css';
import NavButton from "../../../Components/NavButton/NavButton";
import { TBlog } from "../types"; 
import BlogReaction from "@/Components/BlogReaction/BlogReaction";

interface IBlogParams {
  params: {
    blogId: string;
  }
}

const getSingleBlog = async (id: string) => {
  try {
      const res = await fetch(`${process.env.BASE_API_URL}/api/posts/${id}`,
        {"method": "GET"}
      );
      const blogDetail = await res.json();
      return blogDetail;
  } catch (error) {
    console.log('error ------------------------', error);
    return undefined
  }
}

export default async function BlogDetail({params}: IBlogParams) {
  let showError: boolean= false;
  let blogDetail: TBlog | undefined = undefined;
  const { blogId } = params;

  if(!blogId) {
    showError = true;
  } else {
    blogDetail = await getSingleBlog(blogId);
  }

  return (
    <PageLayout>
      {
        !showError ? (
          <>
            <h1>{`${blogDetail?.title || blogId}`}</h1>

            <ul className={style['blog-details']}>
              <li>
                <h3>BLOG DESCRIPTION:</h3>
                <p>{blogDetail?.body}</p>
              </li>
              <li>
                <h4>TAGS</h4>
                <p><strong>[ {blogDetail?.tags?.join(' | ')} ]</strong></p>
              </li>
              <li>
                <BlogReaction id={blogDetail?.id} likes={blogDetail?.reactions?.likes} dislikes={blogDetail?.reactions?.dislikes} />
              </li>
            </ul>
          </>
        ) : (
          <>
            <h1>THERE HAS BEEN AN ERROR PLEASE GO BACK AND TRY AGAIN</h1>
          </>
        )
      }
      <div className={style['nav-container']}>
        <NavButton buttonTitle="<< Go Back to Post list" pageUrl="/posts"/>
      </div>
    </PageLayout>
  );
}
