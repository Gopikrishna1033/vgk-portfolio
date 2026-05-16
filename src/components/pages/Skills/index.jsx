// import React from 'react'
import SkillsData from "./SkillsData";
import "./index.css";

const index = () => {
  return (
    <>
      <div className="skill-container">
        {SkillsData.map((skill, idx) => {
          return (
            <div className="skill-card" key={idx}>
              <img
                src={skill.img}
                alt={skill.skillName}
                className="skill-icon"
              />
              <p>{skill.skillName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
