import { ChangeEvent, useState } from "react";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { User } from "../../../userType";
import { toast } from "react-toastify";

export default function EditSkill({
  setOpen,
  setData,
  data,
}: {
  setOpen: (e: boolean) => void;
  setData: (e: User) => void;
  data: User;
}) {
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState<Array<string>>([]);

  function addHandler() {
    if (!value) return toast.warning("Kindly enter a valid skill");

    setSkills((prev) => [value, ...prev]);
    setValue("");
  }

  function saveHandler() {
    if (skills.length === 0) return toast.warning("Kindly enter a valid skill");

    setData({
      ...data,
      skills: [...skills, ...data.skills],
    });
    setOpen(false);
    toast.success("Skill updated");
  }

  return (
    <Modal setIsOpen={setOpen}>
      <div className="w-full flex items-start flex-col gap-4">
        <h1 className="text-[18px font-bold text-[#444]]">Update Skills</h1>
        <div className="w-full flex items-center justify-between gap-3">
          <Input
            placeholder="Enter skill"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            value={value}
          />
          <button
            onClick={addHandler}
            className="bg-[#a81aff] text-[12px] rounded-md hover:opacity-80 px-2 text-white">
            Add
          </button>
        </div>
        {skills?.length > 0 && (
          <div className="w-full p-2 flex items-center justify-center flex-wrap gap-4 bg-white rounded-md shadow-md">
            {skills?.map((el: string, i) => (
              <Skill title={el} key={i} />
            ))}
          </div>
        )}
        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => setOpen(false)}
            className="border border-[red] py-1 w-full text-[13px] font-bold text-[red] hober:opacity-80 shadow-md hover:shadow-xl rounded-md">
            Close
          </button>
          <button
            disabled={skills.length === 0}
            onClick={saveHandler}
            className="bg-[#a81aff] py-1 w-full text-[13px] font-bold text-white hober:opacity-80 shadow-md hover:shadow-xl rounded-md">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Skill({ title }: { title: string }) {
  return (
    <div className="border border-[#5eadec] rounded-lg shadow-lg p-1">
      <p className="text-[13px] capitalize text-[#333] font-[300]">{title}</p>
    </div>
  );
}
