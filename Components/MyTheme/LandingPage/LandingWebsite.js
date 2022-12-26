import { Box, Button, Container, Grid, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiLinkAlt } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';



const DashboardSetting = () => {

  // Filter 
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Tabs
  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (

    // OpenSales Modal 
    const [openSales, setOpenSales] = useState(false);
    const handleOpenSales = () => setOpenSales(true);
    const handleCloseSales = () => setOpenSales(false);



    <>

      <section className='TopSellingProducts DashboardSetting'>

        <Container maxWidth="sm">

          <Grid Container spacing={3}>

              <Grid item xs={12}>

                <div className="Header d_flex d_justify">

                  {/* Left */}
                  <div className="Left d_flex">
                  
                    <div className="svg">
                        <AiOutlineSetting/>
                    </div>

                        <div className="text">
                            <h4>Settings</h4>
                            <p>Update your shop info and other settings here</p>
                        </div>

                    </div>
                    
                </div>   

              </Grid>

          </Grid>

        </Container>

      </section>    

    </> 

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

export default DashboardSetting