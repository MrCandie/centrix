import { RiSearch2Line } from "react-icons/ri";

export default function Search() {
  return (
    <div className="flex-1 lg:w-[40%] bg-[#fff] flex items-center gap-4 rounded-lg border border-[#ccc] p-2">
      <RiSearch2Line />
      <input
        className="flex-1 bg-transparent outline-none"
        type="search"
        placeholder="Search consultants"
      />
    </div>
  );
}
