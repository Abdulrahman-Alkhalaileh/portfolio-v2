import React from "react";
import { Divider, Paper, PaperProps, Stack, Typography } from "@mui/material";
import { ExperienceType } from "helpers/types";
import H4 from "components/Typography/H4";
import H1 from "components/Typography/H1";
import P1 from "components/Typography/P1";
import TextAnimation from "components/Typography/TextAnimation";

export interface SummaryCardProps extends PaperProps {
  data: ExperienceType[];
  index: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ index, data, ...props }) => {
  return (
    <Paper {...props} sx={{ borderRadius: 5, p: 3, ...props.sx }}>
      <H4>My journey at:</H4>
      {data.map(
        (item, i) =>
          index === i && (
            <Stack spacing={1} pt={2}>
              <TextAnimation>
              <H1 color="primary" sx={{textShadow: 'none'}}>{item.institution}</H1>
              </TextAnimation>
                <Divider />
              <TextAnimation>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  color="text.secondary"
                >
                  {item.date}
                </Typography>
              </TextAnimation>
              <Stack direction="row" gap={5} pb={2}>
                <Stack direction={{xs:'column',sm:"row"}} spacing={2} alignItems="center">
                  <Typography variant="body1" fontWeight={700}>
                    Type:
                  </Typography>
                  <Typography variant="body1"> {item.type}</Typography>
                </Stack>
                <Stack direction={{xs:'column',sm:"row"}} spacing={2} alignItems="center">
                  <Typography variant="body1" fontWeight={700}>
                    Location:
                  </Typography>
                  <Typography variant="body1"> {item.location}</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack spacing={1} pt={1}>
                <Typography
                  variant="body1"
                  fontSize={{ xl: 22 }}
                  fontWeight={900}
                >
                  Description:
                </Typography>
                <TextAnimation>
                  <P1 key={crypto.randomUUID()}>{item.description}</P1>
                </TextAnimation>
              </Stack>
            </Stack>
          )
      )}
    </Paper>
  );
};

export default SummaryCard;
