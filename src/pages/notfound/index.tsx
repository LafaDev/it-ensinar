import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { ErrorOutline, ArrowBack } from "@mui/icons-material";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ErrorOutline sx={{ fontSize: "8rem", color: "red" }} />
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 4 }}>
        Pagina nao encontrada!
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        essa página não existe ainda :C
      </Typography>
      <Button variant="contained" color="primary" startIcon={<ArrowBack />} onClick={handleGoBack}>
           Voltar para pagina principal 
      </Button>
    </Box>
  );
};

export default NotFoundPage;