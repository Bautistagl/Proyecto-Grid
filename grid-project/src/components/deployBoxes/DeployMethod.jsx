import Image from 'next/image';
import React from 'react';

const DeployMethod = ({ onNextStep }) => {
  return (
    <>
      <Image
        style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
        alt=""
        width={30}
        height={30}
        src="/dots.png"
      />
      <div className="deployMethod-container">
        <h2>Select a deployment method</h2>
        <span>Deploy from a Git repository or a Docker registry.</span>
        <div className="contenedor-flex-only">
          <div className="card-newApp">
            <div className="icono-titulo">
              <Image
                className="icon-card-newApp"
                src="/iconGit.png"
                alt="/iconGit.png"
                height={50}
                width={50}
              />
              <span className="span-newApp"> Git repository </span>
            </div>
            <span className="span-newApp2">
              {' '}
              Deploy using source from a Git repo.{' '}
            </span>
          </div>
          <div style={{ marginLeft: '30px' }} className="card-newApp">
            <div className="icono-titulo">
              <Image
                className="icon-card-newApp"
                src="/iconDocker.webp"
                alt="/iconGit.png"
                height={50}
                width={50}
              />
              <span className="span-newApp"> Docker registry </span>
            </div>
            <span className="span-newApp2">
              {' '}
              Deploy a container from an image registry.{' '}
            </span>
            <input placeholder="Docker image namespace/repository:tag" />
          </div>
        </div>
        <div>
            <h2>Build settings</h2>
            <span style={{color:'rgba(255, 255, 255, 0.686)',fontSize:'0.9rem'}}> Specify your GitHub repository. </span>
            <div className='build-button'>

<button >  <Image alt='' src='/github.png' height={15} width={15}/> Install the GridCloud app</button>
</div>
          </div> 

         <div className="repos-github">
          <div className="titulos-repo">
            <div className="build-button2">
              <span>
                {' '}
                <Image alt="" src="/github.png" height={15} width={15} />{' '}
                GridClient
              </span>
            </div>
            <div className="input-with-image2">
                    <input placeholder='Search '/>
                    <Image alt='' src='/searc.png' height={15} width={15}/>
                </div>
          </div>
          <div className='repo-git'>
          <Image alt="" src="/github.png" height={20} width={20} />
          <span> GridClient/repo-01</span>
          </div>
          <div className='repo-git'>
          <Image alt="" src="/github.png" height={20} width={20} />
          <span> GridClient/repo-02</span>
          </div>
          <div className='repo-git'>
          <Image alt="" src="/github.png" height={20} width={20} />
          <span> GridClient/repo-03</span>
          </div>
          <div className='repo-git'>
          <Image alt="" src="/github.png" height={20} width={20} />
          <span> GridClient/repo-04</span>
          </div>
        
        </div>
        <div className='repo-selected'>
          <div className='circle1' > </div>
          <h5> GitHub repository:</h5>
          <span> gridClient/repo-01</span>
          <p> Change </p>
        </div>
        <div className='repo-selected'>
          <div className='circle1' > </div>
          <h5> GitHub branch:</h5>
          <span> main</span>
          <p> Change </p>
        </div>
        <div className='repo-path' >

        <span> Specify your application root path.</span>
        <label> Application root path:</label>
          <input
          
            placeholder="./"
          />
        </div>

        <div className='buildpack-window'>
          <label>Build Method:</label>
          <select>
            <option>Buildpacks</option>
            <option>Opcion 2</option>
            <option>Opcion 3</option>
          </select>
          <label>Builder:</label>
          <select>
            <option>Buildpacks</option>
            <option>Opcion 2</option>
            <option>Opcion 3</option>
          </select>

          <div> Buildpacks:</div>
          <span> The following buildpacks were detected at your applications root path. You can also manually add, remove, or re-order buildpacks here</span>
          <div className='repo-build'>
          <Image alt="" src="/github.png" height={20} width={20} />
          <span> NodeJS</span>
          <Image style={{marginLeft:'auto'}} alt="" src="/delete3.png" height={16} width={16} />
          </div>
          
        </div>
        <button
          style={{ margin: 'auto', marginBottom: '30px' }}
          className="boton-continue"
          onClick={() => onNextStep()}>
          Continue
        </button>
      </div>

      
    </>
  );
};

export default DeployMethod;
