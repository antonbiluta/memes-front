import styled from 'styled-components';

const SettingsMenu = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 60px;
  right: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  transition: opacity 0.3s ease;
`;

export default SettingsMenu;