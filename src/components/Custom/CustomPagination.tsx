import React, { useState } from "react";
import { Box, BoxProps, Pagination, PaginationProps } from "@mui/material";

export interface CustomPaginationProps extends Partial<PaginationProps> {
  containerProps?: BoxProps;
  data: any[];
  setData: (value: any) => void;
  dataPerPage: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  data,
  setData,
  dataPerPage,
  containerProps,
  ...props
}) => {
  const [page, setPage] = useState(1);

  // Calculate the total number of pages needed based on the total data
  const pageCount = Math.ceil(data.length / dataPerPage);

  const handlePageChange = (e: any, value: number) => {
    setPage(value);
    const startIndex = (value - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    setData(data.slice(startIndex, endIndex));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor="background.paper"
      p={1}
      borderRadius={3}
      mt={3}
      boxShadow={2}
      {...containerProps}
    >
      <Pagination
        color="primary"
        shape="rounded"
        size="large"
        {...props}
        page={page}
        count={pageCount}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default CustomPagination;
