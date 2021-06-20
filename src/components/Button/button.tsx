import React from "react";
import cx from "classnames";

const BTN_SIZE = {
  Large: "lg",
  Small: "sm",
} as const;

const BTN_TYPE = {
  Primary: "primary",
  Default: "default",
  Danger: "danger",
  Link: "link",
} as const;
type TBtn = "primary" | "default" | "danger" | "link";

interface IButtonProps {
  className?: string;
  size?: typeof BTN_SIZE[keyof typeof BTN_SIZE];
  disabled?: boolean;
  btnType?: TBtn;
  url?: string;
}

type TNativeButtonProps = Partial<React.ButtonHTMLAttributes<HTMLElement>> &
  IButtonProps;

type TNativeAnchorProps = Partial<React.AnchorHTMLAttributes<HTMLElement>> &
  IButtonProps;

export type TButtonProps = TNativeButtonProps & TNativeAnchorProps;

const Button: React.FC<TButtonProps> = (props) => {
  const {
    size,
    disabled = false,
    className,
    children,
    btnType = BTN_TYPE.Default,
    url,
    ...restProps
  } = props;

  const isLink = btnType === "link";

  const classes = cx("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    "btn-disabled": isLink && disabled,
  });

  return isLink ? (
    <a className={classes} href={url || ""} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
