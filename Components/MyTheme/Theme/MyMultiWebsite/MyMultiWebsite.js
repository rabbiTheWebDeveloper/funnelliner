

import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Tab, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import Modal from '@mui/material/Modal';
import { BiLinkAlt } from 'react-icons/bi';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import { merchantThemeList } from '../../../../pages/api';



const MyMultiWebsite = () => {


    // ViewPreviewModel
    const [openPreview, setOpenPreview] = useState(false);
    const handlePreview = () => setOpenPreview(true);
    const previewClose = () => setOpenPreview(false);

    // OpenSales Modal
    // const [openSales, setOpenSales] = useState(false);
    // const handleOpenSales = () => setOpenSales(true);
    // const handleCloseSales = () => setOpenSales(false);

    const [multiPageTemplate, setMultiPageTemplate] = useState([]);
    useEffect(() => {
        merchantThemeList("multiple").then((result) => {
        setMultiPageTemplate(result?.data?.data);
      });
    }, []);
    console.log(multiPageTemplate);
    return (
        <>

        <section className='TopSellingProducts DashboardSetting LandingWebsite'>

            <Container maxWidth="sm">

            <Grid Container spacing={3}>

                <Grid item xs={12}>

                <div className="Header d_flex d_justify">

                    {/* Left */}
                    <div className="Left d_flex">

                    <div className="svg">
                        <BsCodeSlash/>
                    </div>

                        <div className="text">
                            <h4> My Multipage Template</h4>
                            <p>choose your theme here and customize as you want</p>
                        </div>

                    </div>

                </div>

                </Grid>

                {/* LandingWebsite */}
                <div className="LandingWebsiteContent">

                    <div className="InvoiceFormate">

                        <Grid container spacing={3}>

                        {multiPageTemplate?.map((item, index) => {
                    return (
                      <Grid key={index} item xs={4}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            <img src={item.media.name} alt='' />
                          </div>
                          <div className='DuelButton d_flex d_justify'>
                            <div className='left'>
                              <Button onClick={handlePreview}>
                                View Preview
                              </Button>
                              <Modal
                                open={openPreview}
                                onClose={previewClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='InvoiceModal'>
                                    <img src={item.media.name} alt='' />
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            {/* <div className='right'>
                              <Button onClick={handleActiveTheme} Id={item.id}>
                                Import Theme
                              </Button>
                            </div> */}
                          </div>
                        </div>
                      </Grid>
                    );
                  })}



                        </Grid>

                    </div>

                </div>

            </Grid>

            </Container>

        </section>

        </>

    )

}

export default MyMultiWebsite