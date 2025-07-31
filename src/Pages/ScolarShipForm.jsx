import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

const ScolarShipForm = () => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
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
    </Box>
  );
};

export default ScolarShipForm;