import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { Person, Email, Phone, Comment } from "@mui/icons-material";
// import topImage from "../assets/image/top-contact-image.jpg";
import topImage from "../assets/image/Screenshot 2025-08-04 150606.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Box
        component="img"
        src={topImage}
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "400px", lg: "100%" },
          maxHeight: 620,
        }}
      />

      <Grid
        container
        spacing={{ xs: 6, lg: 3 }}
        display="flex"
        justifyContent="center"
        sx={{
          marginTop: { xs: "40px", lg: "80px" },
          px: { xs: 2, sm: 4, md: 6 },
          mb: { xs: 4, lg: 8 },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: 6,
              p: { xs: 3, sm: 4 },
              height: "fit-content",
              width: { lg: "600px" },
            }}
          >
            <Typography
              variant="h4"
              align="center"
              color="#a16627"
              fontWeight={800}
              fontSize={{ xs: "1.8rem", lg: "2.3rem" }}
              mb={2}
            >
              हमें संदेश भेजें
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              <TextField
                label="पहला नाम"
                name="firstname"
                variant="outlined"
                // size="small"
                fullWidth
                value={formData.firstname}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: <Person />,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    height: { xs: "12px", lg: "100%" },
                  },
                }}
              />
              <TextField
                label="उपनाम"
                name="lastname"
                variant="outlined"
                fullWidth
                value={formData.lastname}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: <Person />,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    height: { xs: "12px", lg: "100%" },
                  },
                }}
              />
              <TextField
                label="मेल पता"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: <Email />,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    height: { xs: "12px", lg: "100%" },
                  },
                }}
              />
              <TextField
                label="संदेश"
                name="message"
                multiline
                rows={{ xs: 2, lg: 4 }}
                variant="outlined"
                fullWidth
                value={formData.message}
                onChange={handleChange}
                slotProps={{
                  input: {
                    startAdornment: <Comment />,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    height: { xs: "20px", lg: "100%" },
                  },
                }}
              />
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#a16627",
                    color: "#fff",
                    fontSize: {lg:"17px"},
                    fontWeight: "700",
                    marginTop: "20px",
                    width: 120,
                    "&:hover": { backgroundColor: "#b17331" },
                  }}
                >
                  जमा करें
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: 6,
              padding: { xs: 3, sm: 4 },
              height: {xs:"300px"  ,lg:"87%"},
              width: { xs:"240px", lg: "600px" },
            }}
          >
            <Typography
              variant="h4"
              align="center"
              color="#a16627"
              fontSize={{ xs: "1.8rem", lg: "2.3rem" }}
              fontWeight={800}
            >
              संपर्क में रहो
            </Typography>

            {/* <Box>
              <Typography
                color="#131e36"
                sx={{
                  fontSize: { xs: "1rem", lg: "1.2rem" },
                  mt: { xs: 3, lg: 6 },
                }}
              >
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                <a
                  href="tel:9826038175"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Ashok Gurjar, ASI, Indore: 9826038175
                </a>
              </Typography>

              <Typography
                color="#131e36"
                sx={{
                  fontSize: { xs: "1rem", lg: "1.2rem" },
                  mt: { xs: 3, lg: 6 },
                }}
              >
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                <a
                  href="tel:9229580811"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  R. C. Gurjar, Professor, SGSITS, Indore: 9229580811
                </a>
              </Typography>

              <Typography
                color="#131e36"
                sx={{
                  fontSize: { xs: "1rem", lg: "1.2rem" },
                  mt: { xs: 3, lg: 6 },
                }}
              >
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                <a
                  href="tel:7000961866"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Kishore Gurjar, CEO Walking Dreamz Technology: 7000961866
                </a>
              </Typography>

              <Typography
                color="#131e36"
                sx={{
                  fontSize: { xs: "1rem", lg: "1.2rem" },
                  mt: { xs: 3, lg: 6 },
                }}
              >
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                <a
                  href="tel:992628807"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Shailendra Kamar, Asst. Engineer, MPEB: 992628807
                </a>
              </Typography>

              <Typography
                color="#131e36"
                sx={{
                  fontSize: { xs: "1rem", lg: "1.2rem" },
                  mt: { xs: 3, lg: 6 },
                }}
              >
                <Phone sx={{ verticalAlign: "middle", mr: 1 }} />
                <a
                  href="tel:9074217141"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Amit Gurjar, Asst. Eng. MPEB, Khandwa: 9074217141
                </a>
              </Typography>
            </Box> */}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100%",
          height: { xs: 200, lg: 400 },
          marginTop: { lg: "100px" },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765978.00238801!2d61.00083698256399!3d19.729113061269327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4c96895a01%3A0xc233513e52bfbe71!2z4KS24KWN4KSw4KWAIOCkl-ClgeCksOCljeCknOCksCDgpJfgpYzgpZwg4KSs4KWN4KSw4KS-4KS54KWN4KSu4KSjIOCkqOCkl-CksCDgpLjgpK3gpL4gKOCksOCknOCkvy4pIOCkh-CkguCkpuCljOCksA!5e0!3m2!1sen!2sus!4v1753959607991!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        />
      </Box>
    </>
  );
};

export default Contact;
