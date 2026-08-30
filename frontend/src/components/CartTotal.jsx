import React, { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ServiceContext);

  const total = getCartAmount();

  return (
    <div className="w-full">

      {/* Subtotal */}
      <div className="flex items-center justify-between text-sm">
        <p className="text-[#a98040]">
          Subtotal
        </p>

        <p className="font-semibold text-[#754e17]">
          {currency}
          {total.toLocaleString("en-IN")}
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-[#754e17]/10" />

      {/* Total */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a98040]">
            Total
          </p>

          <p className="mt-1 text-xs text-[#a98040]/80">
            Before final confirmation
          </p>
        </div>

        <p className="text-2xl font-extrabold tracking-tight text-[#754e17]">
          {currency}
          {total.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
};

export default CartTotal;

