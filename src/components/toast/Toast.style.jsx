import styled from "styled-components";

const ToastContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToastItem = styled.div`
  background-color: var(--lightest-navy);
  color: var(--lightest-slate);
  border-radius: 5px;
  padding: 5px 0 5px 20px;
  width: 20%;
  position: relative;
  animation-name: slideIn;
  animation-duration: 0.6s;

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export { ToastContainer, ToastItem };
