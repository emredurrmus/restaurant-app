import React from "react";
import "../styles/CategoryList.css";

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-button ${
            selectedCategory === category.id ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
