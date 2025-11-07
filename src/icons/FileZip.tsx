import React from 'react';

interface FileZipProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name FileZip
 * @description Automatically generated SVG icon component for FileZip.
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMyAySDR2MjBoNm0zLTIwaDJsNSA1djJtLTctN3Y3aDdtMCAwdjEzSDEwbTAgMHYtNG0wLTZ2Mm0wIDRoMm0tMiAwSDhtMiAwdi00bTAgMGgybS0yIDBIOCIvPjwvc3ZnPg==)
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const FileZip: React.FC<FileZipProps> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  <svg
    className={`${className}`}
    width={size}
    height={size} fill="none" viewBox="0 0 24 24"><path stroke={color || "currentColor"} stroke-linecap="square" stroke-width="2" d="M13 2H4v20h6m3-20h2l5 5v2m-7-7v7h7m0 0v13H10m0 0v-4m0-6v2m0 4h2m-2 0H8m2 0v-4m0 0h2m-2 0H8"/></svg>
);

export default FileZip;
