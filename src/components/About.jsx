import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion' 
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index,title,icon})=>{
return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)


}
const About = () => {

  return (
    <>
   <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in 
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
        My primary role as a MERN Stack Developer involves designing and implementing full-stack web applications using the MERN technology stack. I am well-versed in front-end development using React.js, where I leverage its component-based architecture to create reusable UI elements. On the back-end, I utilize Express.js and Node.js to build RESTful APIs and handle server-side logic. With my expertise in MongoDB, I can efficiently store and retrieve data, ensuring optimal performance and scalability. I also have experience in integrating third-party APIs and libraries to enhance the functionality of web applications. As a MERN Stack Developer, I am constantly staying updated with the latest trends and best practices in web development to deliver high-quality and innovative solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper ( About,"about")