export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "The Future of Web Development",
            content: "In the ever-evolving world of web development, staying up to date with the latest trends is crucial...",
            author: "John Doe",
        },
        {
            id: 2,
            title: "Understanding JavaScript Closures",
            content: "Closures are a fundamental concept in JavaScript and mastering them will help you write better code...",
            author: "Jane Smith",
        },
        {
            id: 3,
            title: "Why Tailwind CSS is a Game Changer",
            content: "Tailwind CSS offers a utility-first approach to styling that allows developers to create responsive designs quickly...",
            author: "Michael Johnson",
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
            <div className="space-y-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold text-gray-800 hover:text-green-500 transition duration-200">{blog.title}</h2>
                        <p className="text-gray-700 mt-2">{blog.content}</p>
                        <p className="mt-4 text-sm text-gray-500">Author: <span className="font-medium text-gray-700">{blog.author}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
