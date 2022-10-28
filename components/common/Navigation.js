import Image from "next/image";
import ThemeChanger from "../utils/ThemeChanger";

const Navigation = () => {
    return (
        <nav>
            <div className="flex justify-between">
                {/* Navbar
                logo icon */}
                <a href="#" className="flex items-center text-gray-900 dark:text-white">
                    <svg className="h-10 w-10 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0           
                                                                        01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 
                                                                        01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 
                                                                        0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    {/* logo text */}
                    <span className="text-xl font-bold">idea.</span>
                </a>

                {/* primary nav */}
                <div className="hidden md:flex flex items-center space-x-3">
                    <a href="#" className="px-2 text-lg text-gray-800 dark:text-white">Blog</a>
                    <a href="#" className="px-2 text-lg text-gray-800 dark:text-white">Categories</a>
                    <a href="#" className="px-2 text-lg text-gray-800 dark:text-white">About</a>
                    <ThemeChanger/>
                </div>

                {/* mobile nav button */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu hidden text-center md:hidden">
            <a href="#" className="block px-4 text-sm hover:bg-gray-200">Blog</a>
            <a href="#" className="block px-4 text-sm hover:bg-gray-200">Categories</a>
            <a href="#" className="block px-4 text-sm hover:bg-gray-200">About</a>
        </div>
        </nav>
    )
}

export default Navigation;