import ImageListItem from "@mui/material/ImageListItem";
import imageHeader from "../images/mobile/imageHeader.jpg";
import { palette } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#3dbefe", mt: -0.5 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          pt: 2,
          pb: 3,
          mb: 1,
        }}
        variant="h3"
        component="h1"
        align="center"
      >
        We are creatives
      </Typography>
      <ImageList
        sx={{ mt: -5, flexDirection: "column", objectFit: "contain" }}
        cols={1}
        // rowHeight={420}
      >
        <ImageListItem>
          <img
            // sx={{ height: "60vh" }}
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
