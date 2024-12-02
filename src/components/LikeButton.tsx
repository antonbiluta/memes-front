import styled from 'styled-components';

const LikeButton = styled.button`
    background: #ff4081;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
    transition: all 0.3s ease;
    border-radius: 4px;

    &:hover {
        background: #e91e63;
    }
`;

export default LikeButton;
