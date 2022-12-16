import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  CloseBtn,
  IframeStyled,
  ModalBox,
  Overlay,
} from './ModalTrailer.styled';
import { GrClose } from 'react-icons/gr';

const modalRoot = document.querySelector('#modal-root');

export const ModalTrailer = ({ onClose, video }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <CloseBtn onClick={onClose}>
          <GrClose size={24} />
        </CloseBtn>
        <IframeStyled
          loading="lazy"
          width={800}
          height={500}
          src={video}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></IframeStyled>
      </ModalBox>
    </Overlay>,

    modalRoot
  );
};

ModalTrailer.propTypes = {
  onClose: PropTypes.func.isRequired,
  video: PropTypes.string,
};
