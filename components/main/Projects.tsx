import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Pokemon Deck
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Arceus.png"
          title="Arceus"
          description="Arceus is, without a doubt, the most powerful Legendary Pokémon. "
        />
        <ProjectCard
          src="/Mewtwo.png"
          title="Mewtwo"
          description="The Psychic type Pokémon Mewtwo is a man-made, genetically enhanced version of the Mythical Pokémon Mew."
        />
        <ProjectCard
          src="/Giratina.png"
          title="Giratina"
          description="Giratina was created by Arceus to control antimatter. "
        />
      </div>
    </div>
  );
};

export default Projects;
