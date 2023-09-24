import "../styles/globals.scss";
import type { LayoutProps } from "@pTypes/uiTypes";
import { AnalyticsWrapper } from "@components/analytics";
import { HeaderComponent } from "@components/Header";
import FooterComponent from "@components/Footer";


const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head />
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
