import React from "react";

type LabelProps = {
  labelTitle: string;
  labelP: string;
  labelClassName: string;
  labelClassNameP: string;
};

export const Label: React.FC<LabelProps> = ({
  labelTitle,
  labelP,
  labelClassName,
  labelClassNameP,
}) => {
  return (
    <>
      <label className={labelClassName}>{labelTitle}</label>
      <p className={labelClassNameP}>{labelP}</p>
    </>
  );
};
