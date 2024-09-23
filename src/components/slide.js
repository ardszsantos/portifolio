import Marquee from 'react-marquee-slider';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaLinux, FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFlask } from 'react-icons/si';

const IconMarquee = () => {
  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Marquee velocity={120} resetAfterTries={100} minScale={0.7} direction="ltr">
        <FaHtml5 size={300} style={{ margin: '0 20px' }} />
        <FaCss3Alt size={300} style={{ margin: '0 20px' }} />
        <FaJs size={300} style={{ margin: '0 20px' }} />
        <FaNodeJs size={300} style={{ margin: '0 20px' }} />
        <FaLinux size={300} style={{ margin: '0 20px' }} />
        <FaPython size={300} style={{ margin: '0 20px' }} />
        <FaReact size={300} style={{ margin: '0 20px' }} />
        <FaGithub size={300} style={{ margin: '0 20px' }} />
        <SiTailwindcss size={300} style={{ margin: '0 20px' }} />
        <SiFlask size={300} style={{ margin: '0 20px' }} />
      </Marquee>
    </div>
  );
};

export default IconMarquee;
