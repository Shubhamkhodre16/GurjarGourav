import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Box,
  Chip,
  Avatar,
  Modal,
  Divider,
} from "@mui/material";
import backgroundImage from "../assets/image/section2 bgimage.jpg";

import maleimg from "../assets/image/male image.jpg";
import femaleimg from "../assets/image/female image.jpg";

const data = [
  {
    name: "डॉ. कविता पटेल",
    enName: "Dr. Kavita Patel",
    father: "श्री रामेश्वर पटेल",
    title: "हृदय रोग विशेषज्ञ, AIIMS दिल्ली",
    location: "मुंबई, भारत",
    tags: ["डॉक्टर", "MBBS", "MD"],
    phone: "+919826038175",
    // image: "https://randomuser.me/api/portraits/women/44.jpg",
    gender: "female",
    profession: "डॉक्टर",
  },
  {
    name: "डॉ. सीमा चौधरी",
    enName: "Dr. Seema Choudhary",
    father: "श्री रामेश्वर चौधरी",
    title: "गायनोकोलॉजिस्ट, फोर्टिस अस्पताल",
    location: "जयपुर, भारत",
    tags: ["डॉक्टर", "MBBS", "MS"],
    phone: "+919229580811",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/47.jpg",
    profession: "डॉक्टर",
  },
  {
    name: "एर. संजय गुर्जर ",
    enName: "er. Sanjay Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "सिविल इंजीनियर, एलएंडटी",
    location: "भोपाल, भारत",
    tags: ["इंजीनियर", "B.Tech", "M.Tech"],
    phone: "8109730528",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/48.jpg",
    profession: "इंजीनियर",
  },
  {
    name: "एर. पंकज गुर्जर",
    enName: "er. pankaj Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "सिविल इंजीनियर, एलएंडटी",
    location: "भोपाल, भारत",
    tags: ["इंजीनियर", "B.Tech", "M.Tech"],
    phone: "+919826038175",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/47.jpg",
    profession: "इंजीनियर",
  },
  {
    name: "श्रीमती रेखा गुर्जर",
    enName: "smt. Rekha Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "शिक्षिका, दिल्ली विश्वविद्यालय",
    location: "दिल्ली, भारत",
    tags: ["शिक्षक", "Ph.D", "M.A"],
    phone: "+919826038175",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/51.jpg",
    profession: "शिक्षक",
  },
  {
    name: "श्रीमती सविता गुर्जर",
    enName: "smt. savita Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "शिक्षिका, दिल्ली विश्वविद्यालय",
    location: "दिल्ली, भारत",
    tags: ["शिक्षक", "Ph.D", "M.A"],
    phone: "+919826038175",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/50.jpg",
    profession: "शिक्षक",
  },
  {
    name: "श्री नरेंद्र गुर्जर",
    enName: "mr. Narendra Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "आईआईटी टॉपर, कंप्यूटर साइंस",
    location: "कानपुर, भारत",
    tags: ["IIT", "JEE Advanced", "B.Tech"],
    phone: "+919826038175",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/52.jpg",
    profession: "आईआईटी छात्र",
  },
  {
    name: "श्री अशोक गुर्जर",
    enName: "mr. ashok Gurjar  ",
    father: "श्री रामेश्वर गुर्जर",
    title: "आईआईटी टॉपर, कंप्यूटर साइंस",
    location: "कानपुर, भारत",
    tags: ["IIT", "JEE Advanced", "B.Tech"],
    phone: "+919826038175",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/53.jpg",
    profession: "आईआईटी छात्र",
  },
  {
    name: "श्रीमती नीता गुर्जर",
    enName: "mr. Neeta Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "सामाजिक कार्यकर्ता, NGO India Cares",
    location: "लखनऊ, भारत",
    tags: ["सामाजिक कार्यकर्ता", "MA", "MSW"],
    phone: "+919826038175",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/67.jpg",
    profession: "सामाजिक कार्यकर्ता",
  },
  {
    name: "डॉ. नलिनी गुर्जर",
    enName: "Dr. naleeni Patel",
    father: "श्री रामेश्वर गुर्जर",
    title: "डेंटल सर्जन, SMS हॉस्पिटल",
    location: "जयपुर, भारत",
    tags: ["डॉक्टर", "BDS", "MDS"],
    phone: "+919826038175",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/53.jpg",
    profession: "डॉक्टर",
  },
  {
    name: "श्री हर्षवर्धन गुर्जर",
    enName: "mr. harshavardhanPatel",
    father: "श्री रामेश्वर गुर्जर",
    title: "आईएएस अधिकारी, भारत सरकार",
    location: "दिल्ली, भारत",
    tags: ["प्रशासनिक सेवा", "IAS", "UPSC"],
    phone: "+919826038175",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/66.jpg",
    profession: "प्रशासनिक अधिकारी",
  },
  {
    name: "श्रीमती ममता गुर्जर",
    enName: "smt. mamta Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "प्रधानाध्यापिका, सरकारी स्कूल",
    location: "उज्जैन, भारत",
    tags: ["शिक्षक", "M.Ed", "Ph.D"],
    phone: "+919826038175",
    gender: "female",
    // image: "https://randomuser.me/api/portraits/women/71.jpg",
    profession: "शिक्षक",
  },
  {
    name: "एर. विवेक गुर्जर",
    enName: "er. vivek Gurjar",
    father: "श्री रामेश्वर गुर्जर",
    title: "आईआईटी दिल्ली, मैकेनिकल इंजीनियर",
    location: "इंदौर, भारत",
    tags: ["IIT", "B.Tech", "M.Tech"],
    phone: "+919826038175",
    gender: "male",
    // image: "https://randomuser.me/api/portraits/men/54.jpg",
    profession: "आईआईटी छात्र",
  },
];

const SammanSamaroh = () => {
  // const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("सभी");
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleOpen = (person) => {
    setSelectedPerson(person);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPerson(null);
  };

  const professions = ["सभी", ...new Set(data.map((item) => item.profession))];

  const filteredData = data.filter((item) => {
    return filter === "सभी" || item.profession === filter;
  });

  // const maleimg = "../assets/image/male image.jpg";
  // const femaleimg = "../assets/image/female image.jpg";

  return (
    <Box
      sx={{
        px: 3,
        py: 4,
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#800000",
          fontWeight: "bold",
          borderBottom: "2px solid #800000",
          width: "fit-content",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mx: "auto",
          mb: 3,
        }}
      >
        समाज के गौरव सदस्य
      </Typography>

      {/* Filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <TextField
          select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size="small"
          variant="outlined"
          sx={{ bgcolor: "white", borderRadius: 1, width: 200 }}
        >
          {professions.map((profession) => (
            <MenuItem key={profession} value={profession}>
              {profession}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {filteredData.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => handleOpen(person)}
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                height: { lg: "300px", xs: "260px" },
                width: { lg: "280px", xs: "200px" },
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Avatar
                // src={person.image  }
                src={person.image ? person.image : person.gender === "male" ? maleimg : femaleimg}
          
                sx={{
                  width: { lg: 100, xs: 80 },
                  height: { lg: 100, xs: 80 },
                  border: "4px solid #f3bc83",
                  mb: { lg: 2 },
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {person.name}
                </Typography>
                <Typography color="textSecondary">{person.title}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {person.location}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    // flexWrap: "wrap",
                    flexDirection: "row",
                  }}
                >
                  {person.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      sx={{
                        bgcolor: "#a16627",
                        color: "#fff",
                        // background: linear-gradient("#f3bc83", "#fff3d9"),
                        fontWeight: 500,
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "row",
                        transition: "all 0.3s ease",
                        "&:hover": { transform: "scale(1.15)" },
                        // mt: { lg: 2, xs: 1 },
                        // gap:{xs:"1px", lg:"15px"},
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        scroll="body"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 3,
            maxWidth: { xs: "80%", sm: 500 },
            width: "100%",
            p: { xs: 2, sm: 4 },
            outline: "none",
          }}
        >
          {selectedPerson && (
            <>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Avatar
                  src={
                    selectedPerson.image ? selectedPerson.image : selectedPerson.gender === "male" ? maleimg : femaleimg
                  }
                  sx={{
                    width: { xs: 70, sm: 100 },
                    height: { xs: 70, sm: 100 },
                    mb: 1,
                    border: "3px solid #f3bc83",
                    mx: "auto",
                  }}
                />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {selectedPerson.name}
                </Typography>
                <Typography color="textSecondary">
                  {selectedPerson.title}
                </Typography>
                <Typography color="textSecondary">
                  {selectedPerson.location}
                </Typography>
                <Typography color="textSecondary">
                  {"पिताजी का नाम: "}
                  {selectedPerson.father}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {" मोबाइल नंबर : "}
                  {selectedPerson.phone}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {/* <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mt: 1 }}
                >
                  Details:
                </Typography> */}
                {selectedPerson.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    sx={{
                      bgcolor: "#a16627",
                      color: "#fff",
                      borderRadius: "20px",
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default SammanSamaroh;

//isme asa karna hai ki male or female ke liye agar by chance image nahi milti hai toh jo default image dikhe jese ye save hai mere vscode me const maleimg = "../assets/image/male image.jpg" const femaleimg = "../assets/image/female image.jpg"

{
  /* <TextField
          variant="outlined"
          size="small"
          placeholder="नाम या शहर से खोजें..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            width: { xs: 200, lg: 300 },
          }}
        /> */
}

// const filteredData = data.filter((item) => {
//   const matchesSearch =
//     item.name.toLowerCase().includes(search.toLowerCase()) ||
//     item.enName.toLowerCase().includes(search.toLowerCase()) ||
//     item.location.toLowerCase().includes(search.toLowerCase());
//   const matchesFilter = filter === "सभी" || item.profession === filter;
//   return matchesSearch && matchesFilter;
// });

// const data = [
//   {
//     name: "श्री पवनकुमार गुर्जर",
//     father: "श्री रामकुमार गुर्जर",
//     native: "ग्राम-लुकवासा (गुर्जर), तहसील-मानपुर, जिला-उमरिया",
//     current: "रीवा",
//     qualification: "C.A.",
//     workplace: "अर्पित अकाउंटिंग एण्ड टैक्सेशन सर्विसेस, रीवा",
//     phone: "8349231128",
//     image: "/images/member1.png",
//   },
//   {
//     name: "श्रीमती प्रज्ञा गुर्जर",
//     father: "श्री नंदकिशोर गुर्जर",
//     native: "खुजराहो, छतरपुर",
//     current: "भोपाल",
//     qualification: "C.A.",
//     phone: "—",
//     image: "/images/member2.png",
//   },
//   {
//     name: "श्री गगन बांगड़े",
//     father: "श्री भगवानदास बांगड़े",
//     native: "टोंगला, खिरकिया (हरदा)",
//     current: "अहमदाबाद",
//     qualification: "C.A.",
//     phone: "7879682775",
//     image: "/images/member3.png",
//   },
//   {
//     name: "श्री जयप्रकाश गुर्जर",
//     father: "श्री रामनारायण गुर्जर",
//     native: "टोंगला, खिरकिया",
//     current: "इंदौर",
//     qualification: "C.A.",
//     phone: "8989984306",
//     image: "/images/member4.png",
//   },
//   {
//     name: "श्री नितिन गुर्जर",
//     father: "श्री नरेश गुर्जर",
//     native: "दिलीरी (हरदा)",
//     current: "भोपाल",
//     qualification: "C.A.",
//     phone: "9754241861",
//     image: "/images/member5.png",
//   },
//   {
//     name: "पाखी गुर्जर",
//     father: "श्री सुरेश गुर्जर",
//     native: "ग्राम-खेरिया, तहसील-पथरिया",
//     current: "भोपाल",
//     qualification: "C.A.",
//     phone: "9644187355",
//     image: "/images/member6.png",
//   },
//   {
//     name: "श्री राजेन्द्र भावसार",
//     father: "श्री राजेश भावसार",
//     native: "दिलीरी (हरदा)",
//     current: "जबलपुर",
//     qualification: "C.A.",
//     phone: "9306044237",
//     image: "/images/member7.png",
//   },
//   {
//     name: "श्री संतोष छत्तानी",
//     father: "श्री मोहनलाल छत्तानी",
//     native: "आलोटपुर, रतलाम",
//     current: "जबलपुर",
//     qualification: "C.A.",
//     phone: "8817775607",
//     image: "/images/member8.png",
//   },
// ];
