import React from "react";
import samuel_google from "/images/samuel_google.webp";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import skillList from "../data/skillList";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard/PostCard";
import Subtitle from "../components/Subtitle/Subtitle";

function About() {
  const SkillCardsPerRow = 4;
  const rows = [];

  for (let i = 0; i < skillList.length; i += SkillCardsPerRow) {
    const row = skillList.slice(i, i + SkillCardsPerRow);
    rows.push(row);
  }

  return (
    <div className="flex flex-col w-full font-poppins bg-gray-200">
      <Navbar />

      <div className=" hidden md:flex align-middle justify-center py-12 bg-gradient-to-t from-sky-800 via-sky-500  shadow-md rounded-b-full">
        <img
          className="w-3/6 md:w-2/5 rounded-xl animate-jump-in animate-once"
          src={samuel_google}
          alt="samuel"
        />
      </div>

      <div className="md:hidden flex justify-center align-middle mt-5 animate-jump-in animate-once ">
        <img className=" w-10/12 rounded-xl" src={samuel_google} alt="samuel" />
      </div>

      <div className="flex md:space-x-16 animate-fade-up">
        <div className="bg-sky-600 w-1/4 rounded-e-full md:block hidden" />
        <div className="flex flex-row gap-x-10">
          <div className="my-10">
            <Subtitle title={"Education"} />
            <PostCard />
          </div>
          <div className="flex flex-col w-3/4 m-auto text-justify ">
            <h3 className="font-bold text-start md:text-xl text-base">
              About Me
            </h3>
            <div className="md:text-base text-sm space-y-5">
              <p>
                Lifetime learner who works as a Software Engineer. Have a strong
                passion for competition, a keen sense of problem-solving, and a
                commitment to continuous learning. I specialize in{" "}
                <b>Java language</b>, <b>Backend Development</b> using{" "}
                <b>Spring Boot</b>. I'm also interested in{" "}
                <b>Android Development</b>, develop a web using <b>React</b>,
                and <b>Technopreneurship</b>. I have participated in several
                hackathons and gained extensive exposure to programming
                competitions such as Schematics ITS and the ICPC Asia Jakarta
                Regional. I also have known as the former lead of GDSC <b>(Google
                Developer Student Clubs)</b> {" "} in my campus, one of the biggest tech
                community for student.
              </p>
              <p>
                Working experience? I have through the <b>Bangkit Academy</b> {" "}
                in Mobile Learning Path and as a Software Engineer intern at{" "}
                <b>PT. Astra Honda Motor</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-sky-600 w-1/4 rounded-s-full  md:block hidden" />
      </div>
      <div className="w-3/4 m-auto justify-center">
        <h3 className="font-bold text-xl pt-5 text-center">Tools & Skills</h3>
        <div className="space-y-5 pt-5 pb-20">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex space-x-3 md:space-x-7 justify-center"
            >
              {row.map((skill, index) => (
                <SkillsCard
                  key={index}
                  title={skill.title}
                  image={skill.image}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
