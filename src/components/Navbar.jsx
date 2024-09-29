import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 text-white text-2xl font-bold">
                        Toghrul Azizli
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/admin" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                            Admin
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                            About
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
