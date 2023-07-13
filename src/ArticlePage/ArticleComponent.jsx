import React from "react";

const ArticleComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex align-middle justify-center my-7">
        <hr className="lg:w-40 my-auto" />
        <h3 className="text-2xl text-white bg-yellow-600 py-2 px-4 mx-2">1</h3>
        <hr className="lg:w-40 my-auto" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="lg:text-3xl font-semibold my-4 text-center sm:text-sm ">
          Marrobbio, Sliema & St Julian's
        </h4>
        <img
          src="https://maltaa.simationtechnologies.com/wp-content/uploads/2023/02/Delicious-Food-2.jpg"
          alt="Food"
          className="w-2/3"
        />
        <p className="text-sm text-center">
          This unapologetically Italian eatery is not only home to one of my
          favourite pizzas in Malta, but also to a carbonara that will please
          all purists. On the plate, it doesn’t look too appetising, however on
          the palate… it’s the real deal!
        </p>
        <div className="text-sm">
          Price: 10EUR as a starter and 12EUR as main
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;
