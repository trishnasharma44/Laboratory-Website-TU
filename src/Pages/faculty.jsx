import React from "react";
import ProfMRM from "../assets/MRMSir.jpeg";

const facultyList = [
  {
    id: 1,
    name: "Dr. Md Rahat Mahboob",
    designation: "Assistant Professor",

    qualification: [
      "Ph.D : Department of Electrical Engineering, Jamia Millia Islamia, New Delhi, 2017",
    ],

    experience: [
      "Assistant Professor, Department of Electrical Engineering, Tezpur University (since 2016)",
      "Assistant Engineer at TATA Consulting Engineers Ltd., from July 2011 to July 2012",
    ],
    
    research:
      "Sensors, Signal Conditioning, Wireless Measurement, IoT, Instrumentation & Control",
    email: "rahat@tezu.ernet.in",
    phone: "03712-273453",
    image: ProfMRM,
  },
];

const Info = ({ label, value, href }) => (
  <div className="flex gap-4 mt-3 items-start">
    <dt className="font-semibold text-gray-800 w-40 sm:w-64 sm:whitespace-nowrap">{label}</dt>
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

export default function Faculty() {
  return (
    <main className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">Faculties</h1>
      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <div className="space-y-6">
          {facultyList.map((f) => (
            <article
              key={f.id}
              className="bg-white shadow rounded-lg flex flex-col md:flex-row gap-6 p-6 hover:shadow-lg transition-shadow"
              aria-labelledby={`faculty-${f.id}-name`}
            >
              <div className="flex-1">
                <h2
                  id={`faculty-${f.id}-name`}
                  className="text-2xl font-bold text-gray-800 font-serif"
                >
                  {f.name}
                </h2>
                <p className="text-lg text-blue-800 mt-1">{f.designation}</p>

                <dl>
                  <Info label="Professional Experience" value={f.experience} />
                  <Info label="Qualification" value={f.qualification} />
                  <Info label="Specialization/Research Interests" value={f.research} />
                  <Info
                    label="Email"
                    value={f.email}
                    href={`mailto:${f.email}`}
                  />
                  <Info label="Phone" value={f.phone} href={`tel:${f.phone}`} />
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
          ))}
        </div>
      </div>
    </main>
  );
}
