import React from "react";

export default function AuthLayouts({ title, desc, children }) {
  return (
    <div className="container flex justify-center">
      <div className="w-full md:w-2/5 px-2 py-3 bg-slate-600 rounded-lg shadow-xl drop-shadow-lg">
        <div className=" px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-semibold text-white text-3xl mb-2 md:mb-4 sm:text-4xl lg:text-2xl">
              {title}
            </h2>
            <p className="font-medium text-medium text-white md:text-lg">
              {desc}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
