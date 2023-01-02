import { TabContext, TabPanel, TabList } from "@mui/lab";
import {Box,Button,Container,FormControl,Grid,IconButton,InputLabel,MenuItem,Select,Tab,TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import { BiLinkAlt } from "react-icons/bi";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { allThemeList, getWebsiteSettings, importLandingPage, importTheme } from "../../../pages/api";
import { mainBaseUrl } from "../../../constant/constant";
const axios = require("axios");
import Swal from "sweetalert2";

const LandingWebsite = () => {
  // ViewPreviewModel
  const [openPreview, setOpenPreview] = useState(false);
  const handlePreview = () => setOpenPreview(true);
  const previewClose = () => setOpenPreview(false);

  // OpenSales Modal
  const [openSales, setOpenSales] = useState(false);
  const handleOpenSales = () => setOpenSales(true);
  const handleCloseSales = () => setOpenSales(false);



  //theme dynamic work by rejaul

  const [landingPageTemplate, setLandingPageTemplate] = useState([]);
  const [websiteSettingData, setWebsiteSettingData]=useState({})
  useEffect(() => {
    allThemeList("landing").then((result) => {
      setLandingPageTemplate(result?.data?.data);
    });
    getWebsiteSettings().then((res)=>{
      setWebsiteSettingData(res?.data?.data)
    })
  }, []);

  const shopName = websiteSettingData?.shop_name;
  const [pageTittle, setPageTittle] =useState("")
  const handlePageTitleChange=(e)=>{
    setPageTittle(e.target.value)
  }

  const handleImportTheme=(event)=>{
    importTheme("landing", event.target.id)
    .then(res=>{
      console.log("importTheme", res)
    })
    importLandingPage(pageTittle, event.target.id, 1)
    .then((res)=>{
      // console.log(res)
        setOpenSales(false)
        if(res.status===200){
            Swal.fire("Setting",  `Page active success ${event.target.id}`);
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText:'ok'
              })
        }
    })
  }
  return (
    <>
      <section className='TopSellingProducts DashboardSetting LandingWebsite'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className='Header d_flex d_justify'>
                {/* Left */}
                <div className='Left d_flex'>
                  <div className='svg'>
                    <BsCodeSlash />
                  </div>

                  <div className='text'>
                    <h4>Landing Page Template</h4>
                    <p>choose your theme here and customize as you want</p>
                  </div>
                </div>
              </div>
            </Grid>

            {/* LandingWebsite */}
            <div className='LandingWebsiteContent'>
              <div className='InvoiceFormate'>
                <Grid container spacing={3}>
                  {/* item */}
                  {landingPageTemplate?.map((item, index) => {
                    return (
                      <Grid item xs={4} key={index}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            {/* {console.log(...item.media.name)} */}
                            <img src={item?.media?.name} alt="" />

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
                                    <img  src={item?.media?.name} alt='' />
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            <div className='right'>
                              <Button
                                id={item.id}
                                className='ModalBtn'
                                onClick={handleOpenSales}
                              >
                                Import Themes
                              </Button>

                              {/* modal */}
                              <Modal
                                open={openSales}
                                onClose={handleCloseSales}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='SalesTargetModal'>
                                    <div className='Header d_flex'>
                                      <div className='svg'>
                                        <BiLinkAlt />
                                      </div>

                                      <div className='text'>
                                        <h5>Add Page</h5>
                                        <p>Add pages for your website</p>
                                      </div>
                                    </div>

                                    <div className='Form'>
                                      <div className='CustomeInput'>
                                        <label>Page Title</label>
                                        <TextField
                                        onChange={handlePageTitleChange}
                                          id='outlined-basic'
                                          label='Enter page title here'
                                          variant='outlined'
                                        />
                                      </div>

                                      <div className='CustomeInput'>
                                        <p className='PageLink'>
                                          Page Link:{" "}
                                          <Link href=''>
                                            www.funnelliner.com/{shopName}/p/{pageTittle}
                                            <FiEdit />{" "}
                                          </Link>
                                        </p>

                                        <div className='DuelButton'>
                                          <Button onClick={handleImportTheme} id={item.id}>Publish</Button>
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
                    );
                  })}
                </Grid>
              </div>
            </div>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default LandingWebsite;
