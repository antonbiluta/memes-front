import styled from 'styled-components';

const ToggleButton = styled.button`
  background: #0066cc;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background: #005bb5;
  }
`;

export default ToggleButton;
