export default function Courses() {
    const courses = [
        { id: 1, title: "Introduction to Python", description: "Learn the basics of Python programming, including data types, control structures, and functions.", instructor: "John Doe" },
        { id: 2, title: "Web Development with React", description: "Build dynamic web applications using React.js and modern web technologies.", instructor: "Jane Smith" },
        { id: 3, title: "Data Science Essentials", description: "An introduction to data science, including data analysis, visualization, and machine learning.", instructor: "Alice Johnson" },
        { id: 4, title: "Mobile App Development", description: "Create stunning mobile applications for iOS and Android using Flutter.", instructor: "Michael Brown" },
        { id: 5, title: "Game Development with Unity", description: "Design and develop interactive games using Unity and C#.", instructor: "Chris Lee" },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                        <p className="text-gray-700 mb-4">{course.description}</p>
                        <p className="text-gray-500">Instructor: {course.instructor}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
