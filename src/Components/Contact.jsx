import React from "react";

export default function Contact() {
  return (
    <section id="contact-us" className="max-w-6xl mx-auto my-12 p-6">
      <h2 className="text-2xl font-semibold text-[#0f628c] mb-4">Contact Us</h2>
      <div className="bg-cyan-100 rounded-lg shadow-md p-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold mb-2">
              Department of Electrical Engineering
            </h3>
            <p className="text-sm text-gray-700">School of Engineering</p>
            <p className="text-sm text-gray-700">Tezpur University</p>
            <p className="text-sm text-gray-700">
              Napaam, Assam, India - 784028{" "}
            </p>
            <p className="text-sm text-gray-700 mt-3">Phone: 03712-273451</p>
            <p className="text-sm text-gray-700">
              Email:{" "}
              <a
                href="mailto:ee-dept@tezu.ernet.in"
                className="text-sky-600 hover:underline"
              >
                ee-dept@tezu.ernet.in
              </a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <iframe
              title="Department of Electrical Engineering - Tezpur University"
              src="https://www.google.com/maps?q=Department+of+Electrical+Engineering+Tezpur+University+Paschim+Boragaon+Tezpur+Assam&z=17&output=embed"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="p-3 text-sm text-right">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Department+of+Electrical+Engineering+Tezpur+University+Paschim+Boragaon+Tezpur+Assam"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sky-600 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
