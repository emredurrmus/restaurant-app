import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import CategoryList from "./CategoryList";
import MenuItem from "./MenuItem";
import { categories, menuItems } from "../data/menuData";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".category-section");
      const scrollPosition = window.scrollY + 200; // Offset ekleyerek daha erken kategori değişimi

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kategorilere göre gruplandırılmış menü öğeleri
  const groupedItems = categories.map((category) => ({
    ...category,
    items: menuItems.filter((item) =>
      category.id === "all" ? true : item.category === category.id
    ),
  }));

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>Pizza House</h1>
        <p>En Lezzetli Pizzaların Adresi</p>
      </header>

      <CategoryList
        categories={categories}
        selectedCategory={activeSection}
        onSelectCategory={(categoryId) => {
          setSelectedCategory(categoryId);
          const element = document.getElementById(categoryId);
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <div className="menu-sections">
        {groupedItems.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="category-section"
          >
            {category.id !== "all" && (
              <h2 className="category-title">{category.name}</h2>
            )}
            <div className="menu-items">
              {category.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
