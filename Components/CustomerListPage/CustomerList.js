import { TabContext, TabPanel, TabList } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Tab,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import { FiEdit } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { getMerchantList } from "../../pages/api";

const CustomerList = () => {
  // Filter
  const [age, setAge] = useState("");

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

  // UpdateStockModal
  const [openStock, setOpenStock] = useState(false);
  const handleOpenStock = () => setOpenStock(true);
  const handleStockClose = () => setOpenStock(false);

  const [merchants, setMerchants] = useState([]);
  useEffect(() => {
    getMerchantList().then((res) => {
      setMerchants(res.data);
    });
  }, []);

  return (
    <>
      <section className='TopSellingProducts DashboardSetting Order'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className='Header d_flex d_justify'>
                {/* Left */}
                <div className='Left d_flex'>
                  <div className='svg'>
                    <HiOutlineUserGroup />
                  </div>

                  <div className='text'>
                    <h4>Customer List</h4>
                    <p>List Of Customers</p>
                  </div>
                </div>

                {/* Right */}
                <div className='Right d_flex'>
                  {/* item */}
                  <div className='FilterItem d_flex'>
                    <h6>Filter By:</h6>

                    <div className='Dropdown'>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-label'>
                            Date
                          </InputLabel>
                          <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={age}
                            label='Age'
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Date</MenuItem>
                            <MenuItem value={20}>Yesterday</MenuItem>
                            <MenuItem value={30}>Tomorrow</MenuItem>
                            <MenuItem value={40}>This Weak</MenuItem>
                            <MenuItem value={50}>Tish Month</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>

                  {/* item */}
                  <div className='FilterItem d_flex'>
                    <h6>Filter By:</h6>

                    <div className='Dropdown'>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-label'>
                            Status
                          </InputLabel>
                          <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={age}
                            label='Age'
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Status</MenuItem>
                            <MenuItem value={20}>Yesterday</MenuItem>
                            <MenuItem value={30}>Tomorrow</MenuItem>
                            <MenuItem value={40}>This Weak</MenuItem>
                            <MenuItem value={50}>Tish Month</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                  </div>

                  {/* item */}
                  <div className='FilterItem'>
                    <div className='CustomeInput'>
                      <TextField
                        id='outlined-basic'
                        label='Search Here...'
                        variant='outlined'
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
          <div className='DashboardSettingTabs WebsiteSettingPage'>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChangeTab}
                    aria-label='lab API tabs example'
                  >
                    <Tab label='Confirmed Order Customers' value='1' />
                    <Tab label='Lead Order Customers' value='2' />
                    <Tab label='Cancel Order Customers' value='3' />
                    <Tab label='Follow Up Order Customers' value='4' />
                    <Tab label='Order Return Customers' value='5' />
                  </TabList>
                </Box>

                {/* Confirmed Order Customers */}
                <TabPanel value='1'>
                  <div className='Pending'>
                    <div className='MoveToComplete d_flex d_justify'>
                      <div className='DropDown'>
                        {/* <Button>
                                                <h6 className='d_flex'>
                                                    Delete
                                                    <div className="svg"><AiFillCaretDown/></div>
                                                </h6>
                                            </Button> */}
                      </div>

                      <div className='DropDown Download'>
                        <Button
                          id='basic-button'
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className='d_flex'>
                            Download Report
                            <div className='svg'>
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>As PDF</MenuItem>
                          <MenuItem onClick={handleClose}>As Xml</MenuItem>
                          <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                        </Menu>
                      </div>
                    </div>

                    <div className='ProductTable'>
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        <tbody>

                        {merchants?.map((merchant) => {
                            return (
                              <tr>
                                <td>{merchant.id}</td>
                                <td>1 Feb, 2020</td>
                                <td>{merchant.name}</td>
                                <td>{merchant.phone}</td>
                                <td>{merchant.address===null?"":merchant.address}</td>
                                <td>Goldfish</td>
                                <td>184</td>
                                <td>453</td>
                              </tr>
                            );
                          })}
                          {/* item */}
                          {/* <tr>
                            <td>4122</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr> */}

                          {/* item */}





                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>

                {/* Lead Order Customers */}
                <TabPanel value='2'>
                  <div className='Pending'>
                    <div className='MoveToComplete d_flex d_justify'>
                      <div className='DropDown'>
                        {/* <Button>
                                                <h6 className='d_flex'>
                                                    Delete
                                                    <div className="svg"><AiFillCaretDown/></div>
                                                </h6>
                                            </Button> */}
                      </div>

                      <div className='DropDown Download'>
                        <Button
                          id='basic-button'
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className='d_flex'>
                            Download Report
                            <div className='svg'>
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>As PDF</MenuItem>
                          <MenuItem onClick={handleClose}>As Xml</MenuItem>
                          <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                        </Menu>
                      </div>
                    </div>

                    <div className='ProductTable'>
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* item */}


                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>

                {/* Cancel Order Customers */}

                <TabPanel value='3'>
                  <div className='Pending'>
                    <div className='MoveToComplete d_flex d_justify'>
                      <div className='DropDown'>
                        {/* <Button>
                                                <h6 className='d_flex'>
                                                    Delete
                                                    <div className="svg"><AiFillCaretDown/></div>
                                                </h6>
                                            </Button> */}
                      </div>

                      <div className='DropDown Download'>
                        <Button
                          id='basic-button'
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className='d_flex'>
                            Download Report
                            <div className='svg'>
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>As PDF</MenuItem>
                          <MenuItem onClick={handleClose}>As Xml</MenuItem>
                          <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                        </Menu>
                      </div>
                    </div>

                    <div className='ProductTable'>
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        <tbody>

                          {/* item */}

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>

                {/* Follow Up Order Customers */}
                <TabPanel value='4'>
                  <div className='Pending'>
                    <div className='MoveToComplete d_flex d_justify'>
                      <div className='DropDown'>
                        {/* <Button>
                                                <h6 className='d_flex'>
                                                    Delete
                                                    <div className="svg"><AiFillCaretDown/></div>
                                                </h6>
                                            </Button> */}
                      </div>

                      <div className='DropDown Download'>
                        <Button
                          id='basic-button'
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className='d_flex'>
                            Download Report
                            <div className='svg'>
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>As PDF</MenuItem>
                          <MenuItem onClick={handleClose}>As Xml</MenuItem>
                          <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                        </Menu>
                      </div>
                    </div>

                    <div className='ProductTable'>
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Follow Up Date</th>
                            <th>Follow Up Note</th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                            <td>18 December 2022</td>
                            <td className='EditViewDelete'>
                              <Button
                                className='UpdateStock'
                                onClick={handleOpenStock}
                              >
                                Update Stock{" "}
                              </Button>

                              {/* Modal */}
                              <Modal
                                open={openStock}
                                onClose={handleStockClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='UpdateStockModal'>
                                    {/* <div className="Close">
                                                                        <IoMdClose/>
                                                                    </div> */}

                                    <Grid Container spacing={3}>
                                      <Grid item xs={12}>
                                        <div className='Header'>
                                          {/* Left */}
                                          <div className='Left d_flex'>
                                            <div className='svg'>
                                              <RxUpdate />
                                            </div>

                                            <div className='text'>
                                              <h4>Update Enter Note</h4>
                                              <p>
                                                Update Your Stock, Increase And
                                                Decrease Your Stock
                                              </p>
                                            </div>
                                          </div>

                                          <div className='UpdateStockModalContent '>
                                            <div className='CustomeInput'>
                                              <div className='Item'>
                                                <label>Product Name</label>
                                                <TextField
                                                  id='outlined-basic'
                                                  label='Enter name here'
                                                  variant='outlined'
                                                />

                                                <div className='svg'>
                                                  <FiEdit />
                                                </div>
                                              </div>

                                              <p></p>

                                              <div className='Item'>
                                                <Button className='Update'>
                                                  Update
                                                </Button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Box>
                              </Modal>
                            </td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                            <td>18 December 2022</td>
                            <td className='EditViewDelete'>
                              <Button
                                className='UpdateStock'
                                onClick={handleOpenStock}
                              >
                                Update Stock{" "}
                              </Button>

                              {/* Modal */}
                              <Modal
                                open={openStock}
                                onClose={handleStockClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='UpdateStockModal'>
                                    {/* <div className="Close">
                                                                        <IoMdClose/>
                                                                    </div> */}

                                    <Grid Container spacing={3}>
                                      <Grid item xs={12}>
                                        <div className='Header'>
                                          {/* Left */}
                                          <div className='Left d_flex'>
                                            <div className='svg'>
                                              <RxUpdate />
                                            </div>

                                            <div className='text'>
                                              <h4>Update Enter Note</h4>
                                              <p>
                                                Update Your Stock, Increase And
                                                Decrease Your Stock
                                              </p>
                                            </div>
                                          </div>

                                          <div className='UpdateStockModalContent '>
                                            <div className='CustomeInput'>
                                              <div className='Item'>
                                                <label>Product Name</label>
                                                <TextField
                                                  id='outlined-basic'
                                                  label='Enter name here'
                                                  variant='outlined'
                                                />

                                                <div className='svg'>
                                                  <FiEdit />
                                                </div>
                                              </div>

                                              <p></p>

                                              <div className='Item'>
                                                <Button className='Update'>
                                                  Update
                                                </Button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Box>
                              </Modal>
                            </td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                            <td>18 December 2022</td>
                            <td className='EditViewDelete'>
                              <Button
                                className='UpdateStock'
                                onClick={handleOpenStock}
                              >
                                Update Stock{" "}
                              </Button>

                              {/* Modal */}
                              <Modal
                                open={openStock}
                                onClose={handleStockClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='UpdateStockModal'>
                                    {/* <div className="Close">
                                                                        <IoMdClose/>
                                                                    </div> */}

                                    <Grid Container spacing={3}>
                                      <Grid item xs={12}>
                                        <div className='Header'>
                                          {/* Left */}
                                          <div className='Left d_flex'>
                                            <div className='svg'>
                                              <RxUpdate />
                                            </div>

                                            <div className='text'>
                                              <h4>Update Enter Note</h4>
                                              <p>
                                                Update Your Stock, Increase And
                                                Decrease Your Stock
                                              </p>
                                            </div>
                                          </div>

                                          <div className='UpdateStockModalContent '>
                                            <div className='CustomeInput'>
                                              <div className='Item'>
                                                <label>Product Name</label>
                                                <TextField
                                                  id='outlined-basic'
                                                  label='Enter name here'
                                                  variant='outlined'
                                                />

                                                <div className='svg'>
                                                  <FiEdit />
                                                </div>
                                              </div>

                                              <p></p>

                                              <div className='Item'>
                                                <Button className='Update'>
                                                  Update
                                                </Button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Box>
                              </Modal>
                            </td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                            <td>18 December 2022</td>
                            <td className='EditViewDelete'>
                              <Button
                                className='UpdateStock'
                                onClick={handleOpenStock}
                              >
                                Update Stock{" "}
                              </Button>

                              {/* Modal */}
                              <Modal
                                open={openStock}
                                onClose={handleStockClose}
                                aria-labelledby='modal-modal-title'
                                aria-describedby='modal-modal-description'
                              >
                                <Box>
                                  <div className='UpdateStockModal'>
                                    {/* <div className="Close">
                                                                        <IoMdClose/>
                                                                    </div> */}

                                    <Grid Container spacing={3}>
                                      <Grid item xs={12}>
                                        <div className='Header'>
                                          {/* Left */}
                                          <div className='Left d_flex'>
                                            <div className='svg'>
                                              <RxUpdate />
                                            </div>

                                            <div className='text'>
                                              <h4>Update Enter Note</h4>
                                              <p>
                                                Update Your Stock, Increase And
                                                Decrease Your Stock
                                              </p>
                                            </div>
                                          </div>

                                          <div className='UpdateStockModalContent '>
                                            <div className='CustomeInput'>
                                              <div className='Item'>
                                                <label>Product Name</label>
                                                <TextField
                                                  id='outlined-basic'
                                                  label='Enter name here'
                                                  variant='outlined'
                                                />

                                                <div className='svg'>
                                                  <FiEdit />
                                                </div>
                                              </div>

                                              <p></p>

                                              <div className='Item'>
                                                <Button className='Update'>
                                                  Update
                                                </Button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Box>
                              </Modal>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabPanel>

                {/* Order Return Customers */}
                <TabPanel value='5'>
                  <div className='Pending'>
                    <div className='MoveToComplete d_flex d_justify'>
                      <div className='DropDown'>
                        {/* <Button>
                                                <h6 className='d_flex'>
                                                    Delete
                                                    <div className="svg"><AiFillCaretDown/></div>
                                                </h6>
                                            </Button> */}
                      </div>

                      <div className='DropDown Download'>
                        <Button
                          id='basic-button'
                          aria-controls={open ? "basic-menu" : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          <h6 className='d_flex'>
                            Download Report
                            <div className='svg'>
                              <AiFillCaretDown />
                            </div>
                          </h6>
                        </Button>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>As PDF</MenuItem>
                          <MenuItem onClick={handleClose}>As Xml</MenuItem>
                          <MenuItem onClick={handleClose}>As Doc File</MenuItem>
                        </Menu>
                      </div>
                    </div>

                    <div className='ProductTable'>
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Order Date</th>
                            <th>Customer Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        <tbody>
                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>

                          {/* item */}
                          <tr>
                            <td>41</td>
                            <td>1 Feb, 2020</td>
                            <td>Mike Smith</td>
                            <td>01234567890</td>
                            <td>7529 E. Pecan St.</td>
                            <td>Goldfish</td>
                            <td>184</td>
                            <td>453</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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

export default CustomerList;