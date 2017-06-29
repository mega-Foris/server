const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config();

function checkTokenSetUser(req, res, next) {
	const tokenHeader = req.get('Authorization');
	if(tokenHeader) {
		const token = tokenHeader.split(' ')[1];
		jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded)=> {
			if(err){
				next();
			} else {
					console.log(decoded);
					req.user = decoded;
					next();
			}
		});
	} else {
		next();
	}
}

function ensureLoggedIn(req, res, next){
	console.log('req.person below');
		console.log(req.user);
	if(req.user){
		next();
		console.log('NEXT! allow?');
	} else {
		console.log('401?!?');
		res.status(401)
		next(new Error('Un-Authorized'))
	}
}

function allowAccess(req, res, next) {
	if(req.user.id == req.params.id) {
		next();
	} else {
		res.status(401);
		next(new Error('Un-Authorized'))
	}
}



module.exports = {
  checkTokenSetUser,
  ensureLoggedIn,
  allowAccess
}
