import React from "react";
import ExpCard from "../components/ExpCard/ExpCard";
import list from "../data/achievementList";
import Certificate from "../components/CertificateCard/Certificate";
import * as constant from "../constant/constant";
import Subtitle from "../components/Subtitle/Subtitle";
import Navbar from "../components/Navbar";

function Experience() {
  const businessAcvTemp = [];
  const itAcvTemp = [];
  const businessAcv = [];
  const itAcv = [];
  const icpcTemp = [];
  const icpc = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].type === constant.BUSINESS) {
      businessAcvTemp.push(list[i]);
    } else if (list[i].type === constant.IT) {
      itAcvTemp.push(list[i]);
    } else {
      icpcTemp.push(list[i]);
    }
  }

  for (let i = 0; i < businessAcvTemp.length; i += constant.CERTIFICATEROW) {
    const rowBusiness = businessAcvTemp.slice(i, i + constant.CERTIFICATEROW);
    const rowIt = itAcvTemp.slice(i, i + constant.CERTIFICATEROW);
    businessAcv.push(rowBusiness);
    itAcv.push(rowIt);
  }

  for (let i = 0; i < icpcTemp.length; i += constant.CERTIFICATEICPC) {
    const rowIcpc = icpcTemp.slice(i, i + constant.CERTIFICATEICPC);
    icpc.push(rowIcpc);
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <Navbar/>
      <div className="md:w-3/4 m-auto">
        <Subtitle title="Work Experience" />
        <ExpCard
          job={"Software Engineer Intern"}
          company={"PT. Astra Honda Motor"}
          date={"August 2023 - December 2023"}
          job_type={"Internship"}
          file={"experience/AHM.pdf"}
          description={
            <div className="space-y-2">
              <p>
                Work as the software engineer in PT. Astra Honda Motor. I'm
                responsible to develop a backend service that responsible to
                collect and processing all the data related to IOT Device (solar
                panel) from the vendor of the device into the company internal
                database. I develop the backend service using Spring with
                Hibernate, also using InfluxDB and Oracle SQL Server as the
                database.
              </p>
              <p>The feature of the application are:</p>
              <ol className="ms-5 list-disc space-y-1">
                <li>
                  Get json data from vendor and store it into company database
                  directly.
                </li>
                <li>
                  Implement the calculation for consumption and production
                  energy of IOT Device.
                </li>
                <li>
                  Record every performance anomaly that occur by tracking the
                  performance of the device in a spesific range of time.{" "}
                </li>
                <li>
                  Implement the calculation of the performance of the IOT
                  Device.
                </li>
              </ol>
            </div>
          }
        />
        <ExpCard
          job={"Android Developer"}
          company={"PT. Pertamina Trans Kontinental Surabaya"}
          date={"August 2023 - December 2023"}
          job_type={"Part Time"}
          file={"experience/Buncis.pdf"}
          description={
            <div className="space-y-2">
              <p>
                Take a role as an android developer for this team project. The
                team consist of 4 people, 2 android engineer and also 2 web
                developer. We create an application that can be used by the
                customer to monitoring and calculate the volume of the fuel of
                the shipment in Surabaya. The output of the application will be
                an ROB (Remain on Board) of the spesific ship that the customer
                want to monitor.
              </p>
              <p>The feature of the application are:</p>
              <ul className="ms-5 list-disc space-y-1">
                <li>Splash Screen and Login Page</li>
                <li>Form of shipment data</li>
                <li>Volume's calculator of the shipment</li>
                <li>ROB (Remain on Board) generator after the calculation</li>
              </ul>
            </div>
          }
        />
        <ExpCard
          job={"Mobile Developer Cohort"}
          company={"Bangkit Academy led by Google Tokopedia Gojek & Traveloka"}
          date={"February 2023 - July 2023"}
          job_type={"Cohort"}
          file={"experience/Bangkit.pdf"}
          description={
            <div className="space-y-3">
              <p>
                Become mobile development cohort. In this Bangkit Academy, I
                learn about Kotlin and Android Development from beginner up to
                intermediate level. I'm also learn to develop android
                application using Jetpack Compose, learn about design system in
                android development like using MVVM Pattern, Singleton Class
                using Dependency Injection, and also learn some soft skills and
                delve my english proficiency in conversation.
              </p>
              <div className="flex flex-col md:flex-row justify-around">
                <ul className="list-disc space-y-1">
                  <p className="font-bold mt-5 md:pb-2 text-green-500">
                    Learning Path (Hard Skill):
                  </p>
                  <li>Kotlin Introduction</li>
                  <li>Android Development for Beginner</li>
                  <li>Fundamental of Android Development</li>
                  <li>Intermediate Android Development</li>
                  <li>UI/UX for Beginner</li>
                  <li>Android Development using Jetpack Compose</li>
                  <li>SOLID Principle</li>
                </ul>
                <ul className="list-disc space-y-1 ">
                  <p className="font-bold mt-5 md:pb-2 text-green-500">
                    Learning Path (Soft Skill):
                  </p>
                  <li>Growth Mindset and The Power of Feedback</li>
                  <li>Time Management</li>
                  <li>Critical Thinking and Problem Solving</li>
                  <li>Adaptability and Resilience</li>
                  <li>Project Management</li>
                  <li>Professional Communication and Networking</li>
                  <li>Personal Branding and Interview Communication</li>
                </ul>
              </div>
            </div>
          }
        />

        <Subtitle title="Organization Experience" />
        <ExpCard
          job={"Leader of Google DSC IT Del"}
          company={"Google Developer Student Club of IT Del"}
          date={"August 2023 - Present"}
          description={
            <div className="space-y-3">
              <p>
                Choosen as lead of Google Developer Student Club for my campus.
                As a leader, I have responsibility as the representative of my
                campus as Google Developer. I am also take responsibility as
                coordinator of Google Developer Student event in my campus.
                Provide lots of event for students who eager to learn about
                Google technologies and also who love to work on projects. By
                Google Developer Student Club, I gain a lot of experience in
                leadership and also in tech industry. In GDSC we learn, we
                connect, and we growth.
              </p>
            </div>
          }
        />

        <ExpCard
          job={"Del Programming Member"}
          company={"Delpro Del Institute of Technology"}
          date={"July 2021 - Present"}
          description={
            <div className="space-y-2">
              <p>
                Member of Del Programming Club. Delpro is a club in campus who
                focusing on learn all about Competitive Programming. This club
                consist of outstanding student in CP and they create a team to
                compete in a CP competition.
              </p>
            </div>
          }
        />

        <Subtitle title="Achievement" />
        <div className="my-3">
          <p className="font-bold text-center underline p-5 md:p-0 text-sm md:text-xl">
            International Collegiate Programming Contest
          </p>
          {icpc.map((icpcRow, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row space-x-0 md:space-x-7 w-5/6 m-auto md:w-full py-3 justify-center animate-fade-up"
            >
              {icpcRow.map((acv, index) => (
                <Certificate key={index} title={acv.title} image={acv.image} />
              ))}
            </div>
          ))}
        </div>
        <div className="my-3">
          <p className="text-sm md:text-base font-bold px-3 pt-5 underline">
            Business Case Competition
          </p>
          <div className="w-full m-auto">
            {businessAcv.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col md:flex-row space-x-0 md:space-x-7 w-3/4 md:w-full m-auto py-3 justify-center animate-fade-up"
              >
                {row.map((acv, index) => (
                  <Certificate
                    key={index}
                    title={acv.title}
                    image={acv.image}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="my-3">
          <p className="text-sm md:text-base font-bold px-3 pt-5 underline">
            Technology
          </p>
          <div className="md:w-full m-auto">
            {itAcv.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col md:flex-row w-5/6 md:w-full space-x-0 md:space-x-7 py-3 m-auto animate-fade-up"
              >
                {row.map((acv, index) => (
                  <Certificate
                    key={index}
                    title={acv.title}
                    image={acv.image}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
