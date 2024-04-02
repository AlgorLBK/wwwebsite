import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full'
    style={{'width': '100%', 'margin' : '0 auto'}}
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1' >
      <p className='text-white tracking-wider text-[18px]' style={{'textAlign': 'justify'}}>{testimonial} <a className='blue-text-gradient' href="Doctor Reza Dibaj Testimony.pdf" download="Doctor Reza Dibaj Testimony.pdf">Full Testimony Here</a></p>
      
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <a href="https://www.linkedin.com/in/reza-dibaj/" target="blank"><span className='blue-text-gradient'>@</span> {name}</a>
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-20 h-20 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[220px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonial.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
        
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
