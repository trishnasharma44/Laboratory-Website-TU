import React from "react";

export default function Patents() {
  const items = [
    {
      id: 1,
      year: 2025,
      citation:
        "'Optical tree moisture measuring system' Indian Patent with Application no. 202531070259 in July 2025.",
    }, 
  ];

  const groups = {};
  items.forEach((it) => {
    const y = it.year ? String(it.year) : "Unknown";
    if (!groups[y]) groups[y] = [];
    groups[y].push(it);
  });
  const years = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="max-w-5xl mx-auto my-12 p-6">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">
        Patents
      </h1>
      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <section className="mb-8">
          {years.map((year) => (
            <div key={year} className="mb-6">
              <h3 className="text-red-600 text-lg font-semibold mt-2 mb-4">
                {year}
              </h3>
              <div className="space-y-6">
                {groups[year].map((it) => (
                  <article
                    key={it.id}
                    className="bg-white rounded-lg shadow p-4 border border-gray-100"
                  >
                    <p className="text-gray-800">
                      <span className="font-semibold">{it.citation}</span>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
