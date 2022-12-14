import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FlexGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SearchCard=styled.div`
width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 20px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    .Rectangle {
      box-sizing: border-box;

      position: absolute;
      width: 216px;
      height: 275px;
      left: 443px;
      top: 187px;

      background: #FFFFFF;
      border: 1px solid rgba(87, 86, 100, 0.2);
      border-radius: 8px;
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

//Navigation Styling
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
`;

export const LinkStyled = styled(Link)`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;

//Title
export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;

export const Box = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1200px;
  height: 130px;
  left: 100px;
  top: 190px;

  background: white;
`;

export const Box1 = styled.div`width: 300px;
height: 100%;
margin: 0 15px 40px;


  .Rectangle {
    box-sizing: border-box;

    position: absolute;
    width: 216px;
    height: 275px;
    left: 443px;
    top: 150px;

    background: #FFFFFF;
    border: 1px solid rgba(87, 86, 100, 0.2);
    border-radius: 8px;
  }
  table{
    border-collapse: separate;
    border-spacing: 60px 0;
  }
  td{
    padding:10px0;
  }

h3 {
  margin: 20px 0;
  font-size: 21px;
}

p {
  margin: 5;
}

`;

export const CardListBox=styled.div`
box-sizing: border-box;

position: absolute;
width: 509px;
height: 351px;
left: 697px;
top: 516px;

background: #FFFFFF;
border: 1px solid rgba(87, 86, 100, 0.2);
border-radius: 8px;
`;

export const AddCard=styled.div`
box-sizing: border-box;

position: absolute;
width: 430px;
height: 464px;
left: 160px;
top: 516px;

background: #FFFFFF;
border: 1px solid rgba(87, 86, 100, 0.2);
border-radius: 8px;
`;

export const Pg=styled.div`
body {
  background-color: #111;
}

.js-type-writer {
  font-size: 18px;
  font-family: sans-serif;
  color: blue;
  text-transform: uppercase;
  text-align: center;
}

.js-type-writer > span {
  border-right: .05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

`;

