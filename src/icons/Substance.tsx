import React from 'react';
import BigChevronDown from './BigChevronDown';
import BigChevronLeft from './BigChevronLeft';
import BigChevronRight from './BigChevronRight';
import BigChevronUp from './BigChevronUp';
import { IconName } from './types';

/**
 * @component
 * @name Substance
 * @description Universal icon component that renders any icon by name.
 * @param {object} props - Component props.
 * @param {IconName} props.name - The name of the icon to render.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element | null} JSX element representing the SVG icon.
 */

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const Substance: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  ...props
}) => {
  const icons: Record<string, React.ComponentType<any>> = { BigChevronDown, BigChevronLeft, BigChevronRight, BigChevronUp };
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Substance;
