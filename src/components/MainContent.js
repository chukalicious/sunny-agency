import ImageListItem from "@mui/material/ImageListItem";
import imageTransform from "../images/mobile/imageTransform.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";

const MainContent = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <ImageList
        sx={{
          flexDirection: "column",
          mt: -40,
        }}
        cols={1}
      >
        <ImageListItem
          sx={{
            height: "25%",
          }}
        >
          <img
            sx={{
              mt: 0,
            }}
            src={imageTransform}
            alt="egg"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default MainContent;
