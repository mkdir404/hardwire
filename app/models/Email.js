'use strict';

var mailer = require('curlymail');

exports.wiretree = function (config, mongoose) {

	var Schema = mongoose.Schema;

	/*
		Email Schema -----------------------
	 */
	var EmailSchema = new Schema({
		account: {
			type: String,
			required: true
		},
		user: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		host: String,
		port: Number,
		ssl: Boolean,
		tls: Boolean,
		timeout: Number,
		domain: String
	});

	EmailSchema.post( 'save', function (doc) {
		mailer.addAccount( doc.account, doc );
	});

	return mongoose.model('Email', EmailSchema);
};

