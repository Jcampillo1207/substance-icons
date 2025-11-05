import React from 'react';
import BigChevronDown from './BigChevronDown';
import BigChevronDownDashed from './BigChevronDownDashed';
import BigChevronLeft from './BigChevronLeft';
import BigChevronLeftDashed from './BigChevronLeftDashed';
import BigChevronRight from './BigChevronRight';
import BigChevronRightDashed from './BigChevronRightDashed';
import BigChevronUp from './BigChevronUp';
import BigChevronUpDashed from './BigChevronUpDashed';
import ChevronDown from './ChevronDown';
import ChevronDownDashed from './ChevronDownDashed';
import ChevronLeft from './ChevronLeft';
import ChevronLeftDashed from './ChevronLeftDashed';
import ChevronRight from './ChevronRight';
import ChevronRightDashed from './ChevronRightDashed';
import ChevronUp from './ChevronUp';
import ChevronUpDashed from './ChevronUpDashed';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import Dashboard5 from './Dashboard5';
import LayoutSidebarLeft from './LayoutSidebarLeft';
import LayoutSidebarRight from './LayoutSidebarRight';
import PanelLeft from './PanelLeft';
import PanelLeftClose from './PanelLeftClose';
import PanelLeftOpen from './PanelLeftOpen';
import PanelRight from './PanelRight';
import PanelRightClose from './PanelRightClose';
import PanelRightOpen from './PanelRightOpen';
import Plus from './Plus';
import PlusDashed from './PlusDashed';
import Search from './Search';
import SearchDashed from './SearchDashed';
import X from './X';
import XDashed from './XDashed';
import { IconName } from './types';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

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

const Substance: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  ...props
}) => {
  const icons: Record<string, React.ComponentType<any>> = { BigChevronDown, BigChevronDownDashed, BigChevronLeft, BigChevronLeftDashed, BigChevronRight, BigChevronRightDashed, BigChevronUp, BigChevronUpDashed, ChevronDown, ChevronDownDashed, ChevronLeft, ChevronLeftDashed, ChevronRight, ChevronRightDashed, ChevronUp, ChevronUpDashed, Dashboard, Dashboard2, Dashboard3, Dashboard4, Dashboard5, LayoutSidebarLeft, LayoutSidebarRight, PanelLeft, PanelLeftClose, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightOpen, Plus, PlusDashed, Search, SearchDashed, X, XDashed };
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
