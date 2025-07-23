import React from "react";
import { Box, Button, Typography, Grid, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import img1 from "../assets/image/home section 1.jpg";
import img2 from "../assets/image/home section 2.jpg";
import img3 from "../assets/image/home section 3.jpg";
import img4 from "../assets/image/home section 4.jpg";
import cover from "../assets/image/pexels-edward-jenner-4252524.jpg";
// // import cover from "../assets/image/pexels-834934396-20818864.jpg"
// // import cover from "../assets/image/pexels-alteredsnaps-14866180.jpg"
// // import cover from "../assets/image/pexels-edward-jenner-4252523.jpg"
// import cover from "../assets/image/pexels-edward-jenner-4252524.jpg";
// // import cover from "../assets/image/pexels-834934396-20818864.jpg"

const images = [img1, img2, img3, img4];

const Home = () => {
  return (
    <>
      <Box>
        <ImageSlider />
      </Box>

       <Box
        sx={{
          // px: { xs: 2, sm: 4, md: 3 },
          // py: { xs: 5, sm: 8, md: 3 },
          py:10,
          backgroundImage: `url(${cover})`,
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
          sx={{display: "flex",
              justifyContent:"space-evenly",
              flexDirection:"row"}}
        >
          <Grid item xs={12} md={6} sx={{width:"48%"}}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                color: "#1F2937",
                maxWidth: { md: "50%", lg: "90%" },
              }}
            >
              Together We Are Strengthening Future of Society
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 3,
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              We’ve been campaigning for an educated and self-dependent future
              for many years – and we’re not going to stop. It’s time to teach
              and guide the children of our society.
            </Typography>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
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
                Read About Us
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mt: { xs: 5, md: 0 },
              // display: "flex",
              // justifyContent:"flex-end",
              // flexDirection:"row"

            }}
          >
            <Grid container spacing={2} sx={{ maxWidth: 420 }}>
              {images.map((img, idx) => (
                <Grid item xs={6} md={3} key={idx}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      height: { xs: 150, sm: 200, md: 220  , lg:220},
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
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box> 


      <Box sx={{ px: { xs: 2, sm: 4, md: 18 }, py: { xs: 5, sm: 8, md: 10 } }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
              color: "#1F2937",
            }}
          >
            Our Story
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 5,
              color: "#374151",
              width: { xs: "80%", lg: "50%" },
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Gurjar Gourav Kalyaan Parishad was established in 2016 to support
            education to students in the our society. Today, our team is a
            global organization working tirelessly to give every student the
            best possible start in life and access to a good education. Gurjar
            Gourav Kalyaan Parishad runs pioneering programs to support
            disadvantaged students our society and improve their access to
            education. For example, they work to reach students who are missing
            out on learning, particularly girls, by providing access to local
            childhood development centers and through their Every Last Child
            campaign.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
