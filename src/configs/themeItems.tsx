import { Box } from "@mui/material";
import { AnimatedItemType } from "./sectionItems";

export const themesList: AnimatedItemType[] = [
  {
    index: 0,
    name: "light",
    icon: (
      <Box
        width={20}
        height={20}
        borderRadius="50%"
        bgcolor="#ffff"
        borderColor="#bac5da!important"
        border={5}
      ></Box>
    ),
  },
  {
    index: 1,
    name: "dark",
    icon: (
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
    icon: (
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
    icon: (
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
    icon: (
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
