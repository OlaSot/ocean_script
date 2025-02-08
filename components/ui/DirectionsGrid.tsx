"use client";

import { DirectionCard } from "./DirectionCard";

interface Direction {
  number: string;
  title: string;
  image: string;
}

const directions: Direction[] = [
  {
    number: "01",
    title: "Sales analytics",
    image: "/figures/Untitled-1-01.png",
  },
  {
    number: "02",
    title: "Conversation Analysis",
    image: "/figures/Untitled-1-02.png",

  },
  {
    number: "03",
    title: "Optimization of supplies",
    image: "/figures/Untitled-1-03.png",

  },
  {
    number: "04",
    title: "Personalization of offers",
    image: "/figures/Untitled-1-04.png",

  },
  {
    number: "05",
    title: "Big data analysis",
    image: "/figures/Untitled-1-05.png",

  },
  {
    number: "06",
    title: "Chatbots and Recommender systems",
    image: "/figures/Untitled-1-06.png",

  },
];

export function DirectionsGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {directions.map((direction, index) => (
          <DirectionCard key={index} {...direction} index={index} />
        ))}
      </div>
    </div>
  );
}
