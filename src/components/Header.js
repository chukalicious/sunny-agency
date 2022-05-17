import ImageListItem from "@mui/material/ImageListItem";
import imageHeader from "../images/mobile/imageHeader.jpg";
import { palette } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3dbefe",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          pt: 8,
          pb: 3,
          mb: 3,
          position: "relative",
          zIndex: "appBar",
        }}
        variant="h3"
        component="h1"
        align="center"
      >
        We are creatives
      </Typography>
      <ImageList
        sx={{
          flexDirection: "column",
          mt: -21,
        }}
        cols={1}
      >
        <ImageListItem
          sx={{
            border: "red solid 1px",
            objectFit: "contain",
            height: "25%",
            mt: 0,
          }}
        >
          <img
            sx={{
              mt: 0,
            }}
            src={imageHeader}
            alt="header"
            standard
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Header;
