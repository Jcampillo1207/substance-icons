import React from 'react';

interface PenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Pen
 * @description Automatically generated SVG icon component for Pen.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIyIDQuODE5YzAgLjc0Ny0uMjk3IDEuNDY0LS44MjYgMS45OTNMNy44MjcgMjAuMTYxIDIgMjJsMS44NDItNS44MjZMMTcuMTg4IDIuODI1QTIuODE5IDIuODE5IDAgMCAxIDIyIDQuODE5Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Pen: React.FC<PenProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4.819c0 .747-.297 1.464-.826 1.993L7.827 20.161 2 22l1.842-5.826L17.188 2.825A2.819 2.819 0 0 1 22 4.819"/></svg>
);

export default Pen;
