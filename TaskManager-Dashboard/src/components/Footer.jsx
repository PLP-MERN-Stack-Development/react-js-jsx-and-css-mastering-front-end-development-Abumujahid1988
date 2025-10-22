import React from "react";

/**
 * Footer with copyright and attribution
 */
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} PLP Task Manager. Built by{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Abdullahi Abdulganiyu
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

