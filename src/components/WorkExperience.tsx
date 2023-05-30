import { ExperienceCard } from "./ExperienceCard";

export function WorkExperience() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 p-4 overflow-x-scroll snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
