import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Container, Grid, Tab, Tabs,  } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineFieldTime, AiOutlineCalendar } from 'react-icons/ai';



const NoticeBoard = () => {

  // Tabs
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (



    <>

      <section className='NoticeBoard'>

        <Container maxWidth="sm">

          <Grid container spacing={3}>

            <Grid item xs={8}>

              <div className="NoticeBoardImg">
                <Link href=''><img src="images/NoticeBoard.png" alt="" />  </Link>
              </div>      

            </Grid>

            <Grid item xs={4}>
              
              <div className="NoticeBoardContent">

                <h3 className='d_flex'> <RiComputerLine/> Notice Board</h3>

                {/* NoticeBoardTabs */}
                <div className="NoticeBoardTabs">

                  <Box sx={{ width: '100%', typography: 'body1' }}>

                    <TabContext value={value}>

                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="New" value="1" />
                          <Tab label="All" value="2" />
                        </TabList>
                      </Box>

                      <TabPanel value="1">

                        {/* item */}
                        <div className="TabsItem bg">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem bg">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                      </TabPanel>

                      <TabPanel value="2">

                        {/* item */}
                        <div className="TabsItem bg">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                        {/* item */}
                        <div className="TabsItem">

                          <div className="Time d_flex">
                            <span className='d_flex'><AiOutlineFieldTime/> 12:20 PM</span> 
                            <span className='d_flex'> <AiOutlineCalendar/> 11 June 2022</span>
                          </div>

                          <h5><Link href=''>New Order</Link> Placed In Your Store !</h5>

                        </div>

                      </TabPanel>

                    </TabContext>
                    
                  </Box>

                </div>


              </div>

            </Grid>

          </Grid>

        </Container>

      </section>

    </>

  )

}

export default NoticeBoard