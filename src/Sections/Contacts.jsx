"use client";

import { Box, Text } from "@mantine/core";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Particles from "../components/Particles";

const publicKey = "N5sGpRAuVby2mfJKZ";
const serviceId = "service_dxwugcr";
const templateId = "template_o7vqcj8";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  emailjs.init(publicKey);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(serviceId, templateId, {
        from_name: formData.name,
        to_name: "ScarletFate",
        from_email: formData.email,
        to_email: "michaelemediong13@gmail.com",
        to_message: formData.message,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsLoading(false);

        setTimeout(() => {
          setNotification({ message: "", type: "" });
        }, 4000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
        setIsLoading(false);

        setTimeout(() => {
          setNotification({ message: "", type: "" });
        }, 4000);
      });
  };

  return (
    <>
      <section className="relative flex items-center">
         <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
        <Box
          className="flex flex-col items-center justify-center max-w-md
        p-5 mx-auto border border-white/10 rounded-2xl bg-[#030712] mt-40"
        >
          <Box
            className="flex flex-col items-start w-full gap-5
            mb-10"
          >
            <Text className="!text-3xl !font-bold !text-white/90 !font-serif">
              let's Talk
            </Text>
            <Text className="!text-xl !font-normal !text-neutral-400 leading-7">
              whether it's a project or a job opportunity, let's connect.
              <br /> I'm eager to collaborate and contribute to your projects.
              <br /> Let's build something great together!
            </Text>
          </Box>

          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            {/* Full Name */}
            <Box className="mb-5">
              <label className="block mb-2 text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-2.5 text-sm text-neutral-400
                  bg-gray-900/40 rounded-lg hover:bg-gray-800/40 border hover:ring-neutral-500 
                  focus:ring-neutral-500 focus:border-neutral-500 
                  placeholder:text-neutral-400/40 hover:border-neutral-500
                  placeholder-opacity-30 focus:ring-1 focus:outline-none"
                placeholder="John Doe"
                autoComplete="name"
                autoCapitalize="on"
                autoCorrect="on"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Box>

            {/* Email */}
            <Box className="mb-5">
              <label className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full p-2.5 text-sm text-neutral-400
                  bg-gray-900/40 rounded-lg hover:bg-gray-800/40 border hover:ring-neutral-500 
                  focus:ring-neutral-500 focus:border-neutral-500 
                  placeholder:text-neutral-400/40 hover:border-neutral-500
                  placeholder-opacity-30 focus:ring-1 focus:outline-none"
                placeholder="myemail@gmail.com"
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>

            {/* Message */}
            <Box className="mb-5">
              <label className="block mb-2 text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="block w-full p-2.5 text-sm text-neutral-400
                  bg-gray-900/40 rounded-lg hover:bg-gray-800/40 border hover:ring-neutral-500 
                  focus:ring-neutral-500 focus:border-neutral-500 
                  placeholder:text-neutral-400/40 hover:border-neutral-500
                  placeholder-opacity-30 focus:ring-1 focus:outline-none"
                placeholder="pls do share...."
                autoComplete="message"
                autoCapitalize="on"
                autoCorrect="on"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </Box>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex space-x-2 items-center justify-center">
                  <span className="sr-only">Loading...</span>
                  <div className="h-4 w-4 bg-[#134cf6] border border-blue-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-4 w-4 bg-[#134cf6] border border-blue-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-4 w-4 bg-[#134cf6] border border-blue-700 rounded-full animate-bounce"></div>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </Box>

        {/* Alert Notification */}
        {notification.message && (
          <div
            className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm transition-all duration-300 z-50 ${
              notification.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {notification.message}
          </div>
        )}
      </section>
    </>
  );
};

export default Contacts;
