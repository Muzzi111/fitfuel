"use client"; // Only needed for Next.js App Router

import React from "react";

export default function Page() {
  const handleDownload = () => {
    console.log("Download button clicked");
    const link = document.createElement("a");
    link.href = "/mealPlan.pdf"; // Must match your public folder file name exactly
    link.setAttribute("download", "mealPlan.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="min-h-dvh bg-[url('/pexels-thelazyartist-1117493.jpg')] bg-no-repeat bg-center bg-cover relative">
        <div className="absolute inset-0 bg-white/20 z-0"></div>

        <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-5 pt-20 px-4">
          <h1 className="lg:text-5xl text-2xl text-black font-bold py-5">
            Meal Plan Template
          </h1>
          <p className="border-4 p-4 border-blue-200 lg:text-xl text-sm font-semibold text-gray-600 max-w-3xl">
            A meal plan template can simplify your life, <br />
            keep you organized and save you money. We offer free digital and
            printable meal plans in different <br />
            formats so that you can find the best one to suit your unique needs.
          </p>

          <button
            onClick={handleDownload}
            className="bg-gray-700 px-6 py-2 rounded-full hover:bg-gray-500 text-white transition-colors duration-300"
          >
            Download Meal Plan
          </button>
        </div>

        <div className="flex items-center justify-center py-10 relative z-30">
          <img src="/mealplan.jpeg" alt="Meal Plan Preview" className="max-w-md w-full rounded shadow-md" />
        </div>
      </div>

      {/* Optional Additional Section */}
      <div className="min-h-dvh bg-[url('/flat-lay-charts-organic-food-lunch-boxes.jpg')] bg-no-repeat bg-center bg-cover">
        {/* You can add content here if needed */}
      </div>
    </main>
  );
}
