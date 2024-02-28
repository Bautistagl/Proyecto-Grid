import Image from 'next/image';
import React from 'react';

const DeployMethod = ({ onNextStep }) => {
  return (
    <>
      <Image
        style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
        alt=""
        width={25}
        height={25}
        src="/dot.png"
      />
      <div className="deployMethod-container">
        <h3>Select a deployment method</h3>
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
          <span
            style={{ color: 'rgba(255, 255, 255, 0.686)', fontSize: '0.9rem' }}>
            {' '}
            Specify your GitHub repository.{' '}
          </span>
          <div className="build-button">
            <button>
              {' '}
              <Image alt="" src="/github.png" height={15} width={15} /> Install
              the GridCloud app
            </button>
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
              <input placeholder="Search " />
              <Image alt="" src="/searc.png" height={15} width={15} />
            </div>
          </div>
          <div className="repo-git">
            <Image alt="" src="/github.png" height={20} width={20} />
            <span> GridClient/repo-01</span>
          </div>
          <div className="repo-git">
            <Image alt="" src="/github.png" height={20} width={20} />
            <span> GridClient/repo-02</span>
          </div>
          <div className="repo-git">
            <Image alt="" src="/github.png" height={20} width={20} />
            <span> GridClient/repo-03</span>
          </div>
          <div className="repo-git">
            <Image alt="" src="/github.png" height={20} width={20} />
            <span> GridClient/repo-04</span>
          </div>
        </div>
        <div className="repo-selected">
          <div className="circle1"> </div>
          <h5> GitHub repository:</h5>
          <span> gridClient/repo-01</span>
          <p> Change </p>
        </div>
        <div className="repo-selected">
          <div className="circle1"> </div>
          <h5> GitHub branch:</h5>
          <span> main</span>
          <p> Change </p>
        </div>
        <div className="repo-path">
          <span> Specify your application root path.</span>
          <label> Application root path:</label>
          <input placeholder="./" />
        </div>

        <div className="buildpack-window">
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
          <span>
            {' '}
            The following buildpacks were detected at your applications root
            path. You can also manually add, remove, or re-order buildpacks here
          </span>
          <div className="repo-build">
            <Image alt="" src="/github.png" height={20} width={20} />
            <span> NodeJS</span>
            <Image
              style={{ marginLeft: 'auto' }}
              alt=""
              src="/delete3.png"
              height={14}
              width={14}
            />
          </div>
          <button> +Add buildpacks</button>
        </div>
        <div className="card">
          <h2> Buildpack Configuration</h2>
          <label> Selected buildpacks:</label>
          <div className="repo-build">
            <Image alt="" src="/node-js.png" height={20} width={20} />
            <span> NodeJS</span>
            <Image
              style={{ marginLeft: 'auto' }}
              alt=""
              src="/plus2.png"
              height={14}
              width={14}
            />
          </div>

          <label>Available buildpacks:</label>
          <div className="repo-build">
            <Image alt="" src="/node-js.png" height={20} width={20} />
            <span> NodeJS</span>
            <Image
              style={{ marginLeft: 'auto' }}
              alt=""
              src="/plus2.png"
              height={14}
              width={14}
            />
          </div>
          <div className="repo-build">
            <Image alt="" src="/node-js.png" height={20} width={20} />
            <span> NodeJS</span>
            <Image
              style={{ marginLeft: 'auto' }}
              alt=""
              src="/plus2.png"
              height={14}
              width={14}
            />
          </div>
          <div className="repo-build">
            <Image alt="" src="/node-js.png" height={20} width={20} />
            <span> NodeJS</span>
            <Image
              style={{ marginLeft: 'auto' }}
              alt=""
              src="/plus2.png"
              height={14}
              width={14}
            />
          </div>

          <label> Custom buildpacks</label>
          <span>
            {' '}
            You may also add buildpacks by directly providing their GitHub links
            or links to ZIP files that contain the buildpack source code.
          </span>
          <label> GitHub or ZIP URL : </label>
          <div>
            <input />
            <button className="boton-config"> + </button>
          </div>
          <button> Done</button>
        </div>


        <div>
        <h3>Image settings</h3>
        <span>Specify your image URL</span>
        <div className="input-with-image3">
              <input placeholder="Search images " />
              <Image alt="" src="/searc.png" height={15} width={15} />
            </div>
            <div className='no-docker'>
              <div style={{opacity:'0'}}>.</div>
              <p style={{marginTop:'30px',marginBottom:'15px'}}>No linked images found</p>
              <p style={{marginBottom:'30px'}}> Configure linked image registries, or provide the URL of a public image (e.g. "nginx") to continue.</p>
              <div style={{opacity:'0'}}>.</div>
            </div>
            <div className="repo-git2">
            <Image alt="" src="/plus2.png" height={10} width={10} />
            <span> Use image URL: 'prueba'</span>
          </div>
        <div className="repo-selected">
          <div className="circle1"> </div>
          <h5> Image URL:</h5>
          <span> prueba</span>
          <p> Change </p>
        </div>
        <span >Specify your image tag</span>
        <div className="input-with-image3">
              <input placeholder="Search tags " />
              <Image alt="" src="/searc.png" height={15} width={15} />
            </div>
            <div className='no-docker'>
            <div style={{opacity:'0'}}>.</div>
              <p style={{marginTop:'30px',marginBottom:'30px'}}>Please specify a tag.</p>
              <div style={{opacity:'0'}}>.</div>
            </div>
            <div className="repo-git2">
            <Image alt="" src="/plus2.png" height={10} width={10} />
            <span> Use tag: 'prueba'</span>
          </div>
            <div className="repo-selected">
          <div className="circle1"> </div>
          <h5> Image tag:</h5>
          <span> prueba</span>
          <p> Change </p>
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
