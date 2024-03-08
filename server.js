const express = require ("express");

const app = express();

app.use(express.json({init:'50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));


app.listen(4000,()=>{
    console.log("Servidor de Maciel funcionando");
});