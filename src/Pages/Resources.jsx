import bodIncubator from "../assets/BOD Incubator.jpeg";
import hotOven from "../assets/Hot Air Oven.jpeg";
import impedance from "../assets/impedence analyser.jpg";
import dcPowerSupply from "../assets/DC Power Supply.jpeg";
import dso from "../assets/DSO(EDUX1002A).png";
import functionGenSM5060 from "../assets/Function Gen(SM5060-2).png";
import functionGenSMG1022F from "../assets/Function Gen(SMG1022F).png";
import functionGenSMG2042 from "../assets/Function Gen(SMG2042).jpg";
import muffleFurnace from "../assets/Muffle-Furnace-1200C.jpeg";
import niElvis from "../assets/NI ELVIS II board.jpeg";
import sonicator from "../assets/Sonicator.jpg";
import shawDewPointMeter from "../assets/SHAW Dew Point Meter.jpg";
import solderingStation from "../assets/Soldering Station.png";
import hotPlateStirrer from "../assets/Hot Plate Stirrer.jpg";
import phec from "../assets/pH-EC.jpg";
import precisionlabscale from "../assets/Precision Lab Scale.jpg";

export default function Resources() {
  return (
    <>
      <div id="resources" className="bg-blue-400 text-white py-14 text-center">
        <h1 className="text-3xl font-semibold">Laboratory Resources</h1>
      </div>

      <main className="max-w-6xl mx-auto my-12 p-6">
        <div className="bg-cyan-100 rounded-lg shadow-md p-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={bodIncubator} target="_blank" rel="noopener noreferrer">
                <img
                  src={bodIncubator}
                  alt="BOD Incubator"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">BOD Incubator</h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={dcPowerSupply} target="_blank" rel="noopener noreferrer">
                <img
                  src={dcPowerSupply}
                  alt="DC Power Supply"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">DC Power Supply</h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={dso} target="_blank" rel="noopener noreferrer">
                <img
                  src={dso}
                  alt="DSO"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">DSO(EDUX1002A)</h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={functionGenSM5060}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={functionGenSM5060}
                  alt="Function Generator SM5060-2"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Function Generator (SM5060-2)
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={functionGenSMG1022F}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={functionGenSMG1022F}
                  alt="Function Generator SMG1022F"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Function Generator (SMG1022F)
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={functionGenSMG2042}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={functionGenSMG2042}
                  alt="Function Generator SMG2042"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Function Generator (SMG2042)
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={hotOven} target="_blank" rel="noopener noreferrer">
                <img
                  src={hotOven}
                  alt="Hot Oven Harrier"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">Hot Oven</h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={hotPlateStirrer}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={hotPlateStirrer}
                  alt="Hot Plate Stirrer"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Hot Plate Stirrer
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={muffleFurnace} target="_blank" rel="noopener noreferrer">
                <img
                  src={muffleFurnace}
                  alt="Muffle Furnace"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Muffle Furnace - 1200°C
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={niElvis} target="_blank" rel="noopener noreferrer">
                <img
                  src={niElvis}
                  alt="NI ELVIS II board"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                NI ELVIS II board
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={impedance} target="_blank" rel="noopener noreferrer">
                <img
                  src={impedance}
                  alt="Impedance Analyser"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Impedence Analyzer
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={phec} target="_blank" rel="noopener noreferrer">
                <img
                  src={phec}
                  alt="pH-EC"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">pH-EC</h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={precisionlabscale}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={precisionlabscale}
                  alt="Precision Lab Scale"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Precision Lab Scale
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={shawDewPointMeter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={shawDewPointMeter}
                  alt="SHAW Dew Point Meter"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                SHAW Dew Point Meter
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a
                href={solderingStation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={solderingStation}
                  alt="Soldering Station"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">
                Soldering Station
              </h3>
            </article>

            <article className="bg-white rounded shadow p-4 flex flex-col">
              <a href={sonicator} target="_blank" rel="noopener noreferrer">
                <img
                  src={sonicator}
                  alt="Sonicator"
                  className="w-full max-h-64 object-contain rounded"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-auto text-center font-bold text-lg text-slate-800">Sonicator</h3>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
