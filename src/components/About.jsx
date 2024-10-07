import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { skills } from "../data/constants.js";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  useEffect(() => {
    if (isEducationOpen || isExperienceOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEducationOpen, isExperienceOpen]);

  const closeModal = () => {
    setIsEducationOpen(false);
    setIsExperienceOpen(false);
  };

  return (
    <section
      className="lg:mt-40 min-h-[85vh] lg:min-h-[70vh] flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        {/* About Section Title */}
        <div className="mb-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="h2 text-accent"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            I am a recent graduate with first-class honours in Software
            Engineering from the University of Westminster. With one year of
            hands-on experience as a Trainee Software Engineer at hSenid Mobile
            Solutions, I have developed strong skills in full-stack, mobile, and
            API development using technologies like React, Flutter, and Spring
            Boot.
          </motion.p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <motion.h3
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="h3 text-accent"
          >
            Skills & Technologies
          </motion.h3>
          
          {skills.map((category) => (
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              key={category.title}
              className="mb-6"
            >
              <h4 className="text-lg font-semibold text-white-800">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gradient p-4 rounded-lg text-center text-white shadow-lg"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-10 h-10 mx-auto mb-2"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-8"
        >
          <h3 className="h3 text-accent">Timeline</h3>
          <div className="border-l-4 border-accent pl-4">
            {/* Education Timeline Entry */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold">
                BEng (Hons) Software Engineering
              </h4>
              <p className="text-sm text-white/75">
                University of Westminster - 2021 to 2024
              </p>
              <p className="text-white">
                Graduated with first-class honours, specializing in full-stack
                development, software design, and machine learning projects.
              </p>
            </div>
            {/* Work Experience Timeline Entry */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold">
                Trainee Software Engineer
              </h4>
              <p className="text-sm text-white/75">
                hSenid Mobile Solutions - 2022 to 2023
              </p>
              <p className="text-white">
                Contributed to backend, frontend, and API development, enhancing
                company projects with innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education and Industry Experience Buttons */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="flex space-x-4"
        >
          <button
            className="btn btn-sm"
            onClick={() => setIsEducationOpen(true)}
          >
            Education
          </button>
          <button
            className="btn btn-sm"
            onClick={() => setIsExperienceOpen(true)}
          >
            Industry Experience
          </button>
        </motion.div>
      </div>

      {/* Education Modal */}
      {isEducationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
          <div className="bg-gradient p-6 rounded-lg text-white max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold p-2 hover:bg-white hover:text-black rounded-full transition"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="h3">Education</h3>
            <p>
              BEng (Hons) Software Engineering, First Class Honours - University
              of Westminster.
            </p>
          </div>
        </div>
      )}

      {/* Industry Experience Modal */}
      {isExperienceOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
          <div className="bg-gradient p-6 rounded-lg text-white max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold p-2 hover:bg-white hover:text-black rounded-full transition"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="h3">Industry Experience</h3>
            <p>
              One year as a Trainee Software Engineer at hSenid Mobile
              Solutions, specializing in backend, frontend, and API development.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
