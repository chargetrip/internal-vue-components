// SideNav
export interface NavItem {
  title: string;
  url?: string;
  click?: () => void;
  to?: string;
  soon?: boolean;
  icon?: string;
  dynamicIcon?: boolean;
  arrow?: boolean;
  target?: string;
  href?: string;
}
