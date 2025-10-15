import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundLogin from '../../assets/background1.svg';
import Background from '../../assets/background2.svg';

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
;
`

export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img {
    width: 70%
}
`

export const RigthContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

background: url('${Background}');
background-size: cover;
background-color: #1e1e1e;

p {
color: #fff;
font-size: 15px;
font-weight: 800;
    a {
text-decoration: underline;
color: #A4CB23;
    }
}
`


export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
font-weight: 400;
line-height: 40px;
text-align: center;
color: #fff;

span {
font-family: "Road Rage", sans-serif;
color: ${(props) => props.theme.purple};
}


`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;

`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    padding: 0 15px;
    &:hover { 
    border: 1px  #A4CB23 dashed;
}
}

label {
    font-size: 15px;
    font-weight: 600;
    color: #A4CB23;

}

p {
    font-size: 13px;
    line-height: 80%;
    color: #A4CB23;
    font-weight: 600;
    height: 10px;
}
`

export const Link = styled(ReactLink)`

`;