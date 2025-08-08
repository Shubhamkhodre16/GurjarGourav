import {
  Box,
  Typography,
  Grid,
  Modal,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import imgA from "../assets/image/events (1).png";
import imgB from "../assets/image/events (2).png";
import imgC from "../assets/image/events (3).png";
import imgD from "../assets/image/events (4).png";
import imgE from "../assets/image/events (5).png";
import imgF from "../assets/image/events (6).png";
import imgG from "../assets/image/events (7).png";
import imgH from "../assets/image/events (8).png";
import imgI from "../assets/image/events (9).png";
import imgJ from "../assets/image/events (10).png";
import imgK from "../assets/image/events (11).png";
import imgL from "../assets/image/events (12).png";
import imgM from "../assets/image/events (13).png";
import imgN from "../assets/image/events (14).png";


import backgroundImage from "../assets/image/section2 bgimage.jpg";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const EntriesForEvent = () => {
  // const [index, setIndex] = useState(0);

  const imageData = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH ,imgI, imgJ, imgK, imgL, imgM , imgN];

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
  return (
    <Box
      // p={{ xs: 2, md: 4 }}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#e49046",
          height: { xs: "60px", lg: "100px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: "1.5rem", lg: "2.5rem" },
            letterSpacing: 1,
          }}
        >
          मीडिया हाइलाइट
        </Typography>
      </Box>
      <Box >
        <Typography
          variant="h6"
          sx={{
            mt: { xs: 2, lg: 4 },
            color: "#374151",
            fontWeight:"bold" ,
            fontSize: { xs: "0.95rem", lg: "2rem" },
           
          }}
          align="center" 
          >
          भुऑणा प्रांतीय गुर्जर महिला मण्डल, हरदा द्वारा किये गए कार्यक्रम
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: { xs: 2, lg: 4 },
            color: "#374151",
            fontSize: { xs: "0.95rem", lg: "1.3rem" },
            mb:{lg:5},
             px:{xs:2 ,lg:5}
          }}
          align="center" 
        >
          होली मिलन, वृक्षारोपण, स्वतंत्रता दिवस, प्रतिष्ठित महिला का सम्मान,
          गरबा, स्कूल में गरीब बच्चों को गिफ्ट, संक्रांति का प्रोग्राम- डांस
          प्रतियोगिता, फैन्सी ड्रेस कॉम्पटिशन, वृद्धाश्रम में कपडे व फल वितरित
          किए गए। जन्माष्टमी पर प्रोग्राम, अयोध्या राम मंदिर स्थापना दिवस पर,
          कावड यात्रा का स्वागत व ऐसी अनेक गतिविधियाँ करते हैं।
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, lg: 5 }}
        justifyContent="center"
        sx={{ maxWidth: "90%", margin: "0 auto", mt: 4 }}
      >
        {imageData.map((src, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, lg: 4 },
            }}
          >
            <Box
              position="relative"
              sx={{
                cursor: "pointer",
                width: { xs: "135px", sm:"200px", md:"250px" , lg: "280px" },
                height: { xs: "135px",sm:"200px",md:"250px" , lg: "280px" },
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: 10,
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
                  // display: "block",
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
                <Box display="flex" alignItems={"center"}>
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
          maxHeight="90vh"
          sx={{
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            outline: "none",
            borderRadius: 2,
            overflow: "auto",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 , bgcolor: "#000000aa", color:"white" }}
          >
            <CloseIcon sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" },
                  }}/>
          </IconButton>

          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50%",
              width: "100%",
              // padding: "20px", // optional for spacing
            }}
          > */}
            <img
              src={imageData[activeIndex]}
              alt={`Slide ${activeIndex}`}
              style={{
                // maxWidth: "100%",

                // maxHeight: "500px",
                // height: "100%",
                // objectFit: "contain",
                // display: "block",

                width: "100%",
                  height: "100%",
                  display: "block",
                  // maxHeight: "80vh",
                  objectFit: "contain",
              }}
            />
          {/* </Box> */}

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
            <ArrowBackIosNewIcon sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" },     
                  }} />
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
            <ArrowForwardIosIcon sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" }, 
                  }} />
          </IconButton>
        </Box>
      </Modal>
    </Box>

    // <Box sx={{ px: 2, py: 4 }}>
    //   <Paper
    //     elevation={4}
    //     sx={{
    //       px: { xs: 2, sm: 4 },
    //       py: { xs: 3, sm: 5 },
    //       maxWidth: 700,
    //       mx: "auto",
    //     }}
    //   >
    //     <Typography
    //       sx={{
    //         fontSize: { xs: "1.5rem", sm: "2rem" },
    //         fontWeight: 700,
    //       }}
    //       align="center"
    //       gutterBottom
    //     >
    //       गुर्जर गौरव कल्याण परिषद, इंदौर
    //     </Typography>

    //     <Typography
    //       sx={{
    //         fontSize: { xs: "1.7rem", sm: "2.2rem" },
    //         fontWeight: 800,
    //         color: "primary.main",
    //       }}
    //       align="center"
    //       gutterBottom
    //     >
    //       "प्रतिमा सम्मान समारोह"
    //     </Typography>

    //     <Typography
    //       align="center"
    //       sx={{ fontSize: { xs: "1rem", sm: "1.3rem" }, mb: 3 }}
    //     >
    //       दिनांक 13/07/2025, रविवार
    //       <br />
    //       एसजीएसआईटीएस कॉलेज, इंदौर
    //       <br />
    //       शाम 5 से 8 तक
    //     </Typography>

    //     <Divider sx={{ my: 2 }} />

    //     <Typography sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, mb: 2 }}>
    //       इस वर्ष में प्रविष्टियां भेजने की अंतिम तिथि{" "}
    //       <strong>10 July 2025</strong> को समाप्त हो चुकी है।
    //       <br />
    //       अब हम कोई भी नई प्रविष्टि स्वीकार नहीं कर पाएंगे।
    //       <br /> धन्यवाद।
    //     </Typography>

    //     <Divider sx={{ my: 2 }} />

    //     <Typography
    //       variant="subtitle1"
    //       sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, mb: 1 }}
    //     >
    //       किसी भी जानकारी के लिए कृपया संपर्क करें{" "}
    //     </Typography>

    //     <Box
    //       component="ul"
    //       sx={{
    //         pl: 2,
    //         fontSize: { xs: "1rem", sm: "1.2rem" },
    //         m: 0,
    //         lineHeight: 1.8,
    //       }}
    //     >
    //       <li>Ashok Gurjar, Sub Inspector, Indore: 9826038175</li>
    //       <li>Dr. R. C. Gurjar, Professor, SGSITS: 9229580811</li>
    //       <li>Kishore Gurjar, CEO, Walking Dreamz: 8109730528</li>
    //       <li>Shailendra Kamar, Asst. Engineer, MPEB: 9926288075</li>
    //       <li>Amit Gurjar, Asst. Eng., MPEB Khandwa: 9074217141</li>
    //       <li>Gokul Gurjar, Sr. Software Engineer: 9229442673</li>
    //       <li>Surendra Gurjar, Sub Inspector: 9826372278</li>
    //     </Box>
    //   </Paper>
    // </Box>
  );
};

export default EntriesForEvent;
