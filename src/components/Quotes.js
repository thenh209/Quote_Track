import React, { useState, useEffect } from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import quotes from '../Quotesdata.json';
const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('#f2f2f2');
  const [isCopied, setIsCopied] = useState(false);
  const lightColors = ['#f2f2f2', '#e6f2ff', '#f2e6ff', '#f2ffe6', '#fff2e6', '#e6fff2','#dbeee0','#fabfe4','#c4adc9','#fffee4','#f8f6d8','#faf0db','#ede9ad','#ededb7'];

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let dataQuotes = quotes;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * lightColors.length);
    setBgColor(lightColors[randomNum]);
    getQuote();
    const reactions = document.querySelectorAll('.reaction');
    reactions.forEach(reaction => {
    reaction.classList.remove('selected');
  });
  };

  const handleTwitterClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${quote} - ${author}`
    )}`;
    window.open(twitterUrl);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const reactions = document.querySelectorAll('.reaction');

reactions.forEach(reaction => {
  reaction.addEventListener('click', () => {
    reactions.forEach(otherReaction => {
      otherReaction.classList.remove('selected');
    });
    reaction.classList.add('selected');
  });
});


  return (
    <>
    <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
    <div id="quote-box" style={{ backgroundColor: bgColor }}>
      <div id="text">
        <p>{quote}</p>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>

      <div id="buttons">
        <button onClick={handleTwitterClick} id="tweet-quote">
          <FontAwesomeIcon icon={faTwitterSquare}  size="3x" />
        </button>
        {!isCopied && (
          <button onClick={handleCopyClick} id="copy-quote">
            <FontAwesomeIcon icon={faCopy} className="icon" size="2x"/>
          </button>
        )}
        {isCopied && <p style={{paddingRight:"200px",fontFamily:"monospace",fontSize:"1.3em"}}>✓ Copied!</p>}
        <button onClick={handleClick} id="new-quote" >
          New Quote
        </button>
      </div>
    </div>
    <div class="reaction-container">
  <div class="reaction" id="like-reaction">
    <span class="emoji">&#128077;</span>
  </div>
  
  <div class="reaction" id="love-reaction">
    <span class="emoji">&#128525;</span>
  </div>
  
  <div class="reaction" id="wow-reaction">
    <span class="emoji">&#128562;</span>
  </div>
  
  <div class="reaction" id="sad-reaction">
    <span class="emoji">&#128577;</span>
  </div>
</div>

    </>
  );
};
export default Quotes;
