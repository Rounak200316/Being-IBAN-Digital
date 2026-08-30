import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { ServiceContext } from "../context/ServiceContext";

const PlaceOrder = () => {
  const { placeOrder } = useContext(ServiceContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Let placeOrder handle saving the order
    // and navigating to the order page.
    placeOrder(formData);
  };

  const inputClass = `
    w-full
    border
    border-[#754e17]/15
    bg-[#f8f3ee]
    px-4
    py-3
    text-sm
    text-[#754e17]
    outline-none
    transition-all
    duration-300
    placeholder:text-[#a98040]/50
    focus:border-[#754e17]/60
    focus:bg-white
    focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]
  `;

  const labelClass = `
    text-xs
    font-bold
    uppercase
    tracking-[0.12em]
    text-[#754e17]
  `;

  return (
    <main className="min-h-screen px-4 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
            LET'S GET STARTED
          </p>

          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#754e17] sm:text-5xl lg:text-6xl">
            Purchase Information
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a98040] sm:text-base">
            Tell us a little about yourself so we can understand your
            requirements and take the next step toward your digital growth.
          </p>

          <div className="mt-7 h-px w-full bg-[#754e17]/10" />
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Form */}
          <section className="rounded-3xl border border-[#754e17]/10 bg-[#eee5dc] p-6 sm:p-8 lg:p-10">

            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98040]">
                YOUR DETAILS
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#754e17]">
                Tell us about yourself
              </h2>

              <p className="mt-2 text-sm text-[#a98040]">
                All fields are required.
              </p>
            </div>

            <div className="h-px bg-[#754e17]/10" />

            <div className="mt-8 flex flex-col gap-6">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>
                  Full Name
                </label>

                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    Email Address
                  </label>

                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    Phone Number
                  </label>

                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>
                  Address
                </label>

                <textarea
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter your complete address"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    City
                  </label>

                  <input
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your city"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClass}>
                    State
                  </label>

                  <input
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your state"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Pincode */}
              <div className="flex flex-col gap-2 sm:w-1/2">
                <label className={labelClass}>
                  Pincode
                </label>

                <input
                  required
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter pincode"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-[#754e17]/10 bg-[#eee5dc] p-6 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98040]">
                FINAL STEP
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#754e17]">
                Order Summary
              </h2>

              <div className="my-6 h-px bg-[#754e17]/10" />

              <CartTotal />

              <button
                type="submit"
                onClick={handleSubmit}
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
                  cursor-pointer
                "
              >
                <span className="relative z-10">
                  PLACE ORDER
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

              <p className="mt-4 text-center text-[11px] leading-5 text-[#a98040]">
                By continuing, you confirm that the information
                provided is accurate.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PlaceOrder;