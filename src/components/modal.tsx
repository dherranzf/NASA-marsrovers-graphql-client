import React from "react";
import styled from "@emotion/styled";
import { FaInfoCircle } from "react-icons/fa";

interface ModalProps {
  message: React.ReactNode;
  icon?: "info";
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, icon, onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        {icon === "info" && <Icon><FaInfoCircle size={24} /></Icon>}
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Continue</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

/** Styled Components */
const Overlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

const ModalContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.secondary,
  color: theme.text,
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  maxWidth: "400px",
  width: "90%",
}));

const Icon = styled.div(({ theme }) => ({
  color: theme.accent,
  marginBottom: "10px",
}));

const Message = styled.div({
  marginBottom: "20px",
  fontSize: "1em",
  lineHeight: "1.5",
});

const CloseButton = styled.button(({ theme }) => ({
  padding: "10px 20px",
  borderRadius: "30px",
  border: "none",
  backgroundColor: theme.accent,
  color: "#fff",
  fontSize: "1em",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
}));
