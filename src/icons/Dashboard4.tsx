import React from 'react';

/**
 * @component
 * @name Dashboard4
 * @description Automatically generated SVG icon component for Dashboard4.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface Dashboard4Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const Dashboard4: React.FC<Dashboard4Props> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-width="2" d="M10 14H3v7h7zM21 14h-7v7h7zM21 3H3v7h18z"/></svg>
);

export default Dashboard4;
