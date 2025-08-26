// components/Certifications.tsx
import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-12 bg-black flex flex-col items-center justify-center px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Certifications</h2>

      <div className="max-w-4xl w-full space-y-8 text-left">
        {/* Certification 1 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-400">
            Certified in MERN Stack Development
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-2">
            <li>
              Completed comprehensive training on the MERN stack: MongoDB,
              Express.js, React.js, and Node.js.
            </li>
            <li>Developed mobile applications using React Native.</li>
          </ul>
        </div>

        {/* Certification 2 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-400">
            Certification in Python and Django Development
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-2">
            <li>
              Developed a fully functional E-commerce website using Python and
              the Django framework.
            </li>
            <li>
              Designed and managed relational databases with SQL to support
              backend operations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
