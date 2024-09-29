export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "CEO",
            bio: "Alice is a visionary leader with over 10 years of experience in the tech industry, passionate about innovative solutions.",
            image: "https://via.placeholder.com/150", 
        },
        {
            id: 2,
            name: "Bob Smith",
            role: "CTO",
            bio: "Bob is a tech enthusiast with a knack for developing cutting-edge software and optimizing performance.",
            image: "https://via.placeholder.com/150", 
        },
        {
            id: 3,
            name: "Charlie Brown",
            role: "Marketing Manager",
            bio: "Charlie excels at creating impactful marketing strategies that drive engagement and growth.",
            image: "https://via.placeholder.com/150", 
        },
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-white mb-8 text-center max-w-md">
                We are a passionate team dedicated to delivering the best solutions for our clients. Meet our team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
                        <h3 className="text-lg text-gray-600 mb-2">{member.role}</h3>
                        <p className="text-gray-700">{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
