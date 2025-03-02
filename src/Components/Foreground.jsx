import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".9mb",
      color: "aqua",
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      size: ".4mb",
      color: "pink",
    },
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, non!",
      size: ".8mb",
      color: "transparent",
    },
  ];

  return (
    <div>
      <div ref={ref} className="foreground">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;

