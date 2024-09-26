import '../styles/skills.css';

const SkillsSection = () => {
  const gret = '>'

  return (  
    <div id='habilidades' className='wrapper-three'>
      <div id='skills' className='container'>
        <h1> {gret} habilidades_</h1>
        <div class="skills-desc">
          <div class="stack1">
            <h2 className='rotate border-title'>Backend</h2>
            <div className='skill-list1'>
              <p>Docker</p>
              <p>Kubernetes</p>
              <p>CI/CD Pipelines (GitHub Actions, Jenkins)</p>
              <p>AWS</p>
              <p>Nginx</p>
              <p>Git</p>
              <p>Version Control (GitHub, GitLab)</p>
              <p>Server Management</p>
              <p>Automation</p>
            </div>
          </div>
          <div class="stack2">
            <h2 className='rotate border-title'>Frontend </h2>
            <div className='skill-list2'>
              <p>Docker</p>
              <p>Kubernetes</p>
              <p>CI/CD Pipelines (GitHub Actions, Jenkins)</p>
              <p>AWS</p>
              <p>Nginx</p>
              <p>Git</p>
              <p>Version Control (GitHub, GitLab)</p>
              <p>Server Management</p>
              <p>Automation</p>
            </div>
          </div>
          <div class="stack3">
            <h2 className='rotate border-title'>Devops</h2>
            <div className='skill-list3'>
              <p>Docker</p>
              <p>Kubernetes</p>
              <p>CI/CD Pipelines (GitHub Actions, Jenkins)</p>
              <p>AWS</p>
              <p>Nginx</p>
              <p>Git</p>
              <p>Version Control (GitHub, GitLab)</p>
              <p>Server Management</p>
              <p>Automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;