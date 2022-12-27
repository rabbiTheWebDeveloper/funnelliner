import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Tab, TextField } from '@mui/material';
import React, { useState } from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import Modal from '@mui/material/Modal';
import { BiLinkAlt } from 'react-icons/bi';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';



const LandingWebsite = () => {


    // ViewPreviewModel
    const [openPreview, setOpenPreview] = useState(false);
    const handlePreview = () => setOpenPreview(true);
    const previewClose = () => setOpenPreview(false);

    // OpenSales Modal 
    const [openSales, setOpenSales] = useState(false);
    const handleOpenSales = () => setOpenSales(true);
    const handleCloseSales = () => setOpenSales(false);



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
                            <h4>Landing Page Template</h4>
                            <p>choose your theme here and customize as you want</p>
                        </div>

                    </div>
                    
                </div>   

                </Grid>

                {/* LandingWebsite */}
                <div className="LandingWebsiteContent">

                    <div className="InvoiceFormate">

                        <Grid container spacing={3}>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing1.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">

                                    <Button onClick={handlePreview}>View Preview</Button>

                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                        <div className="InvoiceModal">
                                            <img src="images/landing1.png" alt="" />
                                        </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">

                                        <Button className='ModalBtn' onClick={handleOpenSales}>Import Themes</Button>

                                        {/* modal */}
                                        <Modal
                                            open={openSales}
                                            onClose={handleCloseSales}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box>

                                                <div className="SalesTargetModal">

                                                    <div className="Header d_flex">

                                                        <div className="svg">
                                                            <BiLinkAlt/>
                                                        </div>

                                                        <div className="text">
                                                            <h5>Add Page</h5>
                                                            <p>Add pages for your website</p>
                                                        </div>

                                                    </div>

                                                    <div className="Form">

                                                        <div className="CustomeInput">
                                                            <label>Page Title</label>
                                                            <TextField id="outlined-basic" label="Enter page title here" variant="outlined" />
                                                        </div>

                                                        <div className="CustomeInput">

                                                            <p className='PageLink'>Page Link: <Link href=''>www.funnelliner.com/MyShopName/Page <FiEdit/> </Link></p>
                                                            
                                                            <div className="DuelButton">
                                                                <Button>Publish</Button>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </Box>

                                        </Modal>

                                    </div>

                                </div>

                                </div>

                            </Grid>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing2.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">
                                    <Button onClick={handlePreview}>View Preview</Button>
                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                            <div className="InvoiceModal">
                                                <img src="images/landing2.png" alt="" />
                                            </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">
                                    <Button>Import Theme</Button>
                                    </div>

                                </div>

                                </div>

                            </Grid>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing3.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">
                                    <Button onClick={handlePreview}>View Preview</Button>
                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                        <div className="InvoiceModal">
                                            <img src="images/landing13.png" alt="" />
                                        </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">
                                    <Button>Import Theme</Button>
                                    </div>

                                </div>

                                </div>

                            </Grid>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing4.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">
                                    <Button onClick={handlePreview}>View Preview</Button>
                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                        <div className="InvoiceModal">
                                            <img src="images/landing4.png" alt="" />
                                        </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">
                                    <Button>Import Theme</Button>
                                    </div>

                                </div>

                                </div>

                            </Grid>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing5.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">
                                    <Button onClick={handlePreview}>View Preview</Button>
                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                        <div className="InvoiceModal">
                                            <img src="images/landing5.png" alt="" />
                                        </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">
                                    <Button>Import Theme</Button>
                                    </div>

                                </div>

                                </div>

                            </Grid>

                            {/* item */}
                            <Grid item xs={4}>

                                <div className="InvoiceFormateItem">

                                <div className="img">
                                    <img src="images/landing6.png" alt="" />
                                </div>

                                <div className="DuelButton d_flex d_justify">

                                    <div className="left">
                                    <Button onClick={handlePreview}>View Preview</Button>
                                    <Modal
                                        open={openPreview}
                                        onClose={previewClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box>
                                        <div className="InvoiceModal">
                                            <img src="images/landing6.png" alt="" />
                                        </div>
                                        </Box>

                                    </Modal>

                                    </div>

                                    <div className="right">
                                    <Button>Import Theme</Button>
                                    </div>

                                </div>

                                </div>

                            </Grid>

                        </Grid>
                        
                    </div>

                </div>

            </Grid>

            </Container>

        </section>    

        </> 

    )

}

export default LandingWebsite