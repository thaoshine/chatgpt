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
    <div className="w-full h-full bg-linear-[144deg,#00ADCC_8.02%,#144CBD_53.53%,#0B2360_82.11%]  ">
      <div className="  flex relative  pt-[157px] pl-22 w-full h-full ">
        <div className="w-[629px] h-[628px]  flex items-end absolute z-50 bottom-3 right-[60px]">
          <Vector />
        </div>
        <div className="text-white/90 font-black text-[128px]  flex  ">
          <span> CHAT</span>
          <span className="text-white/20 line-through ">GPT</span>
        </div>

        <div className="flex items-end absolute right-0 z-10">
          <div className="flex items-end mr-[51.36px]">
            <img
              src={vector}
              className="w-[89.63px] h-[204.22px]  fill-white"
            />
          </div>
          <div className="w-[926px] h-[136px] flex-col items-end ">
            <div className="flex  items-baseline mb-6 ">
              <img
                src={vector4}
                className="w-[66.955px] h-[94.648px] fill-white"
              />
              <img
                src={vector1}
                className="w-[56.689px] h-[73.425px] fill-white"
              />
              <img
                src={vector2}
                className="w-[56.689px] h-[73.425px] fill-white"
              />
              <img
                src={vector3}
                className="w-[66.955px] h-[94.648px] fill-white"
              />
              <img
                src={vector9}
                className="w-[56.689px] h-[73.425px] fill-white"
              />
              <img
                src={vector8}
                className="w-[56.689px] h-[73.425px] fill-white"
              />
              <img
                src={vector7}
                className="w-[56.689px] h-[73.425px] fill-white "
              />
              <img
                src={vector10}
                className="w-[56.689px] h-[73.425px] fill-white mr-[56px]"
              />
              <img
                src={vector11}
                className="w-[66.955px] h-[94.648px] fill-white"
              />
              <img
                src={vector13}
                className="w-[17.129px] h-[98.177px] fill-white"
              />
              <img
                src={vector12}
                className="w-[58.896px] h-[110.601px] fill-white "
              />
              <img
                src={vector14}
                className="w-[17.129px] h-[98.177px] fill-white"
              />
              <img
                src={vector15}
                className="w-[35.163px] h-[94.648px] fill-white"
              />
              <img
                src={vector16}
                className="w-[60.336px] h-[73.425px] fill-white"
              />
              <img
                src={vector17}
                className="w-[17.129px] h-[103.176px] fill-white mr-[10px]"
              />
              <div className="flex self-start ">
                <img
                  src={ai}
                  className="w-[36.771px] h-[38.326px] fill-white "
                />
              </div>
            </div>
            <div className="flex">
              <img src={logo1} className="fill-white" />
              <img src={logo21} className="fill-white" />
              <img src={logo2} className="fill-white" />
              <img src={logo3} className="fill-white" />
              <img src={logo4} className="fill-white" />
              <img src={logo5} className="fill-white" />
              <img src={logo6} className="fill-white" />
              <img src={logo7} className="fill-white" />
              <img src={logo8} className="fill-white" />
              <img src={logo9} className="fill-white pr-[23px]" />
              <img src={logo10} className="fill-white" />
              <img src={logo11} className="fill-white" />
              <img src={logo12} className="fill-white pr-[23px]" />
              <img src={logo13} className="fill-white" />
              <img src={logo14} className="fill-white" />
              <img src={logo15} className="fill-white" />
              <img src={logo16} className="fill-white" />
              <img src={logo17} className="fill-white" />
              <img src={logo18} className="fill-white" />
              <img src={logo19} className="fill-white" />
              <img src={logo20} className="fill-white" />
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
