import React from 'react';

interface FileLockProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileLock
 * @description Automatically generated SVG icon component for FileLock.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNCAySDR2Nm0xMC02aDFsNSA1djFtLTYtNnY2aDZtMCAwdjE0aC00TTQgMTdIM3Y1aDd2LTVIOW0tNSAwaDVtLTUgMHYtMmEyIDIgMCAwIDEgMi0yaDFhMiAyIDAgMCAxIDIgMnYyIi8+PC9zdmc+)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileLock: React.FC<FileLockProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M14 2H4v6m10-6h1l5 5v1m-6-6v6h6m0 0v14h-4M4 17H3v5h7v-5H9m-5 0h5m-5 0v-2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"/></svg>
);

export default FileLock;
