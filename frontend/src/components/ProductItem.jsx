import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../context/ServiceContext";

const ProductItem = ({ _id, name, price, description, category }) => {
  const { currency } = useContext(ServiceContext);

  return (
    <Link to={`/product/${_id}`} className="group block h-full">
      <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-[#e8dcc8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#a98040] hover:shadow-[0_12px_35px_rgba(117,78,23,0.12)]">
        <div className="absolute left-0 top-0 h-1 w-0 bg-[#754e17] transition-all duration-300 group-hover:w-full" />

        <div className="mb-4">
          <span className="inline-block rounded-full bg-[#f8f3ea] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#a98040]">
            {category}
          </span>
        </div>

        <h3 className="mb-3 text-lg font-semibold leading-snug text-[#754e17] transition-colors duration-300 group-hover:text-[#a98040]">
          {name}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-auto flex items-end justify-between border-t border-[#eee5d8] pt-4">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider text-gray-400">
              Starting from
            </p>

            <p className="text-lg font-semibold text-[#754e17]">
              {currency}
              {price}
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7aa] text-[#754e17] transition-all duration-300 group-hover:border-[#754e17] group-hover:bg-[#754e17] group-hover:text-white">
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
