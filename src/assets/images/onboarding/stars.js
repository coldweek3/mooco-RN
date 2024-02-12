import React from "react";
import { SvgXml } from "react-native-svg";

const logo = `
<svg width="317" height="274" viewBox="0 0 317 274" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M197.546 68.986C199.004 63.553 206.713 63.553 208.17 68.986L208.93 71.8183C219.735 112.091 251.24 143.518 291.54 154.224L294.543 155.022C299.994 156.47 299.994 164.205 294.543 165.653L291.54 166.451C251.24 177.156 219.736 208.583 208.93 248.856L208.17 251.688C206.713 257.121 199.004 257.121 197.546 251.688L196.786 248.856C185.981 208.584 154.476 177.156 114.177 166.451L111.174 165.653C105.723 164.205 105.723 156.47 111.174 155.022L114.177 154.224C154.476 143.518 185.981 112.091 196.786 71.8183L197.546 68.986Z" fill="#F1F3F4" stroke="black"/>
<path d="M129.53 21.7284C130.988 16.2954 138.697 16.2954 140.154 21.7283L140.825 24.228C151.63 64.5006 183.135 95.9277 223.435 106.633L226.104 107.342C231.555 108.79 231.555 116.526 226.104 117.974L223.435 118.683C183.135 129.388 151.63 160.815 140.825 201.088L140.154 203.588C138.697 209.021 130.988 209.021 129.53 203.588L128.86 201.088C118.054 160.815 86.5493 129.388 46.25 118.683L43.5804 117.974C38.1299 116.526 38.1299 108.79 43.5804 107.342L46.25 106.633C86.5493 95.9276 118.054 64.5007 128.86 24.228L129.53 21.7284Z" stroke="black"/>
<path d="M223.039 18.2013C223.207 16.561 225.601 16.561 225.769 18.2013C226.562 25.9286 232.683 32.0467 240.413 32.8188C242.053 32.9825 242.053 35.3718 240.413 35.5355C232.683 36.3076 226.562 42.4257 225.769 50.153C225.601 51.7932 223.207 51.7933 223.039 50.153C222.246 42.4257 216.125 36.3076 208.395 35.5355C206.755 35.3718 206.755 32.9825 208.395 32.8188C216.125 32.0467 222.246 25.9286 223.039 18.2013Z" fill="#F1F3F4" stroke="black"/>
<path d="M20.9878 67.5422C21.0665 66.7807 22.1795 66.7807 22.2582 67.5422C22.7527 72.3235 26.5438 76.1121 31.3289 76.5863C32.0883 76.6615 32.0883 77.7686 31.3289 77.8438C26.5438 78.3179 22.7527 82.1066 22.2582 86.8879C22.1795 87.6494 21.0665 87.6494 20.9878 86.8879C20.4933 82.1066 16.7022 78.3179 11.9171 77.8438C11.1577 77.7686 11.1577 76.6615 11.9171 76.5863C16.7022 76.1121 20.4933 72.3235 20.9878 67.5422Z" fill="#F1F3F4" stroke="black"/>
</svg>
`;

const svg = () => {
  const StarsSvg = () => <SvgXml xml={logo} width="90%" height="50%" />;
  return <StarsSvg />;
};

export default svg;