import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function OngoingProjects() {
  const projects = [
    {
      id: 1,
      title:
        "Development of Artificial Intelligence (AI) Based Smart Milk Bioreactor for Farmer Entrepreneur",
      investigator: "Investigator Name & Role: Dr. Md Rahat Mahboob, PI",
      fundingAgency: "Funding Agency: ANRF-CRG",
      approvedFund: "Approved Funds: 33.68 Lakh INR",
      duration: "Duration: 3 Years | Active",
    },
    {
      id: 2,
      title:
        "Information Security Education & Awareness (!SEA) Project-Phase-III",
      investigator: "Investigator Name & Role: Dr. Md Rahat Mahboob, Co-PI",
      fundingAgency: "Funding Agency: MeitY-ISEA",
      approvedFund: "Approved Funds: 500.00 Lakh INR",
      duration: "Duration: 5 Years | Active",
    },
  ];
  return (
    <main className="max-w-5xl mx-auto my-12 p-6">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">Projects</h1>

      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <section id="ongoing-projects" className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ongoing Research Projects
          </h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-lg shadow p-4 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-blue-800">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.investigator}</p>
                <p className="text-gray-700 mt-3">{p.fundingAgency}</p>
                <p className="text-gray-700 mt-3">{p.approvedFund}</p>
                <p className="text-gray-700 mt-3">{p.duration}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
