import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try{
        const response = await fetch('https://zenquotes.io/api/random');
        if (!response.ok) {
          setQuote("The servers are too tired to shut down today.");
        }
        const data = await response.json();
        if(data.length > 0) {
           setQuote(data[0].h);
        }
     } catch (error) {
          setQuote("The server is too tired to work today");
     }
    };
    fetchQuote();
  },[]);

  return (
    <div id='quote' className='quote'>
      <p>{quote || 'Trying to figure out how to encourage you.....'}</p>
    </div>
  );
}

export default Quote;
