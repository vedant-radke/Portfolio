import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';

const ProjectInfo = ({ id }) => {
  const { projects } = useContext(ProjectsContext);

  console.log("Projects Data:", projects);

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-10">
      <div className="block sm:flex gap-6">
        {/* Left Section - Project Details */}
        <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg border border-gray-200 p-6 mb-5 sm:mb-0 transition-transform transform hover:scale-105">
          <div className="mb-6">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-3">
              About Project
            </p>
            <div className="space-y-2">
              <p className='text-secondary-dark dark:text-secondary-light'>
                <span className="font-bold text-lg">Project Name:</span> {projects[id - 1].title}
              </p>
              <p className='text-secondary-dark dark:text-secondary-light'>
                <span className="font-bold text-lg">Project Category:</span> {projects[id - 1].category}
              </p>
            </div>
          </div>

          <hr className="border-gray-200 my-4" />

          <div className="mb-6">
            <p className="font-general-regular text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              Objective
            </p>
            <p className='text-secondary-dark dark:text-secondary-light'>{projects[id - 1].objective}</p>
          </div>

          <hr className="border-gray-200 my-4" />

          <div className="mb-6">
            <p className="font-general-regular text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              Technology Used
            </p>
            <p className='text-secondary-dark dark:text-secondary-light'>{projects[id - 1].techstack}</p>
          </div>

          <hr className="border-gray-200 my-4" />

          <div>
            <p className="font-general-regular text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              GitHub Link
            </p>
            <a
              className='text-secondary-dark  dark:text-secondary-light underline hover:text-blue-600 transition-colors'
              href={projects[id - 1].gitlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects[id - 1].gitlink}
            </a>
          </div>
        </div>

        {/* Right Section - Project Description */}
        <div className="w-full ml-5 sm:w-2/3 bg-white shadow-lg rounded-lg border border-gray-200 p-6 transition-transform transform  hover:scale-105">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-4">
            Project Description
          </p>
          <p className='text-secondary-dark dark:text-secondary-light'>{projects[id - 1].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
