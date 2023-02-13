import type {
  BlogPostProps,
  BlogPostSideBarProps
} from "@pTypes/uiTypes";
import { BlogPostsTimeLine, BlogSideBar } from "@components/Blog";
import { PAGES_CONTENT_CONST } from "@utils/constants";

import { getPosts, getAllTags, getPostsByTag, getSingleTag } from "@utils/GhostApi";
import Link from "next/link";


export type BlogTagsProps = {
  name: string;
  slug: string;
  description: string;
};

interface SinglePageBlogPostProps {
  params: {
    slug: string[];
    tag: string[];
  }
}
export async function generateStaticParams(): Promise<SinglePageBlogPostProps["params"][]> {
  const BlogTags = await getAllTags();
  const BlogPosts = await getPosts();
  const postSlugs = BlogPosts.map((post: BlogPostProps) => post.slug)
  const tagSlugs = BlogTags.map((tag: BlogTagsProps) => tag.slug)

  return [{
    slug: postSlugs,
    tag: tagSlugs
  }
  ]
}

const BlogSlugPage = async ({ params }: SinglePageBlogPostProps) => {
  const slug = params.slug.join(',') || "";
  const tagsarg = params.tag.join(",")
  const BlogPosts = getPostsByTag(tagsarg);
  const BlogTags = getAllTags();
  const BlogSingleTag = getSingleTag(slug);
  const [posts, tags, tag] = await Promise.all([
    BlogPosts,
    BlogTags,
    BlogSingleTag,
  ]);

  return (
    <div className="container mx-auto w-full space-y-20 py-6 px-6">
      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <div className="flex w-full flex-col md:w-2/6">
          <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-5xl">
            {tag.name}
          </h1>
        </div>
        <div className="flex w-full flex-col md:w-4/6">
          <p className="font-medium text-white md:text-sm lg:text-base">
            {tag.description}
          </p>
        </div>
      </section>
      <hr />

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
          <h3 className="text-lg font-bold text-white">
            {`${tag.name}-${PAGES_CONTENT_CONST.blogPostsLabel}`}
          </h3>
          <BlogPostsTimeLine posts={posts} />
          <section className="flex h-24 w-full flex-row items-center justify-center">
            <button className="flex h-fit w-fit items-center justify-center border-2 border-turquoise  px-8 py-3">
              <span className="inline-block w-full text-sm font-semibold capitalize text-white ">
                {PAGES_CONTENT_CONST.blogPaginationLabel}
              </span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default BlogSlugPage;
