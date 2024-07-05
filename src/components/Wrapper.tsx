import { ReactNode } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen flex items-center bg-[#d3d3d3] font-[400] text-base">
      <SideBar />
      <div className="w-full lg:w-[85%] h-screen overflow-scroll flex-col items-start relative">
        <Header />
        {children}
      </div>
    </div>
  );
}
