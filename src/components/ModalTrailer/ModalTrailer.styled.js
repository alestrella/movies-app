import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(28, 28, 28, 0.19);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-timing-function: ease-out;
  animation-duration: 0.3s;
  animation-name: modal-video;
  transition: opacity 0.3s ease-out;
  z-index: 10;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  box-shadow: 10px 10px 15px 2px ${p => p.theme.colors.bgBtn};
  border-radius: ${p => p.theme.radii.middle};
  background: transparent;
  color: #000;
  margin: 0 auto;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.hoverBtn};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.middle};

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const IframeStyled = styled.iframe`
  border-radius: ${p => p.theme.radii.middle};
  z-index: 10;
`;
