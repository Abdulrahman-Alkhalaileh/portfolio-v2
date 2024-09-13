import { Box, Paper, useTheme } from "@mui/material";
import H4 from "components/Typography/H4";
import { motion, useMotionValue, useTransform } from "framer-motion";

const height = 70;
const padding = 10;
const size = 300; // Adjusted size to match the container height

export interface DraggingListProps {
  data: string[];
}

const DraggingList: React.FC<DraggingListProps> = ({ data }) => {
  const theme = useTheme()
  const scrollY = useMotionValue(0);

  // Ensure the scroll range matches the full scrollable height
  const scrollHeight = getHeight(data) - size;

  const width = useTransform(
    scrollY,
    [0, -scrollHeight], // Updated range
    ["0%", "100%"] // Directly map 0% to 100%
  );

  return (
    <>
      <Box width="100%" border={3} borderRadius={5} borderColor={theme.palette.divider}>
        <motion.div
          style={{
            width,
            height: 6,
            borderRadius: 3,
            backgroundColor: theme.palette.primary.main,
          }}
        />
      </Box>
      <motion.div
        style={{
          height: size,
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          transform: "translateZ(0)",
          cursor: "grab",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          style={{
            // width: 300,
            height: getHeight(data),
            y: scrollY,
          }}
          drag="y"
          dragConstraints={{
            top: -getHeight(data) + size,
            bottom: 0,
          }}
        >
          <Box width={{xs:300,xl:400}}>
          {data.map((item, index) => {
            return (
                <Paper
                  key={index}
                  sx={{
                    width: {xs:300,xl:400},
                    height: height,
                    borderRadius: 5,
                    position: "absolute",
                    top: (height + padding) * index,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <H4>{item}</H4>
                </Paper>
            );
          })}
          </Box>
        </motion.div>
      </motion.div>
    </>
  );
};

function getHeight(data: any[]) {
  const totalHeight = data.length * height;
  const totalPadding = (data.length - 1) * padding;
  const totalScroll = totalHeight + totalPadding;
  return totalScroll;
}

export default DraggingList;
