import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CompletedProjects() {
  const projects = [
    {
      id: 101,
      title:
        "Electric Field Based Novel Technologies For Pilot Scale Processing of Juice and Pulp From Potential Fruits of NE Region",
      investigator: "Investigator Name & Role: Dr. Md Rahat Mahboob, Co-PI",
      fundingAgency: "Funding Agency: NASF, ICAR, New Delhi",
      approvedFund: "Approved Funds: 168.8445 Lakh INR",
      duration: "Duration: 3 Years (December 2018-December 2021)| Completed",
    },
  ];
  return (
    <main className="max-w-5xl mx-auto my-12 p-6">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">Projects</h1>

      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <section id="completed-projects" className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Completed Research Projects
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
