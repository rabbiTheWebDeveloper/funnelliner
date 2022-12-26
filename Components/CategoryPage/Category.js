import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Button, Container, Grid, Tab, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { baseTest } from '../../constant/constant';
import Swal from 'sweetalert2';
import axios from 'axios';



const Category = () => {
  // Tabs
  const [value, setValue] = useState('1');
  // product add full funcation 
  const [category, setCategory] = useState([]);
  const [tabSelect, setTabSelect] = useState("1");
  const [mainImg, setMainImg] = useState();
  const [img, setImg] = useState();
  const {register,handleSubmit,reset,formState: { errors }} = useForm();
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleMainImage = (e) => {
    setMainImg(e.target.files[0]);
  };
  const handleOtherImages = (e) => {
    setImg(e.target.files[0]);
  };
  const token = Cookies.get("token");
  // console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const onSubmit = (data) => {
    data.size = "XL";
    data.color = "white";
    data.short_description = "IT was good and I like it";
    data.meta_tag = "buy";
    data.meta_description = "IT was good and I like it";
    data.status = "1";
    // data.cv = cv;

    const formData = new FormData();
    formData.append("main_image", mainImg);
    formData.append("other_image", img);
    formData.append("category_id", data.category_id);
    formData.append("product_name", data.product_name);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("size", data.size);
    formData.append("color", data.color);
    formData.append("product_code", data.product_code);
    formData.append("product_qty", data.product_qty);
    formData.append("short_description", data.short_description);
    formData.append("long_description", data.long_description);
    formData.append("meta_tag", data.meta_tag);
    formData.append("meta_description", data.meta_description);
    formData.append("status", data.status);
    console.log(formData);

    axios.post(baseTest + "/client/products", formData, { headers: headers })
      .then(function (response) {
        // console.log(response.data.msg);
        // console.log(response.data);
        Swal.fire("Product  Add!", response.data.msg, "success");
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.msg,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
    console.log(data);

    reset();
  };
  useEffect(() => {
    axios.get(baseTest + "/client/categories", { headers: headers })
      .then(function (response) {
        // handle success
        setCategory(response.data.data);
      });
  }, []);
  // console.log(category)

  const handleSelect = (eventKey) => setTabSelect(eventKey);


  return (



    <>

      <section className='TopSellingProducts DashboardSetting'>

        <Container maxWidth="sm">

          <Grid Container spacing={3}>

              <Grid item xs={12}>

                <div className="Header d_flex d_justify">

                  {/* Left */}
                  <div className="Left d_flex">
                  
                  <div className="svg">
                    <MdProductionQuantityLimits/>
                  </div>

                    <div className="text">
                      <h4>Add New Products</h4>
                      <p>Update your shop info and other settings here</p>
                    </div>

                  </div>
                    
                </div>   

              </Grid>

          </Grid>

          {/* DashboardSettingTabs */}
          <div className="DashboardSettingTabs">

            <Box sx={{ width: '100%', typography: 'body1' }}>

              <TabContext value={value}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                    <Tab label="Product Information" value="1" />
                    <Tab label="Product Images" value="2" />
                  </TabList>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)} >

                {/* Business Information */}
                <TabPanel value="1">

                  <div className="DashboardTabsItem">
                      
                    <h4>Update Product Information</h4>
                    <p>Update your product info</p>

                    <div className="DashboardForm">

                      {/* Shop Info */}
                      <div className="DashboardFormItem">

                        <Grid container spacing={3}>

                          <Grid item xs={3}>

                            <div className="left">

                              <h5>Product Info</h5>
                              <p>This will be displayed on your product page</p>

                            </div>

                          </Grid>

                          <Grid item xs={9}>

                            <div className="CustomeInput">
                              

                              <div className="Item">

                                <label>Product Name</label>
                                <TextField id="outlined-basic" label="" variant="outlined" placeholder="Enter product name here"
                            {...register("product_name", { required: true })} />
                              {errors.product_name && (
                            <span>This Product Name required</span>
                          )}
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Selling Price</label>
                                <TextField id="outlined-basic" label="Selling Price" variant="outlined"   placeholder="Enter selling price here"
                            {...register("price", { required: true })} />
                            {errors.price && (
                            <span>Enter selling price here</span>
                          )}
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Discount Price</label>
                                <TextField id="outlined-basic" label="Discount Price" variant="outlined"  placeholder="Enter discount price here"
                            {...register("discount", { required: true })} />
                             {errors.discount && (
                            <span>Enter discount price here</span>
                          )}
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Product Code</label>
                                <TextField id="outlined-basic" label="Product Code" variant="outlined"  placeholder="Enter product code here"
                            {...register("product_code", { required: true })} />
                            {errors.product_code && (
                            <span>This Product Name required</span>
                          )}
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Available Quantity</label>
                                <TextField id="outlined-basic" label="Available Quantity" variant="outlined" placeholder="Enter available quantity here"
                            {...register("product_qty", { required: true })} />
                            {errors.product_qty && (
                            <span>This Product Name required</span>
                          )}
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Category Name</label>
                                {/* <TextField id="outlined-basic" label="Category Name" variant="outlined" /> */}
                                
                                <select
                            {...register("category_id", { required: true })}
                          >
                            {category.map((data) => {
                              return (
                               
                                  <option key={data.id} value={data.id}>{data.name}</option>
                               
                              );
                            })}
                            {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> */}
                          </select>
                          {errors.category_id && (
                            <span>This Product Name required</span>
                          )}
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">

                                <label>Sub Category Name</label>
                                <TextField id="outlined-basic" label="Sub Category Name" variant="outlined" />
                                
                                <div className="svg">
                                  <FiEdit/>
                                </div>

                              </div>

                              <div className="Item">
                              {/* {tabSelect === "1" && (
                      <>
                        <Nav variant="pills" onSelect={handleSelect}>
                          <Nav.Item>
                            <Nav.Link eventKey="2">
                              <Button eventKey="2" className="Save">
                                Next
                              </Button>
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </>
                    )} */}
                                {/* <Button className='Update'>Next</Button>
                                <Button className='Cancle'>Cancle</Button> */}
                                <Button className='Update' onClick={(e)=>handleChangeTab(e,(parseInt(value)+1).toString())}>Next</Button>
                              </div>

                            </div>

                          </Grid>

                        </Grid>

                      </div>

                    </div>


                  </div>

                </TabPanel>

                {/* Business Information */}
                <TabPanel value="2">

                  <div className="DashboardTabsItem">
                      
                    <h4>Update Product Information</h4>
                    <p>Update your product info</p>

                    <div className="DashboardForm">

                      {/* Shop Info */}
                      <div className="DashboardFormItem">

                        <Grid container spacing={3}>

                          <Grid item xs={3}>

                            <div className="left">

                              <h5>Product Images</h5>
                              <p>This will be displayed on your product page</p>

                            </div>

                          </Grid>

                          <Grid item xs={9}>

                            <div className="CustomeInput">

                              <div className="Item Upload">

                                <label>Product Image ( Main image of product )</label>

                                <Button variant="contained" component="label">
                                  Upload
                                  <input hidden accept="image/*" multiple type="file" name="main_image"
                              onChange={handleMainImage} />
                                  
                                </Button>

                                <div className="svg">
                                  <AiOutlineCamera/>
                                </div>

                              </div>
                              <div className="Item Upload">

                                <label>Product Image ( Main image of product )</label>

                                <Button variant="contained" component="label">
                                  Upload
                                  <input hidden accept="image/*" multiple type="file" name="other_image"
                                onChange={handleOtherImages} />
                                  
                                </Button>

                                <div className="svg">
                                  <AiOutlineCamera/>
                                </div>

                              </div>

                              <div className="Item">
                                <Button type='submit' className='Update'>Update</Button>
                                <Button type='reset' className='Cancle'>Cancle</Button>
                              </div>

                            </div>

                          </Grid>

                        </Grid>

                      </div>

                    </div>


                  </div>

                </TabPanel>
                </form>

              </TabContext>
              
            </Box>

          </div>

        </Container>

      </section>    

    </>

  )

}

export default Category