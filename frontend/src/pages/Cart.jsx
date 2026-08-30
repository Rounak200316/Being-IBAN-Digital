import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../context/ServiceContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ServiceContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItems[items],
        });
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <div className="mb-12">


          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#754e17] sm:text-5xl">
                Your Cart
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#a98040]">
                Review your selected services before moving forward with
                your digital growth journey.
              </p>
            </div>

            {cartData.length > 0 && (
              <p className="text-sm font-medium text-[#754e17]">
                {cartData.length}{" "}
                {cartData.length === 1 ? "Service" : "Services"}
              </p>
            )}
          </div>

          <div className="mt-6 h-px w-full bg-[#754e17]/10" />
        </div>

        {/* =====================================================
            EMPTY CART
        ===================================================== */}
        {cartData.length === 0 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-[#754e17]/10 bg-[#eee5dc] px-6 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#754e17]/10">
              <span className="text-2xl text-[#754e17]">+</span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-[#754e17]">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#a98040]">
              You haven't selected any services yet. Explore our solutions
              and start building your digital growth strategy.
            </p>

            <button
              type="button"
              onClick={() => navigate("/productpage")}
              className="
                group
                relative
                mt-7
                overflow-hidden
                bg-[#754e17]
                px-8
                py-3
                text-sm
                font-semibold
                text-[#f2ede9]
                shadow-[0_10px_30px_rgba(117,78,23,0.15)]
                transition-all
                duration-300
                hover:shadow-[0_15px_40px_rgba(117,78,23,0.25)]
              "
            >
              <span className="relative z-10">
                EXPLORE SERVICES
              </span>

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />
            </button>
          </div>
        )}

        {/* =====================================================
            CART CONTENT
        ===================================================== */}
        {cartData.length > 0 && (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* =================================================
                CART ITEMS
            ================================================= */}
            <div>
              {/* Desktop Header */}
              <div className="hidden grid-cols-[1fr_130px_120px_50px] gap-6 border-b border-[#754e17]/10 px-5 pb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#a98040] md:grid">
                <p>Service</p>
                <p className="text-center">Quantity</p>
                <p className="text-right">Amount</p>
                <p />
              </div>

              {/* Items */}
              <div className="divide-y divide-[#754e17]/10">
                {cartData.map((item) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  if (!productData) return null;

                  const itemTotal =
                    productData.price * item.quantity;

                  return (
                    <div
                      key={item._id}
                      className="
                        grid
                        grid-cols-1
                        gap-5
                        px-2
                        py-7
                        transition-colors
                        duration-300
                        hover:bg-[#eee5dc]/70
                        md:grid-cols-[1fr_130px_120px_50px]
                        md:items-center
                        md:gap-6
                        md:px-5
                      "
                    >
                      {/* Service */}
                      <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
                          Digital Service
                        </p>

                        <h2 className="text-base font-bold text-[#754e17] sm:text-lg">
                          {productData.name}
                        </h2>

                        <p className="mt-2 text-sm text-[#a98040]">
                          {currency}
                          {productData.price.toLocaleString("en-IN")}
                          <span className="ml-1 text-xs">
                            / service
                          </span>
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center justify-between md:justify-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#a98040] md:hidden">
                          Quantity
                        </span>

                        <input
                          onChange={(e) => {
                            const value = Number(e.target.value);

                            if (value >= 1) {
                              updateQuantity(item._id, value);
                            }
                          }}
                          className="
                            h-10
                            w-16
                            border
                            border-[#a98040]/40
                            bg-[#f7f2ed]
                            px-2
                            text-center
                            text-sm
                            font-semibold
                            text-[#754e17]
                            outline-none
                            transition-colors
                            focus:border-[#754e17]
                          "
                          type="number"
                          min={1}
                          value={item.quantity}
                        />
                      </div>

                      {/* Amount */}
                      <div className="flex items-center justify-between md:block md:text-right">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#a98040] md:hidden">
                          Amount
                        </span>

                        <p className="text-base font-bold text-[#754e17]">
                          {currency}
                          {itemTotal.toLocaleString("en-IN")}
                        </p>
                      </div>

                      {/* Remove */}
                      <div className="flex justify-end md:justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item._id, 0)
                          }
                          className="
                            group
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-transparent
                            transition-all
                            duration-300
                            hover:border-red-200
                            hover:bg-red-50
                          "
                          aria-label={`Remove ${productData.name}`}
                        >
                          <img
                            className="
                              h-4
                              w-4
                              opacity-60
                              transition-all
                              duration-300
                              group-hover:opacity-100
                            "
                            src={assets.bin_icon}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                CART SUMMARY
            ================================================= */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[#754e17]/10 bg-[#eee5dc] p-6 sm:p-8">

                <p className="text-2xl font-extrabold tracking-tight text-[#754e17]">
                  ORDER SUMMARY
                </p>


                <div className="my-6 h-px bg-[#754e17]/10" />

                <CartTotal />

                <button
                  onClick={() => navigate("/place-order")}
                  type="button"
                  className="
                    group
                    relative
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#754e17]
                    px-8
                    py-4
                    text-xs
                    font-bold
                    tracking-[0.15em]
                    text-[#f2ede9]
                    shadow-[0_10px_40px_rgba(117,78,23,0.2)]
                    transition-all
                    duration-300
            
                    hover:shadow-[0_15px_45px_rgba(117,78,23,0.35)]
                  "
                >
                  <span className="relative z-10">
                    PROCEED TO CHECKOUT
                  </span>

                  {/* Shine */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-[#a98040]">
                  Your selected services can be reviewed before
                  final confirmation.
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;

