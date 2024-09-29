import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-1/4 bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center border-b-2 border-gray-200 pb-2">Admin Panel</h2>
            <ul className="space-y-4">
                <li>
                    <Link href="/admin/courses">
                        <span className={`block p-2 rounded transition duration-300 ${pathname === "/admin/courses" ? "bg-green-200 text-green-800" : "hover:bg-gray-100 text-black"}`}>
                            Courses
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/blogs">
                        <span className={`block p-2 rounded transition duration-300 ${pathname === "/admin/blogs" ? "bg-green-200 text-green-800" : "hover:bg-gray-100 text-black"}`}>
                            Blogs
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/profile">
                        <span className={`block p-2 rounded transition duration-300 ${pathname === "/admin/profile" ? "bg-green-200 text-green-800" : "hover:bg-gray-100 text-black"}`}>
                            Profile
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
