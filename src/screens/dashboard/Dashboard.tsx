import Wrapper from "../../components/Wrapper";
import Consultant from "./components/Consultant";
import Filter from "./components/Filter";
import Search from "./components/Search";
import TopConsultants from "./components/TopConsultants";

export default function Dashboard() {
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-8 mt-[5rem] p-4">
        <div className="w-full flex items-center gap-4 lg:gap-0 justify-between">
          <Search />
          <Filter />
        </div>
        <TopConsultants />
        <div className="w-full flex flex-col gap-3 p-4 rounded-md shadow-md bg-[#eee]">
          <h1 className="">All Consultants</h1>
          <hr />
          <div className="w-full flex items-center flex-wrap justify-between gap-4">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((_, i) => (
              <Consultant key={i} w="22%" src="/user1.jpg" />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
