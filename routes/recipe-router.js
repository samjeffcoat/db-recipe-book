const router= require('express').Router();
const knex= require('knex');

const knexConfig= require('../knexfile');


const db= knex(knexConfig.development)






module.exports= router;