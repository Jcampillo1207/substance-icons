import React from 'react';

interface MoonProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Moon
 * @description Automatically generated SVG icon component for Moon.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yIDEyQzIgNi40NzcgNi40NzcgMiAxMiAyYzAgMC00LjUgNS41IDAgMTBzMTAgMCAxMCAwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjMgMiAxMloiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Moon: React.FC<MoonProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M2 12C2 6.477 6.477 2 12 2c0 0-4.5 5.5 0 10s10 0 10 0c0 5.523-4.477 10-10 10S2 17.523 2 12Z"/></svg>
);

export default Moon;
