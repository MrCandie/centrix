import { useState } from "react";
import Wrapper from "../../components/Wrapper";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Skills from "./components/Skills";
import { User } from "../../userType";
import Resume from "./components/Resume";

export default function Profile() {
  const [data, setData] = useState<User>({
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      occupation: "",
    },
    professionalExperience: [],
    skills: [],
  });
  return (
    <Wrapper>
      <div className="w-full flex flex-col iteme-start gap-8 p-4 mt-[5rem]">
        <Resume />
        <PersonalInfo setData={setData} data={data} />
        <ProfessionalExperience setData={setData} data={data} />
        <Skills setData={setData} data={data} />
      </div>
    </Wrapper>
  );
}
