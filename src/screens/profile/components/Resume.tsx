import { ChangeEvent, useState } from "react";
import { LuUploadCloud } from "react-icons/lu";

export default function Resume() {
  const [file, setFile] = useState<any>("");

  return (
    <div className="w-full flex items-center justify-center">
      <label
        className="flex items-center flex-col gap-2 bg-white py-2 px-4 rounded-lg shadow-md cursor-pointer"
        htmlFor="resume">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files ? e.target.files[0] : " ")
          }
          className="hidden"
          id="resume"
          type="file"
        />
        <LuUploadCloud size={40} />
        <p className="">{file?.name || "Upload resume"}</p>
      </label>
    </div>
  );
}
