
import React from 'react'

const Footer = () => {
  return (
    <div className='fondo-footer'>

      <section className='container-footer'>
        <div className='columnas'> 
         <div className='columna-principal'>
            <div className='footer-titulo-principal'> 
              GRID MINE
            </div>
                    <div className='footer-parrafo'>
                    Flux is a decentralized Web3 cloud infrastructure comprised of user-operated, scalable and globally distributed computational nodes.
                      </div>
                      <div className='redes-footer'>
              <a href='//www.linkedin.com'>
              <img style={{marginLeft:'0px'}} className='icon-redes' src={"/linkedin.png"}/>
              </a>
            
              <a href='//www.discord.com'>
                <img className='icon-redes' src={"/discord (1).png"}/>
              </a>

              <a href='//www.twitter.com'>
                <img className='icon-redes' src={"/twitter-sign.png"}/>    
              </a>
              <a href='//www.instragram.com'>
                <img className='icon-redes' src={"/instagram.png"}/>
              </a>
           </div>
           <button style={{marginTop:'30px',backgroundColor: '#36B079'}}> Contact us! </button>
           <button style={{marginTop:'30px',backgroundColor: '#36B079'}} > Support Center</button>

         </div>
      
         
         <div className='columna'> 
            <div className='footer-titulo'>
              ECOSYSTEM
            </div>
            <ul>
               <li>FluxOS </li>
               <li>Apps</li>
               <li>FluxNodes </li>
               <li>Flux </li>
               <li> Parallel Mining</li>
            </ul>
         </div>
         <div className='columna'> 
            <div className='footer-titulo'>
               DISCOVER
            </div>
            <ul>
              <li>FluxLabs </li>
              <li> Carbon Neutrality</li>
              <li> Whitepaper</li>
              <li>Roadmap</li>
             <li>Team</li>
            </ul>
         </div>
         <div className='columna'> 
           <div className='footer-titulo'>
              EXPLORE
           </div>
            <ul>
             <li>Terms of service </li>
             <li> Privacy policy</li>
            </ul>
         </div>
         <div  className='columna'> 
            <div className='footer-titulo'>
              COMMUNITY
            </div>
            <ul>
              <li>Blog </li>
             <li> Github</li>
             <li>Brand Assets </li>
              <li>Careers </li>
             <li> Bug bounty</li>
            </ul>
          </div>
      
        </div>
        <div className='licencias-footer'>
        © 2023 Grid Mine |
        <span> <a href='#'> Políticas de Privacidad  </a> </span> |
        <span> <a href='#'> Términos y condiciones  </a></span>
        </div>
    </section>
    </div>
  )
}

export default Footer

