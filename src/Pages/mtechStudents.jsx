import React from "react";

const mtechStudentsList = [
  {
    id: 1,
    name: "",
    researchArea: "",
    rollno: "",
    email: "",
  },
  {
    id: 2,
    name: "",
    researchArea: "",
    rollno: "",
    email: "",
  },
];

const Info = ({ label, value, href }) => (
  <div className="flex gap-3 mt-2 items-start text-sm">
    <dt className="font-semibold text-gray-800 w-36 sm:w-56 sm:whitespace-nowrap text-sm">
      {label}
    </dt>
    <dd className="text-gray-700 flex-1 text-justify text-sm">
      {href ? (
        <a
          href={href}
          className="text-sky-600 hover:underline break-words text-sm"
        > 
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

export default function MtechStudents() {
  return (
    <main className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-2xl font-semibold text-[#0f628c] mb-6">
        M.Tech Students
      </h1>
      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <h3 className="text-red-600 text-lg font-semibold mb-3">2025</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  Research Area
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  Roll No
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mtechStudentsList.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    {f.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {f.name || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {f.researchArea || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {f.rollno || "—"}
                  </td>
                  <td className="px-4 py-3 text-sm text-sky-600 break-all">
                    {f.email ? (
                      <a href={`mailto:${f.email}`} className="hover:underline">
                        {f.email}
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
