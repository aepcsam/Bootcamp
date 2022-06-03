const router = require('express').Router();
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');


router.get('/',(req,res)=>{
    res.render('index',{
        city:null,
        temp : null,
        temp_max:null,
        temp_max:null,
        icon:null,
        des:null,
        windSpeed:null,
        humidity:null
    });
});


router.post('/', async(req,res)=>{
    const city = req.body.city;
    console.log(city);
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
    try {
        const response = await fetch(url_api);
        const data = await response.json();
        // console.log(data);
        if(data.message === "city not found"){
            res.render('index',{
                city:data.message,
                temp : null,
                temp_max:null,
                temp_max:null,
                icon:null,
                des:null,
                windSpeed:null,
                humidity:null


            });
        } else{
            const city = data.name;
            const temp = data.main.temp
            const temp_min=data.main.temp_min;
            const temp_max = data.main.temp_max;
            const icon = data.weather[0].icon;
            const des = data.weather[0].description
            const windSpeed = data.wind.speed;
            const humidity = data.main.humidity;
            
            res.render('index',{
                city,temp,temp_min,temp_max,des,icon,windSpeed,humidity
            })
        }



    } catch (error) {
        res.render('index',{
            city:"something Wrong Connection",
            temp : null,
            temp_max:null,
            temp_max:null,
            icon:null,
            des:null,
            windSpeed:null,
            humidity:null

        })
    }
})



module.exports = router;