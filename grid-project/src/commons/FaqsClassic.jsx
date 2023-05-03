import React, { useState, useEffect } from 'react';

const FaqsClassic = ({ pregunta, respuesta, setExpandedCount }) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    if (selected) {
      setExpandedCount(prevCount => prevCount - 1);
      setSelected(false);
    } else {
      setExpandedCount(prevCount => prevCount + 1);
      setSelected(true);
    }
  };

  useEffect(() => {
    const updateBackgroundHeight = () => {
      const backgroundHeight = setExpandedCount * 100; // Ajusta el valor según tus necesidades
      document.body.style.height = `${backgroundHeight}vh`;
    };

    // Actualizar el background según el número de items expandidos
    updateBackgroundHeight();

    // Restaurar el background al desmontar el componente
    return () => {
      document.body.style.height = '';
    };
  }, [setExpandedCount]);

  return (
    <>
      <div className='accordion2'>
        <div className={selected ? 'item show' : 'item'}>
          <div className={selected ? 'title show' : 'title'} onClick={toggle}>
            <h2>{pregunta}</h2>
            <span>{selected ? '▲' : '▼'}</span>
          </div>
          <div className={selected ? 'content show' : 'content'}>{respuesta}</div>
        </div>
      </div>
    </>
  );
};

export default FaqsClassic;