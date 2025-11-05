import React from 'react';

/**
 * @component
 * @name Dashboard
 * @description Automatically generated SVG icon component for Dashboard.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface DashboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-width="2" d="M14 3v5h7V3zM14 12v9h7v-9zM3 16v5h7v-5zM3 3v9h7V3z"/></svg>
);

export default Dashboard;
