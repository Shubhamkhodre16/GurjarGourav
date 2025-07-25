import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../assets/image/gaurav navbar img.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
   const currentYear = new Date().getFullYear(); 
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#333",
        color: "#F8FAFC",
        py: 4,
        px: { xs: 2, sm: 6 },
        mt: "auto",
      }}
    >
      <Grid
        container
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{px:2}}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ width: { xs: 120, sm: 160, md: 180 }, mb: 2 }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>
          <Typography variant="h6" sx={{fontWeight:"bold" , mb: 2 }}>
            {/* Stay up to date */}
            {t("footer.stay_updated")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              gap: 1,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              
              sx={{
                bgcolor: "#F8FAFC",
                borderRadius: 1,
                width: {
                  xs: "60%",
                  sm:"50%",
                  md:"50%",  
                  lg:"100%"
                },
                height:{xs:"30px",
                  lg:"38px"
                },
                
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#444",
                color: "#F8FAFC",
                
                width: {
                  xs: "34%",
                  lg:"34%"
                },
                height:{
                  xs:"30px",
                  lg:"100%"
                }
                
              }}
            >
              {/* Submit */}
              {t("footer.submit")}
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            {/* Quick Links */}
            {t("footer.quick_links")}
          </Typography>
          {["Home", "About", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/${t(label).toLowerCase()}`}
              sx={{
                color: "#F8FAFC",
                display: "block",
                mb: 1,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {t(label)}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          {[
            { name: "Ashok Gurjar", phone: "+919826038175" },
            { name: "Dr.R.C. Gurjar", phone: "+919229580811" },
            { name: "Kishore Gurjar", phone: "8109730528" },
            { name: "Shailendra Kamar", phone: "9926288075" },
            { name: "Gokul Gurjar", phone: "+919229442673" },
            { name: "Amit Gurjar", phone: "9074217141" },
          ].map(({ name, phone }) => (
            <Typography key={name} variant="body2" sx={{ mb: 1 }}>
              <Link
                href={`tel:${phone}`}
                sx={{
                  color: "#CBD5E1",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <CallIcon
                  sx={{
                    fontSize: "medium",
                    verticalAlign: "middle",
                    mr: 1,
                  }}
                />
                {name}: {phone}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Email ID
          </Typography>
          {[
            "Kishore@walkingdreamz.com",
            "rcgurgar79@gmail.com",
            "ashokgurjar@gmail.com",
          ].map((email) => (
            <Typography key={email} variant="body2" sx={{ mb: 1 }}>
              <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              <Link
                href={`mailto:${email}`}
                sx={{ color: "white", textDecoration: "none" }}
              >
                {email}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      <Box >
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#F8FAFC" , ml:0.5 }}
        >
          <FacebookIcon  sx={{fontSize: {xs:25 , lg:30 }}} />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#F8FAFC"  }}
        >
          <InstagramIcon  sx={{fontSize: {xs:25 , lg:30}}} />
        </IconButton>
      </Box>

      <Divider  sx={{ bgcolor: "#4A5568", my: 3 }} />

      <Typography align="center" variant="body2" sx={{ color: "#A0AEC0" }}>
        © {currentYear} Gurjar Gaurav Kalyan Parishad, Indore (M.P.) | Powered by Gurjar
        Gaurav Kalyan Parishad
      </Typography>
    </Box>
  );
};

export default Footer;
