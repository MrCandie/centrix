import { ChangeEvent } from "react";

type InputProps = {
  type?: string;
  placeholder: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
};

export default function Input({
  type,
  placeholder,
  label,
  onChange,
  value,
}: InputProps) {
  return (
    <div className="w-full flex items-start flex-col gap-2">
      {label && (
        <label className="" htmlFor="input">
          {label}
        </label>
      )}
      <input
        id="input"
        className="p-2 w-full rounded-md outline-none border border-b-[1px] border-b-[#a81aff]"
        type={type}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        value={value}
      />
    </div>
  );
}
