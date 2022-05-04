import React from 'react';
import Select, { Option } from 'rc-select';

const MultipleSelect = (props: {
  children: Array<object>;
  setVariant: any;
  variant: any;
}) => {
  const { children, setVariant, variant } = props;

  const randomClassName = Object.keys({ variant })[0] + 'className';

  console.log(
    '🚀 ~ file: MultipleSelect.tsx ~ line 12 ~ randomClassName',
    randomClassName
  );
  const handleOnblur = () => {
    if (document) {
      if (
        document.getElementsByClassName(randomClassName) &&
        document.getElementsByClassName(randomClassName).item(0)
      ) {
        const ele = document
          .getElementsByClassName(randomClassName)
          .item(0)! as any;

        ele.style.display = 'none';
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
        ele.style.display = 'block';
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
      tokenSeparators={[' ', ',']}
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
            <Option key={child.id} value={child.id}>
              {child.name}
            </Option>
          );
        })}
    </Select>
  );
};

export default MultipleSelect;
