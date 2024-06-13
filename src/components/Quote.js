import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

function Quote() {
  const [quote, setQuote] = useState('');
  const fetchQuote = async () => {
      try{
        const response = await fetch('/quotes.json');
        if (!response.ok) {
          setQuote("The servers are too tired to shut down today.");
          return;
        }
        const data = await response.json();
        if(data.length > 0) {
          console.log('data', data);
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuote(data[randomIndex].q);
        }
    } catch (error) {
          setQuote("The server is too tired to work today");
    }
    };

  useEffect(() => {
    
    fetchQuote();
    const intervalFetch = setInterval(fetchQuote, 6 * 60 * 60 * 1000);
    return () => clearInterval(intervalFetch);
  },[]);

  return (
    <div id='quote' className='quote'>
      <p id="quote-text" className='quote-text'>{quote || 'Trying to figure out how to encourage you.....'}</p>
      <FontAwesomeIcon icon={faRetweet} className='refresh' onClick={fetchQuote}/>
    </div>
  );
}

export default Quote;
