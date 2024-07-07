import { NavLink } from "react-router-dom";
import ImageComponent from "./Image";
import { ReactElement } from "react";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({
  setIsOpen,
}: {
  setIsOpen: (e: boolean) => void;
}) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />;
      <div className="menu relative">
        <div
          className="absolute top-0 right-0 p-3 cursor-pointer"
          onClick={() => setIsOpen(false)}>
          <IoClose color="red" />
        </div>
        <div className="w-[120px]">
          <ImageComponent
            src="/logo.png"
            fit="contain"
            height="120px"
            alt="logo"
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <MenuItem to="/" title="Dashboard" icon={<MdDashboard />} />
          {false && (
            <MenuItem
              to="/consultants"
              title="Consultants"
              icon={<MdDashboard />}
            />
          )}
          <MenuItem to="/profile" title="Profile" icon={<FaUser />} />
        </div>
        <div className="absolute w-full py-3 px-6 cursor-pointer bg-[#fafafa] bottom-0 left-0 flex items-center gap-4">
          <LuLogOut color="red" />
          <h4 className="text-base text-[red] font-medium">Logout</h4>
        </div>
      </div>
    </>
  );
}

type MenuProps = {
  title: string;
  icon: ReactElement;
  to: string;
};

function MenuItem({ title, icon, to }: MenuProps) {
  return (
    <NavLink
      to={to}
      className="w-full flex items-center gap-4 px-6 py-4 text-base text-[#222]">
      {icon}
      {title}
    </NavLink>
  );
}
