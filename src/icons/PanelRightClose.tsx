import React from 'react';

/**
 * @component
 * @name PanelRightClose
 * @description Automatically generated SVG icon component for PanelRightClose.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface PanelRightCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const PanelRightClose: React.FC<PanelRightCloseProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-width="2" d="M15 21h6V3h-6m0 18H3V3h12m0 18V3M7.5 9l3 3-3 3"/></svg>
);

export default PanelRightClose;
