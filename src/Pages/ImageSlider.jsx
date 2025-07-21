import React from "react";
import Slider from "react-slick";
import { Box, Fade, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import img1 from "../assets/image/slider 1.jpg";
import img2 from "../assets/image/slider 2.jpg";
import img3 from "../assets/image/slider 3.jpg";
import img4 from "../assets/image/slider 4.jpg";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-in-out",
    fade: true,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <IconButton
        onClick={() => sliderRef.current.slickPrev()}
        sx={{
          position: "absolute",
          top: "40%",
          left: 10,
          zIndex: 1,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ArrowBackIos
          sx={{
            fontSize: { xs: "0.8rem", lg: "1.5rem" },
            color: "black",
            cursor: "pointer",
          }}
        />
      </IconButton>

      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: {
                xs: "auto",
                lg: "605px",
              },
              objectFit: "cover",
            }}
          >
            <img
              src={src}
              alt={`slide-${index}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Slider>

      <IconButton
        onClick={() => sliderRef.current.slickNext()}
        sx={{
          position: "absolute",
          top: "40%",
          right: 10,
          zIndex: 1,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        <ArrowForwardIos
          sx={{
            fontSize: { xs: "0.8rem", lg: "1.5rem" },
            color: "black",
            cursor: "pointer",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
