import { Box, Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiReceipt } from "react-icons/bi";
import Swal from "sweetalert2";
import { baseTest } from "../../constant/constant";

const ManualOrder = () => {
  
  const [openSales, setOpenSales] = useState(false);
  const handleOpenSales = () => setOpenSales(true);
  const handleCloseSales = () => setOpenSales(false);
  const { register,handleSubmit,reset,formState: { errors }} = useForm();

  const token = Cookies.get("token");
  // console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // const token = Cookies.get("token");
  // const tokens = Cookies.get("user");
  const data = Cookies.get();
  const mainData = data?.user;
  let parseData;
  if (mainData != null) {
    parseData = JSON.parse(mainData);
  }
  // console.log(parseData);
  // const merchantId = parseData?.id;
  const merchantShopId = parseData?.shop_id ;

  const onSubmit = (data) => {
    data.shop_id=merchantShopId
    data.product_id=[data.product_id]
    data.product_qty=[data.product_qty]


    console.log(data);

    axios
    .post(baseTest+ "/client/orders", data, {
      headers: headers,
    })
    .then(function (response) {
      // console.log(response.data.msg);
      // console.log(response.data);
      Swal.fire("Oder  Successfully !", response.data.msg, "success");
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
    reset()
    setOpenSales(false)
  }



  return (
    <div>
 <Button className='AddNewOrder' onClick={handleOpenSales} >Add New Order</Button>

<Modal
                            open={openSales}
                            onClose={handleCloseSales}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="SalesTargetModal">
          <div className="Header d_flex">
            <div className="svg">
              <BiReceipt />
            </div>

            <div className="text">
              <h5>Add New Order</h5>
              <p>Add New Manual Order</p>
            </div>
          </div>

          <div className="Form">
            <div className="CustomeInput">
              <label>Enter Customer Name</label>
              <TextField id="outlined-basic" variant="outlined" {...register("customer_name", { required: true })} placeholder='Customer Name' />
              {errors.category_id && (<span>This Product Name required</span>)}
            </div>

            <div className="CustomeInput">
              <label>Enter Customer Contact No.</label>
              <TextField id="outlined-basic" variant="outlined" {...register("customer_phone", )} placeholder='Customer Name' />
            </div>

            <div className="CustomeInput">
              <label>Enter Customer Address</label>
              <TextField id="outlined-basic" variant="outlined" {...register("customer_address", )} placeholder='Customer Name' />
            </div>

            <div className="CustomeInput">
              <label>Product ID</label>
              <TextField id="outlined-basic" variant="outlined" {...register("product_id", { required: true })} placeholder='Customer Name' />
            </div>

            <div className="CustomeInput">
              <label>Enter Product Quantity</label>
              <TextField id="outlined-basic" variant="outlined"  {...register("product_qty", { required: true })} placeholder='Customer Name'/>
            </div>

            {/* <div className="CustomeInput">
              <label>Enter Product Price (BDT)</label>
              <TextField id="outlined-basic" variant="outlined" {...register("product_id[]", { required: true })} placeholder='Customer Name' />
            </div>

            <div className="CustomeInput">
              <label>Note</label>
              <TextField id="outlined-basic" variant="outlined" {...register("note", { required: true })} placeholder='Note Name' />
            </div> */}

            <div className="CustomeInput">
              <div className="DuelButton">
                <Button type="submit">Add</Button>
                <Button type="reset" className="Delete">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </Box>
      </Modal>
    </div>
  );
};

export default ManualOrder;
