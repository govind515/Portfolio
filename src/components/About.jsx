import anuragImage from "../images/Ai image.png";
import { ReactTyped } from "react-typed";
import { FaFileDownload } from "react-icons/fa";
import { Bio } from "../data/Bio";

const container =
  "bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 text-xl p-8 md:px-24 md:py-20 flex flex-col md:flex-row-reverse gap-6 justify-center items-center";
const imgWrapper = "flex-1 flex justify-center items-center";
const imgStyle =
  " animate-pulse rounded-full border border-sky-500 hover:border-lime-500 duration-500 bg-neutral-500 bg-cover bg-center bg-no-repeat shadow-inset";
const introAboutWrapper = "flex flex-1 flex-col flex-wrap gap-8";
const introWrapper = "flex flex-col gap-3";
const hiStyle = "text-cyan-50 text-4xl font-bold ";
const nameStyle = "text-cyan-50 text-3xl font-bold";
const typedWrapper = "text-xl font-semibold mt-2";
const aStyle = "font-bold mr-2";
const typedStyle =
  "text-2xl text-cyan-400   rounded from-amber-800 to-lime-800";
const btnStyle =
  "w-1/2 md:w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 font-semibold rounded-lg p-3 px-5";
const linkStyle = "flex justify-center items-center gap-3";

function About() {
  return (
    <div name="about" className={container}>
      <div className={imgWrapper}>
        <img
          className={imgStyle}
          src={anuragImage}
          alt={"myImage"}
          height={"300px"}
          width={"300px"}
        />
      </div>
      <div className={introAboutWrapper}>
        <div className={introWrapper}>
          <h1 className={hiStyle}> Hi, I am</h1>
          <h1 className={nameStyle}>Govind parihar</h1>
          <div className={typedWrapper}>
            <span className={aStyle}>And I,m a</span>
            <ReactTyped
              className={typedStyle}
              strings={Bio.roles}
              startDelay={100}
              typeSpeed={50}
              backDelay={2000}
              backSpeed={30}
              loop={true}
            />
          </div>
        </div>
        <div> {Bio.description}</div>
        <button className={btnStyle}>
          <a className={linkStyle} href="#" download="" target="_blank">
            Resume <FaFileDownload />{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
