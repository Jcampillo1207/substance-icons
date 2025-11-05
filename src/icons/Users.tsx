import React from 'react';

interface UsersProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Users
 * @description Automatically generated SVG icon component for Users.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOCAyMWE4IDggMCAwIDAtOC04bTAgMGE4IDggMCAwIDAtOCA4bTgtOGE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMFptMTIgN2MwLTMuMzctMi02LjUtNC04YTUgNSAwIDAgMC0uNDUtOC4zIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Users: React.FC<UsersProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M18 21a8 8 0 0 0-8-8m0 0a8 8 0 0 0-8 8m8-8a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm12 7c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
);

export default Users;
