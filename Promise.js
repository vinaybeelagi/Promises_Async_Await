const axios = require("axios");
const data = axios.get ("https://api.api-ninjas.com/v1/cats");
data.then((res)=>{
    console.log(res.data)
})