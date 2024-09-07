const express=require("express")

const cookieParser=require('cookie-parser')
const cors=require('cors')
const app= express()
app.use(express.json({limit:'16kb'}))
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors());

module.exports={app};