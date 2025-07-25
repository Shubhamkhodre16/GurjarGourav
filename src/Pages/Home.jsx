import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  Paper,
  Modal,
  IconButton,
  Tooltip,
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

import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { useTranslation } from "react-i18next";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
const Home = () => {
  const { t } = useTranslation();

  const images = [img1, img2, img3, img4];

  const missionData = [
    {
      title: t("home.title"),
      icon: <SchoolIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content: t("home.content"),
    },
    {
      title: t("home.title1"),
      icon: <GroupsIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content: t("home.content1"),
    },
    {
      title: t("home.title2"),
      icon: <EmojiEventsIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content: t("home.content2"),
    },
  ];

  const imageData = [img1, img2, img3, img4, section3, section32];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % imageData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") handleClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function scrollToTarget(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <Box id="page-top-section" >
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
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            // flexDirection: "row",
          }}
        >
          <Grid item xs={12} md={4} sx={{ width: "auto" }}>
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
                sx={{
                  width: { xs: "65%", lg: "45%" },
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
                sx={{
                  width: { xs: "65%", lg: "100%" },
                  height: "100%",
                  maxWidth: 260,
                  borderRadius: 3,
                  boxShadow: 3,
                  zIndex: 999,
                  marginLeft: { lg: "250px" },
                  marginTop: { xs: "30px", lg: "-80px" },

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
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              width: { xs: "100%", lg: "50%" },
              marginLeft: { lg: "200px" },
            }}
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

      <Box
        sx={{
          py: { xs: 6 },
          px: 2,
          textAlign: "center",
          backgroundImage: `url(${section2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={{ xs: 6 }}
          mt={{ lg: 6 }}
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          {t("home.heading")}
        </Typography>

        <Grid
          container
          spacing={{ xs: 10, sm: 4 }}
          mb={{ xs: 10, lg: 6 }}
          mt={{ lg: 12 }}
          justifyContent="center"
        >
          {missionData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: 4,

                  bgcolor: "#ab6ceb",
                  color: "#fff",
                  height: { xs: "auto", lg: "80%" },
                  width: "100%",
                  maxWidth: 350,
                  textAlign: "center",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    animation: "scaleIn 0.8s ease",
                  }}
                >
                  {item.icon}

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mb: 3,
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.25)",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.8,
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        p={{ xs: 2, md: 4 }}
        sx={{
          backgroundImage: `url(${section2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          mb={2}
          color="#1F2937"
        >
          हमारे ब्लॉग
        </Typography>

        <Typography
          textAlign="center"
          mb={4}
          mx="auto"
          color="#374151"
          sx={{ maxWidth: { xs: "100%", md: "700px" }, px: { xs: 2, sm: 0 } }}
        >
          हमारा ध्यान सबसे कमज़ोर छात्रों को गरीबी से उबरने और जीवन की पूर्णता
          का अनुभव करने में मदद करने पर है। हम सभी पृष्ठभूमि के बच्चों की मदद
          करते हैं, यहाँ तक कि सबसे खतरनाक जगहों पर भी, हमारे गुर्जर गौरव कल्याण
          परिषद से प्रेरित होकर। हम मिलकर आज बच्चों को शिक्षित कर सकते हैं और
          उन्हें कल के लिए सशक्त बना सकते हैं।
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          {imageData.map((src, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                position="relative"
                sx={{
                  cursor: "pointer",
                  width: { xs: "200px", lg: "280px" },
                  height: { xs: "200px", lg: "280px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  "&:hover .hover-content": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Event ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    display: "block",
                  }}
                />

                <Box
                  className="hover-content"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: { xs: "100%", lg: "100%" },
                    height: { xs: "100%", lg: "100%" },
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2rem",
                        md: "1.3rem",
                        lg: "1.5rem",
                      },
                      mb: 1,
                      mr: 4,
                    }}
                  >
                    पुरस्कार समारोह
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.875rem",
                      },
                      mb: { xs: 1, sm: 2 },
                      mr: { xs: 4, lg: 3 },
                    }}
                  >
                    जो छात्र अपने छात्रों को उनकी कड़ी मेहनत और उपलब्धि के लिए
                    पुरस्कृत करने में गर्व महसूस करते हैं, उन्हें हमेशा ध्यान
                    में रखा जाना चाहिए।
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ffffffcc",
                      color: "#000",
                      fontWeight: 600,
                      textTransform: "none",

                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      padding: { xs: "6px 12px", sm: "8px 16px" },
                      mr: 4,
                    }}
                    onClick={() => handleOpen(index)}
                  >
                    View
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => scrollToTarget("page-top-section")} 
                  >
                    +++
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Modal open={open} onClose={handleClose}>
          <Box
            position="fixed"
            top="50%"
            left="50%"
            width="95%"
            // maxWidth="900px"
            maxHeight="90vh"
            sx={{
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              outline: "none",
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={imageData[activeIndex]}
              alt={`Slide ${activeIndex}`}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                // maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                bgcolor: "#000000aa",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#000000aa",
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                bgcolor: "#000000aa",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#000000aa",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Home;
