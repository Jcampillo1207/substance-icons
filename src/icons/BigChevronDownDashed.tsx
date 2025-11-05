import React from 'react';

/**
 * @component
 * @name BigChevronDownDashed
 * @description Automatically generated SVG icon component for BigChevronDownDashed.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

interface BigChevronDownDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

const BigChevronDownDashed: React.FC<BigChevronDownDashedProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-dasharray="4 4" stroke-width="2" d="m4 8 8 8 8-8"/></svg>
);

export default BigChevronDownDashed;
