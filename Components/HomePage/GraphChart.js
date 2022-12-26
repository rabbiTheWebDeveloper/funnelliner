import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const GraphChart = () => {

  return (

    <>

        <section className='GraphChart'>

          <Container maxWidth="sm">

            <Grid Container spacing={3}>

              <Grid item xs={12}>

                <div className="GraphChartImg">
                  <Link href=''><img src="images/Total_chart.png" alt="" />  </Link>
                </div>      

              </Grid>

            </Grid>

          </Container>

      </section>      

    </>

  )

}

export default GraphChart