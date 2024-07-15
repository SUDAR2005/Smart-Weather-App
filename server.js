const express=require('express');
const path=require('path');
const axios=require('axios');
const app=express();
const PORT=9876;
const API_KEY='e6de939353717b05dbf24a25cec9c5ae';

app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/templates','index.html'));
});
app.get('/weather',async(req,res)=>{const{lat,lon}=req.query;
    if (!lat||!lon){
        return res.status(400).send({error:'Latitude and Longitude are required'});
}
    try{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        res.send(response.data);
} 
    catch (error){
        res.status(500).send({error:'Failed to fetch weather data'});
}
});

app.listen(PORT,()=>{
    console.log(`App running at port:http://localhost:${PORT}`);
});
