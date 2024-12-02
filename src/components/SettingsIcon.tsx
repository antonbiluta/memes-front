import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';

const SettingsIcon = styled(FiSettings)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

export default SettingsIcon;