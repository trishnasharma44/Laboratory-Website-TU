import React from "react";

export default function Journals() {
  const items = [
    {
      id: 1,
      year: 2025,
      citation:
        'A. Kumar, M.R. Mahboob and B. Srivastava, "Continuous Ohmic Heating Assisted Isothermal Treatment of Standardized Pineapple Juice: Its Effect on Bromelain Inactivation, Vitamin C Degradation, and Their Kinetic Modeling", J Food Process Eng, Wiley, vol 48, e70093, 2025.',
    },
    {
      id: 2,
      year: 2025,
      citation:
        'S. A. Ali, S. Malik, M. R. Mahboob and T. Islam, "Moisture Measurement in Trace Level: Prospects, Challenges and Solutions," IEEE Instrumentation & Measurement Magazine, vol. 28, no. 2, pp. 51-59, April 2025.',
    },
    {
      id: 3,
      year: 2024,
      citation:
        "A. Kumar, M. Kumar, M. R. Mahboob, and B. Srivastava, “Influence of °Brix/Acid, and flow rate of pineapple juice and electric field strength on the performance of continuous ohmic heating system”, Journal of Food Sci Technology, Springer, 61, pp. 1188–1200, 2024.",
    },
    {
      id: 4,
      year: 2024,
      citation:
        "G. Aswani, O.P Maurya, M. R. Mahboob, A. U. Khan, and T. Islam, “Design and Fabrication of Nondestructive Capacitive Sensors for the Moisture Measurement in Chickpeas and Mustard Seeds”, MDPI Sustainability, 16, 1847, 2024.",
    },
    {
      id: 5,
      year: 2024,
      citation:
        'S. Afzal Ali, T. Islam and M. R. Mahboob, "Comparative Investigation of Capacitive Fringing Field Sensors for Humidity Measurement," IEEE Sensors Journal, vol. 24, no. 21, pp. 34645-34653, Nov. 2024.',
    },
    {
      id: 6,
      year: 2023,
      citation:
        'S. A. Ali, M. R. Mahboob and T. Islam, "An Intelligent Food Salt Tester Using Cross-Conductive Sensor," IEEE Open Journal of Instrumentation and Measurement, vol. 2, pp. 1-8, 2023.',
    },
    {
      id: 7,
      year: 2023,
      citation:
        "S. Huaasin, S. A. Ali, M. R Mahboob, T. Islam, “Design and detection method of a four electrodes cross-conductive sensor for fluid conductivity measurement”, Applied Physics A, Springer, vol. 129, 314, 2023.",
    },
    {
      id: 8,
      year: 2021,
      citation:
        "A. C. Saha, V. Verma, R. Tarodiya, Md Rahat Mahboob, R. Kumar, “Analytical modeling of a radiant cooling system for thermal performance analysis”, Materials Today: Proceedings, 2021, Elsevier.",
    },
    {
      id: 9,
      year: 2021,
      citation:
        "MA Siddiqui, MN Anwar, SH Laskar and Md Rahat Mahboob, “A unified approach to design controller in cascade control structure for unstable, integrating and stable processes”, ISA Transactions, vol. 114, pp.331-346, 2021, Elsevier.",
    },
    {
      id: 10,
      year: 2020,
      citation:
        "M A Siddiqui, MN Anwar, SH Laskar, Md Rahat Mahboob, “Closed-loop tuning of cascade controllers based on set-point experiment”, Journal of Engineering Research, vol. 8, no. 4, 2020.",
    },
    {
      id: 11,
      year: 2020,
      citation:
        'Md Rahat Mahboob, A. U. Khan, L. Kumar and T. Islam, "Investigation of Chip Temperature on Response Characteristics of the Humidity Sensor From ppm to %RH", IEEE Transactions on Device and Materials Reliability, vol. 20, no. 3, pp. 576-583, Sept. 2020.',
    },
    {
      id: 12,
      year: 2019,
      citation:
        'M Manas, A Sinha, S Sharma, MR Mahboob, "A novel approach for IoT based wearable health monitoring and messaging system", Journal of Ambient Intelligence and Humanized Computing 10 (7), 2817-2828',
    },
    {
      id: 13,
      year: 2018,
      citation:
        'M. R Mahboob, M. Manas, M. N Anwar, A. Sinha, S. Sharma “A Novel approach for IoT based Wearable Health Monitoring and Messaging System” Journal of Ambient Intelligence and Humanized Computing, Springer, (Accepted) August 2018. ',
    },
    {
      id: 14,
      year: 2017,
      citation:
        'A. Siddiqui, M. R Mahboob, T. Islam “A Passive Wireless Tag with Digital Readout Unit for Wide Range Humidity Measurement” IEEE Transaction on Instrumentation and Measurement, Vol. 66 (5), pp. 1013-1020, May 2017. ',
    },
    {
      id: 15,
      year: 2016,
      citation:
        'M. R. Mahboob, Z. H. Zargar, T. Islam “A Sensitive and Highly Linear Capacitive Thin Film Sensor for Trace Moisture Measurement in Gases” Sensors & Actuator B, ELSEVIER, Vol. 264, pp. 658-664, June 2016. ',
    },
    {
      id: 16,
      year: 2015,
      citation:
        'T. Islam, M. R Mahboob, S. A. Khan “A Simple MOX Vapor Sensor on Polyimide Substrate for Measuring Humidity in ppm Level”, IEEE Sensors Journal, Vol. 15 pp. 3004-3013, 2015. ',
    },
    {
      id: 17,
      year: 2014,
      citation:
        'T. Islam, M. R. Mahboob, S. A. Khan, L. Kumar, “A Single Chip Integrated Sol-Gel Thin Film LC Sensor for Measuring Moisture in ppm Level ”, IEEE Sensors Journal, Vol. 14 pp. 1148-1153, 2014  ',
    },
    {
      id: 18,
      year: 2013,
      citation:
        'T Islam, MR Mahboob, SA Khan, L Kumar, “A single chip integrated sol-gel thin film LC sensor for measuring moisture in ppm level ”, IEEE Sensors Journal 14 (4), 1148-1153  ',
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
        Publications in Journals
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
