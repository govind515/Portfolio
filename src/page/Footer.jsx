// import React from 'react'
import { Bio } from '../data/Bio';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa'

const footerContainer = "bg-gray-950 text-cyan-600";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const logo = `mt-5 md:mt-7 text-3xl font-semibold text-white `;
const socialMediaWrapper = `flex justify-center items-center gap-1`;
const socialMediaIcon = `ml-4 md:mx-5 shadow-md hover:shadow-cyan-500  hover:scale-105  hover:border-sky-500 duration-500 hover:text-cyan-400 text-2xl`;
const copyright = ` mb-5 text-light text-white flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={footerWrapper}>
        <div className={logo}> </div>
        <div className={socialMediaWrapper}>
          <a className={socialMediaIcon} href={Bio.github} >
            <FaGithub />
          </a>
          <a className={socialMediaIcon} href={Bio.linkedin} >
            <FaLinkedin />
          </a>
          <a className={socialMediaIcon} href={Bio.youtube} >
            <FaYoutube />
          </a>
          <a className={socialMediaIcon} href={Bio.twitter} >
            <FaTwitter />
          </a>
          
        </div>
        <div className={copyright}>
          <span>&copy; 2023 </span>
          <span>All rights reserved.</span>
          <span>A Family of Love & Affection. </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer