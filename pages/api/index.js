// export const baseUrl='https://funnelliner.com/api/v1';
export const baseUrl='https://funnelliner.com/api/v1';
export const mainBaseUrl='https://funnelliner.com';

import axios from "axios";
import Cookies from 'js-cookie';

const token = Cookies.get("token");
const headers = {
    Authorization: `Bearer ${token}`,
  };

  const data = Cookies.get();
  const mainData = data?.user;
  let parseData;
  if (mainData != null) {
    parseData = JSON.parse(mainData);
  }

export const getWebsiteSettings = async()=> {

    let EndPoint=`${baseUrl}/client/settings/website`;
    return axios.get(EndPoint, {headers:headers}).then((res)=>{
        if(res.status===200){
            return res;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            return false;
    });
}

export const getMerchantList =()=> {
    let EndPoint=`${baseUrl}/client/customers/3`;
    return axios.get(EndPoint, {headers:headers}).then((res)=>{

        if(res.status===200){
            return res;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            return false;
    });
}

export const topSellingProducts =()=> {
    let EndPoint=`${baseUrl}/client/top-selling-product`;
    return axios.get(EndPoint, {headers:headers}).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}

export const handleGetSupportTicketList =(merchant_id)=> {
    let EndPoint=`${baseUrl}/client/support-ticket/list`;
    return axios.post(EndPoint,{merchant_id:merchant_id}, {headers:headers}).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}

export const activateCourier =(merchant_id, provider, status, config)=> {
    let EndPoint=`${mainBaseUrl}/api/courier/provider`;
    const postBody ={
        merchant_id:merchant_id,
        provider:provider,
        status:status,
        config:config
    }
    console.log("postBody", postBody)
    return axios.post(EndPoint, postBody, {headers:headers}).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}


export const multiPageTemplateList =()=> {
    let EndPoint=`${mainBaseUrl}/api/themes/multiple/list`;
    return axios.get(EndPoint).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}

export const activeMultipleTemplate=(id)=> {
    const postBody={
        multiple_theme_id:id
    }
    let EndPoint=`${mainBaseUrl}/api/v1/client/themes/multiple/active`;
    return axios.post(EndPoint,postBody,{headers:headers}).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}



export const landingPageTemplateList =()=> {
    let EndPoint=`${mainBaseUrl}/api/themes/landing/list`;
    return axios.get(EndPoint).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}

export const activeLandingPageTemplate=(id)=> {
    const postBody={
        landing_theme_id:id
    }
    let EndPoint=`${mainBaseUrl}/api/v1/client/themes/landing/active`;
    return axios.post(EndPoint,postBody,{headers:headers}).then((res)=>{
        return res;
        }).catch((err)=>{
            console.log("err", err)
    });
}