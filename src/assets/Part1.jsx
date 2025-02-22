import React, { useState } from "react";
import Logo from "./Logo";
function Part1({ switchToSignup }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`flex justify-center items-center min-h-screen p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className={`w-full md:w-[90%] lg:w-[60vw] h-auto md:min-h-[70vh] flex flex-col md:flex-row rounded-[2rem] md:rounded-r-[5rem] overflow-hidden shadow-[0_0_35px_rgba(0.5,0.5,0.5,0.3)] md:shadow-[0_0_55px_rgba(0.5,0.5,0.5,0.5)] ${darkMode ? 'shadow-gray-800' : ''}`}>
                {/* Left side */}
                <div className={`flex-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} flex flex-col justify-center items-center py-8 md:py-0`}>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 md:m-[1em] md:-mt-[1em]">Login</h1>

                    {/* LOGO'S */}
                    <Logo className="scale-90 md:scale-100" />

                    <form action="" className="flex flex-col space-y-4 w-[90%] md:w-[80%] mt-4 md:mt-6">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className={`p-2 text-sm md:text-base border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className={`p-2 text-sm md:text-base border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} 
                        />
                        <a href="#" className="text-[#FF4457] text-xs md:text-sm">Forgot Password?</a>
                        <button 
                            type="submit" 
                            className="p-2 text-sm md:text-base bg-[#FF4457] text-white rounded-md cursor-pointer"
                        >
                            Login
                        </button>
                    </form>
                </div>

                {/* Right Side */}
                <div className={`flex-1 ${darkMode ? 'bg-[#cc3345]' : 'bg-[#FF4457]'} flex flex-col justify-center items-center text-white p-6 md:p-8`}>
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-center">
                        <button 
                            className="cursor-pointer text-2xl"
                            onClick={toggleDarkMode}
                        >
                            {darkMode ? '🌙' : '🌟'}
                        </button> 
                        Welcome, Student</h1>
                    <h4 className="text-lg md:text-2xl mb-4 md:mb-2 text-center">New here? No worries!</h4>
                    <button
                        className={`bg-white text-[#FF4457] px-5 py-1.5 md:px-6 md:py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300 cursor-pointer text-sm md:text-base ${darkMode ? 'hover:bg-gray-300' : ''}`}
                        onClick={switchToSignup}
                    >
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Part1;