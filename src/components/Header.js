import ImageListItem from "@mui/material/ImageListItem";
import imageHeader from "../images/mobile/imageHeader.jpg";
import { palette } from "@mui/system";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box>
      <ImageListItem>
        <img src={imageHeader} alt="header" standard />
      </ImageListItem>
    </Box>
  );
};

export default Header;
