import React, { useState, useContext, useEffect } from "react";
import { ServiceContext } from "../context/ServiceContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const ProductPage = () => {
  const { products } = useContext(ServiceContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const categories = [
    "Creation & Development",
    "Performance & Advertising",
    "SEO & Optimization",
    "Content & Branding",
    "Marketing Channels",
    "Social & Platform Marketing",
  ];

  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  }, [products, category]);

  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
            WHAT WE DO
          </p>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#754e17] sm:text-5xl lg:text-6xl">
                Our Services
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a98040] sm:text-base">
                Explore our digital solutions designed to build brands,
                generate growth, and turn your online presence into a
                powerful business asset.
              </p>
            </div>

            <div className="text-sm font-medium text-[#754e17]">
              {filterProducts.length}{" "}
              {filterProducts.length === 1 ? "Service" : "Services"}
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-[#754e17]/10" />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}
        <div className="flex flex-col gap-10 lg:flex-row">

          {/* ===================================================
              FILTER SIDEBAR
          =================================================== */}
          <aside className="w-full lg:w-64 lg:shrink-0">

            {/* Mobile Filter Header */}
            <button
              type="button"
              onClick={() => setShowFilter(!showFilter)}
              className="
                flex
                w-full
                items-center
                justify-between
                border
                border-[#754e17]/10
                bg-[#eee5dc]
                px-5
                py-4
                text-left
                lg:hidden
              "
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#754e17]">
                FILTER SERVICES
              </span>

              <img
                className={`h-3 w-3 transition-transform duration-300 ${
                  showFilter ? "rotate-180" : ""
                }`}
                src={assets.dropdown_icon}
                alt=""
              />
            </button>

            {/* Filter Box */}
            <div
              className={`
                mt-3
                border
                border-[#754e17]/10
                bg-[#eee5dc]
                p-6
                ${showFilter ? "block" : "hidden"}
                lg:mt-0
                lg:block
              `}
            >
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98040]">
                  FILTER BY
                </p>

                <h2 className="mt-2 text-lg font-extrabold text-[#754e17]">
                  Categories
                </h2>
              </div>

              <div className="h-px bg-[#754e17]/10" />

              <div className="mt-6 flex flex-col gap-4">
                {categories.map((item) => (
                  <label
                    key={item}
                    className="
                      group
                      flex
                      cursor-pointer
                      items-start
                      gap-3
                      text-sm
                      text-[#a98040]
                      transition-colors
                      duration-200
                      hover:text-[#754e17]
                    "
                  >
                    <input
                      type="checkbox"
                      value={item}
                      checked={category.includes(item)}
                      onChange={toggleCategory}
                      className="
                        mt-0.5
                        h-4
                        w-4
                        cursor-pointer
                        accent-[#754e17]
                      "
                    />

                    <span className="leading-5">
                      {item}
                    </span>
                  </label>
                ))}
              </div>

              {/* Clear Filters */}
              {category.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCategory([])}
                  className="
                    mt-7
                    border-b
                    border-[#754e17]
                    pb-1
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#754e17]
                    transition-opacity
                    hover:opacity-60
                    cursor-pointer
                  "
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* ===================================================
              SERVICES
          =================================================== */}
          <section className="min-w-0 flex-1">

            {/* Services Header */}
            <div className="mb-7 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98040]">
                  EXPLORE
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#754e17] sm:text-3xl">
                  All Services
                </h2>
              </div>

              {category.length > 0 && (
                <p className="hidden text-xs text-[#a98040] sm:block">
                  {category.length} filter
                  {category.length > 1 ? "s" : ""} active
                </p>
              )}
            </div>

            {/* Services Grid */}
            {filterProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filterProducts.map((item, index) => (
                  <ProductItem
                    key={item._id || index}
                    _id={item._id}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            ) : (
              /* Empty Filter State */
              <div className="flex min-h-[350px] flex-col items-center justify-center border border-[#754e17]/10 bg-[#eee5dc] px-6 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#754e17]/10">
                  <span className="text-xl text-[#754e17]">
                    ×
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#754e17]">
                  No services found
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#a98040]">
                  Try selecting a different category or clear your
                  filters to view all available services.
                </p>

                <button
                  type="button"
                  onClick={() => setCategory([])}
                  className="
                    mt-6
                    bg-[#754e17]
                    px-7
                    py-3
                    text-xs
                    font-bold
                    tracking-[0.15em]
                    text-[#f2ede9]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_30px_rgba(117,78,23,0.2)]
                    cursor-pointer
                  "
                >
                  VIEW ALL SERVICES
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

