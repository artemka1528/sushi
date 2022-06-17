import React, { useState } from 'react';

import { TextField, Button } from '@mui/material';
import { unstable_HistoryRouter } from 'react-router-dom';

function AddFormFeedback({create, isOpen}) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    function handleName (event) {
        setName(event.target.value);
    };
    function handleText (event) {
        setText(event.target.value);
    }
    function addFeedback () {
        const newFeedBack = {
            name: name,
            text: text,
            time: new Date().toLocaleDateString(),
        }
        if(name && text) {
            create(newFeedBack, false);
            setName('');
            setText('');
        } else {
        } 
        
        
        // useList([...props.list, newFeedBack])
    }
    if(isOpen) {
        return (
            <div>
                <TextField onChange={handleName} value={name} placeholder='твое имя'></TextField>
                <TextField onChange={handleText} value={text} placeholder='Отзыв'></TextField>
                <Button onClick={addFeedback}>Отправить</Button>
            </div>
        );
    }
}

export default AddFormFeedback;