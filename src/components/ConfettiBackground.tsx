// // components/ConfettiBackground.tsx
// import React, { useRef, useEffect } from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// interface ConfettiBackgroundProps {
//   isAnimated: boolean;
// }

// const ConfettiBackground: React.FC<ConfettiBackgroundProps> = ({ isAnimated }) => {

//   if (isAnimated) {
//     <div className='confetti-container visible'>
//         <DotLottieReact
//           src="/animations/HomeHeaderAnimation.lottie"
//           loop
//           autoplay={false}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             opacity: 0.6,
//             pointerEvents: 'none',
//           }}
//         />
//       </div>
//   }

//   return (
//     <>
//       {
//         isAnimated ? '' : ''
//       }
      
//     </>
//   );
// };

// export default ConfettiBackground;
