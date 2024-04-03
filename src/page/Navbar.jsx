import AnuragAffection from '../images/Ai image.png'

import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Bio } from '../data/Bio';
import  { useState } from 'react';


const navbarContainer = `flex justify-around items-center bg-gray-950 p-4`;
const logoWrapper = `flex justify-center items-center gap-2 cursor-pointer`
const logoImg = 'rounded-full'
const logo = ` text-xl text-sky-500 font-bold`;
const nav = ` hidden md:flex justify-center items-center list-none gap-10 `;
const navLink = `hover:text-cyan-400 text-xl font-semibold duration-500 cursor-pointer`;
const faWrapper = 'md:hidden cursor-pointer text-cyan-600 hover:text-cyan-400 duration-200'
const mobileNav = 'md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-4'
const mobileNavUl = 'flex flex-col gap-7 justify-center items-center'

function Navbar() {
    const [isMobile, setIsMobile] = useState();
    const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className='sticky top-0 text-cyan-600 z-10'>
                <div className={navbarContainer}>
                    <div
                        onClick={() => scrollToTop()}
                        className={logoWrapper}>
                        <img
                            className={logoImg}
                            src={AnuragAffection}
                            alt="Logo"
                            height={'40px'}
                            width={'40px'}
                        />
                        <div className={logo}>{Bio.name}</div>
                    </div>
                    <div className={nav}>
                        {
                            sections && sections.map((section, index) => (
                                <li
                                    key={index}
                                    className={navLink}
                                >
                                    <Link
                                        to={section}
                                        smooth
                                        duration={500}
                                    >
                                        {capitalizeFirstLetter(section)}
                                    </Link>
                                </li>
                            ))
                        }
                    </div>
                    <div
                        onClick={() => setIsMobile(!isMobile)}
                        className={faWrapper}
                    >
                        {
                            isMobile ? <FaTimes size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
                {
                    isMobile && (
                        <div
                            className={mobileNav}>
                            <ul className={mobileNavUl}>
                                {
                                    sections && sections.map((section, index) => (
                                        <li
                                            key={index}
                                            className={navLink}

                                        >
                                            <Link
                                                onClick={() => setIsMobile(!isMobile)}
                                                to={section}
                                                smooth
                                                duration={500}
                                            >
                                                {capitalizeFirstLetter(section)}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar;