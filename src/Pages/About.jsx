import React from "react";
import { Box, Grid, Typography, CardMedia, Card } from "@mui/material";
import topImage from "../assets/image/Screenshot 2025-08-04 150606.png";
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
                  mb: 2,

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
                  mt: { xs: 2, lg: 4 },
                  color: "#374151",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                  width: "90%",
                }}
              >
                माँ नर्मदा के पाव न तट से सतपुड़ा की पर्वत श्रृंखलाओं के मध्य
                हरसूद से होशंगाबाद तक क पाँच तहसीलों, सिवनी, मालवा, टिमरनी,
                हरदा, खिरड़िया, हरसूद के सम्मिलित क्षेत्र में बसा गुर्जर समाज
                भुवाना प्रांतीय गुर्जर सभी हरदा द्वारा अधिशासित होता है। इस
                भुवाना प्रांत में वैसे तो कई जाति व समुदाय के लोग बसते हैं,
                परन्तु गुर्जर समाज अपने मर्यादित, विनय शील आचरण से इस क्षेत्र का
                सिरमौर समाज है। भुवाना प्रांतीय गुर्जर समाज का संगठन और इसके
                प्रगतिशील कार्य अन्य समाजों के लिए अनुशरण का विषय है। भुवाना
                प्रांता का अभ्युदय-प्राचीन होशंगाबाद जिला सदियों पूर्व गहन वनों
                से आच्छाादित एक आदिवासी क्षेत्र या वर्तमान में यहाँ बसा हुआ
                गुर्जर समाज कहाँ से और कब आया इसका कोई स्पष्ट इतिहास नहीं मिलता
                परन्तु जन श्रुतियों के अनुसार लगभग पांच शताब्दी पूर्व जब गुजरात
                में मुगलों का पूर्ण अधिपत्य हो गया था,
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: "auto", mt: { xs: 3 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                gap: { xs: 4, lg: 2 },
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
            flexDirection:{xs: "column-reverse", md: "row"},
          }}
        >
          <Grid item xs={12} md={4} flexDirection="column-reverse" >
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
                  mb: { xs: "50px" },

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
                  width: { xs: "90%", sm: "85%", md: "80%", lg: "95%" },
                }}
              >
                भुवाना प्रांतीय गुर्जर समाज का इतिहास भुवाना क्षेत्र में बसने
                वाले गुर्जर प्रारंभ से ही किसी भी तरह के अपराधों से दूर और धर्म
                भीरू रहे, यहाँ का गुर्जर समाज मर्यादाओं का पालन करने वालाौर नियम
                कायदों को स्वीकार करने वाला नैसर्गिक मूल गुण इसमें प्रारंभ से ही
                है। प्रारंभ से संभवतः प्रत्येक गांव के अपने-अपने रामायण मंडल ही
                आपस में सामाजिक मिलन का एकमात्र जरिया थे। पहले समाज अलग-अलग
                गुटों में बंटा हुआ था, जिसमें मूल रूप से दो खेमे का नेतृत्व
                स्व.श्री नंदलालजी पटेल सोडलपुर एवं दूसरे का श्री ठाकुरलाल जी
                पटेल रन्हाई करते थे। उस वक्त के बुजुर्गों की प्रेरणा एवं समाज के
                प्रति संगठन की जिम्मेदारी की भआवना से एक नई जागृति आई और सन्
                1946 के आपास पूर भुवाना प्रांत के लिए एक सर्वोच्च संस्था श्री
                भुवाना प्रांतीय गुर्जर सभा हरदा का उदय हुआ, सन् 1947 से भुवाना
                प्रांतीय गुर्जर सभा के लिखित दस्तावेज उपलब्ध है। (देखे दस्तावेज
                क्रमांक 1) 1949 के आसपास पूरे समाज के लिए एक सर्वमान्य लिखित
                संविधान का निर्माण किया गया, जिससे पूरे गुर्जर समाज अधिशासित
                होने लगायह कितना सुखद साम्य है कि हमारे भारत देश के संविधान और
                हमारे भुवाना प्रांतीय गुर्जर सभा के संविधान की उम्र करीबन एक ही
                है (सबसे पुराना लिखित संविधान देखे दस्तावेज क्रमांक 2) समय-समय
                पर परिस्थितियों के अनुसार नियम बनाने एवं संविधान में संशोधन करने
                हेतु कुछ एक वर्षों के अनियमित अंतराल से श्री भुवाना प्रांतीय
                गुर्जर सभा केअधिवेशन होते रहे जो 1984 से नियमित पाँच वर्ष के
                अंतराल से हो रहे है। प्रथम अधिवेशन से आज तक के सोलहवें अधिवेशन
                निम्नानुसार हुए।
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
                mt: { xs: 2, lg: 4 },
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
                mt: { xs: 2, lg: 4 },
                color: "#374151",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                // maxWidth: { md: "85%", lg: "70%" },
              }}
            >
              दिनाँक 30 जुलाई 1995 को सम्पन्न भुआणा प्रांतीय गुर्जर समाज के
              कार्यकारिणी सदस्यों की सभा में एक स्थायी "शिक्षा कोष" की स्थापना
              का निर्णय लिया गया था। स्वजातिय बंधुओं के सहयोग से इसमें निरंतर
              राशि जमा हो रही है।
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
              छात्रवृत्तियाँ : 1. कक्षा 9वीं, 10वीं में 500 रुपये प्रतिवर्ष।
              कक्षा 8वीं की बोर्ड परीक्षाफल के आधा पर एक-एक छात्रवृत्ति। 2.
              कक्षा 11वीं, 12वीं में 500 रुपये प्रतिवर्ष। कक्षा 10वीं की बोर्ड
              परीक्षाफल के आधा पर एक-एक छात्रवृत्ति। 3. कक्षा 8वीं के विकलांग
              विद्यार्थी को 50 प्रतिशत से अधिक अंक प्राप्त होने पर 500 रुपये
              प्रतिवर्ष छात्रवृत्ति दी जायेगी। 4. सिर्फ कक्षा 9वीं, 11वीं हेतु
              छात्रवृत्ति देने का प्रावधान है। यह छात्रवृत्ति अगले वर्ष भी
              निरंतर रहेगी। यदि छात्र प्रथम प्रयास में ही उत्तीर्ण कर लेता है।
              5. विकलांग छात्र को कक्षा 9वीं में ही छात्रवृत्ति दी जावेगी।
            </Typography>
          </Grid>

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

      <Box
        sx={{
          py: { xs: 5, lg: 10 },
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              mb: { xs: 1, lg: 3 },
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
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              mb: { xs: 1, lg: 3 },
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
            हम एक ऐसे समाज का निर्माण करना चाहते हैं जहां कोई भी बच्चा या युवा
            अकेला महसूस न करे और उसे यथाशीघ्र हर संभव सहायता मिले।
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
            हमारी पूरी टीम एक ऐसा समाज देखना चाहती है जहाँ हर युवा, जो किसी भी
            तरह से संघर्ष कर रहा है, मदद के लिए सक्षम महसूस करे और ऐसे लोग हों
            जो उसकी शिक्षा, नौकरी और अन्य ज़रूरतों में उसकी मदद करें। हम हर
            क्षेत्र में फैलना चाहते हैं ताकि हम सभी तक पहुँच सकें। हम एक ऐसी
            दुनिया की कल्पना करते हैं जहाँ हर कोई एक स्थायी, समतापूर्ण
            अर्थव्यवस्था को आकार दे सके और उसमें भाग ले सके जो जनहित में हो और
            एक उज्जवल भविष्य का निर्माण करे। हम अपने समुदाय को एक ऐसे अवसर के
            रूप में देखते हैं जहाँ सभी एंजेलिनोस, चाहे उनकी पृष्ठभूमि कुछ भी हो,
            के पास विकास और फलने-फूलने के रास्ते और साधन हों।
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
