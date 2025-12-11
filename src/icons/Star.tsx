import React from 'react';

interface StarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Star
 * @description Automatically generated SVG icon component for Star.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE1LjQ0IDcuNzUgMTIgMiA4LjU2IDcuNzUxbC02LjUzNiAxLjUgNC40MSA1LjA0NS0uNTk4IDYuNjc0TDEyIDE4LjM0bDYuMTY2IDIuNjMyLS41OTgtNi42NzUgNC40MDctNS4wNDV6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Star: React.FC<StarProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="round" stroke-width="2" d="M15.44 7.75 12 2 8.56 7.751l-6.536 1.5 4.41 5.045-.598 6.674L12 18.34l6.166 2.632-.598-6.675 4.407-5.045z"/></svg>
);

export default Star;
