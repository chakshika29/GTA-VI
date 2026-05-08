import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.35,
      x: "-50%",
      bottom: "-18%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  useGSAP(() => {
    if (showTrailer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showTrailer]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-visible">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                src="./girlbg.png"
                alt=""
                className="
    character
    absolute
    left-1/2
    bottom-[-6vh]
    -translate-x-1/2
    h-[92vh]
    max-h-[1050px]
    rotate-[-6deg]
    pointer-events-none
    select-none
  "
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full min-h-screen bg-black flex justify-center pt-24">
            <div className="cntnr flex text-white w-full max-w-[1400px]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  A city built on heat, hustle, and hard choices. Every street
                  tells a story, every move leaves a mark, and nothing stays
                  clean for long. In a place where ambition runs faster than the
                  law, survival means knowing when to run and when to strike.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  From sunburnt highways to neon-soaked nights, the world reacts
                  to how you play it. Allies remember, enemies adapt, and
                  consequences don’t wait their turn. Power isn’t given here —
                  it’s taken, one decision at a time.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  This isn’t about chasing glory — it’s about staying ahead. The
                  city evolves, the stakes rise, and the hunt never stops.
                  Whether you’re planning your next move or escaping the last
                  one, every second keeps you running.
                </p>
                <button
                  onClick={() => {
                    window.open(
                      "https://www.rockstargames.com/VI/downloads",
                      "_blank"
                    );
                  }}
                  className="
    mt-14
    self-start
    bg-yellow-400
    px-16 py-6
    text-black
    text-3xl
    tracking-widest
    uppercase
    font-bold
    hover:bg-yellow-300
    transition
    pointer-events-auto
    relative
    z-[50]
  "
                >
                  Download Now
                </button>
                <button
                  onClick={() => setShowTrailer(true)}
                  className="
    mt-6
    self-start
    text-white
    text-lg
    tracking-widest
    uppercase
    opacity-80
    hover:opacity-100
    transition
  "
                >
                  ▶ Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showTrailer && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setShowTrailer(false)}
            className="absolute top-6 right-6 text-white text-3xl opacity-70 hover:opacity-100 transition"
          >
            ✕
          </button>

          {/* Video container */}
          <div className="w-[90%] max-w-5xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&mute=1&controls=1&rel=0"
              title="Game Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
