import React from 'react'
import samuel_google from '/images/samuel_google.webp'
import SkillsCard from '../components/SkillsCard/SkillsCard'
import skillList from '../data/skillList'

function About() {

  const SkillCardsPerRow = 4;
  const rows = [];
  for(let i = 0; i < skillList.length; i += SkillCardsPerRow) {
    const row = skillList.slice(i, i + SkillCardsPerRow);
    rows.push(row);
  }

  return (
    <div className='flex flex-col w-full font-poppins'>
      <div className='flex align-middle justify-center py-12  bg-slate-200 shadow-md rounded-b-full'>
        <img className=' rounded-xl animate-jump-in animate-once' src={samuel_google} alt="samuel" width={650} />
      </div>
      <div className='flex space-x-16 animate-fade-up'>
        <div className='bg-slate-300 w-1/4 rounded-e-full'/>
        <div className='flex flex-col w-3/4 m-auto space-y-3 text-justify'>
          <h3 className='font-bold text-3xl  mt-12 mb-2 '>About Me</h3>
          <p>Undergraduate from Del Institute of Technology. I loves to compete, have a strong sense of problem solving, and have commitment in continuous learning.
            I specialize in <b>Java language</b>, <b>Backend Development</b> using <b>Spring Boot</b>. I'm also interested in <b>Android Development</b>, develop a web using <b>React</b>, and <b>Technopreneurship</b>. 
            I've been compete for several hackathon and have a lot of exposure to several programming competitions like Schematics ITS and ICPC Asia Jakarta Region. 
            Also have an experience in industry field by joining <b>Bangkit Academy</b> in Mobile Learning Path and work as a software engineer intern in company <b>PT. Astra Honda Motor</b>.  </p>

          <p>Currently, I take responsibility as a <b>Lead for a Google Developer Community</b> in my campus. As a leader in campus, I'm always do some coordination for 
          my team and sometimes conduct an event for developer to enrich their skills in tech industry. By contribute to the community, I have abroad my knowledge and delve my soft skills as an undergraduate and as a leader.</p>
        
          <h3 className='font-bold text-xl pt-5'>Tools & Skills</h3>
          <div className=' space-y-5 pt-5 pb-20'>
            {
              rows.map((row, rowIndex) => (
                <div key={rowIndex} className='flex space-x-7 justify-center'>
                  {
                    row.map((skill, index) => (
                      <SkillsCard key={index} title={skill.title} image={skill.image} />
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-slate-300 w-1/4 rounded-s-full' />
      </div>
    </div>
  )
}

export default About