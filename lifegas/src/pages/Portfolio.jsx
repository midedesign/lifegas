import React from "react";
import HeroImage from "../assets/images/livingdecor.png";
import Image1 from "../assets/images/portfolio-1.png";
import Image2 from "../assets/images/portfolio-2.png";
import Image3 from "../assets/images/portfolio-3.png";
import Image4 from "../assets/images/portfolio-4.png";
import Image5 from "../assets/images/portfolio-5.png";
import Image6 from "../assets/images/portfolio-6.png";
import NewsletterSection from "../components/NewsletterSection";

const Portfolio = () => {
  const categories = [
    { name: "Residential", href: "#residential", active: true },
    { name: "Commercial", href: "#commercial", active: false },
    { name: "Styling", href: "#styling", active: false },
    { name: "Custom Product Commissions", href: "#custom", active: false },
  ];

  const portfolioImages = [
    { id: 1, image: Image1, category: "residential" },
    { id: 2, image: Image2, category: "residential" },
    { id: 3, image: Image3, category: "residential" },
    { id: 4, image: Image4, category: "residential" },
    { id: 5, image: Image5, category: "residential" },
    { id: 6, image: Image6, category: "residential" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HeroImage}')` }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 leading-tight">
            Explore our collection of residential
            <br />
            and commercial projects.
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light opacity-90 max-w-2xl">
            Each project reflects our timeless design ethos and craftsmanship
          </p>
        </div>
      </section>

      {/* Categories - Mobile/Tablet Only (Horizontal Tabs) */}
      <div className="xl:hidden bg-gray-50 border-b border-gray-200 overflow-x-auto">
        <nav className="flex gap-6 px-6 py-4 min-w-min">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className={`text-sm font-light whitespace-nowrap transition-colors duration-200 ${
                category.active
                  ? "text-gray-900 font-normal border-b-2 border-gray-900 pb-1"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {category.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Portfolio Section - Full Width Grid (Mobile to Large Laptop) */}
      <section className="py-0 xl:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {portfolioImages.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Portfolio ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - With Sidebar (Extra Large Desktop Only) */}
      <section className="py-0 hidden xl:block">
        <div className="flex">
          {/* Left Sidebar */}
          <aside className="w-64 bg-gray-50 p-12 border-r border-gray-200 flex-shrink-0">
            <nav>
              <ul className="space-y-6 sticky top-8">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={category.href}
                      className={`text-lg font-light transition-colors duration-200 block ${
                        category.active
                          ? "text-gray-900 font-normal"
                          : "text-gray-400 hover:text-gray-700"
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Image Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2">
              {portfolioImages.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={`Portfolio ${item.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Portfolio;
