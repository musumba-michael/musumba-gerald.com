import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import logo from "../images/profile_photo.png";
export const About: FC = () => {
  return (
    <Card
      id="about"
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        borderRadius: 5,
      }}
    >
      <CardMedia
        component="img"
        image={logo}
        alt="profile photo"
        sx={{
          height: { xs: "40%", md: "100%" },
          width: { md: "30%" },
        }}
      />
      <CardContent>
        <Typography variant="h4">Software Engineer</Typography>
        <Box height={(theme) => theme.spacing(2)} />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
          sapien, fringilla porttitor facilisis et, sollicitudin eget ipsum.
          Aenean at turpis turpis. Praesent et porta ante. Nam accumsan nunc non
          velit convallis efficitur. Donec tincidunt neque eros, imperdiet
          lobortis leo mollis a. Mauris orci justo, porttitor ac dolor eget,
          venenatis molestie est. Duis efficitur dolor in bibendum efficitur.
          Sed non purus nunc. Donec ut velit nisl. Suspendisse vestibulum
          maximus elementum. Mauris eu nunc quis tortor tempus faucibus eu
          tincidunt ligula. Proin in tempor nunc. Cras pellentesque, metus id
          commodo vehicula, purus nibh pulvinar est, sit amet rutrum enim ex ut
          nisl. Sed condimentum sapien vitae imperdiet mattis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque mollis ut mi ut
          commodo.
        </Typography>
      </CardContent>
    </Card>
  );
};
