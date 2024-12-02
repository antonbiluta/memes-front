import styled from 'styled-components';
import noiseBackground from "./animations.tsx";

const GlobalContainer = styled.div<{ theme: any }>`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    margin: 0;
    //background: linear-gradient(135deg, #f3f3f3, #c1c1c1, #e0e0e0);
    background-size: 400% 400%;
    animation: ${noiseBackground} 15s ease infinite;
`;

export default GlobalContainer;