import React from 'react';

interface BuildingsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Buildings
 * @description Automatically generated SVG icon component for Buildings.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIgMjBIMXYyaDF2LTJtMjAgMmgxdi0yaC0xdjJtLTEtMTJoMVY5aC0xem0tNi04aDFhMSAxIDAgMCAwLTEuMzg1LS45MjN6TTMgN2wtLjM4NS0uOTIzTDIgNi4zMzNWN3ptMyAxMHYxaDJ2LTFINm0yLTJ2LTFINnYxaDJtLTItM3YxaDJ2LTFINm0yLTJWOUg2djFoMm0yIDd2MWgydi0xaC0ybTItMnYtMWgtMnYxaDJtLTItM3YxaDJ2LTFoLTJtMi0yVjloLTJ2MWgybTkgMTF2MWgxdi0yaC0xem0wIDBoMVYxMGgtMnYxMXptMC0xMVY5aC02djJoNnptLTYgMTF2MWg2di0yaC02em0wLTExaC0xdjExaDJWMTB6bTAgMGgxVjJoLTJ2OHptMC04LS4zODUtLjkyMy0xMiA1TDMgN2wuMzg1LjkyMyAxMi01ek0yIDIxdjFoMXYtMkgyem0xIDB2MWgxMnYtMkgzek0zIDdIMnYxNGgyVjd6bTQgMTBoMXYtMkg2djJ6bTAtNWgxdi0ySDZ2MnptNCA1aDF2LTJoLTJ2MnptMC01aDF2LTJoLTJ2MnoiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Buildings: React.FC<BuildingsProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} d="M2 20H1v2h1v-2m20 2h1v-2h-1v2m-1-12h1V9h-1zm-6-8h1a1 1 0 0 0-1.385-.923zM3 7l-.385-.923L2 6.333V7zm3 10v1h2v-1H6m2-2v-1H6v1h2m-2-3v1h2v-1H6m2-2V9H6v1h2m2 7v1h2v-1h-2m2-2v-1h-2v1h2m-2-3v1h2v-1h-2m2-2V9h-2v1h2m9 11v1h1v-2h-1zm0 0h1V10h-2v11zm0-11V9h-6v2h6zm-6 11v1h6v-2h-6zm0-11h-1v11h2V10zm0 0h1V2h-2v8zm0-8-.385-.923-12 5L3 7l.385.923 12-5zM2 21v1h1v-2H2zm1 0v1h12v-2H3zM3 7H2v14h2V7zm4 10h1v-2H6v2zm0-5h1v-2H6v2zm4 5h1v-2h-2v2zm0-5h1v-2h-2v2z"/></svg>
);

export default Buildings;
