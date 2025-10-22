import React from "react";
import TaskManager from "@/components/TaskManager";
import Posts from "@/components/Posts";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8 transition-colors duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-500">
            Your Task Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500">
            Manage your daily tasks and view recent updates below.
          </p>
        </header>

        {/* Task Manager Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg p-6 transition-all duration-500 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold mb-4 transition-colors duration-500">
            Task Manager
          </h2>
          <TaskManager />
        </section>

        {/* API Data Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg p-6 transition-all duration-500 ease-in-out transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold mb-4 transition-colors duration-500">
            Latest Posts (API Data)
          </h2>
          <Posts />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;


