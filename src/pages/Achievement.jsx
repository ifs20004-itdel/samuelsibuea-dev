import React from "react";
import Certificate from "../components/CertificateCard/Certificate";
import certificateList from "../data/certificateList";
import certificateEventList from "../data/certificateEventList";
import Navbar from "../components/Navbar";

function Achievement() {
  const certificatePerRow = 3;
  const courses = [];
  const eventIT = [];
  for (let i = 0; i < certificateList.length; i += certificatePerRow) {
    const row = certificateList.slice(i, i + certificatePerRow);
    courses.push(row);
  }

  for (let i = 0; i < certificateEventList.length; i += certificatePerRow) {
    const row = certificateEventList.slice(i, i + certificatePerRow);
    eventIT.push(row);
  }

  return (
    <div className="flex flex-col font-poppins w-full">
      <Navbar />
      <div className=" space-y-12 w-3/4 m-auto py-12">
        <div className="flex flex-col">
          <h3 className="font-bold text-lg underline pb-6">
            Course Certificates
          </h3>
          {courses.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex space-x-7 py-3 justify-center animate-fade-up"
            >
              {row.map((certificate, index) => (
                <Certificate
                  key={index}
                  title={certificate.title}
                  image={certificate.image}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg underline pb-6">
            Event Certificates
          </h3>
          {eventIT.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex space-x-7 py-3 justify-center animate-fade-up"
            >
              {row.map((certificate, index) => (
                <Certificate
                  key={index}
                  title={certificate.title}
                  image={certificate.image}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
