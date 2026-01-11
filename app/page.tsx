"use client"
import { Box, Typography } from "@mui/material";

export default function Inicio() {

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", mt: 3}}>
      <Typography variant="h4" component={"h1"} sx={{ fontWeight: 600 }}>Bem Vindo!</Typography>
    </Box>
  )
}