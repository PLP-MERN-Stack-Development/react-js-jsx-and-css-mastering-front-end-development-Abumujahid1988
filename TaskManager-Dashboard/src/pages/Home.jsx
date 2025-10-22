import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="max-w-6xl mx-auto py-12 px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">PLP Task Manager</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Stay productive and organized by managing your daily tasks efficiently.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
        <Card title="Organize Tasks" description="Easily create, complete, and delete tasks with a clean interface." />
        <Card title="Stay Synced" description="Your tasks are saved locally, so you can access them anytime." />
        <Card title="Track Progress" description="Monitor completed tasks and filter by status for better focus." />
      </section>
    </div>
  );
};

export default Home;
