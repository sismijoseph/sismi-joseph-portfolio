// components/Certifications.tsx
import React from "react";

const Education = () => {
  return (
   <section
  id="certifications"
  className="py-12 bg-black flex flex-col items-center justify-center px-6 text-center"
>
      <h2 className="text-4xl font-bold mb-12 text-white">Education</h2>

      <div className="max-w-4xl w-full space-y-8 text-left">
        {/* Certification 1 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-400">
       B.tech computer science with CGPA of 7.01
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-2">
            <li>
              K R Gouri Amma college of engineering, Kerala, India
            </li>
            <li>2015-2019</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
