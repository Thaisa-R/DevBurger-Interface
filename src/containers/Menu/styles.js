import styled from "styled-components";
import BannerHamburger from "../../assets/banner-hamburger.svg";
import Background from "../../assets/background2.svg";
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;
background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6)
), 
url('${Background}');


`

export const Banner = styled.div`
background: url('${BannerHamburger}') no-repeat;
width: 100%;
height: 480px;
display: flex;
justify-content: center;
align-items: center;
background-color: #1f1f1f;
background-size: cover;
background-position: center;
position: relative;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    position: absolute;
    color: #fff;
    right: 20%;
    top: 30%;


span {
    display: block;
    color: #fff;
    font-size: 20px;
}
}
`
export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color: ${(props) => 
  props.$isActiveCategory ? props.theme.purple : '#38a802'};
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
border: none;
border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}}`};
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 60px;
margin: 50px auto 0;
`

export const BackButton = styled(Link)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 25px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 500;
  margin-right: 15px;
  padding-bottom: 5px;
  line-height: 20px;
  text-decoration: none;
 



  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
