// components/Education.tsx
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-10 sm:py-12 bg-black flex flex-col items-center justify-center px-4 sm:px-6 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">
        Education
      </h2>

      <div className="max-w-4xl w-full space-y-6 sm:space-y-8 text-left">
        {/* Education 1 */}
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg sm:text-2xl font-semibold text-blue-400">
            B.Tech Computer Science with CGPA of 7.01
          </h3>
          <ul className="list-disc list-inside text-white mt-3 space-y-1 sm:space-y-2">
            <li className="text-sm sm:text-base">
              K R Gouri Amma College of Engineering, Kerala, India
            </li>
            <li className="text-sm sm:text-base">2015 - 2019</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
