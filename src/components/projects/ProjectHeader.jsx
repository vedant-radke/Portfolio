import { useContext } from 'react';



import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectSingleHeader = ({id}) => {

	const { projects } = useContext(ProjectsContext);

	// console.log("Projects Data:", projects);
	

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{projects[id-1].title}{id}
			</p>
			
		</div>
	);
};

export default ProjectSingleHeader;
