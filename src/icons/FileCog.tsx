import React from 'react';

interface FileCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileCog
 * @description Automatically generated SVG icon component for FileCog.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNCAySDR2Nm0xMC02aDFsNSA1djFtLTYtNnY2aDZtMCAwdjE0aC00Ii8+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Im0zLjAwMSAxOC44MzQuOTIzLS4zODJtMC0yLjI5NkwzIDE1Ljc3M20yLjU0OC0xLjI0MS0uMzgzLS45MjNtLjM4MyA2LjQ2N0w1LjE2NSAyMW0yLjY3OS02LjQ2OC4zODMtLjkyM004LjIyNiAyMWwtLjM4Mi0uOTI0bTEuNjI1LTMuOTIuOTIyLS4zODNtLS45MjIgMi42NzkuOTIyLjM4M20tLjY5NS0xLjUzMWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBaIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileCog: React.FC<FileCogProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M14 2H4v6m10-6h1l5 5v1m-6-6v6h6m0 0v14h-4"/><path stroke={color || "currentColor"} stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="m3.001 18.834.923-.382m0-2.296L3 15.773m2.548-1.241-.383-.923m.383 6.467L5.165 21m2.679-6.468.383-.923M8.226 21l-.382-.924m1.625-3.92.922-.383m-.922 2.679.922.383m-.695-1.531a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
);

export default FileCog;
