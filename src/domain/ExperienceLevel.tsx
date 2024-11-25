import ExperienceModel, {
  IExperienceModel,
} from "../components/ExperienceModel";

const EXPERIENCE: IExperienceModel[] = [
  {
    workExperience: "Work Experience",
    workPlace: "Java Full Stack Developer",
    company: "Modus Operandi",
    discription:
      "On the backend, I worked with Spring Boot to build RESTful services, handling CRUD operations for document data. We also integrated search capabilities using indexed queries for faster retrieval and optimized the database interactions by writing custom SQL queries where necessary. I also handled error management, using effects in NgRx to provide a robust, user-friendly experience even in cases of API failures.",
  },
];

const ExperienceLevel = () => {
  return (
    <>
      {EXPERIENCE.map((exprience: IExperienceModel, index: number) => (
        <ExperienceModel
          key={index.toString()}
          company={exprience.company}
          discription={exprience.discription}
          workExperience={exprience.workExperience}
          workPlace={exprience.workPlace}
        />
      ))}
    </>
  );
};

export default ExperienceLevel;
