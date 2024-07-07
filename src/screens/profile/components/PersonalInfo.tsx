import { useState } from "react";
import Input from "../../../components/Input";
import EditProfile from "./EditProfile";
import { User } from "../../../userType";

export default function PersonalInfo({
  setData,
  data,
}: {
  setData: (e: User) => void;
  data: User;
}) {
  const [open, setOpen] = useState(false);
  const { personalInformation } = data;
  return (
    <>
      {open && <EditProfile data={data} setData={setData} setOpen={setOpen} />}
      <div className="w-full flex items-start flex-col gap-4">
        <div className="flex w-full items-center gap-4">
          <h1 className="text-base lg:text-[24px] font-bold text-[#111]">
            Personal Information
          </h1>
          <div
            onClick={() => setOpen(true)}
            className="px-6 py-2 rounded-md shadow-md bg-[#5eadec] cursor-pointer">
            <p className="text-white">Edit</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4 flex-col lg:flex-row">
          <Input
            onChange={() => {}}
            label="First Name"
            placeholder="First name"
            value={personalInformation.firstName}
          />
          <Input
            onChange={() => {}}
            label="Last Name"
            placeholder="Last name"
            value={personalInformation.lastName}
          />
        </div>

        <div className="w-full flex items-center justify-between gap-4 flex-col lg:flex-row">
          <Input
            onChange={() => {}}
            label="Email Address"
            placeholder="Email Address"
            value={personalInformation.email}
          />
          <Input
            onChange={() => {}}
            label="Phone Number"
            placeholder="Phone Number"
            value={personalInformation.phoneNumber}
          />
        </div>

        <div className="w-full flex items-center justify-between gap-4 flex-col lg:flex-row">
          <Input
            onChange={() => {}}
            label="Address"
            placeholder="Address"
            value={personalInformation.address}
          />
          <Input
            onChange={() => {}}
            label="Occupation"
            placeholder="Occupation"
            value={personalInformation.occupation}
          />
        </div>
      </div>
    </>
  );
}
