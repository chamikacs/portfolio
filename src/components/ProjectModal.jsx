import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable background scrolling
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50">
      <motion.div
        className=" rounded-lg p-6 w-full max-w-4xl mx-auto relative max-h-[90vh] overflow-y-auto scrollbar-hide" // Added custom-scrollbar class
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold p-2 hover:bg-white hover:text-black rounded-full transition"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Project Details */}
        <h2 className="text-white text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-400 mb-2">{project.date}</p>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Images */}
        <div className="flex justify-between mb-6">
          <img src={project.cover} className="w-full h-auto rounded-lg" />
        </div>

        {/* View code BTN */}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-purple-600 rounded-lg p-4">
            View Code
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
