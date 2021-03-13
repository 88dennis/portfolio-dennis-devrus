import React, { useEffect, useState } from "react";
import "./ProjectsComp.css";
import logo from "../../images/DS3BLACKNOBG.png";

import imgAlt from "../../images/DS3BLACKNOBGNOSH.png";
const ProjectsComp = ({ sectionName, projectData, projectBtnHandler }) => {
  const [projectItems, setProjectItems] = useState([]);
  const [colors, setColors] = useState([]);
  const [mount, setMount] = useState(false);

  let isMounted = false;
  function generateRandomColors() {
    // return "#" + Math.random().toString(16).substr(-6);
    let letters = "BCDEF".split("");
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  // useEffect(() => {
  //   setProjectItems(projectData);
  // }, []);

  useEffect(() => {
    isMounted = true;
    if (!mount) {
      setMount(true);
      if (isMounted) {
        setProjectItems(projectData);
        function getColors() {
          if (projectData) {
            let colors = [];
            for (let i = 0; i < projectData.length; i += 1) {
              colors.push(generateRandomColors());
            }
            setColors(colors);
          }
        }
        getColors();
      }
    }

    return () => {
      isMounted = false;
    };
  }, [mount]);

  console.log(projectItems);
  console.log(colors);
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
                        {projectItem.image === "no image" || projectItem.image === "" || projectItem.image === null || projectItem.image === undefined ? (
                          <div
                            style={{ backgroundColor: colors[index] }}
                            title="details"
                            className="list_icon_div"
                          >
                            <h4 style={{ margin: "0px" }}>
                              {projectItem.name[0].toUpperCase()}
                            </h4>
                          </div>
                        ) : (
                          <img
                            className="projectImg"
                            src={
                              projectItem.image === ("no image" || "")
                                ? imgAlt
                                : projectItem.image
                            }
                            alt="Logo"
                          />
                        )}
                      </a>
                    </div>
                    <div className="col-6">
                      <div
                        onClick={() =>
                          projectBtnHandler(projectItems, projectItem._id)
                        }
                        className="project_name_div"
                      >
                        <h6 style={{ margin: "0px" }}>{projectItem.name}</h6>
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
                        onClick={() =>
                          projectBtnHandler(projectItems, projectItem._id)
                        }
                        className="project_name_div"
                      >
                        <h6 style={{ margin: "0px" }}>
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
