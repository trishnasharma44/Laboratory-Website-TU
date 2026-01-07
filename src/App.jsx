import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import ErrorBoundary from "./Components/ErrorBoundary";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Resources from "./Pages/Resources";
import OngoingProjects from "./Pages/ongoingProjects";
import CompletedProjects from "./Pages/completedProjects";
import Faculty from "./Pages/faculty";
import PhdScholars from "./Pages/phdScholars";
import BtechStudents from "./Pages/btechStudents";
import MtechStudents from "./Pages/mtechStudents";
import Journals from "./Pages/journals";
import Conferences from "./Pages/conferences";
import Books from "./Pages/books";
import ToT from "./Pages/tot";
import Patents from "./Pages/patents";
import { Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/phd-scholars" element={<PhdScholars />} />
        <Route path="/btech-students" element={<BtechStudents />} />
        <Route path="/mtech-students" element={<MtechStudents />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tot" element={<ToT />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/projects" element={<OngoingProjects />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
