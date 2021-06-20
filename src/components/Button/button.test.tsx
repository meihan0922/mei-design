import React from "react";
import Button, { TButtonProps } from "./button";
import { render, fireEvent } from "@testing-library/react";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: TButtonProps = {
  btnType: "primary",
  size: "lg",
  className: "testClass",
};

const testDisabledProps: TButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test button component", () => {
  it("應該渲染對的預設按鈕", () => {
    const txt = "Nice";
    const wrapper = render(<Button {...defaultProps}>{txt}</Button>);
    const ele = wrapper.getByText(txt) as HTMLButtonElement;
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).toHaveClass("btn btn-default");
    expect(ele.disabled).toBeFalsy();
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("應該根據不同的props渲染對的組建", () => {
    const txt = "Nice";
    const wrapper = render(<Button {...testProps}>{txt}</Button>);
    const ele = wrapper.getByText(txt);
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveClass("btn-primary btn-lg testClass");
  });
  it("應該渲染a標籤，當btnType是link且herf有值的時候", () => {
    const txt = "Link";
    const wrapper = render(
      <Button btnType="link" href="www.goole.com">
        {txt}
      </Button>
    );
    const ele = wrapper.getByText(txt);
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("A");
    expect(ele).toHaveClass("btn-link");
  });
  it("應該渲染disabled按鈕，當disabled是true", () => {
    const txt = "disabled";
    const wrapper = render(<Button {...testDisabledProps}>{txt}</Button>);
    const ele = wrapper.getByText(txt) as HTMLButtonElement;
    expect(ele).toBeInTheDocument();
    expect(ele.disabled).toBeTruthy();
    fireEvent.click(ele);
    expect(testDisabledProps.onClick).not.toHaveBeenCalled();
  });
});
