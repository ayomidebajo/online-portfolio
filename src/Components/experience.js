import React from "react";

function Experience() {
  return (
    <div>
      <div className="work">
        <h4 className="font-weight-bold text-center mt-5">
          My work Experience
        </h4>
        <div className="row">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">Frontend developer - SaVests </p>
            <small>Mar 2020 - Apr 2020</small>
          </div>
          <div className="col-lg-6">
            <li> Developed new user-facing features</li>
            <li>Built reusable code and libraries for future use</li>
            <li>Optimized application for maximum speed and scalability</li>
            <li>Collaborated with other team members and stakeholders</li>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 ">
            <p className="h6 font-weight-bold">
              Associate software developer - Ikooba technologies(BMAC solutions)
            </p>
            <small>Sep 2020 - Nov 2021</small>
          </div>
          <div className="col-lg-6">
            <li> Building a new project from scratch with team members.</li>
            <li> Built reusable code and components for future use. </li>
            <li> Implemented new features.</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
