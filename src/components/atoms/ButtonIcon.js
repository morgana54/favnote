import styled from 'styled-components';

// const Background = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 200px;
//   height: 200px;
//   background: ${({ theme }) => theme.primary};
// `;

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

// const ButtonIcon = () => {
//     return (<Background><Icon /></Background>)
// }

export default ButtonIcon;
