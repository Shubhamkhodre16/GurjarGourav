import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import img1 from "../assets/image/slider 1.jpg";
import img2 from "../assets/image/slider 2.jpg";
import img3 from "../assets/image/slider 3.jpg";
import img4 from "../assets/image/slider 4.jpg";
import "../style/ImageSlider.css";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: {xs:10,lg:20},
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: "10px" }}>
          {dots}
        </ul>
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: {xs:7 , lg:10},
          height: {xs:7 , lg:10},
          bgcolor: "white",
          borderRadius: "50%",
          transition: "all 0.3s ease",
          "&.slick-active": {
            transform: "scale(1.3)",
          },
        }}
      />
    ),
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <IconButton
        onClick={() => sliderRef.current.slickPrev()}
        sx={{
          position: "absolute",
          top: "50%",
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
                lg: "700px",
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
          top: "50%",
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