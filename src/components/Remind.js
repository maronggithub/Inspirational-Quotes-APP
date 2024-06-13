import React, { useState, useEffect } from 'react';

function Remind() {
    const [text,setText] = useState('');
    const textArr = ['What a good new day','You have done well!','Have a break!','Tomorrow is another good day'];
    

    useEffect(() => {
        const updateText = () => {
        const now = new Date();
        const hours = now.getHours();
        let index;
        if (hours >=0 && hours < 8) {
            index = 0;
        } else if (hours >= 8 && hours < 16) {
            index = 1;
        } else if (hours >= 16 && hours < 20) {
            index = 2;
        } else {
            index = 3;
        }
        setText(textArr[index]);
        }
        // Update text immediately on mount
        updateText();
        const intervalId = setInterval(updateText, 60 * 60 * 1000);
        //clear interval on unmount
        return () => clearInterval(intervalId);
    },[]);


return (
    <div id='remind' className='remind'>
        <p className='reimnd-text' id='remind-text'>{text}</p>
    </div>
)
}

export default Remind
