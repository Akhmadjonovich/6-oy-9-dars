import React from 'react'
import u1 from '../assets/u-1.svg'
import u2 from '../assets/u-2.svg'
import u3 from '../assets/u-3.svg'
import u4 from '../assets/u-4.svg'
import u5 from '../assets/u-5.svg'
import u6 from '../assets/u-6.svg'
const Users = () => {
  return (
    <div>
        <div className='users container pb-10'>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u1} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Photosnap</li>
                            <li className='text-white px-2 py-1 bg-[#5CA5A5] rounded-2xl'>NEW!</li>
                            <li className='text-white px-2 py-1 bg-black rounded-2xl'>FEATURED</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Senior Frontend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Part Time</li>
                            <li>Remote</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Frontend</li>
                    <li>Senior</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u2} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Manage</li>
                            <li className='text-white px-2 py-1 bg-[#5CA5A5] rounded-2xl'>NEW!</li>
                            <li className='text-white px-2 py-1 bg-black rounded-2xl'>FEATURED</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Fullstack Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Part Time</li>
                            <li>Remote</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Fullstack</li>
                    <li>Midweight</li>
                    <li>Python</li>
                    <li>React</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u3} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Account</li>
                            <li className='text-white px-2 py-1 bg-[#5CA5A5] rounded-2xl'>NEW!</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Jonior Frontend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>2d ago</li>
                            <li>Part Time</li>
                            <li>USA only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Frontend</li>
                    <li>Jonior</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u4} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>My home</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Jonior Frontend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>5d ago</li>
                            <li>Part Time</li>
                            <li>USA only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Frontend</li>
                    <li>Jonior</li>
                    <li>Sass</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u5} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Loop studios</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Software Engineer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Full Time</li>
                            <li>Worlwide</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Fullstack</li>
                    <li>Midweight</li>
                    <li>Sass</li>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u6} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Facelt</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Junior Backend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Full Time</li>
                            <li>UK only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Backtend</li>
                    <li>Ruby</li>
                    <li>Jonior</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u3} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Account</li>
                            <li className='text-white px-2 py-1 bg-[#5CA5A5] rounded-2xl'>NEW!</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Jonior Frontend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>2d ago</li>
                            <li>Part Time</li>
                            <li>USA only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Frontend</li>
                    <li>Jonior</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u4} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>My home</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Jonior Frontend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>5d ago</li>
                            <li>Part Time</li>
                            <li>USA only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Frontend</li>
                    <li>Jonior</li>
                    <li>Sass</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u5} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Loop studios</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Software Engineer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Full Time</li>
                            <li>Worlwide</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Fullstack</li>
                    <li>Midweight</li>
                    <li>Sass</li>
                    <li>Ruby</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className='flex relative max-lg:flex-col space-y-5 items-center justify-between bg-white p-7 rounded-2xl mt-10 hover:scale-105 transition-all'>
                <div className='flex  gap-5 items-center '>
                    <img src={u6} className='max-sm:absolute top-[-30px] left-5 max-sm:w-15' alt="" />
                    <div>
                        <ul className='flex gap-5 *:text-sm *:font-bold'>
                            <li className='text-[#5CA5A5] '>Facelt</li>
                        </ul>
                        <h3 className='text-xl font-bold'>Junior Backend Developer</h3>
                        <ul className='flex gap-5 *:opacity-50'>
                            <li>1d ago</li>
                            <li>Full Time</li>
                            <li>UK only</li>
                        </ul>
                    </div>
                </div>
                <ul className='flex flex-wrap gap-10 max-lg:gap-5 *:px-3 *:py-2 *:bg-[#EFF7F7] *:rounded-lg *:hover:bg-[#d4e2e2] *:transition-all *:hover:scale-110'>
                    <li>Backtend</li>
                    <li>Ruby</li>
                    <li>Jonior</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Users