import { SITE_METADATA } from "@utils/constants";

const Head = () => (
  <>
    <title>{SITE_METADATA.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={SITE_METADATA.description} />
    <link rel="icon" href="/favicon.ico" />
    <meta name="author" content={SITE_METADATA.author} />
    <meta name="keywords" content={SITE_METADATA.keywords.toString()} />
    <meta name="robots" content="index, follow" />
    {/* facebook */}
    <meta name="og:image:width" content="600" />
    <meta name="og:image:height" content="600" />
    <meta name="og:site_name" content={SITE_METADATA.title} />
    <meta name="og:type" content="website" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={SITE_METADATA.title} />
    <meta property="og:description" content={SITE_METADATA.description} />
    <meta property="og:image" content={SITE_METADATA.metaImage} />
    <meta property="og:url" content={SITE_METADATA.url} />
    {/* twitter */}
    <meta name="twitter:title" content={SITE_METADATA.title} />
    <meta name="twitter:description" content={SITE_METADATA.description} />
    <meta name="twitter:image:src" content={SITE_METADATA.metaImage} />
    <meta name="twitter:image" content={SITE_METADATA.metaImage} />
    <meta name="twitter:site" content={SITE_METADATA.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={SITE_METADATA.author} />
  </>
);

export default Head;
