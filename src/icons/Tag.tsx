import React from 'react';

interface TagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Tag
 * @description Automatically generated SVG icon component for Tag.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTcuNSA4YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxWiIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Tag: React.FC<TagProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path fill={color || "currentColor"} stroke={color || "currentColor"} stroke-linecap="round" stroke-width="2" d="M7.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/></svg>
);

export default Tag;
