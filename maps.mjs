import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();


const origin = ""


const destinationSantos = "-23.9505,-46.3353"; 
const destinationParanagua = "-25.5163,-48.5225";


fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
?destinations=${destinationParanagua}|${destinationSantos}
&origins=${origin}
&units=metric
&mode=driving
&key=${process.env.GOOGLE_API_KEY}`) 
.then(response => response.json())
.then(data => {
    const paranagua = data.rows[0].elements[0].distance.value;
    const santos = data.rows[0].elements[1].distance.value;
    if(santos < paranagua){
        console.log(`O porto de Santos está mais próximo, com cerca de ${Math.round((paranagua-santos)/1000)}km a menos`)
    }else{
        console.log(`O porto de Paranagua está mais próximo, com cerca de ${Math.round((santos-paranagua)/1000)}km a menos`)
    }})
.catch(error => console.log(error))