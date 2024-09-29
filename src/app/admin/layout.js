"use client";

import Sidebar from "@/components/AdminSideBar";
import "./../../app/globals.css";


export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="flex h-screen">
                    <Sidebar />
                    <main className="flex-grow p-6 ">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
