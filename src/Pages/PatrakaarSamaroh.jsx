import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/image/slider 1.jpg";
import img2 from "../assets/image/slider 2.jpg";
import img3 from "../assets/image/slider 3.jpg";
import img4 from "../assets/image/slider 4.jpg";
import backgroundImage from "../assets/image/section2 bgimage.jpg";
import "../style/ImageSlider.css"

const slides = [
  {
    image: img1,
    text: "हम सब मिलकर समाज के भविष्य को मजबूत बना रहे हैं हम कई वर्षों से एक शिक्षित और आत्मनिर्भर भविष्य के लिए अभियान चला रहे हैं – और हम रुकने वाले नहीं हैं। अब समय आ गया है कि हम अपने समाज के बच्चों को शिक्षित और मार्गदर्शन करें|",
  },
  {
    image: img2,
    text: "गुर्जर गौरव कल्याण परिषद की स्थापना 2016 में हमारे समाज के छात्रों की शिक्षा में सहयोग के लिए की गई थी। आज, हमारी टीम एक वैश्विक संगठन है जो हर छात्र को जीवन में सर्वोत्तम संभव शुरुआत और अच्छी शिक्षा प्रदान",
  },
  {
    image: img3,
    
    text: "विभिन्न पृष्ठभूमियों से आए छात्रों का हम पर और हमारी सभी गतिविधियों पर गहरा प्रभाव पड़ता है। वे समाज के उन हिस्सों को उजागर करते हैं जो टूटे हुए हैं, ताकि हम उन्हें आशा की किरण दिखाने और जीवन में आगे बढ़ने में हर संभव मदद कर सकें।",
  },
  {
    image: img4,
    text: "हम छात्रों, माता-पिता और शिक्षकों की प्रतिभा और ज्ञान प्रदान करते हैं, जिसका उद्देश्य केवल शिक्षा की गुणवत्ता में सुधार करना नहीं बल्कि पूरी शिक्षा प्रणाली को बेहतर बनाना है।",
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

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      spacing={4}
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: 6,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
                color: "text.primary",
                textAlign: "center",
                fontWeight: { xs: 400, md: 600 },
                fontSize: { xs: "1rem", md: "2rem" },
                width: { xs: "100%", lg: "500px" },
                mb: 2,
              }}
            >
              {slides[index].text}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Grid>

  
      <Grid item xs={12} md={6}>
        <AnimatePresence mode="wait">
          <motion.img  className="image-slide"
            key={index + "-image"}
            src={slides[index].image}
            alt="slide"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "12px",
              overflow: "hidden",
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          />
        </AnimatePresence>
      </Grid>
    </Grid>
  );
}
