import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // =====================================================
  // FORM STATE
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // SUBMIT FORM
  // =====================================================

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        `${backendUrl}/api/meeting/create`,
        formData
      );

      if (response.data.success) {
        toast.success(
          "Meeting request submitted successfully!"
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        toast.error(
          response.data.message ||
            "Failed to submit meeting request"
        );
      }
    } catch (error) {
      console.error(
        "Meeting submission error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Unable to submit meeting request"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <main className="min-h-screen bg-[#f8f3ee] px-4 py-10 sm:px-8 lg:px-12">

      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-12">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
            LET'S TALK
          </p>

          <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-[#754e17] sm:text-5xl lg:text-6xl">
            Let's build something
            <br />
            <span className="text-[#a98040]">
              meaningful.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8c704b]">
            Have a project in mind? Tell us what you're
            looking for and book a meeting with our team.
            We'll get back to you shortly.
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =====================================================
              LEFT INFORMATION
          ===================================================== */}

          <section className="relative overflow-hidden bg-[#5b3509] p-8 sm:p-10 lg:p-12">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#d5a866]/15" />

            <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#d5a866]/10" />


            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
                  BEING IBAN DIGITAL
                </p>

                <h2 className="mt-8 text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[#f8f3ee] sm:text-5xl">
                  Grow.
                  <br />
                  Scale.
                  <br />
                  <span className="text-[#d5a866]">
                    Repeat.
                  </span>
                </h2>

                <p className="mt-8 text-sm leading-7 text-[#e5d8c8]">
                  Whether you're launching a new brand,
                  growing your online presence, or looking
                  for better digital performance, let's
                  start a conversation.
                </p>

              </div>


              {/* Bottom */}

              <div className="mt-12">

                <div className="mb-6 h-px w-full bg-[#d5a866]/20" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5a866]">
                  STRATEGY × CREATIVE × PERFORMANCE
                </p>

              </div>

            </div>

          </section>


          {/* =====================================================
              FORM
          ===================================================== */}

          <section className="bg-[#eee5dc] p-6 shadow-[0_20px_70px_rgba(91,53,9,0.08)] sm:p-10 lg:p-12">

            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-6"
            >

              {/* =====================================================
                  NAME + EMAIL
              ===================================================== */}

              <div className="grid gap-6 md:grid-cols-2">

                {/* NAME */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onChangeHandler}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                  />

                </div>


                {/* EMAIL */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                  />

                </div>

              </div>


              {/* =====================================================
                  PHONE + COMPANY
              ===================================================== */}

              <div className="grid gap-6 md:grid-cols-2">

                {/* PHONE */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Phone *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={onChangeHandler}
                    placeholder="Enter phone number"
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                  />

                </div>


                {/* COMPANY */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={onChangeHandler}
                    placeholder="Company name"
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                  />

                </div>

              </div>


              {/* =====================================================
                  SERVICE
              ===================================================== */}

              <div className="flex flex-col gap-2">

                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                  Service *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={onChangeHandler}
                  required
                  className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 focus:border-[#754e17]/50 focus:bg-white"
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Branding">
                    Branding
                  </option>

                  <option value="Performance Marketing">
                    Performance Marketing
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* =====================================================
                  DATE + TIME
              ===================================================== */}

              <div className="grid gap-6 md:grid-cols-2">

                {/* DATE */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Preferred Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={onChangeHandler}
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 focus:border-[#754e17]/50 focus:bg-white"
                  />

                </div>


                {/* TIME */}

                <div className="flex flex-col gap-2">

                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Preferred Time *
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={onChangeHandler}
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 focus:border-[#754e17]/50 focus:bg-white"
                  />

                </div>

              </div>


              {/* =====================================================
                  MESSAGE
              ===================================================== */}

              <div className="flex flex-col gap-2">

                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}
                  placeholder="Tell us about your project or requirements..."
                  required
                  rows={6}
                  className="w-full resize-none border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                />

              </div>


              {/* =====================================================
                  SUBMIT BUTTON
              ===================================================== */}

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-2 flex w-full items-center justify-center overflow-hidden bg-[#754e17] px-8 py-4 text-xs font-bold tracking-[0.15em] text-[#f2ede9] shadow-[0_10px_40px_rgba(117,78,23,0.2)] transition-all duration-300 hover:bg-[#5b3509] hover:shadow-[0_15px_45px_rgba(117,78,23,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <span className="relative z-10">
                  {loading
                    ? "SUBMITTING..."
                    : "BOOK MEETING"}
                </span>

                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              </button>


              {/* =====================================================
                  FOOTER TEXT
              ===================================================== */}

              <div className="mt-3 flex items-center gap-3">

                <div className="h-px flex-1 bg-[#754e17]/10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
                  DIGITAL GROWTH STARTS HERE
                </span>

                <div className="h-px flex-1 bg-[#754e17]/10" />

              </div>

            </form>

          </section>

        </div>

      </div>

    </main>
  );
};

export default Contact;