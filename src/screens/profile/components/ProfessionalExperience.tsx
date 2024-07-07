import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import EditExperience from "./EditExperience";
import { Experience, User } from "../../../userType";

const months = [
  "Jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

export default function ProfessionalExperience({
  setData,
  data,
}: {
  setData: (e: User) => void;
  data: User;
}) {
  const [open, setOpen] = useState(false);
  const { professionalExperience } = data;
  return (
    <>
      {open && (
        <EditExperience setOpen={setOpen} data={data} setData={setData} />
      )}
      <div className="w-full flex items-start flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <h1 className="text-base lg:text-[24px] font-bold text-[#111]">
            Professional Experiences
          </h1>
          <div
            onClick={() => setOpen(true)}
            className="px-6 py-2 rounded-md shadow-md bg-[#5eadec] cursor-pointer">
            <FaPlus color="#fff" />
          </div>
        </div>
        {professionalExperience?.length > 0 ? (
          <>
            {professionalExperience?.map((el: Experience, i: number) => (
              <ExperienceComponent
                index={i}
                data={data}
                setData={setData}
                item={el}
                key={i}
              />
            ))}
          </>
        ) : (
          <div className="w-full lg:w-[50%] p-4 flex items-center justify-center flex-wrap gap-4 bg-white rounded-md shadow-md">
            <h1 className="py-6 text-base font-medium">
              You currently have no experience added
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

function ExperienceComponent({
  item,
  data,
  setData,
  index,
}: {
  item: Experience;
  data: User;
  index: number;
  setData: (e: User) => void;
}) {
  const month = new Date(item?.startDate).getMonth() + 1;
  const endMonth = new Date(item?.endDate || "").getMonth() + 1;

  function deleteHandler() {
    const newArr = [...data.professionalExperience];
    newArr.splice(index, 1);
    setData({ ...data, professionalExperience: newArr });
  }

  return (
    <div className="w-full bg-white p-4 rounded-md shadow-md flex items-start flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center gap-2">
          <h4 className="text-base text-[#333] font-medium text-start capitalize">
            {item?.company}
          </h4>
          <i className="text-[12px] capitalize">{item?.location},</i>
          <i className="text-[12px] capitalize">
            ({`${months[month]}, ${new Date(item?.startDate).getFullYear()}`} -{" "}
            {item.endDate
              ? `${(months[endMonth], new Date(item?.startDate).getFullYear())}`
              : "Present"}
            )
          </i>
        </div>
        <IoMdClose color="red" cursor="pointer" onClick={deleteHandler} />
      </div>
      <h4 className="text-base text-[#333] font-medium text-start capitalize">
        {item?.title}
      </h4>
      <ul className="w-full p-2 lg:p-4">
        <i className="w-[100%] lg:w-[70%] text-sm font-[300] list-disc capitalize">
          {item?.description}
        </i>
      </ul>
    </div>
  );
}
