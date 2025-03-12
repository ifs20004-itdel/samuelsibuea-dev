import React from "react";
import samuel_google from "/images/samuel_google.webp";
import SkillsCard from "../components/SkillsCard/SkillsCard";
import skillList from "../data/skillList";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard/PostCard";
import Subtitle from "../components/Subtitle/Subtitle";
import Copyright from "../components/Copyright/Copyright";

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
      <div className="hidden md:flex align-middle justify-center py-12 bg-gradient-to-t from-sky-800 via-sky-500  shadow-md rounded-b-full">
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
        <div className="flex flex-col md:flex-row gap-x-10">
          <div className="my-10">
            <div className="px-8 md:px-0">
              <Subtitle title={"Education"} />
            </div>
            <PostCard />
          </div>
          <div className="flex flex-col w-3/4 m-auto text-justify ">
            <h3 className="font-bold text-start md:text-xl text-sm pb-5 md:pb-0">
              About Me
            </h3>
            <div className="md:text-base text-xs space-y-5">
              <p>
                I am a Software Engineer. Strong passion in learning all about programming stuff, 
                eager to join competition, have a full commitment to continuous learning. 
                Expert in{" "}
                <b>Java language</b>, <b>Backend Development</b> by using{" "}
                <b>Spring Boot</b>. But I'm also open to{" "}
                <b>Android Development</b>, web development by using <b>Laravel</b>, <b>React</b>, and several js library,
                and currently learn about <b>Data Engineering</b> utilizing cloud service. 
                Have been participate in several programming and IT competitions such like the 
                ICPC Asia Jakarta Regional Contest. 
                Love to join an IT community, getting knowledge with other tech worker, 
                notably mention,I was former lead of GDSC{" "}
                <b>(Google Developer Student Clubs)</b> at my campus :).
              </p>
              <p>
                Currently work as <b>Trainee Data Engineer</b> at one of private banking in Indonesia.
                Other experience as such:
                <ul className="list-inside list-disc">
                  <li><b>Bangkit Academy Batch 1 in 2023</b>: Mobile Dev Cohort</li>
                  <li><b>Internship @Astra Honda Motor (AHM)</b>: Software Engineer </li>
                  <li><b>Part Time @Pertamina Kontinental Surabaya</b>: Mobile Engineer</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-sky-600 w-1/4 rounded-s-full  md:block hidden" />
      </div>
      <div className="w-3/4 m-auto justify-center pt-5 md:py-0">
        <h3 className="font-bold text-xl pt-5 text-center">Tools & Skills</h3>
        <div className="space-y-5 pt-5 pb-20">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex space-x-4 md:space-x-7 justify-center"
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
      <Copyright/>
    </div>
  );
}

export default About;
