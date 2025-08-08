import React from "react";
import { Box, Typography, Paper, Grid, Divider } from "@mui/material";
import img1 from "../assets/image/Screenshot 2025-08-01 164551.png";
import img2 from "../assets/image/Screenshot 2025-08-01 164731.png";
import img3 from "../assets/image/Screenshot 2025-08-01 164807.png";
import img4 from "../assets/image/Screenshot 2025-08-01 164915.png";
import img5 from "../assets/image/Screenshot 2025-08-05 125003.png";
import backgroundImage from "../assets/image/section2 bgimage.jpg";

const data = [
  {
    image: img1,
    name: "श्री ठाकुरलाल जी पटेल",
    headline: "संस्थापक अध्यक्ष- भुऑणा प्रांतीय गुर्जर सभा, हरदा",
    text: "भुऑणा प्रांतीय गुर्जर सभा को जिस महापुरुष से प्रारंभिक संस्कार प्राप्त हुए वे है भुवाना प्रांतीय गुर्जर समाज के प्रथम अध्यक्ष श्री ठाकुरलाल जी पटेल जिन्हें वर्तमान में सभी श्रद्धा से दादाजी के नाम से सम्बोधित करते है। पूज्य श्री ठाकुरलाल पटेल का जन्म ग्राम रन्हाईकला के विख्यात जमींदार घराने में स्व.श्री लक्ष्मीनारायणजी पटेल के यहाँ सन् 1925 को (हिन्दी पंचाग अनुसार विक्रम संवत 1982) श्रावन मास शुक्ल पंचमी) को हुआ। आप वर्तमान में अध्यक्ष श्री नन्हेलालजी पटेल (भूतपूर्व विधायक) के अग्रज भ्रांता है। प्रारंभिक शिक्षा ग्राम रन्हाईकला में प्राप्त करने के उपरांत आपने निकटस्थ नगर हरदा एवं तत्पश्चात् पवारखेड़ा से अपनी माध्यमिक स्तर की शिक्षा पूर्ण की।",
  },
  {
    image: img2,
    name: "श्री महन्त परमेश्वरदासजी श्याम ",
    headline: "श्री महन्त परमेश्वरदासजी श्याम का जीवन परिचय",
    text: "श्री महन्त परमेश्वरदासजी श्याम भैया उपनाम से विख्यात थे, उनका जन्म 17-07-1942 को बोरतलाई ग्राम में हुआ था, शिक्षा मेहरागाँव इटारसी में प्राप्त की। स्नातक शिक्षा इटारसी में प्राप्त की। 3 वर्ष वन विभाग में शासकीय सेवा की। इसके बाद नर्मदापुरम में शासकीय सेवा दी रिटायरमेंट 2002 तक। उनका आध्यात्मिक जीवन शासकीय सेवा के साथ-साथ श्रेष्ठतम का श्री रामजी बाबा समाधि पर रहकर गुरु महाराज की सेवा एवं स्थान के विकास के लिए सदा तत्पर रहें। समाधि के सलाना उत्सव मेला, भण्डारा (गुरु परवी), गुरु पूर्णिमा आदि सभी उत्सव जोर-शोर से उत्साह से मनाते इस शहर में उनकी अलग पहचान थी और आध्यात्मिक आयोजनों में सहभागिता सदा रहती थी, जैसे- रामलीला में गायन एवं पात्र निर्देशक की सेवा 50-60 वर्ष तक दी।",
  },
  {
    image: img3,
    name: "भक्त श्रीजयकिशोरशरणजी जयंती ",
    headline: "(श्रीधाम वृन्दावन - श्रीजयनारायण पटेल चौकड़ीवाले)",

    text: "त्रिगुणात्मक इस मायामय जगत् में जिसे प्राप्त करना अत्यंत ही दुर्लभ हैवह है मनुष्य-देह। केवल भगवत्कृपा से ही मानव-जन्म प्राप्त होता है- बड़े भाग मानुष तन पावा मनुजरूपी यह दुर्लभ उपहार केवल अनन्त आनंदसिंधु-स्वरूप श्रीसर्वेश्वर प्रभु की प्राप्ति हेतु ही तो मिला है। ऐसा सुअवसर सुलभ होने पर भी जो जीवन भगवत्सेवा-प्राप्ति के अखण्ड-अनन्त सुख को प्राप्त न करके अज्ञतावश नश्वर-क्षणिक सुखको स्वीकार कर लेता है उसे कर्मानुसार कई कल्प पर्यन्त चौरासी लाख योनियों के भोग भोगने पड़ते हैं। अनादि माया-जाल में परिलिप्त प्राणी की मुक्ति भगवत्कृपा के बिना कदापि संभव नहीं- 'अनादि मायापरियुक्तरूपं त्वेनं विदुवै भगवत्प्रसादात् ।' ",
  },
  {
    image: img4,
    name: "स्व.श्री रामरतनलालजी बागरे",
    headline: " समाज के चिन्तक एवं प्रेरणास्त्रोत ",
    text: "स्व.श्री रामरतनलालजी बागरे समाज के चिन्तक एवं प्रेरणास्त्रोत भुवाना प्रांतीय गुर्जर समाज में सामाजिक सुधारों का प्रारंभ जिन प्रवर्तकों द्वारा हुआ, उमें अग्रण्य रहे गुरु गंभीर व्यक्तित्व के धनी स्व. श्री रामरतनलालजी बाघड़े। पूरे क्षेत्र में सम्मान से जिन्हें मास्टर साहब के नाम से जाता है। स्व.श्री रामरतनलालजी बागरे का जन्म ग्राम सौताड़ा में, एक कृषक परिवार में श्री जगन्नाथजी गुर्जर के यहाँ सन् मई 1998 में हुआ। ग्राम सौताड़ा में प्राथमिक स्थानीय पाठशाला न होने से उन्होंने ग्राम कुकरावद जाकर अपनी प्राथमिक शिक्षा सन् 1901 में पूर्ण की मार्च 1919 में उन्होंने हरदा नगर से हाईस्कूल से मैटिक परीक्षा उत्तीर्ण की।",
  },
  {
    image: img5,
    name: "स्व. श्री राम भाऊ पटेल ",
    headline: " नयाखेड़ा न्यायसभा के संस्थापक अध्यक्ष कार्यकाल : 1944 से ",
    text: "एक युवा ने समाज को संगठित करने का बीड़ा उठाया आजादी से पहले गुर्जर समाज में शिक्षा का स्तर नगण्य था न साधन थे न रुझान था न संगठन की कल्पना थी, क्योंकि उस समय संगठित होना भी सरकार के कानून तोड़ने जैसा था ऐसी परिस्थिति में निमाड़ और भुऑणा का संधि क्षेत्र जिसके आगे उजाड़ी क्षेत्र कहलाता था वहाँ से एक युवा ने समाज को संगठित करने का बीड़ा उठाया और उसे सफलता के साथ पूर्ण करते हुए उस क्षेत्र का नाम दिया नयाखेड़ा,न्याय सभा जिसका केन्द्र बनाया, खिरकिया के वो ऊर्जावान युवा थे नयाखेड़ा न्याय सभा के प्रथम एवं संस्थापक अध्यक्ष श्री रामभाऊ पटेल (दुबल्या) निसानियां श्री रामभाऊ पटेल 1946 से .... के अध्यक्ष रहे उनकी अध्यक्षता में समाज में शिक्षा, संगठन और सामाजिक विकास पर बहुत काम किया गया।",
  },
];

const ScolarShipForm = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 4, lg: 10 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          // px: { xs: 2, sm: 4, md: 6 },
          // py: 6,
          backgroundImage: `url(${backgroundImage})`,
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
            // marginBottom:"50px"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: { xs: "1.5rem", lg: "2.5rem" },
              // textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            हमारे प्रिय प्रेरणा स्त्रोत
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            // mt: { xs: 2, lg: 4 },
            color: "#374151",
            fontSize: { xs: "0.95rem", lg: "1.3rem" },
            // mb: { lg: 5 },
            px: { xs: 2 },
          }}
          align="center"
        >
          श्री भुऑणा प्रांतीय गुर्जर सभा हरदा के मंगलभवन में लगी तस्वीरों में
          समाज सुधार के क्षेत्र में हमारे प्रेरणास्त्रोत मार्गदर्शक एवं संगठन के
          संस्थापक एवं संरक्षक
       
        </Typography>
        {data.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <Grid
              container
              item
              key={index}
              spacing={{ lg: 30 }}
              alignItems="center"
              justifyContent="center"
              direction={{ xs: "column", lg: isEven ? "row-reverse" : "row" }}
              sx={{
                mb: 6,
                // boxShadow: 10,
                // p: 5,
                // borderRadius: 5,
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={
                  {
                    // boxShadow: 10,
                    // p: 4,
                    // borderRadius: 5,
                  }
                }
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#615320",
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: { xs: "1rem", md: "2.2rem" },
                    width: { xs: "100%", lg: "500px" },
                    mb: { xs: 2, lg: 3 },
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    width: { xs: "100%", lg: "500px" },
                    mb: { xs: 2, lg: 3 },
                  }}
                >
                  {item.headline}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: 500,
                    // px:{xs:4},
                    fontSize: { xs: "1rem", md: "1.3rem" },
                    width: { xs: "90%", lg: "500px" },
                    ml: { xs: 2 },
                  }}
                >
                  {item.text}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={item.image}
                  alt={`image-${index}`}
                  sx={{
                    width: { xs: 200, sm: 300, lg: 350 },
                    height: { xs: 200, sm: 300, lg: 350 },
                    borderRadius: "12px",
                    objectFit: "fill",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    mx: "auto",
                  }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      {/* <Box sx={{ px: 2, py: 4 }}>
        <Paper
          elevation={4}
          sx={{
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 5 },
            maxWidth: 700,

            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontWeight: 700,
            }}
            align="center"
            gutterBottom
          >
            गुर्जर गौरव कल्याण परिषद, इंदौर
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.4rem" },
              mb: 2,
              lineHeight: 1.7,
            }}
          >
            इस वर्ष छात्रवृति हेतु आवेदन की अंतिम तिथि{" "}
            <strong>25 June 2025</strong> को समाप्त हो चुकी है।
            <br />
            अब हम कोई भी नया आवेदन स्वीकार नहीं कर पाएंगे। धन्यवाद।
            <br />
            गुर्जर गौरव कल्याण परिषद, इंदौर (म. प्र.)
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, mb: 1 }}
          >
            किसी भी जानकारी के लिए कृपया संपर्क करें
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 2,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              m: 0,
              lineHeight: 1.8,
            }}
          >
            <li>Ashok Gurjar, Sub Inspector, Indore: 9826038175</li>
            <li>Dr. R. C. Gurjar, Professor, SGSITS: 9229580811</li>
            <li>Kishore Gurjar, CEO, Walking Dreamz: 8109730528</li>
            <li>Shailendra Kamar, Asst. Engineer, MPEB: 9926288075</li>
            <li>Amit Gurjar, Asst. Eng., MPEB Khandwa: 9074217141</li>
            <li>Gokul Gurjar, Sr. Software Engineer: 9229442673</li>
            <li>Surendra Gurjar, Sub Inspector: 9826372278</li>
          </Box>
        </Paper>
      </Box> */}
    </>
  );
};

export default ScolarShipForm;
