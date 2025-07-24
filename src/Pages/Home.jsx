import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import img1 from "../assets/image/home section 1.jpg";
import img2 from "../assets/image/home section 2.jpg";
import img3 from "../assets/image/home section 3.jpg";
import img4 from "../assets/image/home section 4.jpg";
// import cover from "../assets/image/pexels-edward-jenner-4252524.jpg";

import section2 from "../assets/image/section2 bgimage.jpg";
import sectionimg from "../assets/image/section2img.jpg";

import section3 from "../assets/image/section3-1.jpg";
import section32 from "../assets/image/section3-2.jpg";

// // import cover from "../assets/image/pexels-834934396-20818864.jpg"
// // import cover from "../assets/image/pexels-alteredsnaps-14866180.jpg"
// // import cover from "../assets/image/pexels-edward-jenner-4252523.jpg"
// import cover from "../assets/image/pexels-edward-jenner-4252524.jpg";
// // import cover from "../assets/image/pexels-834934396-20818864.jpg"

import { useTranslation } from "react-i18next";

// inside component

const images = [img1, img2, img3, img4];

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <ImageSlider />
      </Box>

      <Box
        sx={{
          // px: { xs: 2, sm: 4, md: 3 },
          // py: { xs: 5, sm: 8, md: 3 },
          py: 10,
          backgroundImage: `url(${section2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt: { xs: "-10px", sm: "-5px" },
        }}
      >
        <Grid
          container
          // spacing={4}
          // alignItems="center"
          // justifyContent="space-between"
          // flexDirection="row"
          // direction={{ xs: "column", md: "column" }}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} md={6} sx={{ width: { xs: "70%", lg: "38%" } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                color: "#1F2937",
                maxWidth: { md: "50%", lg: "80%" },
              }}
            >
              {/* Together We Are Strengthening Future of Society */}
              {t("home.hero_title")}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 4,
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              {/* We’ve been campaigning for an educated and self-dependent future
              for many years – and we’re not going to stop. It’s time to teach
              and guide the children of our society. */}
              {t("home.hero_desc")}
            </Typography>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  borderRadius: "25px",
                  px: { xs: 3, lg: 5 },
                  py: { xs: 1, lg: 1.5 },
                  fontWeight: 600,
                  fontSize: { xs: "14px" },
                  backgroundColor: "#6831AD",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    backgroundColor: "#4b1e88",
                    transform: "scale(1.05)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Read About Us */}
                {t("home.read_about_us")}
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mt: { xs: 5, md: 0 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                maxWidth: { xs: "100%", sm: 500, md: 420 },
                justifyContent: "center",
              }}
            >
              {images.map((img, idx) => (
                <Grid item xs={6} sm={4} md={6} key={idx}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: { xs: 120, sm: 160, md: 200, lg: 220 },
                      width: "100%",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={img}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: 20,
          backgroundImage: `url(${section2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          spacing={4}
          // direction={{ xs: "column-reverse", md: "row" }}
          // justifyContent="center"
          // alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                  color: "#1F2937",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {t("home.our_story")}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  color: "#374151",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                  width: { xs: "90%", sm: "85%", md: "80%", lg: "70%" },
                }}
              >
                {t("home.our_story_text")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: { xs: 200, sm: 240, md: 260, lg: 360 },
                  width: { xs: "70%", sm: "80%", md: "100%", lg: 320 },
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(0.95)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={sectionimg}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: 20,
          backgroundImage: `url(${section2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
        spacing={{ xs: 8, md: 4, lg: 6 }}
          direction={{ xs: "row-reverse", md: "row" }}
          // justifyContent="center"
          // alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} md={4}  sx={{ width: "auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={section3}
                alt="Top image"
                sx={{
                  width: {xs:"65%" ,lg:"45%"},
                  maxWidth: 300,
                  borderRadius: 3,
                  boxShadow: 3,


                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.20)",
                    boxShadow: 6,
                  },
                }}
              />

              <Box
                component="img"
                src={section32}
                alt="Bottom image"
                sx={{
                  width: { xs: "65%", lg: "100%" },
                  height: "100%",
                  maxWidth: 260,
                  borderRadius: 3,
                  boxShadow: 3,
                  zIndex:999,
                  marginLeft:{lg:"250px"},
                  marginTop: { xs: "20px", lg: "-80px" },
                
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ width: { xs: "100%", lg: "50%" }, marginLeft: {lg:"200px"} }}
          >
            <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                  color: "#1F2937",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {t("home.our_impact")}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mt: 4,
                  fontWeight: 500,
                  fontSize: { xs: "1.4rem", sm: "1.5rem", md: "1.8rem" },
                  color: "#1F2937",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {t("home.our_impact1")}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  color: "#374151",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                  width: { xs: "90%", sm: "85%", md: "80%", lg: "70%" },
                }}
              >
                {t("home.our_impact2")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
