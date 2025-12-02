import React from 'react';

interface TicketPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name TicketPlus
 * @description Automatically generated SVG icon component for TicketPlus.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik05IDEyaDNtMyAwaC0zbTAgMHYzbTAtM1Y5TTIgOWEzIDMgMCAxIDEgMCA2djRoMjB2LTRhMyAzIDAgMCAxIDAtNlY1SDJ6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const TicketPlus: React.FC<TicketPlusProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M9 12h3m3 0h-3m0 0v3m0-3V9M2 9a3 3 0 1 1 0 6v4h20v-4a3 3 0 0 1 0-6V5H2z"/></svg>
);

export default TicketPlus;
