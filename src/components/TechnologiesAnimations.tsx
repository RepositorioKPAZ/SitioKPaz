
export const TechnologiesAnimations = () => (
  <style>{`
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    @keyframes scroll-right {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }
    
    .animate-scroll-left {
      animation: scroll-left 30s linear infinite;
    }
    
    .animate-scroll-right {
      animation: scroll-right 25s linear infinite;
    }
  `}</style>
);
