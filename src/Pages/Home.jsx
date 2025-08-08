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

import img1 from "../assets/image/Screenshot 2025-08-04 123116.png";
import img2 from "../assets/image/Screenshot 2025-08-04 123204.png";
import img3 from "../assets/image/Screenshot 2025-08-04 123326.png";
import img4 from "../assets/image/Screenshot 2025-08-04 125229.png";

// import cover from "../assets/image/pexels-edward-jenner-4252524.jpg";

import section2 from "../assets/image/section2 bgimage.jpg";
import sectionimg from "../assets/image/Screenshot 2025-08-04 150606.png";

import section3 from "../assets/image/Screenshot 2025-08-04 151430.png";
import section32 from "../assets/image/Screenshot 2025-08-04 151348.png";



import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// import { useTranslation } from "react-i18next";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import LS1 from "../assets/image/last second section (1).png";
import LS2 from "../assets/image/last second section (2).png";
import LS3 from "../assets/image/last second section (3).png";
import LS4 from "../assets/image/last second section (4).png";
import LS5 from "../assets/image/last second section (5).png";
import LS6 from "../assets/image/last second section (6).png";
import LS7 from "../assets/image/last second section (7).png";
import LS8 from "../assets/image/last second section (8).png";
import LS9 from "../assets/image/last second section (9).png";
import LS10 from "../assets/image/last second section (10).png";

const Home = () => {
  // const { t } = useTranslation();

  const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const images = [img1, img2, img3, img4];

  const missionData = [
    {
      title: "छात्रवृत्ति",
      icon: <SchoolIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content:
        "हम गरीब लेकिन प्रतिभाशाली छात्रों को छात्रवृत्तियाँ देते हैं ताकि वे शिक्षित हो सकें और इंजीनियरिंग, मेडिकल और सरकारी नौकरियों में उच्च पदों पर चयनित हो सकें, जिससे वे आत्मविश्वास से खड़े हो सकें और दुनिया भर में आत्म-प्रदर्शन कर सकें।",
    },
    {
      title: "नेतृत्व",
      icon: <GroupsIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content:
        "हम छात्रों, माता-पिता और शिक्षकों की प्रतिभा और ज्ञान प्रदान करते हैं, जिसका उद्देश्य केवल शिक्षा की गुणवत्ता में सुधार करना नहीं बल्कि पूरी शिक्षा प्रणाली को बेहतर बनाना है।",
    },
    {
      title: "पुरस्कार",
      icon: <EmojiEventsIcon sx={{ fontSize: { xs: 60, lg: 80 }, mb: 2 }} />,
      content:
        "हम हमारे समाज के छात्रों को पुरस्कारों और प्रमाणपत्रों के माध्यम से सम्मानित करते हैं, जिससे उनकी पहचान बने और उन्हें आगे बढ़ने के लिए प्रोत्साहन मिले।",
    },
  ];

  const imageData = [LS1, LS2, LS3, LS4, LS5, LS6, LS7, LS8, LS9, LS10];

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

  // function scrollToTarget(id) {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }

  return (
    <>
      <Box  id="page-top-section">
        <ImageSlider />
      </Box>

      <FadeInSection>
        <Box
          sx={{
            py: { xs: 5, lg: 15 },
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
            <Grid item xs={12} md={6} sx={{ width: { xs: "100%", lg: "60%" } }}>
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
                  हमारी कहानी
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mt: 4,
                    color: "#374151",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                    width: { xs: "90%", sm: "85%", md: "80%", lg: "80%" },
                    lineHeight:2.2
                  }}
                >
                  माँ नर्मदा के तटवर्ती शिवालिक पर्वत श्रृंखलाओं में बसे
                  सिंघावलोकन श्री भुआणा प्रांतीय गुर्जर समाज की स्थापना समाज को
                  संगठित करने, शिक्षा, जागरूकता और नैतिक मूल्यों को बढ़ावा देने
                  के उद्देश्य से हुई। यह समाज पशुपालन और कृषि से जुड़ा रहा है,
                  और अपनी परंपराओं में गहराई से रचा-बसा है। 1946 में संगठन की
                  औपचारिक शुरुआत हुई, जो 1947 में भुआणा प्रांतीय गुर्जर सभा के
                  गठन से सुदृढ़ हुई। 1949 में इसका संविधान तैयार कर समाज को एक
                  स्पष्ट दिशा दी गई। समय के साथ इसने कई अधिवेशनों और बैठकों के
                  माध्यम से समाज सुधार, न्यायिक व्यवस्था और एकता का संदेश
                  फैलाया। आज भी यह संगठन समाज के हित में सक्रिय भूमिका निभा रहा
                  है और अपनी समृद्ध विरासत को संजोए हुए है।
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
                {/* <Card
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
                </Card> */}

                <Box
                  component="img"
                  src={sectionimg}
                  sx={{
                    width: { xs: 200, sm: 240, md: 260, lg: "320px" },

                    borderRadius: 3,
                    boxShadow: 3,
                    objectFit: "fill",
                    height: { xs: 200, sm: 240, md: 260, lg: 360 },

                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "scale(0.95)",
                      boxShadow: 6,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box
          sx={{
            // px: { xs: 2, sm: 4, md: 3 },
            // py: { xs: 5, sm: 8, md: 3 },
            py: { lg: 10, xs: 5 },
            backgroundImage: `url(${section2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // mt: { xs: "-10px", sm: "-5px" },
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
                हम सब मिलकर समाज के भविष्य को मजबूत बना रहे हैं
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
                हम कई वर्षों से एक शिक्षित और आत्मनिर्भर भविष्य के लिए अभियान
                चला रहे हैं – और हम रुकने वाले नहीं हैं। अब समय आ गया है कि हम
                अपने समाज के बच्चों को शिक्षित और मार्गदर्शन करें।
              </Typography>

              <Link to="/AboutUs" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 5,
                    borderRadius: "25px",
                    px: { xs: 3, lg: 5 },
                    py: { xs: 1, lg: 1.5 },
                    fontWeight: 600,
                    fontSize: { xs: "14px" },
                    backgroundColor: "#a16627",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      backgroundColor: "#a16627",
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  हमारे बारे में पढ़ें
                </Button>
              </Link>
            </Grid>

            {/* <Grid
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
          </Grid> */}

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                mt: { xs: 5, md: 0 },
                mb: { xs: 2 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  maxWidth: { xs: "100%", sm: 500, md: "auto" },
                  justifyContent: "center",
                }}
              >
                {images.map((img, idx) => (
                  <Grid item xs={6} sm={6} md={6} key={idx}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        height: { xs: 160, sm: 160, md: 200, lg: 250 },
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
      </FadeInSection>

      <FadeInSection>
        <Box
          sx={{
            py: { xs: 5, lg: 10 },
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
            <Grid
              item
              xs={12}
              md={4}
              sx={{ width: "auto", mb: { xs: "280px" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position:"relative"
                }}
              >
                <Box
                  component="img"
                  src={section3}
                  sx={{
                    width: { xs: "200px", lg: "230px" },
                    maxWidth: 300,
                    borderRadius: 3,
                    boxShadow: 3,
                    height: { xs: "200px", lg: "230px" },

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
                    width: { xs: "200px", lg: "100%" },
                    // height: "100%",
                    height: { xs: "200px", lg: "230px" },
                    maxWidth: 260,
                    borderRadius: 3,
                    boxShadow: 3,
                    zIndex: 999,
                    // marginLeft: { lg: "250px" },
                    position:"absolute",
                    top:{xs:"250px" ,lg:"150px"},
                    left:{lg:"120px"},

                    // marginTop: { xs: "30px", lg: "-80px" },
                    // marginBottom:"80px",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: {xs:"scale(1.20)", lg:"scale(1.05)"},
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
              <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, width: { lg: "80%" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                    color: "#1F2937",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  हमारा प्रभाव
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
                  हमने प्रत्यक्ष अभ्यास के माध्यम से छात्रों के जीवन को बेहतर
                  बनाने पर काम किया है।
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mt: 4,
                    color: "#374151",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    textAlign: { xs: "center", md: "left" },
                    mx: { xs: "auto", md: 0 },
                    width: { xs: "90%", sm: "85%", md: "80%", lg: "100%" },
                    
                  }}
                >
                  {/* {t("home.our_impact2")} */}
                  समाज में शिक्षा का प्रचार - भुवाना प्रांतीय गुर्जर सभा का
                  प्रारंभ से ही विश्वास है कि सामाजिक जागृति शिक्षा के बिना संभव
                  नहीं होगी, अपनी निर्धनता और असहायता के कारण कोई बालक-बालिका इस
                  अमृत तुल्य शिक्षा से वंचित न रह जाये, इस लिए संस्था के गठन से
                  लेकर आज तक भुवाना प्रांतीय गुर्जर सभा ने कई उल्लेखनीय कार्य
                  किये है। आधी शताब्दी पूर्व से ही अब तक प्रतिभाशाली छात्रों को
                  तरह-तरह की छात्रवृत्तियां और महाविद्यालयीन शिक्षा हेतु ऋण दिया
                  जा रहा है। (देखे दस्तावेज क्रमांक 1 आय व्यय लेखा 1947 से)
                  विद्या मंदिरों के रूप में भुवाना प्रांत में चार स्थानों पर
                  विशाल गुर्जर छात्रावास कार्यरत है। जिनमें प्राचीनतम छात्रावास
                  टिमरनी, हरदा और नवनिर्मित खिड़किया एवं सिराली छात्रावास है, इन
                  छात्रावासों का निर्माण और संचालन अन्य समाजों के लिए ईर्ष्या का
                  विषय है। भुवाना प्रांतीया सभा का अभिनव प्रयोग निर्धन एवं योग्य
                  छात्रों के अध्ययन के लिए आर्थिक सहायता हेतु एक शिक्षा कोष की
                  स्थापना करना है। इससे कि चयनित निर्धन छात्रों के छात्ररास का
                  पूरा शैक्षणिक, आवासीय एवं भोजन खर्च का वहन किया जा सके। माननीय
                  डा. रेवाशंकर जी दोगने के निरन्तर प्रयासों से आज इस शिक्षा कोष
                  में विपुल राशि का संचय हो रहा है।
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box
          sx={{
            py: { xs: 0.1 },
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
            mt={{ lg: 6, xs: 4 }}
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            {/* {t("home.heading")} */}
            हमारा मिशन
          </Typography>

          <Grid
            container
            spacing={{ xs: 5, sm: 4 }}
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

                    bgcolor: "#a16627",
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
      </FadeInSection>

      <FadeInSection>
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
            mt={{ xs: 4 }}
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
            करते हैं, यहाँ तक कि सबसे खतरनाक जगहों पर भी, हमारे भुवाना गुर्जर से
            प्रेरित होकर। हम मिलकर आज बच्चों को शिक्षित कर सकते हैं और उन्हें कल
            के लिए सशक्त बना सकते हैं।
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, lg: 3 }}
            justifyContent="center"
            sx={{ width: "auto", margin: "0 auto" }}
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
                    width: {
                      xs: "135px",
                      sm: "200px",
                      md: "250px",
                      lg: "280px",
                    },
                    height: {
                      xs: "135px",
                      sm: "200px",
                      md: "250px",
                      lg: "280px",
                    },
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
                      objectFit: "fill",
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
                      // px: 2,
                      textAlign: "center",
                    }}
                  >
                    {/* <Typography
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
                    </Typography> */}
                    {/* <Typography
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
                    </Typography> */}
                    <Box display="flex" gap={4} alignItems={"center"}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#ffffffcc",
                          color: "#000",
                          fontWeight: 600,
                          textTransform: "none",

                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          padding: { xs: "6px 12px", sm: "8px 16px" },
                          // mr:{ xs: 1, sm: 2, md: 3, lg: 4 },
                        }}
                        onClick={() => handleOpen(index)}
                      >
                        देखे
                      </Button>
                    </Box>
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
                sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 ,bgcolor: "#000000aa", color:"white" }}
              >
                <CloseIcon sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" },
                  }} />
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
                  left: {xs:0 , lg:10},
                  transform: "translateY(-50%)",
                  bgcolor: "#000000aa",
                  color: "#fff",

                  "&:hover": {
                    backgroundColor: "#000000aa",
                  },
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" },     
                  }}
                />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: {xs:0 , lg:10},
                  transform: "translateY(-50%)",
                  bgcolor: "#000000aa",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#000000aa",
                  },
                }}
              >
                <ArrowForwardIosIcon  sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" }, 
                  }} />
              </IconButton>
            </Box>
          </Modal>
        </Box>
      </FadeInSection>

      <FadeInSection>
        <Box
          sx={{
            py: { xs: 6, md: 4 },
            px: { xs: 2, sm: 4 },
            textAlign: "center",
            backgroundImage: `url(${section2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#a16627",
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: 2,
              width: { xs: "auto", sm: "50%", md: "60%", lg: "55%" },
              height: { xs: "auto", md: "400px" },
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              mb={{ xs: 2, sm: 6 }}
              mt={{ xs: 2, lg: 4 }}
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.2rem",
                  md: "3.5rem",
                  lg: "3.5rem",
                },
                color: "#fff",
                width: { xs: "100%", sm: "90%", md: "70%", lg: "65%" },
                margin: "0 auto",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              भुवाना प्रांतीय गुर्जर सभा के मिशन से जुड़ें
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#ffffffcc",
                color: "#000",
                fontWeight: 800,
                mt: { xs: 1, sm: 4 },
                borderRadius: "25px",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1.5rem",
                },
                px: { xs: 2, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#ffffffcc",
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Link
                to="/ContactUs"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                हमारे मिशन से जुड़ें
              </Link>
            </Button>
          </Box>
        </Box>
      </FadeInSection>
    </>
  );
};

export default Home;
