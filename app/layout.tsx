import "../styles/globals.css";
import type { LayoutProps } from "@pTypes/uiTypes";
import { AnalyticsWrapper } from "@components/analytics";
import { HeaderComponent } from "@components/Header";
import FooterComponent from "@components/Footer";
import { SITE_METADATA } from "@utils/constants";
import { bitter, dm_sans } from "@utils/fonts";

export const metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: SITE_METADATA.keywords,
  authors: [{ name: SITE_METADATA.author, url: "https://carlomoleka.com" }],
  colorScheme: "dark",
  creator: SITE_METADATA.author,
  publisher: SITE_METADATA.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    type: "website",
    siteName: SITE_METADATA.title,
    images: [
      {
        url: SITE_METADATA.metaImage,
        width: 600,
        height: 600,
        alt: SITE_METADATA.title,
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${dm_sans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-gray-900 bg-no-repeat md:bg-gradient-to-b md:from-turquoise-dark md:to-gray-900">
        <div className="container mx-auto flex  flex-col space-y-10  md:space-y-20 ">
          <HeaderComponent />
          {children}
          <FooterComponent />
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
