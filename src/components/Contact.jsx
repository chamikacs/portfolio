import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import CustomAlert from "./CustomeAlert";

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ isVisible: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yta8qwc", // Replace with your EmailJS service ID
        "template_3718mjm", // Replace with your EmailJS template ID
        form.current,
        "BXZacQQZtF8Rf2azc" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setAlert({ isVisible: true, message: "Message sent successfully!", type: "success" });
          e.target.reset(); // Clear the form fields after submission
        },
        (error) => {
          console.error("FAILED...", error.text);
          setAlert({ isVisible: true, message: "Failed to send the message. Please try again.", type: "error" });
        }
      );
  };

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="contact" className="py-16 lg:section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent"
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            />

            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Custom alert for feedback */}
      <CustomAlert
        message={alert.message}
        type={alert.type}
        isVisible={alert.isVisible}
        onClose={() => setAlert({ isVisible: false, message: "", type: "" })}
      />
    </section>
  );
};

export default Contact;
