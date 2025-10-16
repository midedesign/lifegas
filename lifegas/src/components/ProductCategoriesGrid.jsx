import React from "react";
import furnitureImage from "../assets/images/furniturepicture.png";
import decorImage from "../assets/images/decorpicture.png";
import lightImage from "../assets/images/lightpicture.png";
import beddingImage from "../assets/images/beddingpicture.png";

const ProductCategoriesGrid = ({
  categories: customCategories,
  onCategoryClick,
}) => {
  const defaultCategories = [
    {
      id: 1,
      title: "View all furniture",
      image: furnitureImage,
      alt: "Modern living room furniture setup",
      category: "furniture",
    },
    {
      id: 2,
      title: "View decor gallery",
      image: decorImage,
      alt: "Stylish home decor and accessories",
      category: "decor",
    },
    {
      id: 3,
      title: "Shop bedding sets",
      image: beddingImage,
      alt: "Comfortable bedroom with quality bedding",
      category: "bedding",
    },
    {
      id: 4,
      title: "View lighting fixtures",
      image: lightImage,
      alt: "Modern pendant lighting fixtures",
      category: "lighting",
    },
  ];

  const categories = customCategories || defaultCategories;

  const handleCategoryClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    } else {
      console.log(`Clicked: ${category.title}`);
      //  adding  navigation logic here
    }
  };

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            {/* Background Image */}
            <div
              className="h-80 md:h-96 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url('${category.image}')`,
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-8 w-full">
                <button
                  className="relative overflow-hidden bg-salmonpink-1100 font-light text-salmonpink-100 px-6 py-3 text-sm  tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/button"
                  aria-label={`Browse ${category.category} collection`}
                >
                  <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover/button:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10 group-hover/button:text-salmonpink-1100 transition-colors duration-500">
                    {category.title}
                  </span>
                </button>
              </div>
            </div>

            {/* Loading State Placeholder */}
            {/* <div className="absolute inset-0 bg-gray-200 animate-pulse opacity-0 group-hover:opacity-0" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;
