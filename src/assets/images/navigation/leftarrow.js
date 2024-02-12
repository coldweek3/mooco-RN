import React from "react";
import { SvgXml } from "react-native-svg";

const logo = `
<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03033 1.21459C9.2966 1.52524 9.3208 2.01135 9.10295 2.35389L9.03033 2.45203L2.561 9.99998L9.03033 17.5479C9.2966 17.8586 9.3208 18.3447 9.10295 18.6872L9.03033 18.7854C8.76406 19.096 8.3474 19.1242 8.05379 18.8701L7.96967 18.7854L0.96967 10.6187C0.703403 10.3081 0.679197 9.82195 0.897052 9.4794L0.96967 9.38126L7.96967 1.21459C8.26256 0.872886 8.73744 0.872886 9.03033 1.21459Z" fill="black"/>
</svg>
`;

const svg = () => {
  const LeftArrowSvg = () => <SvgXml xml={logo} width="18px" height="22px" />;
  return <LeftArrowSvg />;
};

export default svg;