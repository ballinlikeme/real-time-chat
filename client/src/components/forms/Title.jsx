import React from "react";
import PageTitle from "./styled/PageTitle";
import FormHeader from "./styled/FormHeader";

const Title = ({children}) => {
    return (
        <FormHeader>
            <PageTitle>{children}</PageTitle>
        </FormHeader>
    )
}

export default Title;