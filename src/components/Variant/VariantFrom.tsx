import { Box } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../App";
import { FormCard } from "../Product/FormCard";
import FormHeader from "../Product/FormHeader";

const VariantFrom = () => {
  // const {} = useForm({
  //   resolver:
  // })

  return (
    <>
      <Box
        justifyContent={"center"}
        alignItems="center"
        pt={10}
        width="100%"
        display={"flex"}
        // onSubmit={handleSubmit(handleProductSubmit)}
        component={"form"}
      >
        <Box
          flexDirection={"column"}
          p={1}
          sx={{
            width: {
              xs: "360px",
              sm: "540px",
              md: "700px",
            },
          }}
          display="flex"
          gap={3}
        >
          <FormHeader title="Variants" />
          <FormCard>this is card</FormCard>
        </Box>
      </Box>
    </>
  );
};

export default VariantFrom;
