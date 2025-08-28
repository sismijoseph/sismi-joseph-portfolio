// components/Certifications.tsx
import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-10 sm:py-12 bg-black flex flex-col items-center justify-center px-4 sm:px-6 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">
        Certifications
      </h2>

      <div className="max-w-4xl w-full space-y-6 sm:space-y-8 text-left">
        {/* Certification 1 */}
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
            Certified in MERN Stack Development
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-2">
            <li className="text-sm sm:text-base">
              Completed comprehensive training on the MERN stack: MongoDB,
              Express.js, React.js, and Node.js.
            </li>
            <li className="text-sm sm:text-base">
              Developed mobile applications using React Native.
            </li>
          </ul>
        </div>

        {/* Certification 2 */}
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
            Certification in Python and Django Development
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-2">
            <li className="text-sm sm:text-base">
              Developed a fully functional E-commerce website using Python and
              the Django framework.
            </li>
            <li className="text-sm sm:text-base">
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
