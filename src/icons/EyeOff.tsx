import React from 'react';

interface EyeOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name EyeOff
 * @description Automatically generated SVG icon component for EyeOff.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xNSAxOC0uNzIyLTMuMjVNMiA4YTEwLjY0NSAxMC42NDUgMCAwIDAgMjAgMG0tMiA3LTEuNjY4LTIuMDkyTTQgMTVsMS42NDUtMi4xMU05IDE4bC43MjItMy4yNSIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const EyeOff: React.FC<EyeOffProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7-1.668-2.092M4 15l1.645-2.11M9 18l.722-3.25"/></svg>
);

export default EyeOff;
