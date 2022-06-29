import './LeftSidebar.css';

import React, { useState } from 'react';
import { Divider, Paper } from '@mui/material';


import Pizza from './img/pizza.svg';
import Sets from './img/sets.svg';
import Wok from './img/wok.svg';
import Roll from './img/roll.svg';
import Suchi from './img/suchi.svg';
import Salat from './img/salat.svg';
import Sup from './img/sup.svg';
import Korn from './img/korn.svg';
import Napitok from './img/napitok.svg';
import Acc from './img/acc.svg';

import Logo from './Logo';

import ListMenu from './ListMenu';

function LeftSidebar() {
    const [menu, setMenu] = useState([
        {id: 1, title: 'Пицца', href: '/pizza', img: Pizza},
        {id: 2, title: 'Сеты', href: '/set', img: Sets},
        {id: 3, title: 'WOK', href: '/wok', img: Wok},
        {id: 4, title: 'Роллы', href: '/roll', img: Roll},
        {id: 5, title: 'Суши', href: '/suchi', img: Suchi},
        {id: 6, title: 'Салаты', href: '/salat', img: Salat},
        {id: 7, title: 'Супы', href: '/sup', img: Sup},
        {id: 8, title: 'Корн доги', href: '/korn', img: Korn},
        {id: 9, title: 'Напитки', href: '/napitok', img: Napitok},
        {id: 10, title: 'Акции', href: '/acc', img: Acc},
    ]);
  return (
    <div className="leftSidebar">
        <Paper sx={{boxShadow: 'none', maxWidth: 180}} >
            <Logo title="Romsem" />
            <Divider sx={{margin: '30px 0'}} />
            <ListMenu menu={menu} />
        </Paper>
    </div>
  );
}

export default LeftSidebar;
