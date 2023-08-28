import React, { useState } from 'react';

const ButtonsLanding = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="contenedor-mobile-button">
      <div className="titulo-asic"> Best features</div>
      <div style={{ marginTop: '10px' }} className="contenedor-flex-only3">
        <div className="button-landing">
          <div className="contenedor-features">
            <span
              onClick={() => setSelected(0)}
              className={
                selected === 0 ? 'span-landing-selected' : 'span-landing'
              }>
              {' '}
              No experience{' '}
            </span>
            <div className={selected === 0 ? 'linea-selected' : 'linea'}> </div>
          </div>

          <div className="contenedor-features">
            <span
              onClick={() => setSelected(1)}
              className={
                selected === 1 ? 'span-landing-selected' : 'span-landing'
              }>
              {' '}
              Organize and Upscale{' '}
            </span>
            <div className={selected === 1 ? 'linea-selected' : 'linea'}> </div>
          </div>

          <div className="contenedor-features">
            <span
              onClick={() => setSelected(2)}
              className={
                selected === 2 ? 'span-landing-selected' : 'span-landing'
              }>
              {' '}
              Low cost infrastructure{' '}
            </span>
            <div className={selected === 2 ? 'linea-selected' : 'linea'}> </div>
          </div>
        </div>
        {selected === 0 ? (
          <div className="parrafo-features-landing">
            Discover the freedom of having a website without the need for
            expertise or DevOps. With Grid, we handle everything, streamlining
            both transitions. Even if you're unfamiliar with new decentralized
            technologies, we make web hosting stress-free and accessible for
            everyone, offering a straightforward and dependable experience in
            the realm of decentralization.
          </div>
        ) : (
          ''
        )}
        {selected === 1 ? (
          <div className="parrafo-features-landing">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            possimus animi sit recusandae, deleniti magni repudiandae corrupti,
            veritatis rerum id officia, dicta eius! Dolore consequatur facilis
            architecto unde enim! Doloribus.
          </div>
        ) : (
          ''
        )}
        {selected === 2 ? (
          <div className="parrafo-features-landing">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
            nemo alias hic soluta dolorem unde odio expedita tenetur, quos
            excepturi illo ex ducimus quas necessitatibus pariatur. Accusantium,
            reprehenderit ratione.
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ButtonsLanding;
