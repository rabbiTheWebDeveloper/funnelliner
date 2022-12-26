import { TabContext, TabPanel, TabList } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  TextField,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera, AiOutlineSetting } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import { baseLocal, baseUrl } from "../../constant/constant";
import BussnessInfo from "./BussnessInfo";

const DashboardSetting = () => {
  const [user, setUser] = useState(null);
  const [ownInfo, setOwnInfo] = useState({});
  // Filter
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // Tabs
  const [value, setValue] = useState("1");
  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  // comment token
  const token = Cookies.get("token");
  // console.log(token)
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // .common shop and user name
  useEffect(() => {
    const userList = Cookies.get("user");
    setUser(JSON.parse(userList));
  }, []);
  


 
  

  // own information post
  const ownInfoSubmit = (data) => {
    axios.post(baseUrl + "/client/settings/owner-info/update", data, {
        headers: headers,
      })
      .then(function (response) {
        Swal.fire("Own Info Add!", response.data.msg, "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",

          footer: '<a href="">Why do I have this issue?</a>',
        });
      });


    reset();
  };
  //  own information get
  useEffect(() => {
    axios
      .get(baseLocal + "/client/settings/owner-info", { headers: headers })
      .then(function (response) {
        // handle success
        let target = response.data.data;
        setOwnInfo(target);
       
      });
  }, []);


  // password reset
  const passwordSubmit = (data) => {
    axios
      .post(baseUrl + "/client/settings/password-security/update", data, {
        headers: headers,
      })
      .then(function (response) {
        Swal.fire(response.data.msg, response.data.msg, "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",

          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
    

    reset();
  };

  

  return (
    <>
      <section className="TopSellingProducts DashboardSetting">
        <Container maxWidth="sm">
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className="Header d_flex d_justify">
                {/* Left */}
                <div className="Left d_flex">
                  <div className="svg">
                    <AiOutlineSetting />
                  </div>

                  <div className="text">
                    <h4>Settings</h4>
                    <p>Update your shop info and other settings here</p>
                  </div>
                </div>

                {/* Right */}
                <div className="Right d_flex">
                  <h6>Filter By:</h6>

                  <div className="Dropdown">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Filter
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Today</MenuItem>
                          <MenuItem value={20}>Yesterday</MenuItem>
                          <MenuItem value={30}>Tomorrow</MenuItem>
                          <MenuItem value={40}>This Weak</MenuItem>
                          <MenuItem value={50}>Tish Month</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* DashboardSettingTabs */}
          <div className="DashboardSettingTabs">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChangeTab}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Business Information" value="1" />
                    <Tab label="Owner Information" value="2" />
                    <Tab label="Password & Security" value="3" />
                  </TabList>
                </Box>

                {/* Business Information */}
                <TabPanel value="1">
                  <div className="DashboardTabsItem">
                    <h4>Update Business Information</h4>
                    <p>Update your shop info and other settings</p>
                    <BussnessInfo></BussnessInfo>
                   
                  </div>
                </TabPanel>

                {/* Owner Information */}
                <TabPanel value="2">
                  <div className="DashboardTabsItem">
                    <h4>Update Owner Information</h4>
                    <p>Update your shop info and other settings</p>

                    <div className="DashboardForm">
                      {/* Shop Info */}
                      <div className="DashboardFormItem">
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div className="left">
                              <h5>Basic Info</h5>
                              <p>This will be displayed on your shop profile</p>
                            </div>
                          </Grid>

                          <Grid item xs={9}>
                            <div className="CustomeInput">
                              <form onSubmit={handleSubmit(ownInfoSubmit)}>
                                <div className="Item">
                                  <label>Owner Name</label>
                                  <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    defaultValue={ownInfo.owner_name}
                                    {...register("owner_name")}
                                  />

                                  <div className="svg">
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className="Item">
                                  <label>Contact Number</label>
                                  <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    type="number"
                                    defaultValue={ownInfo.owner_number}
                                    {...register("owner_number")}
                                  />

                                  <div className="svg">
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className="Item">
                                  <label>Email Address</label>
                                  <TextField
                                    id="outlined-basic"

                                    variant="outlined"
                                    defaultValue={ownInfo.owner_email}
                                    {...register("owner_email")}
                                  />

                                  <div className="svg">
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className="Item">
                                  <label>Address</label>
                                  <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    defaultValue={ownInfo.owner_address}
                                    {...register("owner_address")}
                                  />

                                  <div className="svg">
                                    <FiEdit />
                                  </div>
                                </div>

                                <div className="Item">
                                  <label>Other Information</label>
                                  <TextField
                                    id="outlined-basic"
                                   
                                    variant="outlined"
                                    defaultValue={ownInfo.owner_other_info}
                                    {...register("owner_other_info")}
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
                              </form>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Password & Security */}
                <TabPanel value="3">
                  <div className="DashboardTabsItem">
                    <h4>Update Password</h4>
                    <p>Update your shop info and other settings</p>

                    <div className="DashboardForm">
                      {/* Shop Info */}
                      <div className="DashboardFormItem">
                        <Grid container spacing={3}>
                          <Grid item xs={3}>
                            <div className="left">
                              <h5>Current Password</h5>
                              <p>Password for your profile sign in</p>
                            </div>
                          </Grid>

                          <Grid item xs={9}>
                            <div className="CustomeInput">
                              <form onSubmit={handleSubmit(passwordSubmit)}>
                                <div className="Item">
                                  <label>Current Password</label>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    placeholder="Current Password"
                                    {...register("old_password")}
                                  />
                                  {errors.old_password && (
                                    <span>This field is required</span>
                                  )}
                                </div>

                                <div className="Item">
                                  <label>New Password</label>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    placeholder="New Password"
                                    {...register("new_password")}
                                  />
                                  {errors.new_password && (
                                    <span>This field is required</span>
                                  )}
                                </div>

                                <div className="Item">
                                  <label>Confirm New Password</label>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    placeholder="Confirm New Password"
                                    {...register("password_confirmation")}
                                  />
                                  {errors.password_confirmation && (
                                    <span>This field is required</span>
                                  )}
                                </div>

                                <div className="Item">
                                  <Button type="submit" className="Update">
                                    Update
                                  </Button>
                                </div>
                              </form>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
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

export default DashboardSetting;
