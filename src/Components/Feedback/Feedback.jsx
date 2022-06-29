import React, { useState, useEffect } from 'react';

import { Grid,Typography,Button,TextField } from '@mui/material';

import ListFeedback from './ListFeedback';
import AddFormFeedback from './AddFormFeedback';



const Feedback = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        async function getSet() {
          let response = await fetch('http://localhost:3001/feedback');
          let set = await response.json();
          setList(set);
        };
        getSet()
      }, [])
    const [openInput, setOpenInput] = useState(false);
    function addFormFeedback() {
        setOpenInput(true);
    };
    const createPost = (newPost, isOpen) => {
        console.log(newPost);
        setList([newPost, ...list]);
        setOpenInput(isOpen);
    }

   
    

    return (
        <div>
            <Grid sx={{padding: '60px 30px 0 30px'}} container justifyContent="space-between">
                <Grid item xs={8}>
                    <Typography variant='h4'>Отзывы</Typography>
                </Grid>
                <Grid item xs='auto'>
                    <Button sx={{color: '#ffffff'}} color='darkColor' onClick={addFormFeedback} variant='contained'>+ Добавить отзыв</Button>
                </Grid>
                <Grid item xs={12}>
                    <AddFormFeedback create={createPost} isOpen={openInput}/>
                </Grid>
                <Grid item xs={12}>
                    <ListFeedback list={list}></ListFeedback>
                </Grid>
            </Grid>
        </div>
    );
};

export default Feedback;