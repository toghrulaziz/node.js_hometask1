export default function Profile() {
    const user = {
        name: "Toghrul Azizli",
        email: "togrul1609@gmail.com",
        bio: "A passionate software developer with experience in building web applications and a keen interest in data science.",
        skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
        location: "Baku, Azerbaijan",
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800 hover:text-green-500 transition duration-200">{user.name}</h1>
                <p className="text-gray-600 text-lg">{user.location}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-1">Email</h2>
                <p className="text-gray-700 text-lg">{user.email}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-1">Bio</h2>
                <p className="text-gray-700 text-lg">{user.bio}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-1">Skills</h2>
                <ul className="grid grid-cols-2 gap-4 mt-2">
                    {user.skills.map((skill, index) => (
                        <li key={index} className="bg-green-200 text-green-800 p-3 rounded-md shadow hover:bg-green-300 transition duration-200">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
