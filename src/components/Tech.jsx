import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, tech } from "../constants";

const Tech = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {isMounted && 
        tech.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <p style={{ 'textAlign': 'center' }}>{technology.name}</p>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      }
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <p style={{'textAlign':'center'}}>{technology.name}</p>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
