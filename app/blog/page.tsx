import {
  BlogPostsTimeLine,
  BlogSideBar,
  FeatureBlogPost,
} from "@components/Blog";
import { BlogPageContent } from "@content/BlogPageContent";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import { getPosts, getFeaturedPost, getAllTags } from "@utils/GhostApi";

const BlogPage = async () => {
  const BlogPosts = await getPosts();
  const BlogFeaturedPost = await getFeaturedPost();
  const BlogTags = await getAllTags();
  const [posts, featurePost, tags] = await Promise.all([
    BlogPosts,
    BlogFeaturedPost,
    BlogTags,
  ]);

  return (
    <div className="container mx-auto w-full space-y-20 py-6 px-6">
      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <div className="flex w-full flex-col md:w-2/6">
          <h1 className="font-bold text-turquoise md:text-2xl md:text-white lg:text-5xl">
            {PAGES_CONTENT_CONST.blogLabel}
          </h1>
        </div>
        <div className="flex w-full flex-col md:w-4/6">
          <p className="font-medium text-white md:text-sm lg:text-base">
            {BlogPageContent.hero.description}
          </p>
        </div>
      </section>
      <hr />

      <section className="flex w-full flex-col justify-between md:flex-row md:space-x-6">
        <FeatureBlogPost {...featurePost} />
      </section>
      <section className="flex w-full flex-col justify-between space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="flex w-full flex-col space-y-4  lg:w-1/5">
          <h3 className="text-lg font-bold text-white">
            {PAGES_CONTENT_CONST.blogCategoryLabel}
          </h3>
          <BlogSideBar labels={tags} />
        </div>
        <hr className="block lg:hidden" />
        <div className="flex w-full flex-col space-y-4">
          <h3 className="text-lg font-bold text-white">
            {PAGES_CONTENT_CONST.blogPostsLabel}
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

export default BlogPage;