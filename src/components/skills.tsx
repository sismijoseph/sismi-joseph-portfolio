import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpo,
  SiNestjs,
  SiTypescript,
  SiMongodb,
  SiTypeorm,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiVite,
  SiJest,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 bg-black text-white text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
        {/* React Native */}
        <SkillCard
          icon={<FaReact className="text-blue-500" />}
          name="React Native"
          color="bg-blue-500"
          level="90"
          text="Proficient"
        />

        {/* ReactJS */}
        <SkillCard
          icon={<FaReact className="text-cyan-400" />}
          name="ReactJS"
          color="bg-cyan-400"
          level="85"
          text="Advanced"
        />

        {/* Expo */}
        <SkillCard
          icon={<SiExpo className="text-indigo-400" />}
          name="Expo"
          color="bg-indigo-400"
          level="85"
          text="Advanced"
        />

        {/* Next.js */}
        <SkillCard
          icon={<SiNextdotjs className="text-white" />}
          name="Next.js"
          color="bg-white"
          level="50"
          text="Beginner"
        />

        {/* NestJS */}
        <SkillCard
          icon={<SiNestjs className="text-red-500" />}
          name="NestJS"
          color="bg-red-500"
          level="75"
          text="Intermediate"
        />

        {/* NodeJS */}
        <SkillCard
          icon={<FaNodeJs className="text-green-500" />}
          name="Node.js"
          color="bg-green-500"
          level="70"
          text="Intermediate"
        />

        {/* ExpressJS */}
        <SkillCard
          icon={<SiExpress className="text-white" />}
          name="ExpressJS"
          color="bg-white"
          level="65"
          text="Intermediate"
        />

        {/* TypeScript */}
        <SkillCard
          icon={<SiTypescript className="text-blue-400" />}
          name="TypeScript"
          color="bg-blue-400"
          level="70"
          text="Intermediate"
        />

        {/* JavaScript */}
        <SkillCard
          icon={<FaJs className="text-yellow-400" />}
          name="JavaScript"
          color="bg-yellow-400"
          level="80"
          text="Intermediate"
        />

        {/* PostgreSQL */}
        <SkillCard
          icon={<SiPostgresql className="text-blue-300" />}
          name="PostgreSQL"
          color="bg-blue-300"
          level="65"
          text="Intermediate"
        />

        {/* MongoDB */}
        <SkillCard
          icon={<SiMongodb className="text-green-400" />}
          name="MongoDB"
          color="bg-green-400"
          level="40"
          text="Beginner"
        />

        {/* Firebase */}
        <SkillCard
          icon={<SiFirebase className="text-yellow-400" />}
          name="Firebase"
          color="bg-yellow-400"
          level="70"
          text="Intermediate"
        />

        {/* TypeORM */}
        <SkillCard
          icon={<SiTypeorm className="text-orange-400" />}
          name="TypeORM"
          color="bg-orange-400"
          level="40"
          text="Beginner"
        />

        {/* Tailwind CSS */}
        <SkillCard
          icon={<SiTailwindcss className="text-sky-400" />}
          name="Tailwind CSS"
          color="bg-sky-400"
          level="80"
          text="Advanced"
        />

        {/* Vite */}
        <SkillCard
          icon={<SiVite className="text-purple-400" />}
          name="Vite"
          color="bg-purple-400"
          level="60"
          text="Intermediate"
        />

        {/* Python */}
        <SkillCard
          icon={<FaPython className="text-yellow-500" />}
          name="Python"
          color="bg-yellow-500"
          level="40"
          text="Beginner"
        />

        {/* Jest */}
        <SkillCard
          icon={<SiJest className="text-red-400" />}
          name="Jest (Testing)"
          color="bg-red-400"
          level="55"
          text="Intermediate"
        />
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SkillCard({ icon, name, color, level, text }: any) {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <div className="text-4xl sm:text-5xl mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div className={`${color} h-3 rounded-full`} style={{ width: `${level}%` }}></div>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-gray-400">
        {text} ({level}%)
      </p>
    </div>
  );
}
