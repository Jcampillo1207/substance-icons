import React from 'react';

interface PaperClipProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name PaperClip
 * @description Automatically generated SVG icon component for PaperClip.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xNiA2LTguNDE0IDguNTg2YTIgMiAwIDEgMCAyLjgyOSAyLjgyOWw4LjQxNC04LjU4NmE0IDQgMCAxIDAtNS42NTctNS42NTdsLTguMzc5IDguNTUxYTYgNiAwIDEgMCA4LjQ4NSA4LjQ4NWw4LjM3OS04LjU1MSIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const PaperClip: React.FC<PaperClipProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="m16 6-8.414 8.586a2 2 0 1 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
);

export default PaperClip;
