import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-[#af9781]">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex flex-1 justify-center sm:justify-between items-center">
                            <a href="#" className="text-white font-bold text-3xl ">
                                Laura
                            </a>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:justify-end flex-1 space-x-4">
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">Home</a>
                                <a href="#About" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">About</a>
                                <a href="#Experience" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">Experience</a>
                                <a href="#Skills" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">Skills</a>
                                <a href="#Services" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">Portfolio</a>
                                <a href="#Contact" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:border-b-2 border-gray-700 hover:text-white">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Home</a>
                        <a href="#Services" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Services</a>
                        <a href="#About" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">About</a>
                        <a href="#Experience" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Experience</a>
                        <a href="#Skills" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Skills</a>
                        <a href="#Contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}
