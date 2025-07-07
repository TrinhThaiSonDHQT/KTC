import { LiaRandomSolid } from "react-icons/lia";
import { MdSkipPrevious } from "react-icons/md";
import { IoPause } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { RiLoopRightFill } from "react-icons/ri";

import styles from './Homework.module.css';
import singerImage from '../../assets/images/bao_anh.jpg';
import SongInfo from "./SongInfo";

const Homework = () => {
  return (
    <div className="homework flex flex-col items-center">
      <div className="w-[400px] flex flex-col items-center">
        <div className="top-section w-[270px] flex flex-col items-center">
          {/* Image */}
          <img
            src={singerImage}
            alt="singer's image"
            className="w-[270px] h-[270px] rounded-[50%]"
          />

          {/* Song name */}
          <div className="my-3 flex flex-col items-center">
            <p className="m-0 text-xl font-semibold">Yêu một người vô tâm</p>
            <p className="m-0 text-sm font-semibold text-gray-400">Bảo Anh</p>
          </div>

          {/* Progress bar */}
          <progress
            value={30}
            max={100}
            className={`${styles.progressBar} w-full h-[5px] m-[20px]`}
          />

          {/* Buttons controller */}
          <div className="w-full flex justify-around text-2xl m-2">
            <span className="cursor-pointer"><LiaRandomSolid  /></span>
            <span className="cursor-pointer"><MdSkipPrevious /></span>
            <span className="cursor-pointer"><IoPause /></span>
            {/* <span className="cursor-pointer"><FaPlay /></span> */}
            <span className="cursor-pointer"><MdSkipNext /></span>
            <span className="cursor-pointer"><RiLoopRightFill /></span>
          </div>
        </div>

        {/* Song's information */}
        <SongInfo/>
      </div>
    </div>
  );
};

export default Homework;
