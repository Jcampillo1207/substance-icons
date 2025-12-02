import React from 'react';

interface HashtagProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Hashtag
 * @description Automatically generated SVG icon component for Hashtag.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik00IDloNS4zMzNtMCAwaDZtLTYgMEwxMCAzbS0uNjY3IDYtLjY2NiA2bTYuNjY2LTZIMjBtLTQuNjY3IDBMMTYgM20tLjY2NyA2LS42NjYgNk00IDE1aDQuNjY3bTAgMGg2bS02IDBMOCAyMW02LjY2Ny02SDIwbS01LjMzMyAwTDE0IDIxIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Hashtag: React.FC<HashtagProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M4 9h5.333m0 0h6m-6 0L10 3m-.667 6-.666 6m6.666-6H20m-4.667 0L16 3m-.667 6-.666 6M4 15h4.667m0 0h6m-6 0L8 21m6.667-6H20m-5.333 0L14 21"/></svg>
);

export default Hashtag;
