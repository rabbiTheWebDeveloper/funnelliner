import { Button, Grid, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import Swal from "sweetalert2";
import { baseTest } from "../../../constant/constant";
import { headers } from "../../../pages/api";


const UpdateStock = ({productId}) => {

    const [stock , setStock] = useState({})
    const [openStock, setOpenStock] = useState(false);
    const handleOpenStock = () => setOpenStock(true);
    const handleStockClose = () => setOpenStock(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        axios
          .get(baseTest + `/client/stocks/stock-in/show/${productId}`, { headers: headers })
          .then(function (response) {
            // handle success
            setStock(response.data.data);
          });
      }, []);

      const onSubmit = data => {
            data.product_id=stock.id    
        
            axios.post(baseTest + "/client/stocks/stock-in/update", data, { headers: headers })
            .then(function (response) {
              // console.log(response.data.msg);
              // console.log(response.data);
              Swal.fire("Product  Add!", response.data.msg, "success");
            //    router.push("/product");
            })
            .catch(function (error) {
             
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.msg,
                footer: '<a href="">Why do I have this issue?</a>',
              });
            });
        //   console.log(data);
      
          reset();
          setOpenStock(false);
     
    
    };

    console.log(stock)
    return (
        <>
         <Button className='UpdateStock' onClick={handleOpenStock}>Update Stock </Button>
       
        <Modal
        open={openStock}
        onClose={handleStockClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box>
            <div className="UpdateStockModal">
                {/* <div className="Close">
                    <IoMdClose/>
                </div> */}
                <Grid Container spacing={3}>
                    <Grid item xs={12}>
                        <div className="Header">
                            {/* Left */}
                            <div className="Left d_flex">
                                <div className="svg">
                                    <RxUpdate/>
                                </div>
                                <div className="text">
                                    <h4>Update Stock</h4>
                                    <p>Update Your Stock, Increase And Decrease Your Stock</p>
                                </div>
                            </div>
                            <div className="UpdateStockModalContent ">
                                <div className="img d_flex">
                                <img src={stock?.main_image?.name} alt="" />
                                    <h6>{stock?.product_name}</h6>
                                </div>
                                {/* {console.log(product.product_qty)} */}
                                <h4>Current Stock:<span>{stock.product_qty}</span></h4>
                                <div className="CustomeInput">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="Item">

                                            <label>Stock Update:</label>
                                            <TextField id="outlined-basic" label="" variant="outlined" {...register("stock_quantity", { required: true })} />
                                            {errors.stock_quantity && <span>Stock Quantity field is required</span>}
                                            
                                            <div className="svg">
                                            <FiEdit/>
                                            </div>
                                        </div>
                                        <p>Note for payment receive : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <div className="Item">
                                            <Button className='Update' type="submit">Update</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>   
                        </div>   
                    </Grid>
                </Grid>
            </div>
        </Box>
    </Modal>
    </>
    );
};

export default UpdateStock;