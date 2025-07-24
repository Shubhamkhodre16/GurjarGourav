import { useTranslation } from "react-i18next";
import { Button, Stack } from "@mui/material";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <Stack direction="row"  justifyContent="flex-end" sx={{mr:4}} >
      <Button onClick={() => i18n.changeLanguage("en")} variant="outlined">English</Button>
      <Button onClick={() => i18n.changeLanguage("hi")} variant="outlined">हिन्दी</Button>
    </Stack>
  );
};

export default LanguageSwitcher;