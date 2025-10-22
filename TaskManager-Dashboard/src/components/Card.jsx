import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Card component
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {React.ReactNode} children - Optional custom content
 * @param {string} className - Additional classes for styling
 */
const Card = ({ title, description, children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-gray-900 dark:text-gray-100 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
