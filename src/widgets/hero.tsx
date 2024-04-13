import { Avatar, Button, Dropdown, Navbar, Popover } from 'flowbite-react'
import React from 'react'
import { community, languages, services } from '../data/fields';
import { CustomChip } from './customaccordion';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { HiChevronDown } from 'react-icons/hi';
import MyCalendar from './event';



const HeroSection = () => {
    return (
        <header className='flex flex-col h-2/5 w-full bg-orange-200'>
            <nav>

                <Navbar fluid rounded className='bg-orange-200'>
                    <Navbar.Brand href="https://flowbite-react.com">
                        <img src="/static/images/craige.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-bold text-slate-800 dark:text-white">{`craigslist `}</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2 space-x-10 px-6">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-slate-800 rounded-lg bg-orange-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                        <Dropdown
                            dir='rtl'
                            label={
                                <span className='flex flex-row space-x-2 items-center p-2'>
                                    <svg className='h-5 w-5' viewBox="0 0 32 32" strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><path d="M16 16.75A7.75 7.75 0 1 0 8.25 9 7.76 7.76 0 0 0 16 16.75zm0-14A6.25 6.25 0 1 1 9.75 9 6.257 6.257 0 0 1 16 2.75zm14.41 27.09C28.907 23.163 23.027 18.25 16 18.25S3.093 23.163 1.609 29.741l-.019.099a.75.75 0 0 0 1.464.325l.001-.005C4.406 24.162 9.688 19.75 16 19.75s11.594 4.413 12.929 10.322l.017.089a.75.75 0 0 0 .732.59h.001a.745.745 0 0 0 .165-.019l-.005.001a.751.751 0 0 0 .572-.898l.001.005z" /></svg>
                                    <p className="text-sm  font-semibold text-slate-700">{`Account`}</p>
                                </span>
                            }
                            inline>
                            <Dropdown.Item className='text-slate-800 hover:text-orange-800'>{`Sign up`}</Dropdown.Item>
                            <Dropdown.Item className='text-slate-800 hover:text-orange-800'>{`Sign in`}</Dropdown.Item>

                        </Dropdown>

                        <Dropdown
                            label={
                                <span className='flex flex-row items-center'>
                                    <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)" /></g></svg>
                                    <p className="text-sm  font-semibold text-slate-500">{`English`}</p>
                                </span>
                            }
                            inline
                        >
                            {
                                languages?.map((item: any) => {
                                    return (
                                        <Dropdown.Item className='text-slate-800 hover:text-orange-800'>
                                            <a href={item?.url}>{item?.name}</a>
                                        </Dropdown.Item>
                                    )
                                })
                            }


                        </Dropdown>



                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active>
                            <Popover
                                aria-labelledby="default-popover"
                                content={
                                    <div className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <div className="w-full border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                            <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">{`Explore available communities`}</h3>
                                        </div>
                                        <section className="grid grid-cols-6 gap-x-2  space-y-2 items-center px-4 py-2 w-full">
                                            {
                                                community?.map((item: any) => {
                                                    return (
                                                        <CustomChip
                                                            url={item?.url}
                                                            name={item?.name}
                                                            icon={item?.icon}
                                                        />

                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                }
                            >
                                <p className='flex space-x-0.5  items-center font-medium text-md'><p>{`Community`}</p> <HiChevronDown size={24} /></p>
                            </Popover>

                        </Navbar.Link>
                        <Navbar.Link href="#">
                            <Popover
                                aria-labelledby="default-popover"
                                content={
                                    <div className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <div className="w-full border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                            <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">{`Explore our available services`}</h3>
                                        </div>
                                        <section className="grid grid-cols-6 gap-x-2  space-y-2 items-center px-4 py-2 w-full">
                                            {
                                                services?.map((item: any) => {
                                                    return (
                                                        <CustomChip
                                                            url={item?.url}
                                                            name={item?.name}
                                                            icon={item?.icon}
                                                        />

                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                }
                            >
                                <p className='flex space-x-0.5  items-center font-medium text-md'><p>{`Services`}</p> <HiChevronDown size={24} /></p>
                            </Popover>
                        </Navbar.Link>
                        <Navbar.Link href="#">{`Acout Craigslist`}</Navbar.Link>
                        <Navbar.Link href="#">{`Gigs`}</Navbar.Link>
                        <Navbar.Link href="#">{`Resumes`}</Navbar.Link>
                        <Navbar.Link href="#">
                            <Popover
                                aria-labelledby="default-popover"
                                content={
                                    <div className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <div className="w-full border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                            <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">{`Check live and scheduled events`}</h3>
                                        </div>
                                        <section className="w-full p-4">
                                            <MyCalendar />
                                        </section>
                                    </div>
                                }
                            >
                                <p className='flex space-x-0.5  items-center font-medium text-md'><p>{`Events`}</p> <HiChevronDown size={24} /></p>
                            </Popover>
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>
            </nav>

            <section className="flex flex-row items-center justify-center">



                <section className=" dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{`Unlock Your Success: Post with Us Today!`}</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{`Creating your advertisement is just a click away, get your post online today and start reaching your audience!`}</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="#ss" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                {`Post Now`}
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </section>

            </section>

        </header>
    )
}

export default HeroSection