import dotenv from 'dotenv'; 
import path from 'path'; 



dotenv.config({path: process.cwd() + '.env'}); 
console.log(process.cwd() + '.env'); 
