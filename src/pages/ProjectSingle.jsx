import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { ProjectsProvider } from "../context/ProjectsContext";

const ProjectSingle = () => {
  const { id } = useParams();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectsProvider>
          <ProjectHeader id={id} />
          <ProjectGallery id={id} />
          <ProjectInfo id={id} />
        </ProjectsProvider>
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
