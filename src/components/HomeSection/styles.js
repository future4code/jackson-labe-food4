import styled from "styled-components";

// Div Externa
export const ExtDivCarousel = styled.div`
  width: 70vw;

  @media (max-width: 530px) {
    width: 100vw;
  }
`;

// Div interna que chama a rollagem com scroll
export const DivItem = styled.div`
  display: flex;
  overflow-x: auto;
  height: 60vh;
  scroll-snap-type: x mandatory;
  --webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: #f4f4f4;
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: none;
  }

  @media (max-width: 530px) {
    height: 10vh;
  }
`;

export const MediumTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
`;

// Espaço interno para ajustar o title e o content
export const InsideDiv = styled.div`
  flex: none;
  background-color: white;
  width: 100%;
  scroll-snap-align: start;
  pointer-events: none;
  padding-left: 2rem;
  padding-top: 2rem;
`;

export const InsideDivScroll = styled.div`
  flex: none;
  width: 10%;
  scroll-snap-align: start;
  pointer-events: none;
  padding-left: 6rem;
  padding-top: 4rem;
`;

// Body que ajuda o carrosel
export const Body = styled.div`
  display: grid;
  justify-items: center;
  height: auto;
`;

// Div para ajustar conteúdos
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
`;
