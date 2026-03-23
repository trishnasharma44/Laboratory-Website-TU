import React from "react";

export default function Conferences() {
  const items = [
    {
      id: 1,
      year: 2023,
      citation:
        'S A Ali, S Hussain, M. Shakir, M. R. Mahboob, and Tarikul Islam. " Design and Study of Cylindrical Quad Electrode for Testing Water Quality." 2023 IEEE International Conference on PIECON. IEEE, 2023.',
    },

    {
      id: 2,
      year: 2022,
      citation:
        'Sayed Afzal Ali, M. R. Mahboob, and Tarikul Islam. "A Simple Setup For Temperature Study Of Humidity Sensors." 2022 2nd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET), 2022.',
    },
    {
      id: 3,
      year: 2022,
      citation:
        'M Asim, A Verma, MR Mahboob. "Load frequency control of multi-area power system using sine-cosine algorithm (SCA)" 2022 2nd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET), 2022.',
    },
    {
      id: 4,
      year: 2018,
      citation:
        'M. R Mahboob, T. Islam, L. Kumar, “A low cost setup to study the temperature effect of humidity sensor, 12th Int. Conference on Sensor Technologies & Application, SENSORCPMM 2018, Venice Italy, Sep 2018. ',
    },
    {
      id: 5,
      year: 2017,
      citation:
        'A. Sinha, S. Sharma, M. R Mahboob, “An IoT based Prototype for smart appliance control” IEEE Conference, 2017, Galgotia University, New Delhi ',
    },
    {
      id: 6,
      year: 2015,
      citation:
        'M. R. Mahboob, T. Islam and M. A. Khan, "A semi flexible integrated wireless humidity sensor," 2015 IEEE International Conference (INDICON), New Delhi, India ',
    },
    {
      id: 7,
      year: 2014,
      citation:
        'A. Siddiqui, M. R Mahboob, A. U. Khan, S. A. Khan, T. Islam, D.T. Shahani, “A Highly Sensitive Readout Circuitry for a Wide Range Thin Film Capacitive Humidity Sensors” IEEE International Conference on ET2ECN, pp.1-5, 26-27 Dec. 2014. ',
    },
    {
      id: 8,
      year: 2014,
      citation:
        'M. R. Mahboob, T. Islam, Z. H Zargar, S. A. Khan “A Low Cost Polyimide based Metal Oxide Film RH Sensor”, IEEE International Conference on Industrial and Information Systems (ICIIS) ',
    },
    {
      id: 9,
      year: 2014,
      citation:
        'M. R. Mahboob, Z. H. Zargar, L. Kumar, T. Islam, “Enhancing the sensitivity of thin film moisture sensor in ppm range”, International Conference, ICAMET, Shibpur, 2014.  ',
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
        Publications in Conferences
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
