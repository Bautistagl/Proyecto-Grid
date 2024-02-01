import React, { useState } from 'react'

const ComponentSelector = () => {
    const continents = [
      
        { id: '1', name: 'Database' },
        { id: '2', name: 'Web' },
        { id: '3', name: 'Cronjob' },
      ];
    
      

      const [selections, setSelections] = useState([]);
      const [selectedContinent, setSelectedContinent] = useState(null);
      const [selectedGeneral, setSelectedGeneral] = useState(null)
      const [selectedResources, setSelectedResources] = useState(null)
      const [cpu, setCpu] = useState(null)
      const [ram, setRam] = useState(null)
      const [ssd, setSsd] = useState(null)
      const [name, setName] = useState(null)
      const [command, setCommand] = useState(null)

      const [database, setDatabase] = useState(null)
      const [port, setPort] = useState(null)
      const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    return setSelected(i);
  };
    
    
      const handleContinentChange = (event) => {
        const selectedContinentId = event.target.value;
        setSelectedContinent(selectedContinentId);
 
        
      };
      const [values, setValues] = useState({
        range1: 3,
        range2: 100,
        range3: 1,
      });

      const [values2, setValues2] = useState({
        range1: 3,
        range2: 100,
        range3: 1,
      });

      const [values3, setValues3] = useState({
        range1: 3,
        range2: 100,
        range3: 1,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        const delay = 200;
        setTimeout(() => {
          setValues({
            ...values,
            [name]: parseFloat(value),
          });
        }, delay);
      };

      const handleChange2 = (e) => {
        const { name, value } = e.target;
        const delay = 200;
        setTimeout(() => {
          setValues2({
            ...values2,
            [name]: parseFloat(value),
          });
        }, delay);
      };


      const handleChange3 = (e) => {
        const { name, value } = e.target;
        const delay = 200;
        setTimeout(() => {
          setValues3({
            ...values3,
            [name]: parseFloat(value),
          });
        }, delay);
      };
     
      
     
    
      const handleDatabaseChange = (event) => {
        setDatabase(event.target.value);
      };
      const handleGeneral = () => {

      }
      const handleResources = () => {

      }
      const handleAddSelection = () => {
        if (selectedContinent) {
          const newSelection = {
            continent: selectedContinent,
            name,
            database,
            cpu: values.range1,
            ram: values2.range1,
            ssd: values3.range1,
          };
      
          setSelections([...selections, newSelection]);
          setSelectedContinent(null);
          setName(null);
          setDatabase(null);
          setValues({ range1: 3, range2: 100, range3: 1 });
          setValues2({ range1: 3, range2: 100, range3: 1 });
          setValues3({ range1: 3, range2: 100, range3: 1 });
          setSelected(0);
        }
      };

    
      return (
        <>
        <div style={{display:'flex',width:'100%',margin:'auto'}}> 

          
          
            <div className='geolocation'>
            <h3>+ Add geolocation </h3>
            <label>Select a service type:</label>
            <select onChange={handleContinentChange} value={selectedContinent || ''}>
              <option value="" disabled>Select a service type</option>
              {continents.map(continent => (
                <option key={continent.id} value={continent.id}>{continent.name}</option>
              ))}
            </select>
            <label  > Name this service</label>
            <input value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Ex: my-service' />
    
            {selectedContinent && selectedContinent === '1' &&  (
              <div>
                <div className="contenedor-titulos-hosting-click-shared2">
            <span
              style={{ marginLeft: '42px' }}
              className={`spanHosting-clickeable-shared${
                selected === 0 ? 'focus' : ''
              }`}
              onClick={() => toggle(0)}>
              General
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
              {selected === 0 ? <>
                <select value={database} onChange={handleDatabaseChange}  >
            <option value='sql'>SQL</option>
            <option value='mongodb'>MongoDB</option>
            <option value='mysql'>MySQL</option>
            </select>

              </> : ''}

              {selected === 1 ? <>
                <div className="ranges">
              <label>CPU: {values.range1}</label>
              <input
                type="range"
                name="range1"
                min="3"
                max="100"
                step="1"
                value={values.range1}
                onChange={handleChange}
              />
            </div>
            <div className="ranges">
              <label>RAM: {values2.range1}</label>
              <input
                type="range"
                name="range1"
                min="100"
                max="1000"
                step="50"
                value={values2.range1}
                onChange={handleChange2}
              />
            </div>
            <div className="ranges">
              <label>SSD: {values3.range1}</label>
              <input
                type="range"
                name="range1"
                min="256"
                max="1024"
                step="256"
                value={values3.range1}
                onChange={handleChange3}
              />
            </div>

              </> : ''}
               
              </div>
            )}

{selectedContinent && selectedContinent === '2' &&  (
              <div>
                <div className="contenedor-titulos-hosting-click-shared2">
            <span
              style={{ marginLeft: '42px' }}
              className={`spanHosting-clickeable-shared${
                selected === 0 ? 'focus' : ''
              }`}
              onClick={() => toggle(0)}>
              General
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
              {selected === 0 ? <>
                <label  > Start Command</label>
            <input value={command} onChange={(e)=>setCommand(e.target.value)}  placeholder='Ex: npm start' />

            <label  > Container Port</label>
            <input value={port} onChange={(e)=>setPort(e.target.value)}  placeholder='Ex: 3000' />

              </> : ''}

              
               
              </div>
            )}






            <button onClick={handleAddSelection}>+</button>
          </div>
          <div className='geolocation3'>
            <h3>My Components </h3>

            {selections.map((selection, index) => (
              <div className='geolocation2' key={index}>
                <div>
                    {console.log(selection)}
                <div style={{display:'flex'}}>
                
                <p> {continents[(selection.continent)-1].name}: </p>
                <span> {selection.name}</span>
                </div>
                {/* <div className="ranges">
              <label>CPU: {selection.cpu}</label>
              <input
                type="range"
                name="range1"
                min="3"
                max="100"
                step="1"
              
              />
            </div>
            <div className="ranges">
              <label>RAM: {selection.ram}</label>
              <input
                type="range"
                name="range1"
                min="100"
                max="1000"
                step="50"
             
              />
            </div>
            <div className="ranges">
              <label>SSD: {selection.ssd}</label>
              <input
                type="range"
                name="range1"
                min="256"
                max="1024"
                step="256"
           
              />
            </div> */}

                {/* <div style={{display:'flex'}}>
                <p>Country: </p>
                <span>   {selection.country} </span>
                </div> */}
                </div>
                <button >-</button>
              </div>
            ))}
          </div>
        </div>


           
            
         
            

     

            
         
    
          
        </>
      );
    };

export default ComponentSelector