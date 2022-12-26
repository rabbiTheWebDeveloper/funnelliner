import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Menu,
    MenuItem,
    Pagination,
    Stack,
  } from "@mui/material";
  import axios from "axios";
  import Cookies from "js-cookie";
  import moment from "moment";
  import { useEffect, useState } from "react";
  import { AiFillCaretDown } from "react-icons/ai";
  import { FiDownloadCloud } from "react-icons/fi";
  import { baseTest, baseUrl } from "../../constant/constant";
  import Select from "react-select";
  import Swal from "sweetalert2";
  const options = [
    { value: "Cancelled", label: "Cancelled", id: 2 },
    { value: "Shipped", label: "Shipped", id: 3 },
    { value: "Delivered", label: "Delivered", id: 4 },
    { value: "Return", label: "Order Return", id: 5 },
    { value: "Follow Up", label: "Follow Up", id: 6 },
  ];

const CancelledOrder = ({ ...props }) => {
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
  
    // confirm order full function
  
    // comment token
    const token = Cookies.get("token");
    // console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    useEffect(() => {
      axios
        .get(baseUrl + "/client/orders", { headers })
        .then(function (response) {
          // handle success
          let allProduct = response.data.data;
          const userProduct = allProduct.filter(
            (word) => word.order_status == "Cancelled"
          );
          setProducts(userProduct);
        });
    }, []);
  
    const statusSubmit = (id) => {
      console.log(id);
      let status = {
        order_id: id,
        status: selectedOption.value,
      };
      console.log(status);
  
      axios
        .post(baseTest + "/client/orders/status/update", status, {
          headers: headers,
        })
        .then(function (response) {
          Swal.fire("Status Update !", response.data.msg, "success");
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.msg,
            footer: '<a href="">Why do I have this issue?</a>',
          });
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
  return (
    <>
      <div className="Pending">
        <div className="MoveToComplete">
          <div className="DropDown">
            <Button
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleConfirmed}
            >
              <h6 className="d_flex">
                Cancelled
                <div className="svg">
                  <AiFillCaretDown />
                </div>
              </h6>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl2={anchorEl2}
              open={open2}
              onClose={handleCloseConfirmed}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseConfirmed}>Redex</MenuItem>
              <MenuItem onClick={handleCloseConfirmed}>Pathao Parcel</MenuItem>
              <MenuItem onClick={handleCloseConfirmed}>E-Courier</MenuItem>
              <MenuItem onClick={handleCloseConfirmed}>Add Courier</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="ProductTable">
          <table>
            <thead>
              <tr>
                <th>
                  <Checkbox />
                </th>
                <th>Order No.</th>
                <th>Order Date</th>
                <th>Customer Name</th>
                <th>Contact No.</th>
                <th>Address</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Select Courier </th>
                <th>Note</th>
              </tr>
            </thead>

            {
                currentProduct.length ===0 ?
                <div className="Preloader">
                    <img src="sppiner.gif" />
                </div>:
              <tbody>
              {currentProduct?.map((product) => {
                return (
                  <tr key={product.order_no} product={product}>
                    <td>
                      <Checkbox />
                    </td>
                    <td>{product.order_no}</td>
                    <td>{moment(product.created_at).format("LL")}</td>
                    <td>{product.customer_name}</td>
                    <td>{product.customer_phone}</td>
                    <td>{product.customer_address}</td>
                    <td>Mobile </td>
                    <td>40</td>
                    <td>14999</td>
                  

                    <td>
                      <div className="DropDown">
                        <Select
                          {...props}
                          className="select__color"
                          onChange={setSelectedOption}
                          onBlur={() => statusSubmit(product.id)}
                          defaultValue={options[0]}
                          options={options}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              borderBottom: "1px solid #ddd",
                              color: state.isSelected ? "#fff" : "#666",
                              background: state.isSelected ? "#556FF6" : "#fff",
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
            }
          </table>
        </div>
      </div>
    </>
  );
};

export default CancelledOrder;
