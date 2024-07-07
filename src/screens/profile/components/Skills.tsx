import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import EditSkill from "./EditSkill";
import { User } from "../../../userType";

export default function Skills({
  setData,
  data,
}: {
  setData: (e: User) => void;
  data: User;
}) {
  const [open, setOpen] = useState(false);
  const { skills } = data;
  return (
    <>
      {open && <EditSkill setOpen={setOpen} data={data} setData={setData} />}
      <div className="w-full flex items-start flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <h1 className="text-base lg:text-[24px] font-bold text-[#111]">
            Skills
          </h1>
          <div
            onClick={() => setOpen(true)}
            className="px-6 py-2 rounded-md shadow-md bg-[#5eadec] cursor-pointer">
            <FaPlus color="#fff" />
          </div>
        </div>
        <div className="w-full lg:w-[50%] p-4 flex items-center justify-center flex-wrap gap-4 bg-white rounded-md shadow-md">
          {skills?.length > 0 ? (
            <>
              {skills?.map((el: string, i) => (
                <Skill item={el} key={i} />
              ))}
            </>
          ) : (
            <h1 className="py-6 text-base font-medium">
              You currently have no skills
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

function Skill({ item }: { item: string }) {
  return (
    <div className="border border-[#5eadec] rounded-lg shadow-lg p-1">
      <p className="text-[13px] capitalize text-[#333] font-[300]">{item}</p>
    </div>
  );
}
