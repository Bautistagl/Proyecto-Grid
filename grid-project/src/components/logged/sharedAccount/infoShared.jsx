import Paginacion from '@/commons/Paginacion';
import React from 'react';

const InfoShared = () => {
  return (
    <div>
      <div>s</div>
      <Paginacion links="/profile" titulo="Billing" />
      <div className="infoShared-container">
        <div className="infoShared-titulo"> Shared Account</div>

        <div className="infoShared-permisos">
          <div className="container-shared">
            <div className="infoShared-titulo-container">
              {' '}
              <img
                className="infoShared-iconoPrincipal"
                src="/authorization.png"
              />{' '}
              Asic Hosting{' '}
            </div>
            <div
              className="infoShared-renglones-permisos"
              style={{
                borderEndStartRadius: '30px',
                borderEndEndRadius: '30px',
              }}>
              <div className="span2-permisos-shared">
                {' '}
                Elige esta opción si cuentas con una persona que crea o
                administra tu hosting web. Cuando concedas el acceso a tu
                cuenta, se enviará un correo electrónico de confirmación a la
                dirección de correo electrónico proporcionada a continuación.
              </div>
              {/* <button className="button-shared"> Habilitar </button> */}
              <input className="input-shared" placeholder="Escriba el email" />
            </div>
          </div>
          <div className="container-shared">
            <div className="infoShared-titulo-container">
              {' '}
              <img
                className="infoShared-iconoPrincipal"
                src="/authorization.png"
              />{' '}
              Web Hosting{' '}
            </div>
            <div
              className="infoShared-renglones-permisos"
              style={{
                borderEndStartRadius: '30px',
                borderEndEndRadius: '30px',
              }}>
              <div className="span2-permisos-shared">
                {' '}
                Elige esta opción si cuentas con una persona que crea o
                administra tu hosting web. Cuando concedas el acceso a tu
                cuenta, se enviará un correo electrónico de confirmación a la
                dirección de correo electrónico proporcionada a continuación.
              </div>
              {/* <button className="button-shared"> Habilitar </button> */}
              <input className="input-shared" placeholder="Escriba el email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoShared;
