import React from 'react';

interface KeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Key
 * @description Automatically generated SVG icon component for Key.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0xNCA3IDMgM20tNy42LjZMMiAxOHYybDIgMmgzdi0zbDIuNzA3LS4yOTMuNTg2LTIuNDE0IDIuNDUtMi40NW0wIDBMMTQuMiAxNS4zbDEuNyAxLjcgNS40LTUuNGEyLjUgMi41IDAgMCAwIDAtMy40bC01LjUtNS41YTIuNSAyLjUgMCAwIDAtMy40IDBMNyA4LjF6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Key: React.FC<KeyProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="m14 7 3 3m-7.6.6L2 18v2l2 2h3v-3l2.707-.293.586-2.414 2.45-2.45m0 0L14.2 15.3l1.7 1.7 5.4-5.4a2.5 2.5 0 0 0 0-3.4l-5.5-5.5a2.5 2.5 0 0 0-3.4 0L7 8.1z"/></svg>
);

export default Key;
