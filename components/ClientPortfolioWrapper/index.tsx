"use client";

import { useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface ClientPortfolioWrapperProps {
  categories: Category[];
  defaultCategory: string;
}

export default function ClientPortfolioWrapper({
  categories,
  defaultCategory,
}: ClientPortfolioWrapperProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Дополнительная логика (например, обновление UI или вызов API)
    console.log("Selected category:", categoryId);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          style={{
            fontWeight: selectedCategory === category.id ? "bold" : "normal",
          }}
        >
          {category.name}
        </button>
      ))}
      <p>Selected category: {selectedCategory}</p>
    </div>
  );
}