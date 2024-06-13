import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try{
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
        if (!response.ok) {
          setQuote("The servers are too tired to shut down today.");
          return;
        }
        const data = await response.json();
        console.log(data);
        if(data.length > 0) {
          setQuote(data[0].q);
        }
    } catch (error) {
          setQuote("The server is too tired to work today");
    }
    };
    fetchQuote();
  },[]);

  return (
    <div id='quote' className='quote'>
      <p id="quote-text" className='quote-text'>{quote || 'Trying to figure out how to encourage you.....'}</p>
      <FontAwesomeIcon icon={faRetweet} className='refresh' />
    </div>
  );
}

export default Quote;
