import React from "react";
import { Box, Grid, Typography, CardMedia, Card } from "@mui/material";
import topImage from "../assets/image/slider 3.jpg";
import background from "../assets/image/section2 bgimage.jpg";
import section1 from "../assets/image/about section 1.jpg";
import section12 from "../assets/image/about section 1-2.jpg";

import section2 from "../assets/image/about section2.jpg";

import img1 from "../assets/image/about section3-1.jpg";
import img2 from "../assets/image/about section3-2.jpg";
import img3 from "../assets/image/about section3-3.jpg";
import img4 from "../assets/image/about section3-4.jpg";
const About = () => {
  const images = [img1, img2, img3, img4];

  return (
    <>
      <Box
        component="img"
        src={topImage}
        sx={{
          width: "100%",
          maxWidth: "auto",
          maxHeight: "550px",
          height: "100%",
          // objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          py: { xs: 5, lg: 5 },
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "100%", lg: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
                  color: "#18345b",
                  mb: 2 ,

                  textAlign: { xs: "center", md: "left" },
                }}
              >
                हमारे बारे में
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                  color: "#1F2937",
                  textAlign: { xs: "center", md: "left" },
                  
                }}
              >
                हम जो हैं
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: {xs:2, lg: 4 },
                  color: "#374151",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                  width: "90%",
                }}
              >
                गुर्जर गौरव कल्याण परिषद फाउंडेशन एक स्वतंत्र धर्मार्थ ट्रस्ट
                है। हमारा चैरिटी एक वैश्विक संगठन है जो हर छात्र को जीवन में
                सर्वोत्तम संभव शुरुआत और अच्छी शिक्षा प्रदान करने के लिए अथक
                प्रयास करता है। गुर्जर गौरव कल्याण परिषद हमारे समाज के वंचित
                छात्रों की सहायता और उनकी शिक्षा तक पहुँच को बेहतर बनाने के लिए
                अग्रणी कार्यक्रम चलाता है। उदाहरण के लिए, वे स्थानीय बाल विकास
                केंद्रों तक पहुँच प्रदान करके और अपने "एवरी लास्ट चाइल्ड" अभियान
                के माध्यम से उन छात्रों तक पहुँचने का प्रयास करते हैं जो शिक्षा
                से वंचित हैं, खासकर लड़कियों तक। इसके अलावा, उनका स्कूल
                स्वास्थ्य और पोषण कार्यक्रम हमारे समाज के बच्चों के लिए स्वच्छ
                जल, दृष्टि जाँच और शिक्षा तक पहुँच बढ़ाता है।
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: "auto", mt: { xs: 3 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: {xs:4 , lg: 2 },
              }}
            >
              <Box
                component="img"
                src={section1}
                sx={{
                  width: { xs: "65%", lg: "45%" },
                  maxWidth: 300,
                  borderRadius: 3,
                  boxShadow: 3,
                  // width: { xs: "200px", lg: "auto" },
                  // height: { xs: "350px", lg: "380px" },

                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.10)",
                    boxShadow: 6,
                  },
                }}
              />

              <Box
                component="img"
                src={section12}
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  width: { xs: "65%", lg: "100%" },
                  height: "100%",
                  maxWidth: 260,
                  marginLeft: { lg: "20px" },
                  marginBottom: { lg: "180px" },

                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.10)",
                    boxShadow: 6,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: { xs: 5, lg: 12 },
          backgroundImage: `url(${background})`,
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
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { lg: "260px" },
              }}
            >
              <Box
                component="img"
                src={section2}
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  width: { xs: "65%", lg: "100%" },
                  height: "100%",
                  maxWidth: 300,
                  // marginLeft: { lg: "100px" },
                  mt: { lg: "50px" },

                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "scale(0.90)",
                    boxShadow: 6,
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: { xs: "100%", lg: "60%" } }}>
            <Box sx={{ ml: { lg: "100px" } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                  color: "#1F2937",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {/* {t("home.our_story")} */}
                हमारी कहानी
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  color: "#374151",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                  width: { xs: "90%", sm: "85%", md: "80%", lg: "70%" },
                }}
              >
                {/* {t("home.our_story_text")} */}
                गुर्जर गौरव कल्याण परिषद की स्थापना 2016 में हमारे समाज के
                छात्रों की शिक्षा में सहयोग के लिए की गई थी। आज, हमारी टीम एक
                वैश्विक संगठन है जो हर छात्र को जीवन में सर्वोत्तम संभव शुरुआत
                और अच्छी शिक्षा प्रदान करने के लिए अथक प्रयास कर रही है। गुर्जर
                गौरव कल्याण परिषद हमारे समाज के वंचित छात्रों की सहायता और उनकी
                शिक्षा तक पहुँच को बेहतर बनाने के लिए अग्रणी कार्यक्रम चलाती है।
                उदाहरण के लिए, वे स्थानीय बाल विकास केंद्रों तक पहुँच प्रदान
                करके और अपने एवरी लास्ट चाइल्ड अभियान के माध्यम से, उन छात्रों
                तक पहुँचने का प्रयास करते हैं जो शिक्षा से वंचित हैं, खासकर
                लड़कियों तक।
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          // px: { xs: 2, sm: 4, md: 3 },
          // py: { xs: 5, sm: 8, md: 3 },
          py: { lg: 10, xs: 5 },
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ width: { xs: "70%", lg: "38%" }, mt: { lg: "80px" } }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
                color: "#1F2937",
                // maxWidth: { md: "50%", lg: "80%" },
              }}
            >
              हम कैसे करते हैं
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: {xs:2 ,lg:4},
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                // maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              हर छात्र को सीखने का अवसर मिलना चाहिए
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: {xs:2 ,lg:4},
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                // maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              गुर्जर गौरव कल्याण परिषद उन बच्चों तक पहुंचने के लिए है जो सीखने
              और शिक्षा से सबसे अधिक वंचित हैं। गुर्जर गौरव कल्याण परिषद हमारे
              समाज में शिक्षा की गुणवत्ता में सुधार करने के लिए बनाई गई एक अभिनव
              शिक्षण संस्था है।
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 4,
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                // maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              हम छात्रों को प्रेरित करने और उनके करियर को आकार देने में मदद करते
              हैं—जो भविष्य की सफलता का एक प्रमुख संकेतक है। हम विशेष रूप से उन
              कमज़ोर बच्चों तक पहुँचने पर ध्यान केंद्रित करते हैं जहाँ प्रारंभिक
              शिक्षा के संसाधन दुर्लभ हैं। हम यह सुनिश्चित करते हैं कि किसी भी
              बच्चे की शिक्षा संकट में फँसने के कारण न रुके।
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mt: { xs: 5, md: 0 },
              mb:{xs:2},
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
                      height: { xs: 140, sm: 160, md: 200, lg: 250 },
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
          py: { xs: 5, lg: 10 },
            bgcolor: "#d1d1d1",
          // margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // width: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: {xs:2,lg:5},
              mb: {xs:1,lg:3},
              fontWeight: 600,
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              color: "#1F2937",
            }}
          >
            हमारा विशेष कार्य
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: { xs: 2, lg: 5 },
              mb: { xs: 1, lg: 3 },
              fontWeight: 500,
              fontSize: { xs: "1.2rem", sm: "2.5rem", md: "1.8rem" },
              color: "#1F2937",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
            }}
          >
            हमारा मिशन यह सुनिश्चित करना है कि सभी युवाओं और बच्चों को उनकी
            जरूरत के अनुसार सभी प्रकार की सहायता मिले, चाहे वह किसी भी प्रकार की
            सहायता हो।
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: { xs: 2, lg: 5 },
              mb: { xs: 1, lg: 3 },
              fontWeight: 300,
              fontSize: { xs: "1.3rem", sm: "2.5rem", md: "1.5rem" },
              color: "#1F2937",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
            }}
          >
            चाहे वह आश्वस्त करने वाली बातचीत हो, वित्तीय सहायता हो, शिक्षा हो,
            व्यावसायिक प्रशिक्षण हो, या केवल यह आश्वासन हो कि वे अकेले नहीं हैं,
            हम यह सुनिश्चित करेंगे कि हर किसी को यथासंभव शीघ्रता से उनकी
            आवश्यकतानुसार सहायता मिले। एली और एडीथ ब्रॉड फाउंडेशन शिक्षा,
            विज्ञान और कला के क्षेत्र में हमारे अग्रणी संस्थानों का दृढ़तापूर्वक
            नेतृत्व करता है, साथ ही उन संगठनों, पहलों और नेताओं को आगे बढ़ाता है
            जो हमारे समय की चुनौतियों का साहसपूर्वक समाधान करते हैं और लॉस
            एंजिल्स के ऐतिहासिक रूप से हाशिए पर पड़े समुदायों के लिए अवसरों का
            विस्तार करते हैं।
          </Typography>
        </Box>
      </Box>


      <Box
        sx={{
          py: { xs: 5, lg: 8 },
          // margin: "0 auto",
          bgcolor: "#8d8d8d",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            // width: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mt: { xs: 2, lg: 5 },
              mb: {xs:1, lg: 3},
              fontWeight: 600,
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              color: "#1F2937",
            }}
          >
           हमारा नज़रिया
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: { xs: 2, lg: 5 },
              mb: 3,
              fontWeight: 500,
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "1.8rem" },
              color: "#1F2937",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
              // lineHeight: 1.5,
              wordSpacing: "0.1em",
              letterSpacing: "0.05em",
            }}
          >
           हम एक ऐसे समाज का निर्माण करना चाहते हैं जहां कोई भी बच्चा या युवा अकेला महसूस न करे और उसे यथाशीघ्र हर संभव सहायता मिले।
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: { xs: 2, lg: 5 },
              mb: 3,
              fontWeight: 300,
              fontSize: { xs: "1.1rem", sm: "2.5rem", md: "1.5rem" },
              color: "#1F2937",
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
              lineHeight: 2,

            }}
          >
           हमारी पूरी टीम एक ऐसा समाज देखना चाहती है जहाँ हर युवा, जो किसी भी तरह से संघर्ष कर रहा है, मदद के लिए सक्षम महसूस करे और ऐसे लोग हों जो उसकी शिक्षा, नौकरी और अन्य ज़रूरतों में उसकी मदद करें। हम हर क्षेत्र में फैलना चाहते हैं ताकि हम सभी तक पहुँच सकें। हम एक ऐसी दुनिया की कल्पना करते हैं जहाँ हर कोई एक स्थायी, समतापूर्ण अर्थव्यवस्था को आकार दे सके और उसमें भाग ले सके जो जनहित में हो और एक उज्जवल भविष्य का निर्माण करे। हम अपने समुदाय को एक ऐसे अवसर के रूप में देखते हैं जहाँ सभी एंजेलिनोस, चाहे उनकी पृष्ठभूमि कुछ भी हो, के पास विकास और फलने-फूलने के रास्ते और साधन हों।
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
