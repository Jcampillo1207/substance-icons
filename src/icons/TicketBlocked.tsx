import React from 'react';

interface TicketBlockedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name TicketBlocked
 * @description Automatically generated SVG icon component for TicketBlocked.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMiA5VjVIMnY0YTMgMyAwIDEgMSAwIDZ2NGg3bTctMmgybS0zIDVoNGwzLTN2LTRsLTMtM2gtNGwtMyAzdjR6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const TicketBlocked: React.FC<TicketBlockedProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M22 9V5H2v4a3 3 0 1 1 0 6v4h7m7-2h2m-3 5h4l3-3v-4l-3-3h-4l-3 3v4z"/></svg>
);

export default TicketBlocked;
