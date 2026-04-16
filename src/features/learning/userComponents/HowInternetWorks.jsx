import React from "react";

export default function HowInternetWorks() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            How the Internet Works
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            A simple guide to understanding the basics of the internet.
          </p>
        </div>

        {/* Section */}
        <Section
          title="What is the Internet?"
          content="The internet is a global network of computers connected together to share information. It allows people and devices to communicate, send data, and access services from anywhere in the world."
        />

        <Section
          title="How does the Internet work?"
          content="The internet works by sending data between devices using a system of networks. When you request something, your device sends data packets through routers and servers until it reaches its destination, then the response is sent back to you."
        />

        <Section
          title="What are websites?"
          content="Websites are collections of web pages stored on servers. They contain text, images, and other content that you can access through the internet using a browser."
        />

        <Section
          title="What is a web browser?"
          content="A web browser is a software application that allows you to access and view websites. It retrieves data from servers and displays it in a readable format for users."
        />

        <Section
          title="What is domain name resolution?"
          content="Domain name resolution is the process of converting a website name into an IP address. This allows your device to find the correct server where the website is hosted."
        />

        <Section
          title="ISP vs Web Host"
          content="An Internet Service Provider (ISP) gives you access to the internet, while a web host stores websites and makes them available online. One connects you to the internet, the other provides content on it."
        />

      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );
}
