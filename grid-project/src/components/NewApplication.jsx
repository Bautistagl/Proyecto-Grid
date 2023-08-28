import Image from 'next/image';
import React, { useState } from 'react';
import ModalNewApp from './ModalNewApp';

const NewApplicationj = () => {
  const [selected, setSelected] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = (i) => {
    return setSelected(i);
  };
  return (
    <>
    <div style={{opacity:'0'}}>.</div>
      <div className="contenedor-newApp">
        <div className="contenedor-flex-only">
          <Image
            style={{ marginRight: '10px' }}
            alt=""
            src="/iconNewApp2.png"
            width={50}
            height={50}
          />
          <div className="div-newApp"> Deploy a new application</div>
        </div>
        <span className="span-newApp"> Application name </span>
        <span className="span-newApp2">
          {' '}
          Lowercase letters, numbers, and - only.{' '}
        </span>
        <input className="input-newApp" placeholder="ex: grid-project" />

        <span style={{ marginTop: '40px' }} className="span-newApp">
          {' '}
          Deployment Method{' '}
        </span>
        <span className="span-newApp2">
          {' '}
          Deploy from a Git repository or a Docker registry.{' '}
        </span>
        <div className="contenedor-flex-only">
          <div className="card-newApp">
            <Image
              className="icon-card-newApp"
              src="/iconGit.png"
              alt="/iconGit.png"
              height={50}
              width={50}
            />
            <span className="span-newApp"> Git repository </span>
            <span className="span-newApp2">
              {' '}
              Deploy using source from a Git repo.{' '}
            </span>
          </div>
          <div style={{ marginLeft: '30px' }} className="card-newApp">
            <Image
              className="icon-card-newApp"
              src="/iconDocker.webp"
              alt="/iconGit.png"
              height={50}
              width={50}
            />
            <span className="span-newApp"> Docker registry </span>
            <span className="span-newApp2">
              {' '}
              Deploy a container from an image registry.{' '}
            </span>
          </div>
        </div>
        <span style={{ marginTop: '40px' }} className="span-newApp">
          {' '}
          Application services{' '}
        </span>
        <button onClick={() => setModal(true)} className="button-newApp">
          {' '}
          + Add a new service{' '}
        </button>
        {modal ? (
          <div className="modal-newApp">
            <div className="contenedor-flex2">
              <h1> Add a new service </h1>
              <img
                onClick={() => {
                  setModal(false);
                }}
                style={{ cursor: 'pointer' }}
                alt=""
                src="/menuCerrado.png"
              />
            </div>
            <span>Select a service type:</span>
            <div className="contenedor-flex2">
              <select>
                <option> Web </option>
                <option> Worker</option>
                <option> Cron Job</option>
              </select>
            </div>
            <span>Name this service:</span>
            <input placeholder="ex:my-service" />
            <button
              onClick={() => {
                setModal(false);
              }}>
              {' '}
              + Add service{' '}
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="webCard-newApp">
          <div className="titulo-webCard">
            <div className="contenedor-flex-only">
              <img className="icon-webCard" alt="" src="/downNavbar.png" />
              <img className="icon-webCard" alt="" src="/web.png" />
              <span> web </span>
            </div>
          </div>
          <div className="opciones-webCard">
            <div
              style={{ marginLeft: '0px', width: '100%' }}
              className="contenedor-titulos-hosting-click-shared">
              <span
                className={`spanHosting-clickeable-shared${
                  selected === 0 ? 'focus' : ''
                }`}
                onClick={() => toggle(0)}>
                Main
              </span>
              <span
                className={`spanHosting-clickeable-shared${
                  selected === 1 ? 'focus' : ''
                }`}
                onClick={() => toggle(1)}>
                {' '}
                Resources
              </span>
              <span
                className={`spanHosting-clickeable-shared${
                  selected === 2 ? 'focus' : ''
                }`}
                onClick={() => toggle(2)}>
                {' '}
                Advanced
              </span>
            </div>
            <span
              style={{ display: 'flex', margin: '20px' }}
              className="span-newApp2">
              {' '}
              Start command{' '}
            </span>
            <input
              style={{ display: 'flex', margin: '20px' }}
              className="input-newApp"
              placeholder="npm start"
            />

            <span
              style={{ display: 'flex', margin: '20px' }}
              className="span-newApp2">
              {' '}
              Container port{' '}
            </span>
            <input
              style={{ display: 'flex', margin: '20px' }}
              className="input-newApp"
              placeholder="3000"
            />
          </div>
        </div>
          <span style={{ marginTop: '40px' }} className="span-newApp">
          {' '}
          Environment variables(optional){' '}
        </span>
        <span className="span-newApp2">
          {' '}
          Deploy from a Git repository or a Docker registry.{' '}
        </span>
        <button onClick={() => setModal(true)} className="button-newApp">
          {' '}
          + Add Row{' '}
        </button>

        <span style={{ marginTop: '40px' }} className="span-newApp">
          {' '}
         Pre-deploy job(optional){' '}
        </span>
        <span className="span-newApp2">
          {' '}
          If specified, this is a job that will be run before every deployment.{' '}
        </span>
        <button onClick={() => setModal(true)} className="button-newApp">
          {' '}
          + Add a new pre-deploy job{' '}
        </button>
        <button className='boton-deploy'> Deploy app</button>
      </div>
      <div style={{opacity:'0'}}>.</div>
    </>
  );
};

export default NewApplicationj;
