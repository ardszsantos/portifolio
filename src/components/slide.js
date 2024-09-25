import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaLinux, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFlask } from 'react-icons/si';

const IconMarquee = () => {
  const icons = [
    <FaHtml5 size={300} style={{ margin: '0 20px' }} />,
    <FaCss3Alt size={300} style={{ margin: '0 20px' }} />,
    <FaJs size={300} style={{ margin: '0 20px' }} />,
    <FaNodeJs size={300} style={{ margin: '0 20px' }} />,
    <FaLinux size={300} style={{ margin: '0 20px' }} />,
    <FaPython size={300} style={{ margin: '0 20px' }} />,
    <FaReact size={300} style={{ margin: '0 20px' }} />,
    <FaGithub size={300} style={{ margin: '0 20px' }} />,
    <SiTailwindcss size={300} style={{ margin: '0 20px' }} />,
    <SiFlask size={300} style={{ margin: '0 20px' }} />,
  ];

  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <motion.div
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}  // Adjust the range for smoother transition
        transition={{
          repeat: Infinity,
          duration: 30,  // Increase the duration to smoothen the scrolling
          ease: 'linear',
        }}
      >
        {[...icons, ...icons].map((icon, index) => (
          <motion.div key={index} style={{ flexShrink: 0 }}>
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconMarquee;
