import React, { useEffect, useState } from "react";
import "./ProjectsComp.css";
const ProjectsComp = ({ sectionName, projectData }) => {
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
          projectItems.map((projectItem) => (
            <div className="col-12 col-md-6">
              <div style={{ minWidth: "200px" }} className="my_project_card card m-2 p-3">
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

                <div className="box4">
                                <div className="appBoxMain">
                                    <div className="appBox">
                                        <div className="boxCont">
                                            <a href={projectItem.projectLink} target="_blank" rel="noopener noreferrer"><img className="projectImg" src={projectItem.image} alt="Logo" /></a>

                                        </div>
                                        {/* <div className="spacer"></div> */}
                                        <div className="boxCont">
                                            <h6>{projectItem.name}</h6>
                                            {/* THE projectBtnHandler comes from the portfolio page */}
                                            {/* PASSES THE PARAMETER project._id TO THE PARENT COMPONENT PORTFOLIO PAGE THIS ID WILL BE USED TO CHANGE THE STATES NEEDED AND TO SHOW IT INTO THE MODAL */}
                                            <button className="appInfoButton" 
                                            // onClick={() => props.projectBtnHandler(project._id)}
                                            >App Info</button>
                                        </div>
                                    </div>

                                </div>
                            </div>


              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsComp;
