import React from 'react';

interface CircleDotDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name CircleDotDashed
 * @description Automatically generated SVG icon component for CircleDotDashed.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwLjEgMi4xOGE5LjkgOS45IDAgMCAxIDMuOCAwbTMuNyAxLjUzYTEwIDEwIDAgMCAxIDIuNjkgMi43bTEuNTMgMy42OWE5LjkgOS45IDAgMCAxIDAgMy44bS0xLjUzIDMuN2ExMCAxMCAwIDAgMS0yLjcgMi42OW0tMy42OSAxLjUzYTkuOSA5LjkgMCAwIDEtMy44IDBtLTMuNy0xLjUzYTEwIDEwIDAgMCAxLTIuNjktMi43TTIuMTggMTMuOWE5LjkgOS45IDAgMCAxIDAtMy44bTEuNTMtMy43YTEwIDEwIDAgMCAxIDIuNy0yLjY5TTEzIDEyYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const CircleDotDashed: React.FC<CircleDotDashedProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></g><defs><clipPath id="a"><path fill={color || "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default CircleDotDashed;
