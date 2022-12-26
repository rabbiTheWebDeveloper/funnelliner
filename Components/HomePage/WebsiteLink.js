import { Alert, Box, Button, Collapse, Container, Grid, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';

const WebsiteLink = () => {

    const [open, setOpen] = useState(true);

    // Model
    const [openModel, setOpenModel] = useState(false);
    const handleOpenModal = () => setOpenModel(true);
    const handleCloseModal = () => setOpenModel(false);

    return (

        <>

            <section className='WebsiteLink'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="WebsiteLinkContent">

                                <Box sx={{ width: '100%' }}>

                                    <Collapse in={open}>
                                        <Alert
                                        action={
                                            <IconButton
                                            aria-label="close"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                            >
                                            <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                        sx={{ mb: 2 }}
                                        >

                                            <div className="WebsiteLinkItem d_flex">

                                                <div className="img">
                                                    <img src="images/web-site_img.svg" alt="" />
                                                </div>

                                                <div className="text">

                                                    <h4>Your Website Link Is Ready !</h4>

                                                    <ul>
                                                        <li>Visit the following link to view your website <Link href=''>www.salesolutionbd.com/ready</Link></li>
                                                        <li>
                                                            Share Your Link: 

                                                            <Link href='' className='SocialLink'><BsFacebook/></Link>
                                                            <Link href='' className='SocialLink'><IoLogoWhatsapp/></Link>
                                                            <Link href='' className='SocialLink'><AiOutlineLink/></Link>

                                                        </li>
                                                        <li> <Link href='' className='Btn'>Get Your Custome Domain Name</Link> </li>
                                                    </ul>

                                                </div>

                                            </div>
                                        
                                        </Alert>

                                    </Collapse>

                                </Box>
                            
                            </div>      

                        </Grid>

                        <Grid item xs={12}>

                            <div className="WelcomeModel">

                                <Button onClick={handleOpenModal}>Open modal</Button>

                                <Modal
                                    open={openModel}
                                    onClose={handleCloseModal}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box>
                                        
                                        <div className="WelcomeModelContent">

                                            <h3>Congratulations !</h3>

                                            <div className="Gif d_flex d_justify">

                                                <div className="img">
                                                    <img src="images/gif1.gif" alt="" />
                                                </div>

                                                <div className="img">
                                                    <img src="images/gif2.gif" alt="" />
                                                </div>

                                                <div className="img">
                                                    <img src="images/gif1.gif" alt="" />
                                                </div>

                                            </div>

                                            <p>Welcome to <span>the first automated E Commerce funnel</span> in bangladesh</p>

                                        </div>

                                    </Box>

                                </Modal>
                            
                            </div>      

                        </Grid>

                    </Grid>

                </Container>

            </section>      

        </>

    )

}

export default WebsiteLink