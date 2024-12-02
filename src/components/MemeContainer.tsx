import styled from 'styled-components';

const MemeContainer = styled.div`
    width: auto;
    height: 80vh;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: #f5f5f5;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
`;

export default MemeContainer;
