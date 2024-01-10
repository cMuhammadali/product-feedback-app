import React from "react";

type FormProps = {
    children: any;
}

export const Form: React.FC<FormProps> = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}