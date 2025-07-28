import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-[#262936] py-8'>
                <div className='max-w-6xl mx-auto px-4 py-2 sm:px-6 lg:px-8 '>
                    <div className="flex justify-between ">
                        <form action="" className='relative w-2/3' >
                            <div className='flex  items-center'>
                                <input type="text" placeholder='Enter Your E-mail To Subscribe...' className='placeholder:text-gray-500 text-white bg-[#1E202B] py-3 px-4 rounded-full w-full border-0 outline-0' name="" id="" />
                                <input type="button" className='bg-blue-600 rounded-full py-2 px-3 text-white absolute  right-1.5' value={"Subscribe"} name="" id="" />
                            </div>
                        </form>
                        <div className="social-icons flex items-center justify-center w-1/3 space-x-2">
                            <span className='text-[#0197D4] bg-[#1E202B] hover:bg-[#0197D4] hover:text-white cursor-pointer transition w-11 h-11 flex items-center justify-center rounded-full'>
                                <i className="fa-brands fa-facebook-f "></i>
                            </span>
                            <span className='text-[#0197D4] bg-[#1E202B] hover:bg-[#0197D4] hover:text-white cursor-pointer transition w-11 h-11 flex items-center justify-center rounded-full'>
                                <i className="fa-brands fa-twitter "></i>
                            </span>
                            <span className='text-[#0197D4] bg-[#1E202B] hover:bg-[#0197D4] hover:text-white cursor-pointer transition w-11 h-11 flex items-center justify-center rounded-full'>
                                <i className="fa-brands fa-google "></i>
                            </span>
                            <span className='text-[#0197D4] bg-[#1E202B] hover:bg-[#0197D4] hover:text-white cursor-pointer transition w-11 h-11 flex items-center justify-center rounded-full'>
                                <i className="fa-brands fa-pinterest-p "></i>
                            </span>
                        </div>

                    </div>
                    <p className='text-gray-400 mt-8'>Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
                </div>
                
            </footer>

        </>
    )
}
