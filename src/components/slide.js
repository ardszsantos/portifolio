import Marquee from 'react-fast-marquee';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaLinux, FaReact, FaPython } from 'react-icons/fa';
import { SiKubuntu } from 'react-icons/si';

const IconMarquee = () => {
  return (
    <Marquee gradient={false} speed={260}>
      <FaHtml5 size={100} style={{ margin: '0 20px' }} />
      <FaCss3Alt size={100} style={{ margin: '0 20px' }} />
      <FaJs size={100} style={{ margin: '0 20px' }} />
      <FaNodeJs size={100} style={{ margin: '0 20px' }} />
      <FaLinux size={100} style={{ margin: '0 20px' }} />
      <FaPython size={100} style={{ margin: '0 20px' }} />
      <SiKubuntu size={100} style={{ margin: '0 20px' }} />
      <FaReact size={100} style={{ margin: '0 20px' }} />
    </Marquee>
  );
};

export default IconMarquee;
