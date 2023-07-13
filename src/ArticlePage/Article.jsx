import React from "react";
import ArticleHero from "./ArticleHero";
import ArticleComponent from "./ArticleComponent";

const Article = () => {
  return (
    <div>
      <ArticleHero />
      <ArticleComponent
      catIndex="1"
        mainHeading="Marrobbio, Sliema & St Julian's"
        imgSource="https://maltaa.simationtechnologies.com/wp-content/uploads/2023/02/Delicious-Food-2.jpg"
        firstPara="This unapologetically Italian eatery is not only home to one of my
          favourite pizzas in Malta, but also to a carbonara that will please
          all purists. On the plate, it doesn’t look too appetising, however on
          the palate… it’s the real deal!"
        secondPara="Price: 10EUR as a starter and 12EUR as main"
      />
    </div>
  );
};

export default Article;
