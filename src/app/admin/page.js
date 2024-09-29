"use client";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
    const handleButtonClick = (action) => {
        let message;
        switch (action) {
            case 'manageCourses':
                message = "📚 Courses? More like *cooooorse-tastic*! Let's get to work!";
                break;
            case 'viewBlogs':
                message = "📝 Blog time! Prepare for an avalanche of wisdom!";
                break;
            case 'updateProfile':
                message = "🔄 Profile update? More like a *glow up*!";
                break;
            default:
                message = "🎉 Just keep clicking!";
        }
        toast.success(message);  
    };

    return (
        <div>
            <ToastContainer />  
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to the Admin Panel!</h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Here, you can manage everything with a few clicks!
                </p>

                <div className="space-y-4">
                    <div className="bg-gray-100 border border-blue-200 rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-semibold text-blue-500">🚀 Get Started</h2>
                        <p>Click the buttons below to manage your content:</p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => handleButtonClick('manageCourses')}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Manage Courses
                        </button>
                        <button
                            onClick={() => handleButtonClick('viewBlogs')}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                        >
                            View Blogs
                        </button>
                        <button
                            onClick={() => handleButtonClick('updateProfile')}
                            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        "Behind every great admin panel is a lot of caffeine!" ☕
                    </p>
                </div>
            </div>
        </div>
    );
}
