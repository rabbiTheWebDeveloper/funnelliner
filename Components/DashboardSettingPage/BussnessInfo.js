import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import { baseLocal, baseTest } from "../../constant/constant";
import { headers } from "../../pages/api";

const BussnessInfo = () => {
  const [busInfo, setBusInfo] = useState({});
  const [user, setUser] = useState({});
  const [mainImg, setMainImg] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [tfValue, setTFValue] = useState('');
  const [address, setAddress] = useState('');
  const [shopId, setShopId] = useState('');
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [desc, setDesc] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleMainImage = (e) => {
    setMainImg(e.target.files[0]);
  };
  // const token = Cookies.get("token");
  // // console.log(token)
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };


  const businessSubmit = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("shop_logo", selectedImage);
    formData.append("shop_name", data.shop_name);
    formData.append("shop_address", data.shop_address);
    formData.append("shop_id", data.shop_id);
    formData.append("shop_meta_title", data.shop_meta_title);
    formData.append("shop_meta_description", data.shop_meta_description);

    // console.log(formData);

    axios
      .post(baseTest + "/client/settings/business-info/update", formData, {
        headers: headers,
      })
      .then(function (response) {
        Swal.fire("Information update  Add!", response.data.msg, "success");
      })
      .catch(function (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.msg,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
    // console.log(data);

    reset();
  };

  useEffect(() => {
    axios
      .get(baseLocal + "/client/settings/business-info", { headers: headers })
      .then(function (response) {
        // handle success
        // let target = response.data.data;
        setBusInfo(response.data.data);
        setTFValue(response.data.data.name)
        setShopId(response.data.data.shop_id)
        setAddress(response.data.data.address)
        setWebsiteTitle(response.data.data.shop_meta_title)
        setDesc(response.data.data.shop_meta_description)
      });
  }, []);
 
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

 
  // console.log(busInfo);
  return (
    <>
      <form onSubmit={handleSubmit(businessSubmit)}>
        <div className="DashboardForm">
          {/* Shop Info */}
          <div className="DashboardFormItem">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className="left">
                  <h5>Shop Info</h5>
                  <p>This will be displayed on your shop profile</p>
                </div>
              </Grid>

              <Grid item xs={9}>
                <div className="CustomeInput">
                  <div className="Item">
                    {/* <h2>{busInfo?.name}</h2> */}
                    <label>Shop Name</label>
                    <TextField
                       {...register("shop_name")}
                      id="outlined-basic"
                      onChange={(newValue) => setTFValue(newValue.target.value)}
                      value={tfValue}
                      variant="outlined"
                     
                   
                    />

                    <div className="svg">
                      <FiEdit />
                    </div>
                  </div>

                  <div className="Item">
                    <label>Shop Address</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(newValue) => setAddress(newValue.target.value)}
                      value={address}
                      {...register("shop_address")}
                    />

                    <div className="svg">
                      <FiEdit />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Company Logo */}
          <div className="DashboardFormItem">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className="left">
                  <h5>Company Logo</h5>
                  <p>This will be displayed on your shop profile</p>
                </div>
              </Grid>

              <Grid item xs={9}>
                <div className="CustomeInput">
                  <div className="Item Upload">
                    {/* <label>Company Logo</label>

                    <Button variant="contained" component="label">
                      Upload
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="shop_logo"
                        onChange={handleMainImage}
                      />
                    </Button>

                    <div className="svg">
                      <AiOutlineCamera />
                    </div> */}


                        <input
                          accept="image/*"
                          type="file"
                          id="select-image"
                          style={{ display: "none" }}
                          onChange={(e) => setSelectedImage(e.target.files[0])}
                        />
                        <label htmlFor="select-image">
                          <Button variant="contained" color="primary" component="span">
                            Upload Image
                          </Button>
                        </label>
                        {imageUrl && selectedImage && (
                          <Box mt={2} textAlign="center">
                            <div>Image Preview:</div>
                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                          </Box>
                        )}


                  </div>


                 
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Shop Info */}
          <div className="DashboardFormItem">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className="left">
                  <h5>Shop Info</h5>
                  <p>This will be displayed on your shop profile</p>
                </div>
              </Grid>

              <Grid item xs={9}>
                <div className="CustomeInput">
                  <div className="Item">
                    <label>Shop ID</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(newValue) => setShopId(newValue.target.value)}
                      value={shopId}
                      {...register("shop_id")}
                    />

                    <div className="svg">
                      <FiEdit />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* Meta Description */}
          <div className="DashboardFormItem">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className="left">
                  <h5>Meta Description</h5>
                  <p>This will be displayed on your shop profile</p>
                </div>
              </Grid>

              <Grid item xs={9}>
                <div className="CustomeInput">
                  <div className="Item">
                    <label>Website Title</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(newValue) => setWebsiteTitle(newValue.target.value)}
                      value={websiteTitle}
                      {...register("shop_meta_title")}
                    />

                    <div className="svg">
                      <FiEdit />
                    </div>
                  </div>

                  <div className="Item">
                    <label>Description</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      onChange={(newValue) => setDesc(newValue.target.value)}
                      value={desc}
                      {...register("shop_meta_description")}
                    />

                    <div className="svg">
                      <FiEdit />
                    </div>
                  </div>

                  <div className="Item">
                    <Button type="submit" className="Update">
                      Update
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </form>
    </>
  );
};

export default BussnessInfo;
