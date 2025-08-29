import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AboutHeading = () => {
  const location = useLocation();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    if (location.hash === "#qualifications") {
      const el = document.getElementById("qualifications");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay ensures DOM is rendered
      }
    }
  }, [location]);

  const doctor = {
    name: "heheh",
    experience: 12, // in years
  };

  const handleRedirectParas = () => {
    window.open(
      "https://www.parashospitals.com/panchkula/doctor-near-me/pulmonologist/dr-robin-gupta",
      "_blank"
    );
  };

  const handleRedirectClinic = () => {
    window.open(
      "https://book.healthplix.com/dr-robin-gupta-pulmonologist-chest-care-clin",
      "_blank"
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="py-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
          name <br />
        </h1>
        <h2 className="text-2xl sm:text-2xl text-pink-700">
         example<br />
        </h2>
        <h2 className="text-xl text-pink-700">
          kjsb gnjsf nvnas,fmbgijsfnj vnajfn fgjkgna jkfnanf onafn
        </h2>
      </div>

      <p className="text-gray-700 text-lg mb-6">
        ous chest societies across India and his
        pivotal role as a founding member of the Critical Care Society in
        Panchkula. His dedication to excellence and patient-centric approach
        have earned him the trust and admiration of countless patients and peers
        alike.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
        Meet Dr. Robin Gupta – A Leader in Respiratory Medicine
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        With decades of experience in the field of pulmonology, Dr. Robin Gupta
        brings deep expertise and an unwavering commitment to improving the lung
        health of his patients. He is known for his precise diagnosis,
        evidence-based treatments, and patient-first approach. Dr. Gupta’s
        training from prestigious institutions and ongoing participation in
        national and international medical forums ensure that his knowledge is
        always up-to-date with the latest advancements in respiratory medicine.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE – Info Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Certifications:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Fellowship of the American College of Chest Physicians (FCCP)
              </li>
              <li>Advanced Training in Intensive Care Medicine</li>
              <li>MD in Pulmonology Medicine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Awards and Recognitions:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Excellence in Pulmonology Award</li>
              <li>Outstanding Contribution to Critical Care Medicine</li>
              <li>
                Distinguished Service Award for Advancement in Pulmonology
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Memberships:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>European Respiratory Society</li>
              <li>ACCP</li>
              <li>American Thoracic Society</li>
              <li>Indian Chest Society</li>
              <li>Association of Physicians of India</li>
              <li>Indian Association for Study of Lung Cancer</li>
              <li>National College of Chest Physicians</li>
              <li>Respiratory Education Society</li>
              <li>Executive Member – SCCM Panchkula</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;
