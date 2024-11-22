import React from "react";
import ExpCard from "../components/ExpCard/ExpCard";
import Subtitle from "../components/Subtitle/Subtitle";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import organizationalExpList from "../data/organizationalExpList";
import Copyright from "../components/Copyright/Copyright";

function Experience() {
  return (
    <div className="flex flex-col bg-gray-200">
      <Navbar />
      <div className="md:w-3/4 m-auto">
          <div>
            <div className="pt-5">
              <Subtitle title="Work Experience" />
            </div>
              <ExpCard
                job={"Software Engineer Intern"}
                company={"PT. Astra Honda Motor"}
                date={"August 2023 - December 2023"}
                job_type={"Internship"}
                file={"pdf/experience/AHM.pdf"}
                description={
                  <div className="space-y-2">
                    <p>
                      Work as the software engineer in PT. Astra Honda Motor.
                      I'm responsible to develop a backend service that
                      responsible to collect and processing all the data related
                      to IOT Device (solar panel) from the vendor of the device
                      into the company internal database. I develop the backend
                      service using Spring with Hibernate, also using InfluxDB
                      and Oracle SQL Server as the database.
                    </p>
                    <p>The feature of the application are:</p>
                    <ol className="ms-5 list-disc space-y-1">
                      <li>
                        Get json data from vendor and store it into company
                        database directly.
                      </li>
                      <li>
                        Implement the calculation for consumption and production
                        energy of IOT Device.
                      </li>
                      <li>
                        Record every performance anomaly that occur by tracking
                        the performance of the device in a spesific range of
                        time.{" "}
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
                file={"pdf/experience/Buncis.pdf"}
                description={
                  <div className="space-y-2">
                    <p>
                      Take a role as an android developer for this team project.
                      The team consist of 4 people, 2 android engineer and also
                      2 web developer. We create an application that can be used
                      by the customer to monitoring and calculate the volume of
                      the fuel of the shipment in Surabaya. The output of the
                      application will be an ROB (Remain on Board) of the
                      spesific ship that the customer want to monitor.
                    </p>
                    <p>The feature of the application are:</p>
                    <ul className="ms-5 list-disc space-y-1">
                      <li>Splash Screen and Login Page</li>
                      <li>Form of shipment data</li>
                      <li>Volume's calculator of the shipment</li>
                      <li>
                        ROB (Remain on Board) generator after the calculation
                      </li>
                    </ul>
                  </div>
                }
              />
              <ExpCard
                job={"Mobile Developer Cohort"}
                company={
                  "Bangkit Academy led by Google Tokopedia Gojek & Traveloka"
                }
                date={"February 2023 - July 2023"}
                job_type={"Cohort"}
                file={"pdf/experience/Bangkit.pdf"}
                description={
                  <div className="space-y-3">
                    <p>
                      Become mobile development cohort. In this Bangkit Academy,
                      I learn about Kotlin and Android Development from beginner
                      up to intermediate level. I'm also learn to develop
                      android application using Jetpack Compose, learn about
                      design system in android development like using MVVM
                      Pattern, Singleton Class using Dependency Injection, and
                      also learn some soft skills and delve my english
                      proficiency in conversation.
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
          </div>
          <div>
            <div className="pt-5">
              <Subtitle title="Organizational Experience" />
            </div>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {organizationalExpList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <ExpCard
                      key={i}
                      job={item.job}
                      company={item.company}
                      date={item.date}
                      file={item.file}
                      description={
                        <div className="space-y-3">
                          <p>{item.description}</p>
                        </div>
                      }
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Copyright/>
      </div>
  );
}

export default Experience;
