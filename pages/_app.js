import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";
import '../styles/admin_dashboard.css';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Loader from '../Components/Loader/Loader';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });

  }, [Router])
  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Funnel Line</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/favicon.png" />
        
        

      </Head>
      {/* <div className="Preloader">
                    <img src="sppiner.gif" />
                </div> */}
       {isLoading && <Loader/>}
        <Component {...pageProps} />
  
    </>
  );

  


}

export default MyApp