import { useState } from "react";
import MnILabs from "../assets/MnI lab.jpeg";

export default function Home() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="w-full overflow-hidden relative">
        <img
          src={MnILabs}
          alt="Measurements and Instrumentation Laboratory"
          className="w-full h-auto md:h-[95vh] lg:h-[85vh] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white xl:text-4xl font-bold  px-6 py-3 rounded pointer-events-auto">
            Welcome to Sensors, Measurements and Instrumentation Research Lab
          </h1> 
        </div> 
      </div> 
      <div className="max-w-6xl mx-auto my-8 p-6 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#0f628c] mt-6">
          Sensors, Measurements and Instrumentation Research Lab
        </h1> 
        <div className="w-50 h-1 bg-[#0f628c] mx-auto mt-2 rounded" />
        <h2 className="inline-block bg-blue-950 text-white text-xl font-bold px-8 py-1 rounded mt-4">
          Overview
        </h2>

        <div className="bg-cyan-100 rounded-lg shadow-md p-6 text-justify text-gray-800 mt-6">
          <p className="leading-relaxed">
            Welcome to the Measurements and Instrumentation Laboratory (MI Lab),
            a core facility for the B.Tech (Electrical Engineering) program at
            Tezpur University. Established with the department in 2014, this
            laboratory is designed to bridge theoretical principles with
            hands‑on practice in the vital field of electrical measurements and
            instrument technology. Here, students learn to master traditional
            measuring devices and modern, computer‑based instrumentation
            systems, forming an essential foundation for careers in power
            systems, automation, robotics, and industrial instrumentation.
          </p>
          <br />
          <p className="leading-relaxed">
            The laboratory is comprehensively equipped with modern facilities to
            support curriculum and research. It features precision instruments
            such as digital storage oscilloscopes (DSOs), programmable function
            generators, automated bridge circuits, and calibrated sources. A
            dedicated setup for sensor characterization and a PC-based DAQ
            workstation allow for the development of integrated measurement
            systems.
          </p>
          <br />
          <p className="leading-relaxed">
            Students successfully design and implement systems such as (1)
            Automated Schering Bridge for capacitance and loss measurement, (2)
            Three-Phase Power and Energy Measurement setups, (3) Digital
            Temperature Monitoring and Control systems, and (4) PC-based Data
            Loggers for dynamic signals. These systems find direct relevance in
            key application areas including power system protection, industrial
            process control, automotive instrumentation, and smart grid
            infrastructure. The skills developed are foundational for careers in
            instrumentation engineering, power systems, robotics, and embedded
            system design.
          </p>
        </div>
      </div>
    </>
  );
}
