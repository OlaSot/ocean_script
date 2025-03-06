"use client";

import { useState } from "react";

interface PortfolioCategorySelectorProps {
  onCategoryChange: (category: string) => void;
  categories: string[];
  defaultCategory: string;
}

export default function PortfolioCategorySelector({
  onCategoryChange,
  categories,
  defaultCategory,
}: PortfolioCategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
      <style>
        {`
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hidden {
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="flex space-x-3 md:space-x-6 lg:space-x-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              onCategoryChange(category);
            }}
            className={`cursor-pointer font-semibold text-xs sm:text-sm md:text-[14px] lg:text-lg rounded-full px-4 py-2 border-2 transition-all ${
              selectedCategory === category
                ? "bg-btn_color text-white border-btn_color"
                : "border-gray-300 hover:bg-btn_color hover:text-white"
            }`}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}