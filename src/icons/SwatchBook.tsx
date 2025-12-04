import React from 'react';

interface SwatchBookProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name SwatchBook
 * @description Automatically generated SVG icon component for SwatchBook.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik03IDIxYTQgNCAwIDAgMCA0LTRWOE03IDIxYTQgNCAwIDAgMS00LTRWM2g4djVNNyAyMWgxNHYtOGgtNC4zMjZNNyAxN2guMDFtMi44OSAyLjggNi43NzQtNi44bTAgMCAzLjY1Ni0zLjY3TDE1IDRsLTQgNCIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const SwatchBook: React.FC<SwatchBookProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M7 21a4 4 0 0 0 4-4V8M7 21a4 4 0 0 1-4-4V3h8v5M7 21h14v-8h-4.326M7 17h.01m2.89 2.8 6.774-6.8m0 0 3.656-3.67L15 4l-4 4"/></svg>
);

export default SwatchBook;
