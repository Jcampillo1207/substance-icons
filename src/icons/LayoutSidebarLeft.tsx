import React from 'react';

interface LayoutSidebarLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name LayoutSidebarLeft
 * @description Automatically generated SVG icon component for LayoutSidebarLeft.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @param {string} [props.base64] - Base64 representation: data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zIDl2MTJoNk0zIDlWM2gxOHY2TTMgOWg2bTEyIDB2MTJIOU0yMSA5SDltMCAwdjEyIi8+PC9zdmc+
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const LayoutSidebarLeft: React.FC<LayoutSidebarLeftProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-width="2" d="M3 9v12h6M3 9V3h18v6M3 9h6m12 0v12H9M21 9H9m0 0v12"/></svg>
);

export default LayoutSidebarLeft;
