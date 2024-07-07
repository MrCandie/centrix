import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {open && <MobileMenu setIsOpen={setOpen} />}
      <div className="bg-white flex items-center justify-between w-full shadow-lg p-4 absolute top-0 left-0">
        <div className="flex items-center gap-4">
          <div onClick={() => setOpen(true)} className="lg:hidden">
            <AiOutlineMenu />
          </div>
          <h1 className="text-base font-medium text-[#333]">Home</h1>
        </div>
        <div
          onClick={() => navigate("/profile")}
          className="w-[30px] h-[30px] rounded-full bg-[#333] flex items-center justify-center text-[14px] text-[#ddd]">
          AO
        </div>
      </div>
    </>
  );
}
