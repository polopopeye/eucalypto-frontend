import React, { useState } from "react";
import Select, { Option } from "rc-select";

const MultipleSelect = (props: {
  children: Array<object>;
  setVariant: any;
  variant: any;
}) => {
  const { children, setVariant, variant } = props;

  const randomClassName =
    Math.floor(Math.random() * 100000000) + 1 + "className";

  const handleOnblur = () => {
    if (document) {
      if (
        document.getElementsByClassName(randomClassName) &&
        document.getElementsByClassName(randomClassName).item(0)
      ) {
        const ele = document
          .getElementsByClassName(randomClassName)
          .item(0)! as any;
        ele.style.display = "none";
      }
    }
  };

  const handleOnfocus = () => {
    if (document) {
      if (
        document.getElementsByClassName(randomClassName) &&
        document.getElementsByClassName(randomClassName).item(0)
      ) {
        const ele = document
          .getElementsByClassName(randomClassName)
          .item(0)! as any;
        ele.style.display = "block";
      }
    }
  };

  return (
    <Select
      animation="slide-up"
      autoClearSearchValue={true}
      filterOption={true}
      className=" h-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md "
      autoFocus={false}
      mode="multiple"
      allowClear
      showArrow={true}
      optionFilterProp="children"
      optionLabelProp="children"
      tokenSeparators={[" ", ","]}
      onBlur={() => {
        handleOnblur();
      }}
      onFocus={() => {
        handleOnfocus();
      }}
      onChange={(value: any) => {
        setVariant(value);
      }}
      value={variant}
      dropdownClassName={randomClassName}
    >
      {children &&
        children.map((child: any) => {
          return (
            <Option key={child.value} value={child.value}>
              {child.label}
            </Option>
          );
        })}
    </Select>
  );
};

export default MultipleSelect;
