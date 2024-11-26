import React from "react";
import Certificate from "../components/CertificateCard/Certificate";
import certificateList from "../data/certificateList";
import certificateEventList from "../data/certificateEventList";
import list from "../data/achievementList";
import * as constant from "../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Navbar from "../components/Navbar";
import Subtitle from "../components/Subtitle/Subtitle";
import Copyright from "../components/Copyright/Copyright";

function Achievement() {
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
    <div className="font-poppins w-full bg-gray-200 h-full">
      <Navbar />
      <div className="space-y-3 md:space-y-12 w-3/4 m-auto py-12">
        <div>
          <Subtitle title={"Competition"} />
          <div className="py-5">
            <p className="text-base md:font-bold underline md:p-2">
              International Collegiate Programming Contest
            </p>
            {icpc.map((icpcRow, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 md:flex md:flex-row w-full gap-5 py-3 justify-center animate-fade-up"
              >
                {icpcRow.map((acv, index) => (
                  <Certificate
                    key={index}
                    title={acv.title}
                    image={acv.image}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="py-5">
            <p className="text-base md:font-bold underline md:p-2">
              Business Case Competition
            </p>
            <div className="w-full m-auto">
              {businessAcv.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-3 md:flex md:flex-row gap-3 w-full py-3 justify-center animate-fade-up"
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
          <div className="py-5">
            <p className="text-base md:font-bold underline md:p-2">
              Hackathons & CP
            </p>
            <div className="md:w-full m-auto">
              {itAcv.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-2 md:flex md:flex-row w-full gap-4 py-3 animate-fade-up"
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
        <div>
          <Subtitle title={"Course Certificates"} />
          <Swiper
            centeredSlides={true}
            className="pb-7 md:py-5"
            lazyPreloadPrevNext={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: -5,
              depth: 395,
              modifier: 1,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            effect={"coverflow"}
            modules={[EffectCoverflow, Autoplay, Pagination]}
          >
            {certificateList.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Certificate key={idx} title={item.title} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Subtitle title={"Tech Webinar Certificates"} />
          <Swiper
            className="pb-7 md:py-3"
            spaceBetween={20}
            centeredSlides={true}
            lazyPreloadPrevNext={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: -5,
              depth: 395,
              modifier: 1,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            effect={"coverflow"}
            modules={[EffectCoverflow, Autoplay, Pagination]}
          >
            {certificateEventList.map((item, idx) => (
              <SwiperSlide key={idx} className="mb-5">
                <Certificate key={idx} title={item.title} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Copyright/>
      </div>
    </div>
  );
}

export default Achievement;
