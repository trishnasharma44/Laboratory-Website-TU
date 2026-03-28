import React from "react";
import phd_Aj from "../assets/phd_Aj.jpeg";
import phd_Arif from "../assets/phd_Arif.jpeg";
import phd_MK from "../assets/phd_MK.jpg";

const phdScholarsList = [
  {
    id: 1,
    name: "Mr. Mohd Arif Ali",
    mtech: "Jamia Millia Islamia University, New Delhi",
    researchArea: "Sensor & Sensing Technology",
    researchTopic: "Machine learning based Intelligent Measurement System",
    supervisor: "Dr. Md Rahat Mehboob",
    rollno: "EEP24103",
    yearOfCompletion: "In Progress",
    email: "eep24103@tezu.ac.in",
    image: phd_Arif,
  },
  {
    id: 2,
    name: "Mr. Maharshi Kalita",
    mtech: "Tezpur University, Assam",
    researchArea: "Sensor & Sensing Technology",
    researchTopic: "To be proposed",
    supervisor: "Dr. Md Rahat Mehboob",
    rollno: "EEP25001",
    yearOfCompletion: "In Progress",
    email: "eep25001@tezu.ac.in",
    image: phd_MK,
  },
  {
    id: 3,
    name: "	Dr. Sayed Afzal Ali",
    mtech: "National Institute of Technology Nagaland",
    researchArea: "Sensor & Sensing Technology",
    researchTopic: "Investigation of Sensor Technology(S) for Humidity Sensing",
    supervisor: "Dr. Md. Rahat Mahboob",
    rollno: "EEP21001",
    yearOfCompletion: "2025",
    email: "eep21001@tezu.ac.in",
    currentAffiliation: "ANRF Postdoctoral Fellow, IIT Delhi",
    image: phd_Aj,
  },
  {
    id: 4,
    name: "	Dr. Amardeep Kumar",
    mtech: "Aligarh Muslim University, Aligarh",
    researchArea: "Food Processing Technology",
    researchTopic:
      "Design and Development of Continuous Ohmic Heating System for Thermal Processing of Pinapple Juice",
    supervisor: "Dr. Md. Rahat Mahboob, Prof. Brijesh Srivastava",
    rollno: "FEP19110",
    yearOfCompletion: "2024",
    email: "fep19110@tezu.ac.in",
    currentAffiliation: "ANRF Postdoctoral Fellow, IIT Delhi",
    image: null,
  },
];

const currentResearchersList = phdScholarsList.filter(
  (student) => student.id === 1 || student.id === 2,
);
const alumniList = phdScholarsList.filter(
  (student) => student.id === 3 || student.id === 4,
);


const Info = ({ label, value, href }) => (
  <div className="flex gap-4 mt-3 items-start">
    <dt className="font-semibold text-gray-800 w-40 sm:w-64 sm:whitespace-nowrap">
      {label}
    </dt>
    <dd className="text-gray-700 flex-1 text-justify">
      {href ? (
        <a href={href} className="text-sky-600 hover:underline break-words">
          {value}
        </a>
      ) : Array.isArray(value) ? (
        <ul className="list-disc list-inside space-y-1">
          {value.map((item, i) => (
            <li key={i} className="break-words">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        value
      )}
    </dd>
  </div>
);

export default function PhdScholars() {
  const renderScholarCard = (f) => (
    <article
      key={f.id}
      className="bg-white shadow rounded-lg flex flex-col md:flex-row gap-6 p-6 hover:shadow-lg transition-shadow"
      aria-labelledby={`phdScholars-${f.id}-name`}
    >
      <div className="flex-1">
        <h2
          id={`phdScholars-${f.id}-name`}
          className="text-2xl font-bold text-gray-800 font-serif"
        >
          {f.name}
        </h2>

        <dl>
          <Info label="M. Tech" value={f.mtech} />
          <Info label="Research Area" value={f.researchArea} />
          <Info label="Research Topic" value={f.researchTopic} />
          <Info label="Supervisor" value={f.supervisor} />
          <Info label="Roll No" value={f.rollno} />
          <Info label="Year of Completion" value={f.yearOfCompletion} />
          <Info label="Email" value={f.email} href={`mailto:${f.email}`} />
          {f.id !== 1 && f.id !== 2 && f.currentAffiliation ? (
            <Info label="Current Affiliation" value={f.currentAffiliation} />
          ) : null}
        </dl>
      </div>

      <figure className="md:w-40 flex-shrink-0">
        {f.image ? (
          <img
            src={f.image}
            alt={`Portrait of ${f.name}`}
            loading="lazy"
            className="w-36 h-36 object-cover rounded-md ml-auto"
          />
        ) : (
          <div className="w-36 h-36 rounded-md bg-gray-100 flex items-center justify-center ml-auto">
            <svg
              className="w-12 h-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z"
              />
            </svg>
          </div>
        )}
      </figure>
    </article>
  );

  return (
    <main className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">
        Ph.D Scholars
      </h1>
      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <div className="space-y-10">
          <section>
            <h2 className="text-red-600 text-lg font-semibold mt-2 mb-4">
              Current Researchers
            </h2>
            <div className="space-y-6">
              {currentResearchersList.map(renderScholarCard)}
            </div>
          </section>

          <section>
            <h2 className="text-red-600 text-lg font-semibold mt-2 mb-4">
              Alumni
            </h2>
            <div className="space-y-6">{alumniList.map(renderScholarCard)}</div>
          </section>
        </div>
      </div>
    </main>
  );
}
