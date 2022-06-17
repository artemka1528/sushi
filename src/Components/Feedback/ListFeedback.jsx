import React from 'react';

import styled from "@emotion/styled";

import { Grid } from '@mui/material';

function ListFeedback({list}) {
    const StyledFeed = styled(Grid)(({theme}) => ({
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        padding: 10,
        gap: 20,
    }))
    const StyledFeedTitle = styled(Grid)(({theme}) => ({
        color: "#111111",
        fontSize: 24,
    }))
    const StyledFeedTime = styled(Grid)(({theme}) => ({
        color: "#A4ACAD;",
        fontSize: 18,
        alignSelf: 'center'
    }))
    const StyledFeedText = styled(Grid)(({theme}) => ({
        color: "#000000;",
        fontSize: 18,
        maxWidth: "770px !important",
    }))

    const listFeedback = list.map((item, index) => (
        <StyledFeed key={index} container>
            <StyledFeedTitle item xs='auto'>{item.name}</StyledFeedTitle>
            <StyledFeedTime item xs={2}>{item.time}</StyledFeedTime>
            <StyledFeedText item xs={12}>{item.text}</StyledFeedText>
        </StyledFeed>
    ));
    return (
        <div>
            {listFeedback}
        </div>
    );
}

export default ListFeedback;