import React from 'react';

interface FlagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Flag
 * @description Automatically generated SVG icon component for Flag.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00IDIyVjRjMC0xLjUgMi43MDItMiA0LTIgMyAwIDUgMiA3LjMzMyAyQzE4LjE2OSA0IDE5IDIgMjAgMnYxMmMtMS4wMzkuNzc5LTEuOTE5IDItNCAyLTMgMC01LTItOC0yLTEuNDc2IDAtMi40LjAxNi0zLjUgMSIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Flag: React.FC<FlagProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M4 22V4c0-1.5 2.702-2 4-2 3 0 5 2 7.333 2C18.169 4 19 2 20 2v12c-1.039.779-1.919 2-4 2-3 0-5-2-8-2-1.476 0-2.4.016-3.5 1"/></svg>
);

export default Flag;
