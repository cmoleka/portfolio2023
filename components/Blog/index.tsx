import Link from "next/link";
import Image from "next/image";
import { PAGES_CONTENT_CONST } from "@utils/constants";
import type {
  BlogPostSideBarProps,
  BlogPostProps,
  BlogPostsTimelineProps,
} from "@pTypes/uiTypes";
import { DateFormat } from "@utils/DateFormat";

export const FeatureBlogPost = ({
  title,
  excerpt,
  published_at,
  slug,
  feature_image,
}: BlogPostProps) => {
  return (
    <div className="flex w-full flex-col justify-between overflow-hidden rounded-md">
      <div className="flex w-full justify-center">
        <div className="relative flex h-fit w-full flex-col p-4">
          <div className="z-20 w-full space-y-2  p-4  md:w-3/4 lg:w-1/2">
            <span className="text-xs capitalize text-white">
              <b>{PAGES_CONTENT_CONST.blogFeaturedLabel}</b> -{" "}
              {`${DateFormat(published_at)}`}
            </span>
            <Link
              href={`/blog/${slug}`}
              scroll={false}
            >
              <h1 className="text-4xl font-bold capitalize text-turquoise">
                {title}
              </h1>
            </Link>
            <p className="text-sm text-white/75 lg:text-base">{excerpt}</p>
          </div>
          <div className="absolute top-0 left-0 z-10 h-full w-full bg-turquoise-dark/90 mix-blend-multiply"></div>
          <Image
            src={feature_image as string}
            alt={title}
            className="overla rounded-md object-cover"
            sizes="1024"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export const BlogPost = ({
  title,
  excerpt,
  published_at,
  slug,
}: BlogPostProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      scroll={false}
      passHref
    >
      <div className="h-fit w-full space-y-4 rounded-md hover:bg-gray-600 p-4 shadow-md bg-gray-800 ">
        <h2 className="text-lg font-bold capitalize text-turquoise">{title}</h2>
        <p className="h-full text-white/75 md:text-xs lg:text-sm">{excerpt}</p>
        <div className="flex flex-row flex-wrap gap-2">
          <span className="text-xs capitalize text-white">
            <b>{`${DateFormat(published_at)}`}</b> {" - "}
            <i className="text-turquoise">
              {PAGES_CONTENT_CONST.blogReadMoreLabel}
            </i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export const BlogPostsTimeLine = ({ posts }: BlogPostsTimelineProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPost key={post.title} {...post} />
      ))}
    </div>
  );
};

export const BlogSideBar = ({ labels }: BlogPostSideBarProps) => {
  return (
    <ul className="flex flex-row flex-wrap items-center gap-4 lg:flex-col lg:items-start lg:gap-0 lg:space-x-0 lg:space-y-2">
      {labels.map((topic) => (
        <li key={topic.slug} className="flex flex-row items-center">
          <Link
            href={`/blog/tags/${topic.slug}`}
            scroll={false}
          >
            <span className="text-sm capitalize text-white/75">
              {topic.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
