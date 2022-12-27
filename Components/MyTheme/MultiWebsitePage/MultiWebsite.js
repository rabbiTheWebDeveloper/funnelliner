import { TabContext, TabPanel, TabList } from "@mui/lab";
import {Box,Button,Container,FormControl,Grid,IconButton,InputLabel,MenuItem,Select,Tab,TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import {activeMultipleTemplate,multiPageTemplateList} from "../../../pages/api";
import {mainBaseUrl} from "../../../pages/api/index"


const MultiWebsite = () => {
  // ViewPreviewModel
  const [openPreview, setOpenPreview] = useState(false);
  const handlePreview = () => setOpenPreview(true);
  const previewClose = () => setOpenPreview(false);

  const [multiPageTemplate, setMultiPageTemplate] = useState([]);
  useEffect(() => {
    multiPageTemplateList().then((res) => {
      setMultiPageTemplate(res.data.data);
    });
  }, []);


  const handleActiveTheme = (e) => {
    const themeId = e.target.id;
    activeMultipleTemplate(themeId).then((res) => {
      console.log(res);
        if(res.status===200){
            Swal.fire("Setting",  `Theme active success ${e.target.id}`);
        }
    });
  };
//   console.log(multiPageTemplate)
//   src={`mainBaseUrl/${item.multiple_theme_image.name}`}
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
                    <h4>Multiple Page Website</h4>
                    <p>choose your theme here and customize as you want</p>
                  </div>
                </div>
              </div>
            </Grid>

            {/* LandingWebsite */}
            <div className='LandingWebsiteContent'>
              <div className='InvoiceFormate'>
                <Grid container spacing={3}>
                  {multiPageTemplate.map((item, index) => {
                    return (
                      <Grid item xs={4}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            {/* <img src={`${mainBaseUrl}${item.multiple_theme_image.name}`} alt='' /> */}
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
                                    {/* <img src={`${mainBaseUrl}${item.multiple_theme_image.name}`} alt='' /> */}
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            <div className='right'>
                              <Button onClick={handleActiveTheme} Id={item.id}>
                                Import Theme
                              </Button>
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

export default MultiWebsite;