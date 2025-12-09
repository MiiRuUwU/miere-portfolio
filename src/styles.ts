export const fadeIn = {
    animation: 'fadeIn 1.5s ease forwards',
    opacity: 0,
  };
  
  export const slideIn = {
    animation: 'slideIn 1s ease forwards',
    transform: 'translateY(20px)',
    opacity: 0,
  };
  
  export const hoverGlow = {
    transition: '0.3s',
  };
  
  export const keyframes = `
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes rocketFly {
    0% { transform: translateY(100px) rotate(0deg); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-50px) rotate(360deg); opacity: 0; }
  }
  `;
  