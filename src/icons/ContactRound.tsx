import React from 'react';

interface ContactRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name ContactRound
 * @description Automatically generated SVG icon component for ContactRound.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNiAydjJtMS45MTUgMThhNiA2IDAgMSAwLTEyIDBNOCAydjJtOCA4YTQgNCAwIDEgMS04IDAgNCA0IDAgMCAxIDggMFpNMyA0aDE4djE4SDN6Ii8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const ContactRound: React.FC<ContactRoundProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M16 2v2m1.915 18a6 6 0 1 0-12 0M8 2v2m8 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM3 4h18v18H3z"/></svg>
);

export default ContactRound;
