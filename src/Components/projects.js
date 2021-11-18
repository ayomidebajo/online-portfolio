import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "./item";
import simpleDashboard from "../assets/simple-dashboard.png";
import ecommerce from "../assets/ecommerce-stor.png";
import booksClub from "../assets/books-club.png";
import blogPress from "../assets/blogpress.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Projects() {
  const items = [
    { img: simpleDashboard, url: "https://simple-dashboard-ui.netlify.app" },
    { img: ecommerce, url: "https://my-e-commerce-store.netlify.app" },
    { img: booksClub, url: "https://books-club.netlify.app" },
    { img: blogPress, url: "https://blogpress.netlify.app" },
  ];

  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        showArrows={false}
        enableMouseSwipe={true}
        className="container"
      >
        {items.map((item) => (
          <Item item={item} key={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
