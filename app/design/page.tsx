import type { FC } from "react";
import { ButtonWhite, ButtonDark, ButtonWithIcon } from "@components/Buttons";

const DesignPage: FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-white">Colors</h1>
      <label className="text-bittersweet">
        Colors only have Default, md and dark variants.
      </label>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row">
          <span className="font-semibold text-white">Turquoise</span>
          <div className="ml-2 h-5 w-5 rounded-full bg-turquoise" />
          <div className="ml-2 h-5 w-5 rounded-full bg-turquoise-md" />
          <div className="ml-2 h-5 w-5 rounded-full bg-turquoise-dark" />
        </div>
        <div className="flex flex-row">
          <span className="font-semibold text-white">Bittersweet</span>
          <div className="ml-2 h-5 w-5 rounded-full bg-bittersweet" />
          <div className="ml-2 h-5 w-5 rounded-full bg-bittersweet-md" />
          <div className="ml-2 h-5 w-5 rounded-full bg-bittersweet-dark" />
        </div>
        <div className="flex flex-row">
          <span className="font-semibold text-white">Charcoal</span>
          <div className="ml-2 h-5 w-5 rounded-full bg-charcoal" />
        </div>
      </div>
      <hr />
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-white">Buttons</h1>
        <ButtonWhite label="Hello" buttonHref="/" />
        <ButtonDark label="Hello" buttonHref="/" />
        <ButtonDark secondary label="Hello" buttonHref="/" />
        <ButtonWithIcon label="Hello" buttonHref="/" />
      </div>
      <hr className="h-1 bg-white " />
      <span className="text-2xl font-bold text-white">Typography</span>
      <span className="text-xl font-bold text-white">Headings</span>
      <h1 className="text-6xl font-bold leading-snug tracking-wider text-turquoise">
        The quick brown fox jumping over the lazy dog.
      </h1>
      <h1 className="text-4xl font-bold text-white">
        The quick brown fox jumping over the lazy dog.
      </h1>
      <h2 className="text-2xl font-bold text-white">
        The quick brown fox jumping over the lazy dog.
      </h2>
      <h3 className="text-lg font-bold text-white">
        The quick brown fox jumping over the lazy dog.
      </h3>
      <h4 className="text-xs font-bold text-white">
        The quick brown fox jumping over the lazy dog.
      </h4>
      <span className="text-xl font-bold text-white">Paragraphs</span>
      <p className="text-base text-white">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </p>
      <p className="text-sm text-white">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </p>
      <p className="text-xs text-white">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </p>
    </div>
  );
};

export default DesignPage;
