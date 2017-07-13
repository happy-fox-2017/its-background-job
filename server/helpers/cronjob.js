const CronJob = require('cron').CronJob;
const kue = require('kue')
const queue = kue.createQueue();
const nodemailer = require('nodemailer');
require('dotenv').config();

function worker(task){
    var schedule = task.data.jobschedule
    new CronJob (schedule, function(){
        var job = queue.create('email', {
		    title: 'PENGINGAT ANDA!' + task.data.name
		  , message: `Hi ${response.name}, Ini adalah Task Anda!. ${task.data.task}. Email ini anda dapatkan dari Deri Kurniawan`
		  ,	to: task.data.email
		})
		.save( function(err){
		   if( !err ) console.log( "CronJob is success",job.id );
		})

        queue.process('email', function(job, done){
		    email(job.data, done);
	    })

        function email(job, done){
			let transporter = nodemailer.createTransport({
				service: 'gmail',
				host: 'smtp.gmail.com',
				port: 465,
				secure: true, //secure: true for 465, secure:false for port 587
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASS
				}
			});

			let mailOptions = {
			    from: '"Deri Kurniawan 👻" <kuruniawn@gmail.com>', // sender address
			    to: job.to, // list of receivers
			    subject: job.title, // Subject line
			    text: job.message, // plain text body
			    html: '<h1>Hallo Ini Adalah Pengingat Anda!</h1>' // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
			    if (error) {
			        return console.log(error);
			    }
			    console.log('Message %s sent: %s', info.messageId, info.response);
			    return done();
			});
		}
    }, null, true, 'Asia/Jakarta');   
}

module.exports = worker;