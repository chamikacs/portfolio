import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { projects } from "../data/constants.js";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="mt-20 lg:mt-40 min-h-[85vh] lg:min-h-[70vh] flex items-center"
    >
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-accent mb-8 h2"
        >
          Projects
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white mb-12"
        >
          I have worked on a wide range of projects. From web apps to mobile
          apps. Here are some of my projects.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
            key={project.id}
            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openModal(project)}
          >
          
              {/* Project Cover Image */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              
              {/* Project Details */}
              <div className="pt-6">
                <h2 className="text-xl font-bold text-white mb-2 h3">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-2">{project.date}</p>
                <p className="text-gray-300 text-sm mb-4 ">
                  {project.description.substring(0, 100)}...
                </p>
                
                
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
