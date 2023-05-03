import React, { useState } from 'react';

const FaqsAsic2 = () => {
  const [expanded, setExpanded] = useState([]);

  const handleQuestionClick = (index) => {
    // Si la pregunta ya está expandida, la contraemos
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      // Si la pregunta no está expandida, la expandimos
      setExpanded([...expanded, index]);
    }
  };

  return (
    <div>
      <div className="titulo-faqs2">Frequently Asked Questions</div>
      <div className="todos-faqs2-container">
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(0)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(0) && <span>Respuesta 1</span>}
        </div>
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(1)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(1) && <span>Respuesta 2</span>}
        </div>
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(2)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(2) && <span>Respuesta 3</span>}
        </div>
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(3)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(3) && <span>Respuesta 4</span>}
        </div>
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(4)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(4) && <span>Respuesta 5</span>}
        </div>
        <div className="asic-faqs2-textos">
          <h1 onClick={() => handleQuestionClick(5)}>
            <img src="/faqs2.png" alt="" /> What is ASIC hosting?
          </h1>
          {expanded.includes(5) && <span>Respuesta 6</span>}
        </div>
      </div>
    </div>
  );
};

export default FaqsAsic2;