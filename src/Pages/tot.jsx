import React from "react";
import DipCoater from "../assets/Dip coater template.png";

const ToTBox = ({ title, text, desc, img }) => (
  <div className="bg-cyan-100 rounded-lg shadow-md p-4">
    <article className="bg-gradient-to-br from-white to-sky-50 rounded-xl shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {img && (
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src={img}
              alt={title + " image"}
              className="w-full h-56 md:h-64 object-cover rounded-lg shadow-inner"
            />
          </div>
        )}
        <div className="md:flex-1">
          <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            {text}
          </p>
          {desc && (
            <p className="text-gray-600 mt-2 text-base md:text-lg leading-relaxed">{desc}</p>
          )}
          <div className="mt-4">
            <a
              className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md shadow hover:bg-sky-700 transition"
              href={img}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Brochure
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
);
export default function ToT() {
  return (
    <main className="container mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0f628c]">
          Technology Transfer
        </h1>
      </header>
      <section className="max-w-3xl mx-auto">
        <ToTBox
          title="Transfer 'Dip Coater Machine' Technology to Optochem International"
          desc={
            "A low-cost, user-friendly dip coater with touch panel. This Dip Coater is an easy-to-use system designed for depositing thin wet films of solution. Ideal for research and development as well as large-scale production."
          }
          img={DipCoater}
        />
      </section>
    </main>
  );
}
