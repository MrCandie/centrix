import ImageComponent from "../../../components/Image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function Consultant({ w, src }: { w?: string; src?: string }) {
  return (
    <>
      <div
        className={
          w
            ? "w-full lg:w-[22%] md:w-[45%] flex items-start flex-col gap-2 bg-white shadow-lg rounded-b-md"
            : "w-full flex items-start flex-col gap-2 bg-white shadow-lg rounded-b-md"
        }>
        <div className="w-full">
          <ImageComponent
            src={src || "/user.jpg"}
            alt="consultant"
            height="180px"
            fit="cover"
          />
        </div>
        <div className="w-full flex flex-col gap-2 px-2 pb-4">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-[14px] font-medium capitalize text-[#333]">
              uchena mihael
            </h2>
            <div className="flex items-center gap-1">
              <MdOutlineStarPurple500 color="gold" size="20px" />
              <p className="text-[14px] font-[400]">4.5</p>
            </div>
          </div>

          <p className="text-base font-bold capitalize text-start">
            Tech consultant
          </p>
          <span className="text-[11px] font-[300] leading-4">
            I'm very enthusiastic about onboarding new people into the tech
            ecosystem...
          </span>
          <div className="flex items-center gap-4">
            <button className="bg-[#5eadec] px-3 py-1 text-white text-[14px] font-medium hover:opacity-80 hover:shadow-xl rounded-md">
              Book
            </button>
            <button className="text-base shadow-lg rounded-full bg-[#eee] p-3">
              <FaPhone color="#333" size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
