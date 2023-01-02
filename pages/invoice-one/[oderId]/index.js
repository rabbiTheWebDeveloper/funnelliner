import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { baseTest } from '../../../constant/constant';
import { shopId } from '../../api';


const index = () => {
    const[invoice ,setInvoice] =useState()
    // let router =useRouter()
    const router = useRouter()
    const { oderId } = router.query
    // const { pid } = router.query
    // console.log(shopId)


    const headers = {
        order_id: oderId,
        shop_id:shopId
      };

    useEffect(()=>{
        axios.get(baseTest + "/order-invoice", { headers: headers })
        .then(function (response) {
          // handle success
          setInvoice(response.data.data);
        });

    } ,[])
    console.log(invoice)



  

    console.log(invoice)

    // invoice?.order_details.reduce((total, {product.price}) =>{
    //     const data =total + price;
    //     console.log(data)


    // } , 0)
    const calculatePrice = invoice?.order_details?.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.product.price* currentVal.product_qty
      }, 0)
      
      const totalPrice = calculatePrice
      console.log(totalPrice)
      
      
    //   const calculateQty = invoice?.order_details?.reduce((total, item) => {
    //     return total + item.quantity
    //   }, 0)
      
    //   const totalQty = calculateQty
    //   console.log(totalQty)


      useEffect(() => {
       
        setTimeout( ()=>{
            window.print();
    
        },2000)
      } ,[])
    return (

        <>

<div className="InvoiceOne">

{/* header */}
<div className="Header">

    <div className="Img">
        <img src="images/white_logo.png" alt="" />
    </div>

    <div className="Text">

        <ul>
            <li> <div className="svg"><BsFillTelephoneForwardFill/></div> (+7 123) 123‒45‒67 </li>
            <li> <div className="svg"><FaRegEnvelope/></div> contact@email.com </li>
            <li> <div className="svg"><BsFillTelephoneForwardFill/></div> location </li>
        </ul>

    </div>

</div>

{/* Invoice */}
<div className="Invoice">
    <h2>INVOICE</h2>
    <p>Invoice date: 07.03.2022</p>
</div>

{/* Table */}
<div className="Table">

    <table>

        <tr>
            <th>PRODUCT DESCRIPTION</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>AMOUNT</th>
        </tr>

        {invoice?.order_details?.map((data ,index) => {
                return (
                <tr>
                    <td>
                        <h4>{data?.product?.product_name}</h4>
                        <h5>Additional Information</h5>
                    </td>
                    <td>{data.product.price}</td>
                    <td>{data?.product_qty}</td>
                    <td>{data?.product.price * data?.product_qty}</td>
                </tr>
                );
              })}

     

        {/* <tr>
            <td>
                <h4>Landing page</h4>
                <h5>Additional Information</h5>
            </td>
            <td>BDT 500.00</td>
            <td>1</td>
            <td>BDT 500.00</td>
        </tr>

        <tr>
            <td>
                <h4>Landing page</h4>
                <h5>Additional Information</h5>
            </td>
            <td>BDT 500.00</td>
            <td>1</td>
            <td>BDT 500.00</td>
        </tr>

        <tr>
            <td>
                <h4>Landing page</h4>
                <h5>Additional Information</h5>
            </td>
            <td>BDT 500.00</td>
            <td>1</td>
            <td>BDT 500.00</td>
        </tr> */}

    </table>

</div>

{/* InvoiceName */}
<div className="InvoiceName">

    <div className="Left">

        <h5>Invoice to: </h5>

        <ul>
            <li>{invoice?.customer?.name}</li>
            <li>Address: {invoice?.customer?.address}</li>
            <li>Contact: {invoice?.customer?.phone}</li>
        </ul>

    </div>

    <div className="Right">
        <h5>SubTotal: <span>TK {totalPrice}</span></h5>
        <h5>Tax: VAT 10%: <span>Tk {totalPrice*.1}.00</span></h5>

        <h4>Total Bill:  <span>BDT {totalPrice - totalPrice*.1 }</span></h4>

    </div>

</div>


<div className="PrintBottom">
    <img src="images/invoice_bg.svg" alt="" />
    <h6>Thank you for your being with us !</h6>
</div>



</div>


            <style jsx>{`

                @import url('https://fonts.googleapis.com/css2?family=Asap:wght@100;200;300;400;500;600;700;800;900&display=swap');

                .InvoiceOne{
                    height:100vh;
                    position: relative;
                    overflow-x: hidden;
                    -webkit-print-color-adjust: exact; 
                    font-family: 'Asap', sans-serif !important;
                }import { useEffect } from 'react';


                .InvoiceOne img{
                    width: 100%;
                }

                .PrintBottom{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                }

                .PrintBottom h6{
                    position: absolute;
                    right:20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 18px;
                    line-height: 35px;
                    font-weight: 600;
                    color: #fff;
                }

                .InvoiceName{
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                }

                .InvoiceName h4{
                    font-size: 25px;
                    line-height: 35px;
                    font-weight: 600;
                    color: #894BCA;
                    margin-top: 20px;
                }

                .InvoiceName h5{
                    font-size: 22px;
                    line-height: 30px;
                    font-weight: 600;
                    color: #000;
                    margin-bottom: 10px;
                }

                .InvoiceName h5 span{
                    margin-left: 20px;
                }

                .InvoiceName .Left{
                    width:50%;
                    margin-right:30px;
                }

                .InvoiceName li{
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 400;
                    color: #000;
                    margin-top:5px;
                }

                .Header{
                    padding: 20px;
                    background-color:#894BCA;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    -webkit-print-color-adjust: exact; 
                }

                .Header img{
                    height: 80px;
                }

                .Header ul li{
                    font-size: 16px;
                    line-height: 24px;
                    font-weight: 400;
                    color: #fff;
                    margin-bottom: 5px;
                    display: flex;
                    align-items: center;
                }

                .Header ul li .svg{
                    margin-right: 10px;
                    margin-top: 5px;
                }

                .Invoice{
                    text-align: center;
                    margin: 20px 0;
                }

                .Invoice h2{
                    font-size: 50px;
                    font-weight: 500;
                    line-height: 60px;
                    color: #000;
                }

                .Invoice p{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    color: #000;
                }

                .Table{
                    padding: 20px;
                    text-align: left; 
                }

                .Table table{
                    width: 100%;
                }

                .Table th{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 35px;
                    color:#000;
                    padding-bottom: 20px;
                }

                .Table td{
                    padding: 10px 0;
                }

                .Table td h4{
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 30px;
                    color:#000;
                }

                .Table td h5{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 28px;
                    color:#000;
                    margin-top: 5px;
                }



            `}</style>

        </>

    )

}

export default index;