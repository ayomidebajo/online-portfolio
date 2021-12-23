import React from "react";

export const Item = (item) => {
  return (
    <div className="item-card">
      <a
        href={item.item.url}
        target="_blank"
        title={item.item.title}
        rel="noopener noreferrer"
      >
        {" "}
        <img src={item.item.img} alt="project" width="100%" />
      </a>
    </div>
  );
};
