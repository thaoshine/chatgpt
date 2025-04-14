import "../index.css";
import vector from "../assets/Vector.svg";
import vector1 from "../assets/Vector1.svg";

import vector4 from "../assets/Vector4.svg";
import vector2 from "../assets/Vector2.svg";
import vector3 from "../assets/Vector3.svg";
import vector5 from "../assets/Vector5.svg";
import vector6 from "../assets/Vector6.svg";
import vector7 from "../assets/Vector7.svg";
import vector8 from "../assets/Vector8.svg";
import vector9 from "../assets/Vector9.svg";
import vector10 from "../assets/Vector10.svg";
import vector11 from "../assets/Vector11.svg";
import vector12 from "../assets/Vector12.svg";
import vector13 from "../assets/Vector13.svg";
import vector14 from "../assets/Vector14.svg";
import vector15 from "../assets/Vector15.svg";
import vector16 from "../assets/Vector16.svg";
import vector17 from "../assets/Vector17.svg";
import ai from "../assets/ai.svg";
import logo1 from "../assets/Vector (1).svg";
import logo2 from "../assets/Vector (2).svg";
import logo3 from "../assets/Vector (3).svg";
import logo4 from "../assets/Vector (4).svg";
import logo5 from "../assets/Vector (5).svg";
import logo6 from "../assets/Vector (6).svg";
import logo7 from "../assets/Vector (7).svg";
import logo8 from "../assets/Vector (8).svg";

import logo9 from "../assets/Vector (9).svg";
import logo10 from "../assets/Vector (10).svg";
import logo11 from "../assets/Vector (11).svg";

import logo12 from "../assets/Vector (12).svg";
import logo13 from "../assets/Vector (13).svg";
import logo14 from "../assets/Vector (14).svg";

import logo15 from "../assets/Vector (15).svg";
import logo16 from "../assets/Vector (16).svg";
import logo17 from "../assets/Vector (17).svg";
import logo18 from "../assets/Vector (18).svg";
import logo19 from "../assets/Vector (19).svg";

import logo20 from "../assets/Vector (20).svg";
import logo21 from "../assets/Vector (21).svg";
import hand from "../assets/HandsPhone.svg";
import Vector from "./Vector.jsx";

export default function Cover() {
  return (
    <div className="w-full h-full relative bg-linear-[144deg,#00ADCC_8.02%,#144CBD_53.53%,#0B2360_82.11%]  ">
      <div className="w-[629px] h-[628px]  flex items-end absolute z-50 top-0 right-0 ">
        <Vector />
      </div>
      <div className="  flex relative  pt-[157px] pl-22 w-full h-full ">
        <div className="text-white/90 font-black text-[128px]  mr-[1163px] flex  ">
          <span> CHAT</span>
          <span className="text-white/20 line-through ">GPT</span>
        </div>

        <div className="flex w-[1118px] h-[206px] justify-between items-end absolute right-0 z-10 mr-[109px] mb-[717px] ml-[691px] overflow-hidden">
          <div className="flex items-end ">
            <img
              src={vector}
              className="w-[89.631px] h-[204.227px]  fill-white"
            />
          </div>
          <div className="flex-col items-end  overflow-hidden ">
            <div className="flex w-[926px] h-[136px]  items-baseline  ">
              {[
                vector4,
                vector1,
                vector2,
                vector3,
                vector9,
                vector8,
                vector7,
                vector10,
                vector11,
                vector14,
                vector12,
                vector13,
                vector15,
                vector16,
                vector17,
              ].map((vector, index) => (
                <img
                  key={index}
                  src={vector}
                  className={`fill-white ${
                    index === 7 ? "mr-[56px]" : index === 14 ? "mr-[10px]" : ""
                  }`}
                  style={{
                    width:
                      index === 0 || index === 3 || index === 8
                        ? "66.955px"
                        : index === 10
                        ? "58.896px"
                        : index === 11 || index === 9 || index === 14
                        ? "17.129px"
                        : index === 12
                        ? "35.163px"
                        : index === 13
                        ? "60.336px"
                        : "56.689px",
                    height:
                      index === 0 || index === 3 || index === 8
                        ? "94.648px"
                        : index === 10
                        ? "110.601px"
                        : index === 11 || index === 12 || index === 9
                        ? "98.177px"
                        : index === 14
                        ? "103.176px"
                        : "73.425px",
                  }}
                />
              ))}

              <div className="flex self-start ">
                <img
                  src={ai}
                  className="w-[36.771px] h-[38.326px] fill-white "
                />
              </div>
            </div>
            <div className="flex">
              {[
                logo1,
                logo21,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
                logo7,
                logo8,
                logo9,
                logo10,
                logo11,
                logo12,
                logo13,
                logo14,
                logo15,
                logo16,
                logo17,
                logo18,
                logo19,
                logo20,
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  className={`fill-white ${
                    index === 9 || index === 12 ? "mr-[23px]" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mt-[117px] mb-[30px] mx-[661px]">
        <img src={hand} className="w-[589px] h-[510px]" />
      </div>
    </div>
  );
}
