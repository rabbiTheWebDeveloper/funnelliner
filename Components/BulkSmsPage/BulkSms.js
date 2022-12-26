import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Menu, } from '@mui/material';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { GoGraph } from 'react-icons/go';
import { AiFillCaretDown } from 'react-icons/ai';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';




const BulkSms = () => {


    // Filter 
    const [age, setAge] = useState('');

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


    return (


        <>

            <section className='TopSellingProducts DashboardSetting Order'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <BiMessageRoundedDots/>
                                    </div>

                                    <div className="text">
                                    <h4>Bulk SMS</h4>
                                    <p>Get SMS report, send messages in large range to your clients</p>
                                    </div>

                                </div>

                                {/* Right */}
                                <div className="Right d_flex">

                                    {/* item */}
                                    <div className="FilterItem d_flex">

                                        <h6>Filter By:</h6>

                                        <div className="Dropdown">

                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
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
                                    <div className="FilterItem">

                                        <div className="CustomeInput">
                                            <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
                                            <Button> <BsSearch/> </Button>
                                        </div>

                                    </div>

                                </div>

                                
                            </div>   

                        </Grid>

                    </Grid>

                </Container>

            </section>

            {/* TotalSMSSent */}
            <section className='TotalOrder TotalSMSSent'>

                <Container maxWidth="sm">

                    <Grid container spacing={3}>

                        {/* Total Order */}
                        <Grid item xs={8}>

                            <Grid container spacing={3}>
                                
                                {/* item */}
                                <Grid item xs={4}>

                                    <div className="TotalOrderItem">

                                        <div className="overlayImg">
                                            <img src="images/totalorder_overlay1.png" alt="" />
                                        </div>
                                        
                                        {/* header */}
                                        <div className="Header d_flex d_justify">

                                            <h5 className='d_flex'> <GoGraph/>Total SMS Sent </h5>

                                            <div className="DropDown">
                                            
                                                <Button
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                >
                                                <h6 className='d_flex'>
                                                        Today 
                                                        <div className="svg"><AiFillCaretDown/></div> 
                                                    </h6>
                                                </Button>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>Today</MenuItem>
                                                    <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                                    <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                                    <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                                    <MenuItem onClick={handleClose}>This Month</MenuItem>
                                                    <MenuItem onClick={handleClose}>Last Month</MenuItem>
                                                </Menu>

                                            </div>

                                        </div>

                                        <div className="Main">
                                            <h3>465</h3>
                                        </div>

                                    </div>  

                                </Grid>
                                
                                {/* item */}
                                <Grid item xs={4}>

                                    <div className="TotalOrderItem">

                                        <div className="overlayImg">
                                            <img src="images/totalorder_overlay2.png" alt="" />
                                        </div>
                                        
                                        {/* header */}
                                        <div className="Header d_flex d_justify">

                                            <h5 className='d_flex'> <GoGraph/> Total SMS Cost (BDT) </h5>

                                            <div className="DropDown">
                                            
                                                <Button
                                                    id="basic-button"
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                >
                                                <h6 className='d_flex'>
                                                        Today 
                                                        <div className="svg"><AiFillCaretDown/></div> 
                                                    </h6>
                                                </Button>
                                                <Menu
                                                    id="basic-menu"
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>Today</MenuItem>
                                                    <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                                                    <MenuItem onClick={handleClose}>Tomorrow</MenuItem>
                                                    <MenuItem onClick={handleClose}>This Weak</MenuItem>
                                                    <MenuItem onClick={handleClose}>This Month</MenuItem>
                                                    <MenuItem onClick={handleClose}>Last Month</MenuItem>
                                                </Menu>

                                            </div>

                                        </div>

                                        <div className="Main">
                                            <h3>465</h3>
                                        </div>

                                    </div>  

                                </Grid>

                                {/* item */}
                                <Grid item xs={4}>

                                    <div className="TotalOrderItem SMSBalance">
                                        
                                        {/* header */}
                                        <div className="Header d_flex d_justify">
                                            <h5 className='d_flex'> <GoGraph/> SMS Balance </h5>
                                        </div>

                                        <div className="Main">
                                            <h3>465</h3>
                                            
                                            <li>Masking SMS: <span>10,000</span> </li>
                                            <li>Non Masking SMS: <span>5,000</span> </li>

                                            <li> <Button>Top Up SMS</Button> </li>

                                        </div>

                                    </div>  

                                </Grid>

                            </Grid>    

                        </Grid>

                        {/* Right */}
                        <Grid item xs={4}>

                            <div className="TotalSMSSentRight">
                                
                                <div className="Left d_flex">

                                    <h5>
                                        Get Your Sales <span>Boost Up</span> & Upto <span>50% More Sales</span> With Us !
                                        <img src="images/sms_overlay.png" alt="" />
                                    </h5>

                                    <div className="img">
                                        <img src="images/online_offline.png" alt="" />       
                                    </div>

                                </div>

                                <h6>Take your store to the hand of the customers <Button>Join Us !</Button></h6>

                            </div>                      

                        </Grid>

                    </Grid>

                </Container>

            </section>
            
            {/* Select Sender ID */}
            <section className='TopSellingProducts DashboardSetting Order BulkSMSSection'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            <div className="Header d_flex d_justify">

                                {/* Left */}
                                <div className="Left d_flex">
                                
                                    <div className="svg">
                                        <BiMessageRoundedDots/>
                                    </div>

                                    <div className="text">
                                        <h4>Send SMS</h4>
                                        <p>Send SMS to the clients in large scale</p>
                                    </div>

                                </div>

                                {/* Right */}
                                <div className="Right d_flex">

                                    {/* item */}
                                    <div className="FilterItem d_flex">

                                        <h6>Filter By:</h6>

                                        <div className="Dropdown">

                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
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
                                    <div className="FilterItem">

                                        <div className="CustomeInput">
                                            <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
                                            <Button> <BsSearch/> </Button>
                                        </div>

                                    </div>

                                </div>

                            </div>   


                            {/* BulkSms */}
                            <div className="BulkSms">

                                <div className="BulkSmsItem">

                                    {/* <div className="CustomeInput">

                                        <div className="Item">

                                            <label>Select Sender ID</label>

                                            <div className="Dropdown">

                                            <Box>
                                                <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    label="Age"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Select sender id here</MenuItem>
                                                    <MenuItem value={20}>Yesterday</MenuItem>
                                                    <MenuItem value={30}>Tomorrow</MenuItem>
                                                    <MenuItem value={40}>This Weak</MenuItem>
                                                    <MenuItem value={50}>Tish Month</MenuItem>
                                                </Select>
                                                </FormControl>
                                            </Box>

                                            </div>

                                        </div>

                                    </div> */}

                                    <div className="CustomeInput">

                                        <div className="Item">

                                            <label>Enter Mobile Numbers</label>

                                            <TextField id="outlined-basic" label="Selling Price" variant="outlined" />

                                        </div>

                                    </div>

                                    <div className="CustomeInput d_flex">

                                        <Button>Upload From Excel</Button>

                                        <div className="DropDown">
                                    
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                            <h6 className='d_flex'>
                                                    All Client
                                                    <div className="svg"><AiFillCaretDown/></div> 
                                                </h6>
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Enter Mobile Numbers</MenuItem>
                                                <MenuItem onClick={handleClose}>Confimed Clients</MenuItem>
                                                <MenuItem onClick={handleClose}>Follow Up Clients</MenuItem>
                                                <MenuItem onClick={handleClose}>Pending Clients</MenuItem>
                                                <MenuItem onClick={handleClose}>Order Return Clients</MenuItem>
                                            </Menu>

                                        </div>

                                    </div>

                                    <div className="CustomeInput">

                                        <div className="Item">

                                            <label>Enter SMS Content</label>
                                            <TextField 
                                            variant="outlined"
                                            id="outlined-multiline-static"
                                            label="Enter your SMS body here"
                                            multiline
                                            rows={4} />
                                            
                                        </div>

                                    </div>

                                    <div className="CustomeInput lastChild">

                                        <div className="Item">

                                            <Button className='SendNow'>Send Now</Button>
                                            <Button className='SendLeter'>Send Later</Button>
                                            <Button>Save Template</Button>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </Grid>

                    </Grid>

                </Container>

            </section>

            {/* Saved SMS Templates */}
            <section className='TopSellingProducts DashboardSetting Order'>

                <Container maxWidth="sm">

                    <Grid Container spacing={3}>

                        <Grid item xs={12}>

                            {/* BulkSms */}
                            <div className="BulkSms">

                                <div className="BulkSmsItem">

                                    <div className="CustomeInput">

                                        <div className="Item">

                                            <label>Saved SMS Templates</label>

                                            <TextField id="outlined-basic" label="Selling Price" variant="outlined" />

                                            <div className="UseTamplate">
                                                    
                                                <Button>Use Template</Button>

                                                <Link href=''> <FiEdit/> </Link>
                                                <Link href=''> <RiDeleteBinLine/> </Link>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="CustomeInput">

                                        <div className="Item">

                                            <label>Saved SMS Templates</label>

                                            <TextField id="outlined-basic" label="Selling Price" variant="outlined" />

                                            <div className="UseTamplate">
                                                    
                                                <Button>Use Template</Button>

                                                <Link href=''> <FiEdit/> </Link>
                                                <Link href=''> <RiDeleteBinLine/> </Link>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="CustomeInput lastChild">

                                        <div className="Item">

                                            <label>Saved SMS Templates</label>

                                            <TextField id="outlined-basic" label="Selling Price" variant="outlined" />

                                            <div className="UseTamplate">
                                                    
                                                <Button>Use Template</Button>

                                                <Link href=''> <FiEdit/> </Link>
                                                <Link href=''> <RiDeleteBinLine/> </Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </Grid>

                    </Grid>

                </Container>

            </section>

        </>

    )

}

export default BulkSms