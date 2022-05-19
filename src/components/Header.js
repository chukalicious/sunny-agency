import ImageListItem from "@mui/material/ImageListItem";
import imageHeader from "../images/mobile/imageHeader.jpg";
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
          pl: 1,
          pr: 1,
          mb: 3,
          position: "relative",
          zIndex: "appBar",
          color: "#f8feff",
          wrap: "wrap",
        }}
        variant="h1"
        align="center"
      >
        We are creatives
      </Typography>
      <ImageList
        sx={{
          flexDirection: "column",
          mt: -40,
        }}
        cols={1}
      >
        <ImageListItem
          sx={{
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
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Header;
