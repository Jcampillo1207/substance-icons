import React from 'react';

interface SendProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Send
 * @description Automatically generated SVG icon component for Send.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTIxIDMgMTAuOTE0IDEzLjA4NU0yMSAzIDIgOC45ODdsOC45MTQgNC4wOThNMjEgM2wtNS45ODcgMTktNC4xLTguOTE1Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const Send: React.FC<SendProps> = ({
  size = 24,
  color = "currentColor",
  className = "",
  style,
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M21 3 10.914 13.085M21 3 2 8.987l8.914 4.098M21 3l-5.987 19-4.1-8.915"/></g><defs><clipPath id="a"><path fill={color || "currentColor"} d="M0 0h24v24H0z"/></clipPath></defs></svg>
);

export default Send;
