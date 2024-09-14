import { Box } from "@mui/material";

export const themesList = [
  {
    index: 0,
    name: "light",
    element: (
      <Box
        width={20}
        height={20}
        borderRadius="50%"
        bgcolor="#a3b6e4"
        borderColor="#3e76c4!important"
        border={5}
      ></Box>
    ),
  },
  {
    index: 1,
    name: "dark",
    element: (
      <Box
        width={20}
        height={20}
        borderRadius="50%"
        bgcolor="#131546"
        borderColor="#0c5dcc!important"
        border={5}
      ></Box>
    ),
  },
  {
    index: 2,
    name: "red",
    element: (
      <Box
        width={20}
        height={20}
        borderRadius="50%"
        bgcolor="#4d1212"
        borderColor="#cc0c0c!important"
        border={5}
      ></Box>
    ),
  },
  {
    index: 3,
    name: "olive",
    element: (
      <Box
        width={20}
        height={20}
        bgcolor="#c2b8aa"
        borderColor="#4d4e46!important"
        border={5}
        borderRadius="50%"
      ></Box>
    ),
  },
  {
    index: 4,
    name: "twilight",
    element: (
      <Box
        width={20}
        height={20}
        bgcolor="#38345b"
        borderColor="#bf4e65c8!important"
        border={5}
        borderRadius="50%"
      ></Box>
    ),
  },
];
