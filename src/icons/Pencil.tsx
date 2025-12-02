import React from 'react';

interface PencilProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Pencil
 * @description Automatically generated SVG icon component for Pencil.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0ibTE0IDYuMDE0IDMuMTg4LTMuMTg5YTIuODE5IDIuODE5IDAgMSAxIDMuOTg2IDMuOTg3TDE3Ljk4NiAxME0xNCA2LjAxNCAzLjg0MiAxNi4xNzQgMiAyMmw1LjgyNy0xLjgzOSAxMC4xNi0xMC4xNk0xNCA2LjAxMyAxNy45ODYgMTAiLz48L3N2Zz4=)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Pencil: React.FC<PencilProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 6.014 3.188-3.189a2.819 2.819 0 1 1 3.986 3.987L17.986 10M14 6.014 3.842 16.174 2 22l5.827-1.839 10.16-10.16M14 6.013 17.986 10"/></svg>
);

export default Pencil;
