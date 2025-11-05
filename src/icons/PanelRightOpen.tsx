import React from 'react';

interface PanelRightOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name PanelRightOpen
 * @description Automatically generated SVG icon component for PanelRightOpen.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @param {string} [props.base64] - Base64 representation: data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNSAyMWg2VjNoLTZtMCAxOEgzVjNoMTJtMCAxOFYzbS00LjUgMTItMy0zIDMtMyIvPjwvc3ZnPg==
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const PanelRightOpen: React.FC<PanelRightOpenProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-width="2" d="M15 21h6V3h-6m0 18H3V3h12m0 18V3m-4.5 12-3-3 3-3"/></svg>
);

export default PanelRightOpen;
