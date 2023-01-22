import type { FC } from "react";

const FooterComponent: FC = () => {
  return (
    <footer className="container mx-auto flex w-full flex-row items-center">
      <div className="flex w-full flex-row justify-center space-x-4">
        <p className="text-base capitalize text-white">
          © 2023 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
