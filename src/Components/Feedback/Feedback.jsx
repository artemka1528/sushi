import React, { useState } from 'react';

import { Grid,Typography,Button,TextField } from '@mui/material';

import ListFeedback from './ListFeedback';
import AddFormFeedback from './AddFormFeedback';



const Feedback = () => {
    const [list, setList] = useState([
        {name:'Розалия', time: '02.24.21', text: 'Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне'},
        {name:'Елена', time: '02.23.21', text: 'Ооочень вкусно!!!!!'},
        {name:'Сергей Гаврилюк', time: '02.23.21', text: 'Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )'},
    ]);
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
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant='h4'>Отзывы</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={addFormFeedback} variant='contained'>+ Добавить отзыв</Button>
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