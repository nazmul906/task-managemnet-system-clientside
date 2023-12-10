import React from "react";
import { motion } from "framer-motion";
import "./banner.css";
const Banner = () => {
  const images = [
    "https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png",
  ];

  return (
    <div className="flex mb-10">
      <div className="flex-1">
        {" "}
        <h1 className="text-6xl ml-[5rem] mt-[6.7rem]">Task Manager</h1>
        <p className="text-3xl ml-[5rem] mt-4 font-serif">
          stay organized and productive
        </p>
        <div className="flex gap-4 ml-[5.5rem]  mt-4">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="flex-1 mr-10 mt-8">
        {/* <img
          className="absolute top-[25rem] left-[14rem]"
          src="https://themephi.net/template/eduan/assets/img/bg/shape-2.png"
        ></img> */}
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="floating-image"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
              ease: "linear",
              delay: index * 0.5, // Add a delay to stagger the animations
            }}
          >
            <img
              src={imageUrl}
              alt={`Floating Image ${index}`}
              className="w-100 h-80 "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
