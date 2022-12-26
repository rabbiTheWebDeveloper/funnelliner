import { TabContext, TabPanel, TabList } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Tab,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import Switch from "@mui/material/Switch";
import Modal from "@mui/material/Modal";
import { AiFillCaretDown } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCamera, AiOutlineSetting } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {
  getWebsiteSettings,
} from "../../pages/api";
import Swal from "sweetalert2";
import { baseUrl } from "../../constant/constant";

import axios from "axios";
import Cookies from "js-cookie";

const WebsiteSettingPage = () => {
  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    "X-Requested-With": "XMLHttpRequest",
  };

  // Tabs
  const [value, setValue] = useState("1");
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  // Togol Switch
  const label = { inputProps: { "aria-label": "Switch demo" } };

  // ViewPreview
  const [openPreview, setOpenPreview] = useState(false);
  const handlePreview = () => setOpenPreview(true);
  const previewClose = () => setOpenPreview(false);

  // DropDown Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //settings data get

  const [checked, setChecked] = useState(true);
  const [invoice, setInvoice] = useState(1);
  const [customDomain, setCustomDomain] = useState("uriuitrue");
  const [websiteSettingsData, setWebsiteSettingData] = useState({});
  useEffect(() => {
    getWebsiteSettings().then((result) => {
      setWebsiteSettingData(result?.data?.data);
      setInvoice(result?.data?.data?.invoice_id)
      setChecked(result?.data?.data?.invoice_id==='0'?true:false)
    });
  }, []);

  const switchHandler = (event) => {
    setChecked(checked);
    axios.post(`${baseUrl}/client/settings/website/update`, {cash_on_delivery:checked===true?"1":"0"}, {
      headers: headers,
    })
    .then(function (response) {
      Swal.fire(
        "Setting",
        event.target.checked === true
          ? "Cash on Delivery enable"
          : "Cash on Delivery Disable "
      );
    })
    .catch(function (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.msg,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });

  };

  const handleInvoice = (e) => {
    setInvoice(e.target.value);
    axios.post(`${baseUrl}/client/settings/website/update`, {invoice_id:e.target.value,custom_domain:"customDomain",cash_on_delivery:checked===true?"1":"0"}, {
      headers: headers,
    })
    .then(function (response) {
      Swal.fire("Setting",  `Active invoice ${e.target.value}`);
    })
    .catch(function (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.msg,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
  };

  const handleCustomDomain = (e) => {
    setCustomDomain(e.target.value);
  };
  const handleUpdateDomain = () => {
    handleUpdateWebsiteSetting(checked, customDomain).then((result) => {
      console.log(result);
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    // formData.append("cash_on_delivery","0");
    // formData.append("invoice_id", 1);
    // formData.append("custom_domain", "customDomain");
    formData.append("shop_name", data.shopName);
    formData.append("shop_address", data.shopAddress);
    if(data.companyLogo.length===1){
      formData.append("website_shop_logo",data.companyLogo[0]);
    }
    formData.append("website_shop_id", data.shopID);
    formData.append("meta_title", data.websiteTitle);
    formData.append("meta_description", data.description);
    axios.post(`${baseUrl}/client/settings/website/update`, formData, {
      headers: headers,
    })
    .then(function (response) {
      Swal.fire("Setting", response.data.msg, "success");
    })
    .catch(function (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.msg,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
  };

  return (
    <>
      <section className='TopSellingProducts DashboardSetting WebsiteSettingPage'>
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
                    <h4>Website Setting</h4>
                    <p>Update your shop info and other settings here</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* DashboardSettingTabs */}
          <div className='DashboardSettingTabs WebsiteSettingPage'>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChangeTab}
                    aria-label='lab API tabs example'
                  >
                    <Tab label='Payment Method' value='1' />
                    <Tab label='Invoice Format' value='2' />
                    <Tab label='Custom Domain' value='3' />
                    <Tab label='Business Information' value='4' />
                  </TabList>
                </Box>

                {/* Business Information */}
                <TabPanel value='1'>
                  <div className='WebsiteSettingCashOnDelivary d_flex d_justify'>
                    <div className='left d_flex'>
                      <div className='img'>
                        <img src='images/cashon.svg' alt='' />
                      </div>
                      <h4>Enable Cash On Delivery</h4>
                    </div>

                    <div className='right'>
                      <div>
                        <Switch
                          onChange={switchHandler}
                          {...label}
                          defaultChecked={checked}
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* Business Information */}
                <TabPanel value='2'>
                  <div className='InvoiceFormate'>
                    <Grid container spacing={2}>
                      {/* item */}
                      <Grid item xs={4}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            <img src='images/invoice1.svg' alt='' />
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
                                    <img
                                      src='images/modal_invoice.png'
                                      alt=''
                                    />
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            <div className='right'>
                              <Button onClick={handleInvoice} value='1'>
                                Use Invoice
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Grid>

                      {/* item */}
                      <Grid item xs={4}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            <img src='images/invoice2.svg' alt='' />
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
                                    <img
                                      src='images/modal_invoice.png'
                                      alt=''
                                    />
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            <div className='right'>
                              <Button onClick={handleInvoice} value='2'>
                                Use Invoice
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Grid>

                      {/* item */}
                      <Grid item xs={4}>
                        <div className='InvoiceFormateItem'>
                          <div className='img'>
                            <img src='images/invoice3.svg' alt='' />
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
                                    <img
                                      src='images/modal_invoice.svg'
                                      alt=''
                                    />
                                  </div>
                                </Box>
                              </Modal>
                            </div>

                            <div className='right'>
                              <Button onClick={handleInvoice} value='3'>
                                Use Invoice
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </TabPanel>

                {/* Business Information */}
                <TabPanel value='3'>
                  <div className='ChooseDomain'>
                    <Grid container spacing={2}>
                      <Grid item xs={2}></Grid>

                      {/* item */}
                      <Grid item xs={8}>
                        <div className='ChooseDomainItem'>
                          <h4>Choose your custom domain name</h4>

                          <div className='CustomeInput'>
                            <div className='left'>
                              <h5>www.</h5>
                            </div>

                            <input
                              onChange={handleCustomDomain}
                              type='text'
                              placeholder='Type your domain'
                            />

                            <Button onClick={handleUpdateDomain}>Search</Button>

                            <div className='DropDown'>
                              <h3
                                id='basic-button'
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                              >
                                <h6 className='d_flex'>
                                  All
                                  <div className='svg'>
                                    <AiFillCaretDown />
                                  </div>
                                </h6>
                              </h3>
                              <Menu
                                id='basic-menu'
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                }}
                              >
                                <MenuItem onClick={handleClose}>Today</MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Yesterday
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Tomorrow
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  This Weak
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  This Month
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Last Month
                                </MenuItem>
                              </Menu>
                            </div>
                          </div>

                          {/* DomainPart */}
                          <div className='DomainPart d_flex'>
                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .com
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>

                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .xyz
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>

                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .net
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>

                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .org
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>

                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .net
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>

                            {/* DomainPartItem */}
                            <div className='DomainPartItem'>
                              <Link href=''>
                                .org
                                <img src='images/domain_leg.svg' alt='' />
                              </Link>
                            </div>
                          </div>

                          {/* Your Current Website Link */}
                          <div className='YourWebLink'>
                            <h6>Your Current Website Link</h6>
                            <Link href=''>
                              www.funnelliner.com/MyShopName/Page
                            </Link>
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={2}></Grid>
                    </Grid>
                  </div>
                </TabPanel>

                {/* Business Information */}
                <TabPanel value='4'>
                  <div className='DashboardTabsItem'>
                    <h4>Update Business Information</h4>
                    <p>Update your shop info and other settings</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='DashboardForm'>
                        {/* Shop Info */}
                        <div className='DashboardFormItem'>
                          <Grid container spacing={3}>
                            <Grid item xs={3}>
                              <div className='left'>
                                <h5>Shop Info</h5>
                                <p>
                                  This will be displayed on your shop profile
                                </p>
                              </div>
                            </Grid>

                            <Grid item xs={9}>
                              <div className='CustomeInput'>
                                <div className='Item'>
                                  <label>Shop Name</label>
                                  <TextField
                                    {...register("shopName")}
                                    id='outlined-basic'
                                    defaultValue={
                                      websiteSettingsData?.shop_name
                                    }

                                    variant='outlined'
                                  />

                                  <div className='svg'>
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className='Item'>
                                  <label>Shop Address</label>
                                  <TextField
                                    {...register("shopAddress")}
                                    id='outlined-basic'
                                    defaultValue={
                                      websiteSettingsData?.shop_address
                                    }

                                    variant='outlined'
                                  />

                                  <div className='svg'>
                                    <FiEdit />
                                  </div>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>

                        {/* Company Logo */}
                        <div className='DashboardFormItem'>
                          <Grid container spacing={3}>
                            <Grid item xs={3}>
                              <div className='left'>
                                <h5>Company Logo</h5>
                                <p>
                                  This will be displayed on your shop profile
                                </p>
                              </div>
                            </Grid>

                            <Grid item xs={9}>
                              <div className='CustomeInput'>
                                <div className='Item Upload'>
                                  <label>Company Logo</label>

                                  <Button variant='contained' component='label'>
                                    Upload
                                    <input
                                      {...register("companyLogo")}
                                      hidden
                                      accept='image/*'
                                      multiple
                                      type='file'
                                    />
                                  </Button>

                                  <div className='svg'>
                                    <AiOutlineCamera />
                                  </div>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>

                        {/* Shop Info */}
                        <div className='DashboardFormItem'>
                          <Grid container spacing={3}>
                            <Grid item xs={3}>
                              <div className='left'>
                                <h5>Shop Info</h5>
                                <p>
                                  This will be displayed on your shop profile
                                </p>
                              </div>
                            </Grid>

                            <Grid item xs={9}>
                              <div className='CustomeInput'>
                                <div className='Item'>
                                  <label>Shop ID</label>
                                  <TextField
                                    {...register("shopID")}
                                    id='outlined-basic'
                                    defaultValue={
                                      websiteSettingsData?.website_shop_id
                                    }

                                    variant='outlined'
                                  />

                                  <div className='svg'>
                                    <FiEdit />
                                  </div>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>

                        {/* Meta Description */}
                        <div className='DashboardFormItem'>
                          <Grid container spacing={3}>
                            <Grid item xs={3}>
                              <div className='left'>
                                <h5>Meta Description</h5>
                                <p>
                                  This will be displayed on your shop profile
                                </p>
                              </div>
                            </Grid>

                            <Grid item xs={9}>
                              <div className='CustomeInput'>
                                <div className='Item'>
                                  <label>Website Title</label>
                                  <TextField
                                    {...register("websiteTitle")}
                                    id='outlined-basic'
                                    defaultValue={
                                      websiteSettingsData?.meta_title
                                    }

                                    variant='outlined'
                                  />

                                  <div className='svg'>
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className='Item'>
                                  <label>Description</label>
                                  <TextField
                                    {...register("description")}
                                    id='outlined-basic'
                                    defaultValue={
                                      websiteSettingsData?.meta_description
                                    }

                                    variant='outlined'
                                  />

                                  <div className='svg'>
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className='Item'>
                                  <Button type='submit' className='Update'>
                                    Update
                                  </Button>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </form>

                    {/* form end */}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WebsiteSettingPage;
