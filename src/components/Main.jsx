import React from "react";
import { ArrowRight } from "lucide-react";
import tete from "../assets/tete.png";
import orange from "../assets/orange.png";
import green from "../assets/green.png";
import red from "../assets/red.png";
import idea from "../assets/idea.png";
import background from "../assets/bg.png";
import heart from "../assets/heart.png";
import brain from "../assets/brain.png";
import pancil from "../assets/pancil.png";
import handshake from "../assets/handshake.png";
import arrow1 from "../assets/arrow1.png";
import who from "../assets/who.png";

const Main = () => {
  return (
    <>
      <div className="w-full bg-no-repeat bg-cover py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <img
              src={tete}
              alt="icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />

            <h2 className="flex flex-wrap items-center gap-2 sm:gap-3 font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl chooseush">
              <img
                src={idea}
                alt="icon"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
              Choose us{" "}
              <span className="italic font-normal text-2xl sm:text-3xl lg:text-5xl workt">
                ...Let's work together
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 text-center md:text-left text-sm max-w-6xl  px-4">
            <div className="md:w-1/2 max-w-xl">
              <p className="font-bold font-abril  text-lg md:text-xl">
                vintage{" "}
                <span className=" font-Arial italic text-[#555555] text-sm">
                  adj_
                </span>
              </p>
              <p className="font-Arial text-[15px] mt-2">
                of old, recognized and enduring interest, importance or quality:
                classic
              </p>
            </div>
            <div className="md:w-1/2 max-w-xl">
              <p className="font-bold font-abril  text-lg md:text-xl">
                hippo{" "}
                <span className="font-Arial italic text-[#555555] text-sm">
                  n_
                </span>
              </p>
              <p className="font-Arial text-[15px] mt-2">
                meaning versatile, strong, friendly, assertive, caring, quirky
                and supportive
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-stretch justify-center text-center px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex-1 max-w-sm sm:max-w-md">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#f39c12] mx-auto flex items-center justify-center">
                <img
                  src={orange}
                  alt="unique"
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
              </div>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold why1">
                Why
                <span className="font-abril px-2 font-bold text-[#f39c12]">
                  We’re unique
                </span>
              </p>
              <div className="w-12 sm:w-16 border-b-2 border-gray-400 mx-auto my-2" />
              <p className="text-sm sm:text-base text-[#727272] px-2 font-Arial">
                We believe in support, customer service and being available to
                our clients 24/7. We answer our phones, emails and texts. We're
                unique that way! We provide our clients with the best service
                and care.
              </p>
            </div>
            <div className="flex-1 max-w-sm sm:max-w-md">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#29d000] mx-auto flex items-center justify-center">
                <img
                  src={green}
                  alt="traditional"
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
              </div>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold why1">
                Why
                <span className="font-abril px-2 font-bold text-[#29d000]">
                  We’re traditional
                </span>
              </p>
              <div className="w-12 sm:w-16 border-b-2 border-gray-400 mx-auto my-2" />
              <p className="text-sm sm:text-base text-[#727272] px-2 font-Arial">
                Our values are traditional, but our approach is not. Our clients
                are people we want to work with. We enjoy the work we do, the
                people and businesses we do it with and for. Get in touch…you’ll
                see the difference.
              </p>
            </div>
            <div className="flex-1 max-w-sm sm:max-w-md">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-[#ff0000] mx-auto flex items-center justify-center">
                <img
                  src={red}
                  alt="special"
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
              </div>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold why1">
                Why
                <span className="font-abril px-2 font-bold text-[#ff0000]">
                  We’re special
                </span>
              </p>
              <div className="w-12 sm:w-16 border-b-2 border-gray-400 mx-auto my-2" />
              <p className="text-sm sm:text-base text-[#727272] px-2 font-Arial">
                We enjoy what we do and who we do it with! Our passion is very
                apparent. Get in touch…you’ll see the difference.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center items-center sm:items-stretch">
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base  flex items-center gap-2">
              LEARN MORE
              <span className="bg-white text-black p-1 rounded-full flex items-center justify-center">
                <ArrowRight className="w-2 h-2" />
              </span>
            </button>
            <button className="bg-[#f39c12] text-white px-6 py-2 rounded-full text-sm sm:text-base flex items-center gap-2">
              CONTACT US
              <span className="bg-white text-black p-1 rounded-full flex items-center justify-center">
                <ArrowRight className="w-2 h-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <section
        className="w-full bg-no-repeat bg-cover bg-center py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-center  md:text-left">
            <img
              src={heart}
              alt="heart"
              className="w-16 sm:w-20 md:w-28 h-auto mt-6"
            />
            <div className="flex-1 text-center">
              <p className="text-lg sm:text-lg md:text-xl text-[#222222] font-Arial">
                We live and work by the
              </p>
              <h2 className="font-abril text-3xl sm:text-4xl md:text-5xl font-bold text-[#f2a814]">
                GOLDEN RULE
              </h2>
              <p className="hpd text-lg sm:text-xl md:text-4xl text-[#222222] mt-2">
                “Do unto others as you would have them do unto you”
              </p>
            </div>
          </div>
          <div className="h-2 bg-[#8a034c] w-full -mt-[18px]" />
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <img
              src={who}
              alt="icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
            <h2 className="flex flex-wrap items-center gap-2 sm:gap-3 font-bold leading-tight text-2xl sm:text-4xl lg:text-5xl chooseush">
              <img
                src={brain}
                alt="icon"
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
              We are{" "}
              <span className="italic font-normal text-xl sm:text-3xl lg:text-5xl workt">
                Frequent Research
              </span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="bg-white rounded-xl shadow-md w-full flex flex-col  border border-gray-100">
              <div className="h-48 flex items-center justify-center border-b border-gray-300 p-4">
                <img
                  src={pancil}
                  alt="Creative"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="px-5 pt-4 pb-6 text-center flex flex-col gap-2">
                <p className="text-[24px] md:text-[36px] lg:text-[40px] why1">
                  We are a group of...
                </p>
                <h3 className="text-[16px] md:text-[26px] lg:text-[32px] font-abril  text-[#f39c12]">
                  dedicated, creative people
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] paragraphl">
                  We love print. We love graphics
                  <br /> and design. We love our team.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md w-full flex flex-col  border border-gray-100 ">
              <div className="h-48 flex items-center justify-center border-b border-gray-300 p-4">
                <img
                  src={handshake}
                  alt="Handshake"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="px-5 pt-4 pb-6 text-center flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[24px] md:text-[36px] lg:text-[40px] why1">
                    Our
                  </span>
                  <span className="block text-[16px] md:text-[26px] lg:text-[32px] font-abril text-[#29d000]">
                    bread & butter
                  </span>
                </div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] paragraphl">
                  Trusted long lasting relationships are the b & b of VHM. We
                  value & build relationships with our clients, vendors,
                  friends, family and each other. It is important for a healthy
                  & happy work environment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md w-full flex flex-col  border border-gray-100 ">
              <div className="h-48 flex items-center justify-center border-b border-gray-300 p-4">
                <img
                  src={arrow1}
                  alt="Ideas"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="px-5 pt-4 pb-6 text-center flex flex-col gap-2">
                <p className="text-[24px] md:text-[36px] lg:text-[40px] why1">
                  Got an idea?
                </p>
                <h3 className="text-[16px] md:text-[26px] lg:text-[32px] font-abril text-[#ff0000]">
                  Let’s talk
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] paragraphl">
                  We know that listening is an invaluable skill. Run your ideas
                  by us, we’ll give you our honest feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
