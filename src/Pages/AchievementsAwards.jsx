import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Modal,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/image/Gm(1).png";
import img2 from "../assets/image/Gm(2).png";
import img3 from "../assets/image/Gm(3).png";
import img4 from "../assets/image/Gm(4).png";
import img5 from "../assets/image/Gm(5).png";
import backgroundImage from "../assets/image/section2 bgimage.jpg";
import "../style/ImageSlider.css";

import imgA from "../assets/image/Bh a3.png";
import imgB from "../assets/image/Bh a4.png";
import imgC from "../assets/image/BH c 13.png";
import imgD from "../assets/image/Bh c 18.png";
import imgE from "../assets/image/BH c 2.png";
import imgF from "../assets/image/BH d 5.png";
import imgG from "../assets/image/Bh a3.png"
import imgH from "../assets/image/BH c 13.png"

const slides = [
  {
    image: img1,
    headline:"संदेश",
    text: "यह अत्यन्त हर्ष का विषय है कि भुऑणा प्रांतीय गुर्जर महासभा, हरदा अपने संगठन का 'अमृत महोत्सव' मनाने जा रहे हैं गर्व का विषय है कि इस वर्ष देश भी अपना आजादी का अमृत महोत्सव मना रहा है। इस विषय पर गुर्जर समाज के जागरूक समाजसेवी भू-वाणी पत्रिका के माध्यम से समाज की 75 वर्षों की उपलब्धियों का संकलन एवं समाजोत्थान के संदर्भ इस पत्रिका में समाहित करने वाले हैं। मैं संपादक मण्डल को बधाई एवं गुर्जर समाज को उज्जवल भविष्य की शुभकामनाएँ प्रेषित करता हूँ।",
  },
  {
    image: img2,
    headline:"संदेश",
    text: "हर्ष का विषय है कि प्रांतीय गुर्जर सभा हरदा द्वारा स्थापना के अमृत महोत्सव का आयोजन किया जा रहा है। इस अवसर पर पत्रिका भू-वाणी का प्रकाशन सराहनीय है। सामाजिक पत्रिका समाज के गौरवशाली अतीत के विवरण और स्वर्णिम भविष्य के निर्माण की आयोजन का संकलन होता है। समाज के आदर्शों और नैतिक मूल्यों की जानकारी समाज में पारस्परिक सहयोग और सेवा के द्वारा सद्धाव का वातावरण बनाती हैं। सदस्यों में भ्रातृत्व भाव का प्रसार कर एकमत और एकजुट प्रयासों के द्वारा समाज के विकास का पथ प्रदर्शन करती है। आशा है समाज की संगठनात्मक गतिविधियों का 75वर्षों का सफरनामा पत्रिका भू- वाणी देश, प्रदेश की उन्नति में समाज के योगदान के गौरवशाली इतिहास और भविष्य की योजनाओं का संग्रहणीय दस्तावेज होगी। अमृत महोत्सव समाज में पारस्परिक संवाद और सहयोग का मंच बनेगा। शुभकामनाएँ,",
  },
  {
    image: img3,
    headline:"संदेश",

    text: "जानकर अति प्रसन्नता हुई कि श्री भुऑणा गुर्जर सभा, हरदा के 75 वर्ष पूर्ण होने पर एक स्मारिका भू-वाणी के नाम से प्रकाशन हो रहा है। जिसमें संगठन के 75 वर्षों की यात्रा पर संक्षिप्त विवरण का संकलन प्रकाशन निश्चित ही नई पीढ़ी को मार्गदर्शन प्रदान करती रहेगी। हमारे मार्ग दर्शक, प्रेरणा स्त्रोत, संस्थापक, अध्यक्ष श्री ठाकुरलालजी पटेल, श्रद्धेय श्री नन्हेलालजी पटेल एवं उनके साथियों द्वारा सामाजिक समरसता के लिए दिया गया योगदान हम सबके लिए मिल का पत्थर है। इसीको आगे बढ़ाना, संरक्षित कर विकसित करना ही समाज को नई दिशा-प्रदान करेगा। मैं प्रकाशन मंडल को बधाई ओर शुभकामनाएँ प्रदान करता हूँ कि यह पत्रिका समाज की अमूल्य धरोहर के रूप में सबको प्रेरणा देती रहेगी।",
  },
  {
    image: img4,
    headline:"संदेश",
    text: "हर्ष का विषय है कि भुऑणा प्रांतीय गुर्जर सभा, हरदा के 75 वर्ष पूर्ण होने पर समाज के साहित्य प्रेमी लोगों का सम्पादक मंडल विगत 75 वर्षों की सामाजिक उपलब्धियों पर एक पत्रिका 'भूवाणी' का प्रकाशन कर रहे है जिसमें समाज के विभिन्न विषयों का समावेश संकलित किया है। जिसमें कृषि, व्यवसाय, उद्योग, शासकीय सेवा, स्वास्थ्य, संस्कृति पौराणिक परम्परा से वर्तमान परिस्थिति तक मुख्य-मुख्य विषयों पर सारगर्भित लेखों का प्रकाशन निश्चित ही आने वाली पीढ़ी के लिए एक लिखित इतिहास के रूप में समाज की धरोहर रहेगी। मैं 'भूवाणी' के सफल एवं सुफल प्रकाशन के लिए संपादक मंडल को हार्दिक बधाई देता हूँ एवं आशा करता हूँ कि हर घर इस पत्रिका को सम्मान मिलेगा।",
  },
  {
    image: img5,
    headline:"संदेश",
    text: "आज वर्तमान परिप्रेक्ष्य में भूऑणा प्रान्तार्गत गुर्जर महासभा सुसंस्कृत होकर अपनी सांस्कृतिक धरोहर को समेटे हुए अग्रसर है। समाज आज शिक्षा के क्षेत्र में बहुत उन्नती कर रहा है, सामाजिक बन्धुओं का समाज को शिक्षा के क्षेत्र में आगे बढ़ाने में काफी योगदान रहा है। शिक्षा के क्षेत्र में उन्नति होने से समाज में व्याप्त कुरुतियाँ समाप्त होती जा रही है। शिक्षित होने से कृषि व्यापार, तथा सेवा क्षेत्र में समाज आगे बड़ा, समाज बंधुओं द्वारा उन्नत कृषि तकनीक का प्रयोग, व्यापारिक संस्थाओं का संचालन करना, शासकीय व निजी क्षेत्र में भी आज समाज के युवा, अन्य समाज के युवाओं से प्रतिस्पर्धा कर रहे है। सामाजिक बंधु प्रशासनिक क्षेत्र में भी अग्रसर तथा समाज की प्रतिष्ठा को आगे बढ़ाये और कृषि क्षेत्र में और आर्थिक उन्नति करें। व्यावसायिक प्रगति करें और देश हित में अर्थात् देश की प्रगति में योगदान करें। समाज आगे बढ़ेगा तो देश आगे बढ़ेगा।",
  },
];

export default function SplitCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const imageData = [imgA, imgB, imgC, imgD, imgE, imgF, imgG , imgH];

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
    <>
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
            height: {xs:"60px" ,lg:"100px"},
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
              fontSize:{xs:"1.5rem" ,lg:"2.5rem"},
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            उपलब्धियां और पुरस्कार
          </Typography>
        </Box>

        <Grid
          container
          spacing={{xs:2 ,lg:5}}
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
              sx={{ display: "flex", justifyContent: "center" , mb:{xs:2 , lg:4}}}
            >
              <Box
                position="relative"
                sx={{
                  cursor: "pointer",
                   width: { xs: "135px", sm:"200px", md:"250px" , lg: "280px" },
                  height: { xs: "135px",sm:"200px",md:"250px" , lg: "280px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow:10 ,
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
        {/* <Modal open={open} onClose={handleClose}>
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
        </Modal> */}
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
              sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 ,bgcolor: "#000000aa", color:"white" }}
            >
              <CloseIcon sx={{
                    fontSize: { xs: "0.8rem", lg: "1.5rem" },
                  }}/>
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50%",
                width: "100%",
                // padding: "20px", // optional for spacing
              }}
            >
              <img
                src={imageData[activeIndex]}
                alt={`Slide ${activeIndex}`}
                style={{
                  // maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  display: "block",

                  // maxHeight: "500px",
                  // height: "100%",
                  objectFit: "contain",
                  // display: "block",
                }}
              />
            </Box>

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
                  }}/>
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




      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        spacing={4}
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: 2,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           overflowX: "hidden", 
    position: "relative",
    height:{lg:"650px"} ,
    width:"100%"

        }}
      >
        <Grid item xs={12} md={6}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index + "-text"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color:"red" ,
                  textAlign: "center",
                  fontWeight: { xs: 600, md: 800 },
                  fontSize: { xs: "2rem", md: "3rem" },
                  width: { xs: "100%", lg: "500px" },
                  mb: {lg:2},
                  mt:4
                }}
              >
                {slides[index].headline}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  textAlign: "center",
                  fontWeight: { xs: 400, md: 600 },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  width: { xs: "100%", lg: "500px" },
                  mb: 2,
                  mt:5
                }}
              >
                {slides[index].text}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Grid>

        <Grid item xs={12} md={6} >
          <AnimatePresence mode="wait">
            <motion.img
              className="image-slide"
              key={index + "-image"}
              src={slides[index].image}
              alt="slide"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration:0.8, ease: "easeIn" }}
              style={{
                // position: "absolute",
                // right:0,
                width: "400px",
                height: "400px",
                borderRadius: "12px",
                overflow: "hidden",
                objectFit: "cover",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            />
          </AnimatePresence>
        </Grid>
      </Grid>
    </>
  );
}
