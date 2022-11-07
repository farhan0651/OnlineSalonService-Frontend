import styled from 'styled-components'

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
    border-radius: 40px;
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