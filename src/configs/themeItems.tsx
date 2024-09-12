import { Box } from "@mui/material";

export const themesList = [
  {
    index: 0,
    name: "light",
    element: (
      <Box width={30} height={30} bgcolor="white" borderRadius="50%"></Box>
    ),
  },
  {
    index: 1,
    name: "dark",
    element: (
      <Box width={30} height={30} bgcolor="#202b62" borderRadius="50%"></Box>
    ),
  },
  {
    index: 2,
    name: "red",
    element: (
      <Box width={30} height={30} bgcolor="#880000" borderRadius="50%"></Box>
    ),
  },
  {
    index: 3,
    name: "olive",
    element: (
      <Box width={30} height={30} bgcolor="#697565" borderRadius="50%"></Box>
    ),
  },
  {
    index: 4,
    name: "twilight",
    element: (
      <Box width={30} height={30} bgcolor="#bf4e64" borderRadius="50%"></Box>
    ),
  },
];
