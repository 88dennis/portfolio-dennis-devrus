import React, { useEffect, useState } from "react";
import "./ProjectsComp.css";
const ProjectsComp = ({ sectionName, projectData, projectBtnHandler }) => {
  const [projectItems, setProjectItems] = useState([]);

  useEffect(() => {
    setProjectItems(projectData);
  }, []);

  console.log(projectItems);
  const noProjectItems =
    !projectItems || (projectItems && projectItems.length === 0);
  return (
    <div className="container">
      <h4 className="p-2">{sectionName}</h4>
      <div className="row">
        {!noProjectItems &&
          projectItems.map((projectItem, index) => (
            <div key={index} className="col-12 col-md-6 mb-3">
              <div
                style={{ minWidth: "200px" }}
                className="my_project_card card m-2 p-1"
              >
                <div className="container">
                  <div className="row">
                    <div style={{ textAlign: "center" }} className="col-4">
                      <a
                        href={projectItem.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="projectImg"
                          src={projectItem.image}
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="col-6">
                      <div
                        onClick={() => projectBtnHandler(projectItems, projectItem._id)}
                        className="project_name_div"
                      >
                        <h6>{projectItem.name}</h6>
                      </div>
                      {/* <div>
                      <button
                        className="app_info_button"
                        onClick={() => props.projectBtnHandler(project._id)}
                      >
                        App Info
                      </button>
                      </div> */}
                    </div>

                    <div className="col-2">
                      <div
                        onClick={() => projectBtnHandler(projectItems, projectItem._id)}
                        className="project_name_div"
                      >
                        <h6>
                          <i className="chevron right icon"></i>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="boxCont mb-3">
                  <a
                    href={projectItem.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="projectImg"
                      src={projectItem.image}
                      alt="Logo"
                      
                    />
                  </a>
                  <div>
                    
                  </div>
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsComp;
