import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../context/ServiceContext";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, navigate } = useContext(ServiceContext);

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
    } else {
      setProductData(null);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#754e17]/10">
            <span className="text-2xl text-[#a98040]">×</span>
          </div>

          <h1 className="text-2xl font-extrabold text-[#754e17]">
            Service Not Found
          </h1>

          <p className="mt-2 text-sm text-[#a98040]">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SERVICE HERO
        ===================================================== */}
        <section className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* ===================================================
              LEFT — VISUAL
          =================================================== */}
          <div
            className="
              group
              relative
              min-h-[420px]
              overflow-hidden
              rounded-[2rem]
              border
              border-[#754e17]/10
              bg-[#eee5dc]
              sm:min-h-[520px]
            "
          >
            {/* Background Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#f8f3ea]
                via-[#eee5dc]
                to-[#dfc8a5]/30
              "
            />

            {/* Decorative Circles */}
            <div
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                border
                border-[#754e17]/10
              "
            />

            <div
              className="
                absolute
                -bottom-32
                -left-20
                h-80
                w-80
                rounded-full
                border
                border-[#754e17]/10
              "
            />

            <div
              className="
                absolute
                right-10
                top-10
                h-3
                w-3
                rounded-full
                bg-[#a98040]
              "
            />

            <div
              className="
                absolute
                bottom-14
                left-12
                h-2
                w-2
                rounded-full
                bg-[#754e17]/40
              "
            />

            {/* Main Visual */}
            <div className="relative z-10 flex min-h-[420px] items-center justify-center sm:min-h-[520px]">

              <div className="text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#754e17]/10
                    bg-[#f8f3ea]/80
                    shadow-[0_20px_60px_rgba(117,78,23,0.08)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <span className="text-5xl text-[#a98040]">
                    ✦
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a98040]">
                  DIGITAL GROWTH
                </p>

                <p className="mt-2 text-sm font-semibold text-[#754e17]">
                  Professional Digital Service
                </p>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[#754e17]/10 pt-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
                BEING IBAN DIGITAL
              </span>

              <span className="text-xs text-[#754e17]">
                01
              </span>
            </div>
          </div>

          {/* ===================================================
              RIGHT — SERVICE INFORMATION
          =================================================== */}
          <div>

            {/* Category */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a98040]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98040]">
                {productData.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                max-w-2xl
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#754e17]
                sm:text-5xl
                lg:text-6xl
              "
            >
              {productData.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#a98040] sm:text-base">
              {productData.description}
            </p>

            {/* Price */}
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
                Starting Investment
              </p>

              <p className="mt-2 text-3xl font-extrabold tracking-tight text-[#754e17]">
                {currency}
                {productData.price.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="my-8 h-px w-full max-w-xl bg-[#754e17]/10" />

            {/* CTA */}
            <button
              type="button"
              onClick={() => addToCart(productData._id)}
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                overflow-hidden
                bg-[#754e17]
                px-9
                py-4
                text-xs
                font-bold
                tracking-[0.15em]
                text-[#f2ede9]
                shadow-[0_10px_40px_rgba(117,78,23,0.2)]
                transition-all
                duration-300
                
                hover:shadow-[0_15px_45px_rgba(117,78,23,0.35)]
                cursor-pointer
              "
            >
              <span className="relative z-10">
                ADD TO CART
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

            {/* Small reassurance */}
            <p className="mt-4 text-[11px] text-[#a98040]">
              Add this service to your cart and continue with your
              digital growth journey.
            </p>
          </div>
        </section>

        {/* =====================================================
            VALUE PROPOSITION
        ===================================================== */}
        <section className="mt-20 border-t border-[#754e17]/10 pt-12">

          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
              WHY WORK WITH US
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#754e17] sm:text-4xl">
              Built for measurable growth.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#754e17]/10 bg-[#754e17]/10 sm:grid-cols-3">

            {/* Professional */}
            <div className="bg-[#eee5dc] p-7 transition-colors duration-300 hover:bg-[#e8ded3] sm:p-8">
              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#754e17]/10">
                <span className="text-[#a98040]">01</span>
              </div>

              <h3 className="text-lg font-extrabold text-[#754e17]">
                Professional
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#a98040]">
                High-quality digital services tailored to your
                business requirements and growth objectives.
              </p>
            </div>

            {/* Results */}
            <div className="bg-[#eee5dc] p-7 transition-colors duration-300 hover:bg-[#e8ded3] sm:p-8">
              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#754e17]/10">
                <span className="text-[#a98040]">02</span>
              </div>

              <h3 className="text-lg font-extrabold text-[#754e17]">
                Results Focused
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#a98040]">
                Strategies built around measurable outcomes,
                performance, conversions, and sustainable growth.
              </p>
            </div>

            {/* Tailored */}
            <div className="bg-[#eee5dc] p-7 transition-colors duration-300 hover:bg-[#e8ded3] sm:p-8">
              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#754e17]/10">
                <span className="text-[#a98040]">03</span>
              </div>

              <h3 className="text-lg font-extrabold text-[#754e17]">
                Tailored Approach
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#a98040]">
                Solutions adapted to your audience, goals,
                positioning, and unique business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <section className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#754e17] px-7 py-14 sm:px-12 sm:py-16">

          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b47d]">
              READY TO GROW?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#f2ede9] sm:text-4xl lg:text-5xl">
              Let's turn your digital presence into growth.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#e5d8c8]">
              Choose this service and take the next step toward
              building a stronger, smarter, and more effective
              digital presence.
            </p>
          </div>

          <div className="relative z-10 mt-8">
            <button
              type="button"
              onClick={() => navigate('/productpage')}
              className="
                group
                relative
                inline-flex
                items-center
                gap-4
                overflow-hidden
                bg-[#d5a866]
                px-9
                py-4
                text-xs
                font-bold
                tracking-[0.15em]
                text-[#241307]
                shadow-[0_10px_40px_rgba(213,168,102,0.2)]
                transition-all
                duration-300
                
                hover:bg-[#e2bd7c]
                hover:shadow-[0_15px_45px_rgba(213,168,102,0.3)]
                cursor-pointer
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
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Product;

