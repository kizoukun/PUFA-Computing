import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 mx-auto">
            <div className="container px-6 py-12 mx-auto">
                <hr className="my-4 border-gray-200 dark:border-gray-700" />
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <div className="md:mx-3 xl:text-sm dark:text-white">
                        <div className="font-semibold tracking-widest text-sm text-[#9CA3AF]">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>
                        <div className="mt-2 font-normal tracking-widest text-sm text-[#6B7280]">
                            The latest news, information, and updates, sent to your inbox directly.
                        </div>
                    </div>

                    <div className="md:ml-auto flex flex-col justify-center mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input
                            id="email"
                            type="text"
                            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                            placeholder="Email Address"
                        />

                        <button
                            className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#0C8CE9] rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                <hr className="my-4 border-gray-200 dark:border-gray-700" />
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <div className="md:mx-3 xl:text-sm dark:text-white">
                        <div className="font-normal tracking-widest text-sm text-[#9CA3AF]">
                            © 2023 PUMA Computing. All rights reserved.
                            <br />
                            Made by Webdev Team Paling Ganteng-Ganteng, Research and Technology.
                        </div>
                    </div>

                    <div className="md:ml-auto flex flex-col justify-center mt-6 space-y-3 md:space-y-0 md:flex-row">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
