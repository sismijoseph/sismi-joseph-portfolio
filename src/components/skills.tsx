import { FaReact, FaDatabase, FaNodeJs, FaJs } from "react-icons/fa";
import { SiExpo, SiNestjs, SiTypescript, SiMongodb, SiTypeorm, SiNextdotjs } from "react-icons/si";

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black text-white text-center"
        >
            <h2 className="text-4xl font-bold mb-10">Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                
                {/* React Native */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <FaReact className="text-blue-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">React Native</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full w-[90%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Proficient (90%)</p>
                </div>

                {/* Expo */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiExpo className="text-indigo-400 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Expo</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-indigo-400 h-3 rounded-full w-[85%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Advanced (85%)</p>
                </div>

                {/* Next.js */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiNextdotjs className="text-white text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Next.js</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-white h-3 rounded-full w-[50%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Beginner (50%)</p>
                </div>

                {/* NestJS */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiNestjs className="text-red-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">NestJS</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full w-[75%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Intermediate (75%)</p>
                </div>

                {/* TypeScript */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiTypescript className="text-blue-400 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-400 h-3 rounded-full w-[70%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Intermediate (70%)</p>
                </div>

                {/* JavaScript */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <FaJs className="text-yellow-400 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-yellow-400 h-3 rounded-full w-[80%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Intermediate (80%)</p>
                </div>

                {/* NodeJS */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <FaNodeJs className="text-green-500 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">NodeJS</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full w-[40%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Beginner (40%)</p>
                </div>

                {/* TypeORM */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiTypeorm className="text-orange-400 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">TypeORM</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-orange-400 h-3 rounded-full w-[30%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Beginner (30%)</p>
                </div>

                {/* MongoDB */}
                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                    <SiMongodb className="text-green-400 text-5xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-green-400 h-3 rounded-full w-[20%]"></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">Beginner (20%)</p>
                </div>

            </div>
        </section>
    );
}
