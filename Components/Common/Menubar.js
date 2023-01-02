import { Button, Grid, Menu, MenuItem, TextField } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Container } from '@mui/system';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsSearch } from "react-icons/bs";
import { TbSettings } from 'react-icons/tb';
import { baseUrl } from '../../constant/constant';
import { headers } from '../../pages/api';

const Menubar = ({text}) => {
  const [token , setToken] =useState("")
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const router = useRouter();

  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElMenu(null);
  };

  useEffect(() => {
    // Perform localStorage action
    let token = localStorage.getItem('token')
    // console.log(token)
    setToken(token)
  }, [])


  const logout = () => {
    axios
      .get(baseUrl + "/client/logout", { headers: headers })
      .then(response => {

        if(response.status === 200 ) {
          Cookies.remove('token')
          localStorage.clear('token')
          router.push('/login').then(r => {
            // console.log(r)
          })
        }

      });

      Cookies.remove('token')
      localStorage.clear('token')
  };

  return (

    <>
    
      <section className='Menubar'>

        <Container maxWidth="sm">

          <Grid container spacing={2}>

            <Grid item xs={12}>

              <div className="MenubarContent d_flex d_justify">

                {/* left */}
                <div className="Left">
                  <h4>Admin Dashboard</h4>
                </div>

                {/* right */}
                <div className="right">

                  <div className="CustomeInput">
                    <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
                    <Button> <BsSearch/> </Button>
                  </div>

                  {/* SupportTicket */}
                  <div className="SupportTicket">
                    <Link href=''> <BiSupport/> </Link>
                  </div>

                  {/* SupportTicket */}
                  <div className="SupportTicket">
                    <Link href='/dashboard-setting'> <TbSettings/> </Link>
                  </div>

                  <div className="Profile">

                    <Button
                      id="fade-button"
                      aria-controls={openMenu ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMenu ? 'true' : undefined}
                      onClick={handleClickMenu}
                    >
                      <div className="img" id='resources-button'>
                      <img src="images/profile.png" alt="" />
                      
                    </div>

                    </Button>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorElMenu={anchorElMenu}
                      open={openMenu}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}> <Link href='/dashboard-setting'>Profile</Link> </MenuItem>
                      <MenuItem onClick={handleClose}> <Link href=''>Website Link</Link> </MenuItem>
                      <MenuItem onClick={handleClose}> <Link href=''>Custome Domain</Link> </MenuItem>
                      <MenuItem onClick={logout} > <Link href=''>Logout</Link> </MenuItem>

                    </Menu>

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

export default Menubar