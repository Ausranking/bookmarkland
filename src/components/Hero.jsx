import React from "react";
import ActionBtn from "./ActionBtn";

const Hero = () => {
  return (
    <section className="hero align-body flex  ">
      <div className=" grid max-sm:place-items-center m">
        <h1 data-testid = 'heading' className="hero-text dark:text-dark-text">
          A  Bookmark <br /> Manager
        </h1>
        <p className="text-sm lg:text-lg p-2 ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-3 pt-3">
          <div>
            <ActionBtn
              link="/"
              text="Get it on Chrome"
              className="bg-soft-blue btn"
            />
          </div>
          <div>
            <ActionBtn
              link="/"
              text="Get it on Firefox"
              className="btn bg-grayish-blue"
            />
          </div>
        </div>
      </div>
      <div className="bg-illus ">
        <img src="/images/illus.svg" />
      </div>
    </section>
  );
};

export default Hero;
