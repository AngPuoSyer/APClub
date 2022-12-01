export type MenuContext = {
  label: string;
  icon?: string;
  to?: string;
  command?: () => void;
  url?: string;
  items?: MenuContext[];
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  separator?: boolean;
  style?: any;
  class?: string;
  key?: any;
};
