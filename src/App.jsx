import React, { useEffect, useState } from 'react';
import Accordion from './Components/Accordion/Accordion';
import AccordionItem from './Components/AccordionItem/AccordionItem';
import './App.css';

const App = () => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    fetch('/db/db.json')
      .then(response => response.json())
      .then(data => setAccordionData(data))
      .catch(error => console.error('Error fetching accordion data:', error));
  }, []);


  return (
    <div className="App">
      <span className='heading'>Interactive Accordion</span>
      <Accordion mode="multipleOpen">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} header={<h3>{item.header}</h3>}>
            <p>{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default App;
