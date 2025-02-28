"use client";

import config from "@/config/general";
import { UserGroupIcon, ChartBarIcon, FlagIcon } from "@heroicons/react/24/outline";

const getIcon = (id: number) => {
  switch (id) {
    case 1:
      return <UserGroupIcon className="h-8 w-8 text-primary" />;
    case 2:
      return <ChartBarIcon className="h-8 w-8 text-primary" />;
    case 3:
      return <FlagIcon className="h-8 w-8 text-primary" />;
    default:
      return null;
  }
};

const About = () => {
  return (
    <div className="mt-16 xl:mt-0 flex lg:flex-row flex-col justify-between gap-4 mb-24">
      {config.contents.about.map((item) => (
        <div
          key={item.id}
          className="bg-grayBackground w-full lg:w-1/3 px-8 py-7 rounded flex flex-col items-center gap-3 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-center">
            {getIcon(item.id)}
          </div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-base font-normal text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
