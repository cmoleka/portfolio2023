import 'server-only'
import type {
  BlogPostProps,
  BlogPostSideBarProps,
  BlogPostTagsProps,
} from "@pTypes/uiTypes";
import GhostContentApi from "@tryghost/content-api";

const api = new GhostContentApi({
  url: `${process.env.GHOST_API_URL}`,
  key: `${process.env.GHOST_CONTENT_API_KEY}`,
  version: "v5.0",
});

export const getPosts = async (currentPage = 1) => {
  const posts = await api.posts.browse({
    limit: 9,
    page: currentPage,
    fields: ["title", "slug", "published_at", "excerpt"],
    order: "published_at DESC",
    filter: ["visibility:public", "featured:false"],
  });
  return posts as BlogPostProps[];
};

export const getPostsByTag = async (tag: string, currentPage = 1) => {
  const posts = await api.posts.browse({
    limit: 9,
    page: currentPage,
    fields: ["title", "slug", "published_at", "excerpt"],
    order: "published_at DESC",
    filter: [`tags:[${tag}]`],
  });
  return posts as BlogPostProps[];
};
export const getFeaturedPost = async () => {
  const featuredPost = await api.posts.browse({
    fields: ["title", "slug", "published_at", "excerpt", "feature_image"],
    filter: "featured:true",
  });
  return featuredPost[0] as BlogPostProps;
};

export const getSinglePost = async (postSlug: string) => {
  const post = await api.posts.read({
    slug: postSlug,
  });
  return post as BlogPostProps;
};

export const getAllTags = async () => {
  const tags = await api.tags.browse({
    fields: ["name", "slug", "description"],
    include: "count.posts",
    filter: "visibility:public",
  });
  return tags as BlogPostSideBarProps["labels"];
};

export const getSingleTag = async (tagSlug: string) => {
  const tag = await api.tags.browse({
    fields: ["name", "description"],
    include: "count.posts",
    filter: `slug:${tagSlug}`,
  });
  return tag[0] as BlogPostTagsProps;
};
