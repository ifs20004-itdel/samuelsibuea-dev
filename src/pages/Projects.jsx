import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import data from "../data/projectList.jsx";
import Navbar from "../components/Navbar.jsx";
import Copyright from "../components/Copyright/Copyright.jsx";

function Projects() {
  return (
    <div className="font-poppins bg-gray-200 h-full">
      <Navbar />
      <div className="w-10/12 md:w-3/4 m-auto text-xs md:text-base pt-10">
        <p>
          From time to time, I enjoy releasing my personal application project
          that I work with in my freetime. These projects aim to tackle some
          common challenges and also to improve my knowledge. Here are some of
          my best application product:
        </p>
        <div className="grid md:grid-cols-3 py-2">
          {data.map((project) => (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Copyright/>
    </div>
  );
}
export default Projects;
