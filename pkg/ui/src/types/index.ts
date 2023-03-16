export type AddressFieldProps = {
  address: string;
  icon?: React.ReactNode;
};

export type IdentityBadgeProps = {
  address?: string;
  isAccountConnected?: boolean;
  compact?: boolean;
  label?: string;
  networkType?: string;
  /**
   * @defaultValue `true`
   */
  shorten?: boolean;
  disabled?: boolean;
  popoverAction?: {
    label: React.ReactNode;
    onClick: () => void;
  };
  /**
   * @defaultValue `Address`
   */
  popoverTitle?: React.ReactNode;
  labelStyle?: React.CSSProperties;
};

export type BlockieProps = {
  address: string;

  /**
   * @defaultValue 1
   */
  scale?: number;

  /**
   * @defaultValue `none`
   */
  radius?: string;

  /**
   * @defaultValue 0.3
   */
  opacity?: number;
};

export type TokenBadgeProps = {
  symbol: string;
  name?: string;
  address?: string;
  compact?: boolean;
  /**
   * @defaultValue main
   */
  networkType?: string;
  disabled?: boolean;
  labelStyle?: React.CSSProperties;
};

export type TransactionBadgeProps = {
  transaction: string;
  disabled?: boolean;
  /**
   * @defaultValue main
   */
  networkType?: string;
  /**
   * @defaultValue true
   */
  shorten?: boolean;
};

export type TextCopyProps = {
  value: string;
  adornment?: React.ReactNode;
  monospace?: boolean;
};
