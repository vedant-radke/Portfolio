import { useContext } from 'react';

import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectGallery = ({id}) => {

	const { projects } = useContext(ProjectsContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{projects[id-1].img.map((image) => {
				return (
					<div className="mb-10 sm:mb-0" >
						<img
							src={image}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt=""
							key=""
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
