import { ChangeEvent, useState } from "react";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { Experience, User } from "../../../userType";
import { toast } from "react-toastify";

export default function EditExperience({
  setOpen,
  setData,
  data,
}: {
  setOpen: (e: boolean) => void;
  setData: (e: User) => void;
  data: User;
}) {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState<Experience>({
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    title: "",
  });

  function saveHandler() {
    if (
      !formData.company ||
      !formData.description ||
      !formData.location ||
      !formData.startDate ||
      !formData.title
    )
      return toast.warning(
        "Company name, location, start date and job title is REQUIRED"
      );

    setData({
      ...data,
      professionalExperience: [formData, ...data.professionalExperience],
    });
    setOpen(false);
    toast.success("Experience updated");
  }

  return (
    <Modal setIsOpen={setOpen}>
      <div className="w-full flex items-start flex-col gap-4">
        <h1 className="text-[18px font-bold text-[#444]]">
          Update Professional Experience
        </h1>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, company: e.target.value })
          }
          value={formData.company}
          label="Company Name"
          placeholder="Enter Company Name"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, location: e.target.value })
          }
          value={formData.location}
          label="Location"
          placeholder="Enter Location"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, title: e.target.value })
          }
          value={formData.title}
          label="Job Title"
          placeholder="Enter Job Title"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          value={formData.startDate}
          label="Start Date"
          placeholder="Enter Start date"
          type="date"
        />
        <div className="w-full flex items-center gap-2">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
            value={checked ? "" : undefined}
            id="input"
            type="checkbox"
            className="p-2 rounded-md outline-none border border-b-[1px] border-b-[#a81aff]"
            placeholder="Enter a brief description of your role here"
          />
          <label className="" htmlFor="input">
            Till Present
          </label>
        </div>
        {!checked && (
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
            value={formData.endDate}
            label="End Date"
            placeholder="Enter End Date"
            type="date"
          />
        )}
        <div className="w-full flex items-start flex-col gap-2">
          <label className="" htmlFor="input">
            Description
          </label>
          <textarea
            id="input"
            className="p-2 w-full rounded-md outline-none border border-b-[1px] border-b-[#a81aff]"
            rows={2}
            placeholder="Enter a brief description of your role here"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </div>

        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => setOpen(false)}
            className="border border-[red] py-1 w-full text-[13px] font-bold text-[red] hober:opacity-80 shadow-md hover:shadow-xl rounded-md">
            Close
          </button>
          <button
            onClick={saveHandler}
            className="bg-[#a81aff] py-1 w-full text-[13px] font-bold text-white hober:opacity-80 shadow-md hover:shadow-xl rounded-md">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}
