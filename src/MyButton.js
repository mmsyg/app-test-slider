import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const MyButton = () => {
  const buttonRef = useRef(null);
  const [showFinalSVG, setShowFinalSVG] = useState(false);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { duration: 0.5, scale: 1.2 });
    setShowFinalSVG(true);
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { duration: 0.5, scale: 1 });
    setShowFinalSVG(false);
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Twój SVG początkowy */}
      <svg width="211" height="210" viewBox="0 0 211 210" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_930)">
<ellipse cx="105.501" cy="105" rx="49.9006" ry="50" fill="url(#paint0_linear_0_930)"/>
<path d="M105.501 157.5C134.446 157.5 157.902 133.99 157.902 105C157.902 76.0097 134.446 52.5 105.501 52.5C76.5563 52.5 53.1004 76.0097 53.1004 105C53.1004 133.99 76.5563 157.5 105.501 157.5Z" stroke="white" stroke-width="5"/>
</g>
<defs>
<filter id="filter0_d_0_930" x="0.600403" y="0" width="209.801" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_930"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_930" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_930" x1="91.5" y1="136.5" x2="157.955" y2="43.2234" gradientUnits="userSpaceOnUse">
<stop stop-color="#A4A4A4"/>
<stop offset="1" stop-color="#F2F0F0"/>
</linearGradient>
</defs>
</svg>


      {showFinalSVG && (
        // SVG końcowy (wyświetlany po najechaniu myszką)
        <svg width="211" height="210" viewBox="0 0 211 210" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_936)">
<ellipse cx="105.501" cy="105" rx="49.9006" ry="50" fill="url(#paint0_linear_0_936)"/>
<path d="M105.501 157.5C134.446 157.5 157.902 133.99 157.902 105C157.902 76.0097 134.446 52.5 105.501 52.5C76.5562 52.5 53.1003 76.0097 53.1003 105C53.1003 133.99 76.5562 157.5 105.501 157.5Z" stroke="white" stroke-width="5"/>
</g>
<defs>
<filter id="filter0_d_0_936" x="0.600342" y="0" width="209.801" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_936"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_936" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_936" x1="55.6003" y1="105" x2="152.413" y2="122.011" gradientUnits="userSpaceOnUse">
<stop stop-color="#5EE6D6"/>
<stop offset="1" stop-color="#149DA5"/>
</linearGradient>
</defs>
</svg>

      )}
    </button>
  );
};

export default MyButton;






