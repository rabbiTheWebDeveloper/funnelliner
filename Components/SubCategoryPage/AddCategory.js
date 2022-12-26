import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { baseTest } from "../../constant/constant";


const AddCategory = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const {register,handleSubmit,reset,formState: { errors }} = useForm();

    const token =Cookies.get('token')
    // console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const onCategorySubmit = (data) => {
        data.parent_id = "";
        data.description = "";
    
        data.status = "1";
        const formData = new FormData();
        formData.append('category_image',selectedImage);
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('parent_id',data.parent_id );
        formData.append('status', data.status);
        console.log(formData);
    
        axios.post(baseTest + "/client/categories", formData ,{headers: headers}
         )
          .then(function (response) {
            // console.log(response.data.msg);
            Swal.fire(
              'Category Add!',
              response.data.msg,
              'success'
            )
          })
          .catch(function (error) {
            // console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
    
              footer: '<a href="">Why do I have this issue?</a>'
            })
          });
        console.log(data);
    
        reset();
      };







    
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
    return (
        <div className="DashboardTabsItem">

        <h4>Update Product Information</h4>
        <p>Update your product info</p>

        <div className="DashboardForm">

          {/* Shop Info */}
          <div className="DashboardFormItem">

            <Grid container spacing={3}>

              <Grid item xs={3}>

                <div className="left">

                  <h5>Category</h5>
                  <p>This will be displayed on your product page</p>

                </div>

              </Grid>

              <Grid item xs={9}>

                <div className="CustomeInput">
                <form onSubmit={handleSubmit(onCategorySubmit)}>

                      <div className="Item">

                        <label>Category Name</label>

                        <TextField id="outlined-basic" label="" variant="outlined"   {...register("name", { required: true })} placeholder='Category Name'/>

                      </div>

                      <div className="Item Upload">

                        {/* <label>Product Image ( Main image of product )</label>

                        <Button variant="contained" component="label">
                          Upload
                          <input hidden accept="image/*" multiple type="file" onChange={handleFile} />

                        </Button>

                        <div className="svg">
                          <AiOutlineCamera/>
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

                      <div className="Item">
                        <Button type='submit' className='Update'>Update</Button>
                        <Button type='reset' className='Cancle'>Cancle</Button>
                      </div>
                  </form>

                </div>

              </Grid>

            </Grid>

          </div>

        </div>


      </div>
    );
};

export default AddCategory;