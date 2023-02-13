import type {
  BlogPostProps,
} from "@pTypes/uiTypes";
import { BlogSideBar } from "@components/Blog";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import { DateFormat } from "@utils/DateFormat";
import { getPosts, getSinglePost, getAllTags } from "@utils/GhostApi";
import Link from "next/link";

interface SinglePageBlogPostProps {
  params: {
    slug: string;
  }
}
export async function generateStaticParams(): Promise<SinglePageBlogPostProps["params"][]> {
  const BlogPosts = await getPosts();
  return BlogPosts.map((post: BlogPostProps) => ({
    slug: post.slug
  }))
}

const BlogSinglePostPage = async ({ params }: SinglePageBlogPostProps) => {
  const slug = params.slug || "";
  const BlogPost = getSinglePost(slug);
  const BlogTags = getAllTags();
  const [post, tags] = await Promise.all([BlogPost, BlogTags]);

  return (
    <div className="container mx-auto w-full space-y-20 py-6 px-6">
      <section className="flex w-full flex-col justify-between space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="flex w-full flex-col space-y-4  lg:w-1/5">
          <Link
            href={{
              pathname: "/blog",
            }}
            scroll={false}
          >
            <h3 className="text-xl font-bold text-white before:text-turquoise before:content-['<-']">
              {PAGES_CONTENT_CONST.blogGoBackLabel}
            </h3>
          </Link>
          <hr />
          <h3 className="text-lg font-bold text-white">
            {PAGES_CONTENT_CONST.blogCategoryLabel}
          </h3>
          <BlogSideBar labels={tags} />
        </div>
        <hr className="block lg:hidden" />
        <div className="flex w-full flex-col space-y-4">
          <span className="text-xs capitalize text-white">
            <b>{PAGES_CONTENT_CONST.blogPostedOnLabel}</b> -{" "}
            {`${DateFormat(post.published_at)}`}
          </span>
          <h1 className="text-4xl font-bold capitalize text-turquoise">
            {post.title}
          </h1>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html as string,
            }}
            className="blogpost"
          />
        </div>
      </section>
    </div>
  );
};



export default BlogSinglePostPage;
