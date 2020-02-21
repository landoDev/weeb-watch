import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    background-color: #13366c;
    border: 5px solid  #2a504b;
    margin: 0 auto;
    width: 50%;
    h1, p{
        color: #298acd;
        font-family: 'Shojumaru' ;
        text-shadow: 2px 2px black;
    }
`;

export default function Header(){
    return(
        <HeaderDiv>
            <h1>Weeb Watch</h1>
            <p>Find your next binge</p>
        </HeaderDiv>
    )


}