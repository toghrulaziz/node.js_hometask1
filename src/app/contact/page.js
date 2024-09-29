export default function Contact() {
    const contactInfo = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "(555) 123-4567",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "(555) 987-6543",
        },
        {
            id: 3,
            name: "Michael Johnson",
            email: "michael.j@example.com",
            phone: "(555) 555-5555",
        },
    ];

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-white mb-8 text-center max-w-md">
                We would love to hear from you! Here are our contact details:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((contact) => (
                    <div
                        key={contact.id}
                        className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{contact.name}</h2>
                        <p className="text-gray-600">Email: <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a></p>
                        <p className="text-gray-600">Phone: <span className="text-gray-700">{contact.phone}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
