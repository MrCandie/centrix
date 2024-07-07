import { ChangeEvent, useState } from "react";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { Personal, User } from "../../../userType";

export default function EditProfile({
  setOpen,
  setData,
  data,
}: {
  setOpen: (e: boolean) => void;
  setData: (e: User) => void;
  data: User;
}) {
  const [formData, setFormData] = useState<Personal>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    occupation: "",
  });

  function saveHandler() {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.address ||
      !formData.occupation
    )
      return;

    setData({
      ...data,
      personalInformation: formData,
    });
    setOpen(false);
  }

  return (
    <Modal setIsOpen={setOpen}>
      <div className="w-full flex items-start flex-col gap-4">
        <h1 className="text-[18px font-bold text-[#444]]">
          Update personal information
        </h1>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          value={formData.firstName}
          label="First Name"
          placeholder="Enter first name"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          value={formData.lastName}
          label="Last Name"
          placeholder="Enter Last Name"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, email: e.target.value })
          }
          value={formData.email}
          label="Email Address"
          placeholder="Enter Email Address"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          value={formData.phoneNumber}
          label="Phone Number"
          placeholder="Enter Phone number"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, address: e.target.value })
          }
          value={formData.address}
          label="Address"
          placeholder="Enter Address"
        />
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, occupation: e.target.value })
          }
          value={formData.occupation}
          label="Occupation"
          placeholder="Enter Occupation"
        />
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
