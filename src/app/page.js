export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-8 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Our App!</h1>
      <p className="text-xl text-white mb-8 text-center max-w-2xl">
        Your one-stop solution for managing tasks, staying organized, and boosting productivity. Join us on this journey!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Task Management</h2>
          <p className="text-gray-700">
            Organize and prioritize your tasks easily with our intuitive interface.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Collaboration Tools</h2>
          <p className="text-gray-700">
            Collaborate seamlessly with your team and stay on the same page.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Analytics</h2>
          <p className="text-gray-700">
            Track your progress with powerful analytics and insights.
          </p>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors hover:bg-blue-500">
        Get Started
      </button>
    </div>
  );
}
