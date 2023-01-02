import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Checkbox, Container, Grid, Menu, MenuItem, Pagination, Stack, Tab, TextField } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdOutlineReceiptLong } from "react-icons/md";
import Select from "react-select";
import Swal from "sweetalert2";
import { baseTest, baseUrl } from "../../constant/constant";
import { headers, shopId } from "../../pages/api";
import CancelledOrder from "./CancelledOrder";
import ConfirmedOrder from "./ConfirmedOrder";
import DelivereOrder from "./DelivereOrder";
import FollowUpOrder from "./FollowUpOrder";
import ManualOrder from "./ManualOrder";
import OrderReturn from "./OrderReturn";
import ShippedOrder from "./ShippedOrder";
const options = [
  { value: "pending", label: "pending", id: 1 },
  { value: "Confirmed", label: "Confirmed", id: 1 },
  { value: "Cancelled", label: "Cancelled", id: 2 },
  // { value: "Shipped", label: "Shipped", id: 3 },
  // { value: "Delivered", label: "Delivered", id: 4 },
  // { value: "Order Return", label: "Order Return", id: 5 },
  { value: "Follow Up", label: "Follow Up", id: 6 },
];

const Order = ({ ...props }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  // console.log(selectedOption);

  // Filter
  const [age, setAge] = useState([]);
  // console.log(age);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Tabs
  const [value, setValue] = useState("1");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  // handleClick Move To Completed
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // handleConfirmed
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleConfirmed = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseConfirmed = () => {
    setAnchorEl2(null);
  };

  const [openSales, setOpenSales] = useState(false);
  const handleOpenSales = () => setOpenSales(true);
  const handleCloseSales = () => setOpenSales(false);

  // oder full function

  // // comment token
  // const token = Cookies.get("token");
  // // console.log(token)
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   shop_id : shopId,
  // };

  useEffect(() => {
    axios
      .get(baseUrl + "/client/orders", { headers: headers  })
      .then(function (response) {
        // handle success
        let allProduct = response.data.data;
        const userProduct = allProduct.filter(
          (word) => word.order.order_status == "pending"
        );
        setProducts(userProduct);
      });
  }, []);
  // console.log(products)

  // console.log(products);

  // order status update
  // let status ={
  //   order_id :124,
  //   status :"confirm"
  // };
  const statusSubmit = (id) => {
    // console.log(id);
    let status = {
      order_id: id,
      status: selectedOption.value,
    };
    // console.log(status);

    axios
      .post(baseTest + "/client/orders/status/update", status, {
        headers: headers,
      })
      .then(function (response) {
        // console.log(response.data.msg);
        // console.log(response.data);
        Swal.fire("Status Update !", response.data.msg, "success");
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
  };

  const deleteProduct = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(baseUrl + "/client/categories/" + id, { headers: headers })
          .then(function (result) {
            // handle success
            // console.log(result);
            if (result) {
              setProducts((pd) => {
                const filter = products.filter((prod) => {
                  return prod.id !== id;
                });
                return [...filter];
              });
              // props.history.push("/category")
              // router.push("/category");
            } else {
              // cogoToast.error("Request Fail Try Again");
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const indexOfLastProducts = currentPage * perPage;
  const indexOfFirstProducts = indexOfLastProducts - perPage;
  const currentProduct = products.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(products)

  return (
    <>
      <section className="TopSellingProducts DashboardSetting Order">
        <Container maxWidth="sm">
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className="Header d_flex d_justify">
                {/* Left */}
                <div className="Left d_flex">
                  <div className="svg">
                    <MdOutlineReceiptLong />
                  </div>

                  <div className="text">
                    <h4>Orders</h4>
                    <p>Order List</p>
                  </div>
                </div>

                {/* Right */}
                <div className="Right d_flex">
                
                  {/* item */}
                  <div className="FilterItem">
                    <div className="CustomeInput">
                      <TextField
                        id="outlined-basic"
                        label="Search Here..."
                        variant="outlined"
                      />
                      <Button>
                        {" "}
                        <BsSearch />{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* DashboardSettingTabs */}
          <div className="DashboardSettingTabs WebsiteSettingPage">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChangeTab}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Pending" value="1" />
                    <Tab label="Confirmed" value="2" />
                    <Tab label="Cancelled" value="3" />
                    <Tab label="Shipped" value="4" />
                    <Tab label="Delivered" value="5" />
                    <Tab label="Order Return" value="6" />
                    <Tab label="Follow Up" value="7" />
                  </TabList>
                </Box>

                {/* Pending */}
                <TabPanel value="1">
                  <div className="Pending">
                    <div className="MoveToComplete d_flex d_justify">

                      <div className="DropDown">
                        <Button
                          id="basic-button"
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className="d_flex">
                            Move To Completed
                            <div className="svg">
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            Move To Shipped
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Move To Confirmed
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Move To Follow Up
                          </MenuItem>
                        </Menu>
                      </div>

                     
                        {/* modal */}
                       
                            <ManualOrder></ManualOrder>
                       




                    </div>
                    













                    <div className="ProductTable">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <Checkbox />
                            </th>
                            <th>Order .</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status </th>
                            <th>Note</th>
                          </tr>
                        </thead>

                        {currentProduct.length === 0 ? (
                             <Box sx={{ width: 40 }}>
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             <Skeleton     width={1570} height={28} />
                             
                           </Box>
                        ) : (
                          <tbody>
                            {currentProduct?.map((product) => {
                              return (
                                <tr key={product.order_no} product={product}>
                                  <td>
                                    <Checkbox />
                                  </td>
                                  <td>{product?.order_no}</td>
                                  <td>
                                    {moment(product?.created_at).format("LL")}
                                  </td>
                                  <td>{product?.customer_name}</td>
                                  <td>{product?.customer_phone}</td>
                                  <td>{product?.customer_address}</td>
                                  <td>Mobile </td>
                                  <td>40</td>
                                  <td>14999</td>

                                  <td>
                                    <div className="DropDown">
                                      <Select
                                        {...props}
                                        className="select__color"
                                        onChange={setSelectedOption}
                                        onBlur={() => statusSubmit(product.order.id)}
                                        defaultValue={options[0]}
                                        options={options}
                                        styles={{
                                          option: (provided, state) => ({
                                            ...provided,
                                            borderBottom: "1px solid #ddd",
                                            color: state.isSelected
                                              ? "#fff"
                                              : "#666",
                                            background: state.isSelected
                                              ? "#556FF6"
                                              : "#fff",
                                            cursor: "pointer",
                                            margin: "0px",
                                            ":active": {
                                              backgroundColor: "#ddd",
                                              cursor: "pointer",
                                            },
                                          }),
                                          singleValue: (provided, state) => ({
                                            ...provided,
                                            color: "#fff",

                                            fontSize: "15px",
                                          }),
                                          control: (styles) => ({
                                            ...styles,
                                            backgroundColor: "#556FF6",
                                            padding: "3px 0px",
                                            margin: "0px 0px",
                                            border: "none",

                                            ":focus-within": {
                                              ...styles[":focus-within"],
                                              border: "none",
                                              boxShadow: "none",
                                            },
                                          }),
                                          menuList: (styles) => ({
                                            ...styles,
                                            margin: "0px",
                                            padding: "0px",
                                          }),
                                          noOptionsMessage: (styles) => ({
                                            ...styles,
                                            background: "red",
                                            color: "#fff",
                                          }),
                                        }}
                                      />
                                    </div>
                                  </td>
                                  <td>Note</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        )}
                      </table>
                      <Box
                        sx={{
                          margin: "auto",
                          width: "fit-content",
                          alignItems: "center",
                        }}
                      >
                        <Stack spacing={2}>
                          {/* {console.log(pageNumbers.length + 1)} */}
                          <Pagination
                            count={pageNumbers.length}
                            variant="outlined"
                            page={page}
                            onChange={paginate}
                          />
                        </Stack>
                      </Box>
                    </div>
                  </div>
                </TabPanel>

                {/* Confirmed */}
                <TabPanel value="2">
                  <ConfirmedOrder></ConfirmedOrder>
                </TabPanel>

                {/* Cancelled */}
                <TabPanel value="3">
                  <CancelledOrder></CancelledOrder>
                </TabPanel>

                {/* Shipped */}
                <TabPanel value="4">
                  <ShippedOrder></ShippedOrder>
                </TabPanel>

                {/* Shipped */}
                <TabPanel value="5">
                  <DelivereOrder></DelivereOrder>
                </TabPanel>

                {/* Order Return */}
                <TabPanel value="6">
                  <OrderReturn></OrderReturn>
                </TabPanel>

                {/* Follow Up */}
                <TabPanel value="7">
                  <FollowUpOrder></FollowUpOrder>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Order;
