import React from 'react';

interface TicketsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Tickets
 * @description Automatically generated SVG icon component for Tickets.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00LjUgOEgydjEzaDRNNC41IDggMTYgMmwyIDZNNC41IDhINm0xMiAwaDR2MTNINk0xOCA4SDZtMCAwdjJtMCAzdjNtMCA1di0yIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Tickets: React.FC<TicketsProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M4.5 8H2v13h4M4.5 8 16 2l2 6M4.5 8H6m12 0h4v13H6M18 8H6m0 0v2m0 3v3m0 5v-2"/></svg>
);

export default Tickets;
