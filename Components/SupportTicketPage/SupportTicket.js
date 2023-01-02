import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Menu,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiOutlineCamera } from "react-icons/ai";
import Link from "next/link";
import { ImTicket } from "react-icons/im";

import { useForm } from "react-hook-form";
import { baseUrl} from "../../constant/constant";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { handleGetSupportTicketList, headers } from "../../pages/api";


const SupportTicket = () => {
  // Filter
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // handleClickOrder
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Dropdown
  const [anchorElMenu, setAnchorElMenu] = useState(null);

  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorElMenu(null);
  };

  const data = Cookies.get();
  const mainData = data?.user;
  let parseData;
  if (mainData != null) {
    parseData = JSON.parse(mainData);
  }
  const merchantId = parseData?.id;

  const [merchant, setMerchant] = useState({});
  useEffect(() => {
    const parseData = JSON.parse(localStorage.getItem("user"));
    setMerchant(parseData);
  });
  // const token = Cookies.get("token");
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   "Content-Type": "multipart/form-data",
  //   "X-Requested-With": "XMLHttpRequest",
  // };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCreateSupportTicket = (data) => {
    const formData = new FormData();
    formData.append("merchant_id", merchant.id);
    formData.append("subject", data.ticketSubject);
    formData.append("content", data.msgContent);
    // formData.append("attachment", data.attachment[0]);
    if(data.attachment.length===1){
      formData.append("attachment",data.attachment[0]);
    }

    axios
      .post(`${baseUrl}/client/support-ticket/store`, formData, {
        headers: headers,
      })
      .then(function (response) {
        Swal.fire("Ticket send success", response.data.msg, "success");
      })
      .catch(function (error) {
        // console.log("error", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.msg,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  //all supports ticket
  const [ticketList, setTicketList] = useState([]);
  const hanldeGetData =()=>{
    handleGetSupportTicketList(merchantId).then((result) => {
      setTicketList(result?.data);
    });
  }

  useEffect(() => {
    hanldeGetData()
  }, []);

// console.log(ticketList)
  return (
    <>
      <section className='TopSellingProducts DashboardSetting Order SupportTicketSection'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className='Header d_flex d_justify'>
                {/* Left */}
                <div className='Left d_flex'>
                  <div className='svg'>
                    <ImTicket />
                  </div>

                  <div className='text'>
                    <h4>Support Ticket</h4>
                    <p>Support ticket for instant help</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Select Sender ID */}
      <section className='TopSellingProducts DashboardSetting Order BulkSMSSection SupportTicketSection'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              {/* BulkSms */}

              <form onSubmit={handleSubmit(handleCreateSupportTicket)}>
                <div className='BulkSms'>
                  <div className='BulkSmsItem'>
                    <div className='CustomeInput'>
                      <div className='Item'>
                        <label>Ticket Subject</label>
                        <TextField
                          {...register("ticketSubject", {
                            required: true,
                            minLength: 8,
                          })}
                          id='outlined-basic'
                          label='Subject'
                          variant='outlined'
                        />
                        {errors.ticketSubject && (
                          <span style={{ color: "red" }}>
                            The subject must be at least 6 characters
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='CustomeInput'>
                      <div className='Item'>
                        <label>Enter SMS Content</label>
                        <TextField
                          variant='outlined'
                          id='outlined-multiline-static'
                          label='Enter your SMS body here'
                          multiline
                          {...register("msgContent", { required: true })}
                          rows={4}
                        />
                        {errors.msgContent && (
                          <span style={{ color: "red" }}>
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className='CustomeInput'>
                      <div className='Item Upload'>
                        <label>Attach File</label>
                        <Button variant='contained' component='label'>
                          Upload
                          <input
                            {...register("attachment", { required: true })}
                            hidden
                            accept='image/*'
                            multiple
                            type='file'
                          />
                          {errors.attachment && (
                            <span style={{ color: "red" }}>
                              This field is required
                            </span>
                          )}
                        </Button>

                        <div className='svg'>
                          <AiOutlineCamera />
                        </div>
                      </div>
                    </div>

                    <div className='CustomeInput lastChild'>
                      <div className='Item'>
                        <Button type='submit' className='SendLeter'>
                          Submit
                        </Button>
                        <Button className='SendNow'>Cancel</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className='TopSellingProducts DashboardSetting Order SupportTicketSection'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className='Header d_flex d_justify'>
                {/* Left */}
                <div className='Left d_flex'>
                  <div className='svg'>
                    <ImTicket />
                  </div>

                  <div className='text'>
                    <h4>Ticket Conversation</h4>
                    <p>Conversation of tickets opened by clients</p>
                  </div>
                </div>
              </div>

              {/* TicketConversation */}
              <div className='TicketConversation'>
                {/* Item */}
                <div className='TicketConversationItem'>
                  <div className='TopText d_flex d_justify'>
                    <h4>Shop Name</h4>
                    <h5> 22 June,2022 at 12:33 PM</h5>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis earum id ab eligendi aspernatur. Est aliquam
                    consequatur itaque hic repellendus ut iste magni iusto!
                    Consequuntur, itaque. Omnis non sit nisi. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Facilis earum id ab
                    eligendi aspernatur. Est aliquam consequatur itaque hic
                    repellendusut iste magni iusto! Consequuntur, itaque. Omnis
                    non sit nisi. Omnis non sit nisi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facilis earum id ab eligendi
                    aspernatur. Est aliquam consequatur itaque hic repellendusut
                    iste magni iusto! Consequuntur, itaque. Omnis non sit nisi.
                  </p>

                  <Button className='SendLeter'>Download Attachment</Button>
                </div>

                {/* Item */}
                <div className='TicketConversationItem'>
                  <div className='TopText d_flex d_justify'>
                    <h4>Shop Name</h4>
                    <h5> 22 June,2022 at 12:33 PM</h5>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis earum id ab eligendi aspernatur. Est aliquam
                    consequatur itaque hic repellendus ut iste magni iusto!
                    Consequuntur, itaque. Omnis non sit nisi. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Facilis earum id ab
                    eligendi aspernatur. Est aliquam consequatur itaque hic
                    repellendusut iste magni iusto! Consequuntur, itaque. Omnis
                    non sit nisi. Omnis non sit nisi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facilis earum id ab eligendi
                    aspernatur. Est aliquam consequatur itaque hic repellendusut
                    iste magni iusto! Consequuntur, itaque. Omnis non sit nisi.
                  </p>

                  <Button className='SendLeter'>Download Attachment</Button>
                </div>

                {/* Item */}
                <div className='TicketConversationItem'>
                  <div className='TopText d_flex d_justify'>
                    <h4>Shop Name</h4>
                    <h5> 22 June,2022 at 12:33 PM</h5>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis earum id ab eligendi aspernatur. Est aliquam
                    consequatur itaque hic repellendus ut iste magni iusto!
                    Consequuntur, itaque. Omnis non sit nisi. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Facilis earum id ab
                    eligendi aspernatur. Est aliquam consequatur itaque hic
                    repellendusut iste magni iusto! Consequuntur, itaque. Omnis
                    non sit nisi. Omnis non sit nisi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facilis earum id ab eligendi
                    aspernatur. Est aliquam consequatur itaque hic repellendusut
                    iste magni iusto! Consequuntur, itaque. Omnis non sit nisi.
                  </p>

                  <Button className='SendLeter'>Download Attachment</Button>
                </div>

                {/* Item */}
                <div className='TicketConversationItem'>
                  <div className='TopText d_flex d_justify'>
                    <h4>Shop Name</h4>
                    <h5> 22 June,2022 at 12:33 PM</h5>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis earum id ab eligendi aspernatur. Est aliquam
                    consequatur itaque hic repellendus ut iste magni iusto!
                    Consequuntur, itaque. Omnis non sit nisi. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Facilis earum id ab
                    eligendi aspernatur. Est aliquam consequatur itaque hic
                    repellendusut iste magni iusto! Consequuntur, itaque. Omnis
                    non sit nisi. Omnis non sit nisi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Facilis earum id ab eligendi
                    aspernatur. Est aliquam consequatur itaque hic repellendusut
                    iste magni iusto! Consequuntur, itaque. Omnis non sit nisi.
                  </p>

                  <Button className='SendLeter'>Download Attachment</Button>
                </div>

                {/* Item */}
                <div className='TicketConversationItem Load'>
                  <Button className='SendLeter'>Load More</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className='TopSellingProducts DashboardSetting Order SupportTicketSection'>
        <Container maxWidth='sm'>
          <Grid Container spacing={3}>
            <Grid item xs={12}>
              <div className='Header d_flex d_justify'>
                {/* Left */}
                <div className='Left d_flex'>
                  <div className='svg'>
                    <ImTicket />
                  </div>

                  <div className='text'>
                    <h4>Your All Support Tickets</h4>
                    <p>List of tickets opened by you</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          {/* Table */}
          {/* DashboardSettingTabs */}
          <div className='DashboardSettingTabs WebsiteSettingPage'>
            <div className='Pending'>
              <div className='ProductTable'>
                <table>
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Ticket No.</th>
                      <th>Subject For Ticket</th>
                      <th>Submission Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* item */}
                    {ticketList?.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.ticket_id}</td>
                          <td className='bg'>{item.subject}</td>
                          <td>{item.created_at}</td>
                          <td className='bg'>{item.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SupportTicket;
