import React from 'react';

interface UserPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name UserPlus
 * @description Automatically generated SVG icon component for UserPlus.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yIDIxYTggOCAwIDAgMSAxMy4yOTItNk0xOSAxNnY2bTMtM2gtNk0xNSA4QTUgNSAwIDEgMSA1IDhhNSA1IDAgMCAxIDEwIDBaIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const UserPlus: React.FC<UserPlusProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M2 21a8 8 0 0 1 13.292-6M19 16v6m3-3h-6M15 8A5 5 0 1 1 5 8a5 5 0 0 1 10 0Z"/></svg>
);

export default UserPlus;
