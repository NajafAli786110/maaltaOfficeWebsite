import React from "react";

const ArticleComponent = (props) => {
  return (
    <div className="container mx-auto">
      <div className="flex align-middle justify-center mt-10">
        <hr className="lg:w-40 my-auto border-1 border-black" />
        <h3 className="text-2xl text-white bg-yellow-600 py-2 px-4 mx-2">
          {props.catIndex}
        </h3>
        <hr className="lg:w-40 my-auto border-1 border-black" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="lg:text-3xl font-semibold my-4 text-center sm:text-sm ">
          {props.mainHeading}
        </h4>
        <img src={props.imgSource} alt="Food" className="lg:w-2/3 sm:w-full" />
        <p className="text-base text-center lg:w-3/5 mt-3 sm:max-w-screen-sm">{props.firstPara}</p>
        <div className="text-base text-center w-3/5 mt-3">
          {props.secondPara}
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;
