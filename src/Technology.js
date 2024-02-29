


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import {sections} from './sectionsArray'
import GridTable from './GridTable';
import { useEffect, useState } from 'react';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Technology() {

  const [responseMeteo, setResponseMeteo] = useState([]);


  useEffect(() => {
   
  
    const url = "https://api.open-meteo.com/v1/forecast"+
                 "?latitude=52.52&longitude=13.41&"+
                 "past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

    fetch(url).then( 
               (response) => response.json()).then( 
                           (json) => console.log(json));

  }, []);


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
            <p> Technology page </p>
            <GridTable results = {responseMeteo}/>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
