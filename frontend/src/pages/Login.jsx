import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const { login, register, token } = useContext(AuthContext);

  const navigate = useNavigate();

  // -----------------------------
  // Submit
  // -----------------------------

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      let result;

      if (currState === "Sign Up") {
        result = await register(name, email, password);
      } else {
        result = await login(email, password);
      }

      if (result.success) {
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);

      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <main className="min-h-screen px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl overflow-hidden bg-[#eee5dc] shadow-[0_20px_70px_rgba(91,53,9,0.08)] lg:grid-cols-2">
        {/* LEFT */}

        <section className="relative hidden overflow-hidden bg-[#5b3509] p-10 lg:flex lg:flex-col lg:justify-between lg:p-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#d5a866]/15" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#d5a866]/10" />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5a866]">
              BEING IBAN DIGITAL
            </p>

            <div className="mt-10">
              <h1 className="text-6xl font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-[#f8f3ee]">
                Grow.
                <br />
                Scale.
                <br />
                <span className="text-[#d5a866]">Repeat.</span>
              </h1>
            </div>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#e5d8c8]">
              Your digital growth journey starts here. Access your account and
              take the next step toward building a stronger digital presence.
            </p>
          </div>

          <div className="relative z-10">
            <div className="mb-6 h-px w-full bg-[#d5a866]/20" />

            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5a866]">
                STRATEGY × CREATIVE × PERFORMANCE
              </p>

              <span className="text-sm text-[#d5a866]">↗</span>
            </div>
          </div>
        </section>

        {/* RIGHT */}

        <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-14">
          <form onSubmit={onSubmitHandler} className="w-full max-w-md">
            {/* HEADER */}

            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a98040]">
                {currState === "Sign Up" ? "JOIN THE JOURNEY" : "WELCOME BACK"}
              </p>

              <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-[#754e17] sm:text-5xl">
                {currState === "Sign Up"
                  ? "Create your account."
                  : "Welcome back."}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#a98040]">
                {currState === "Sign Up"
                  ? "Create an account to get started with Being Iban Digital."
                  : "Sign in to continue your digital growth journey."}
              </p>
            </div>

            {/* ERROR */}

            {error && (
              <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* FIELDS */}

            <div className="flex flex-col gap-5">
              {/* NAME */}

              {currState === "Sign Up" && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                  />
                </div>
              )}

              {/* EMAIL */}

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                />
              </div>

              {/* PASSWORD */}

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-[#754e17]">
                    Password
                  </label>

                  {currState === "Login" && (
                    <button
                      type="button"
                      className="text-xs font-medium text-[#a98040] transition-colors hover:text-[#754e17]"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-[#754e17]/15 bg-[#f8f3ee] px-4 py-4 text-sm text-[#754e17] outline-none transition-all duration-300 placeholder:text-[#a98040]/50 focus:border-[#754e17]/50 focus:bg-white focus:shadow-[0_0_0_3px_rgba(117,78,23,0.05)]"
                />
              </div>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={loading}
              className="group relative mt-8 flex w-full items-center justify-center overflow-hidden bg-[#754e17] px-8 py-4 text-xs font-bold tracking-[0.15em] text-[#f2ede9] shadow-[0_10px_40px_rgba(117,78,23,0.2)] transition-all duration-300 hover:shadow-[0_15px_45px_rgba(117,78,23,0.35)] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="relative z-10">
                {loading
                  ? "PLEASE WAIT..."
                  : currState === "Sign Up"
                    ? "CREATE ACCOUNT"
                    : "LOGIN"}
              </span>

              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            {/* SWITCH */}

            <div className="mt-7 flex items-center justify-center gap-2 text-sm">
              <p className="text-[#a98040]">
                {currState === "Sign Up"
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>

              <button
                type="button"
                onClick={() => {
                  setError("");

                  setCurrState(currState === "Sign Up" ? "Login" : "Sign Up");
                }}
                className="font-bold text-[#754e17] transition-all duration-300 hover:text-[#b45d0a] hover:underline cursor-pointer"
              >
                {currState === "Sign Up" ? "Login" : "Sign Up"}
              </button>
            </div>

            {/* FOOTER */}

            <div className="mt-10 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#754e17]/10" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a98040]">
                DIGITAL GROWTH STARTS HERE
              </span>

              <div className="h-px flex-1 bg-[#754e17]/10" />
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
