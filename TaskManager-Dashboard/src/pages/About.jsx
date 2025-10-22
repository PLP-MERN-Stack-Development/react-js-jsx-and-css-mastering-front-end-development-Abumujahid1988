import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About PLP Task Manager</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          PLP Task Manager is a simple and powerful productivity tool designed to help you
          organize your daily activities efficiently. Built with React and Tailwind CSS,
          it combines a clean design with smooth functionality.
        </p>
        <div className="space-y-4 text-left md:text-center">
          <p>
            ✳️ <strong>Component-based architecture:</strong> Modular and reusable components.
          </p>
          <p>
            ⚙️ <strong>State management with hooks:</strong> Uses <code>useState</code>, <code>useEffect</code>, and custom hooks.
          </p>
          <p>
            🌍 <strong>API Integration:</strong> Fetches real-time data from a public API.
          </p>
          <p>
            🌓 <strong>Dark mode support:</strong> Seamless theme switching with Tailwind’s dark mode.
          </p>
        </div>

        <p className="mt-8 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} PLP Task Manager — Empowering productivity through simplicity.
        </p>
      </div>
    </div>
  );
};

export default About;
