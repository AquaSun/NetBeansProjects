function GestationalAgeWeeks()
{
var MILLISECONDS_IN_DAYS = new Number(86400000);

var us_EDD = '${Working estimated delivery date}';
var us_date = '${Date of ultrasound}';

var estimateDeliv = new Date(Date.parse(us_EDD.replace(/-/g, '/')));
var ultrasoundDate = new Date(Date.parse(us_date.replace(/-/g, '/')));

var t2 = estimateDeliv.getTime();
var t1 = ultrasoundDate.getTime();

var gestationAgeWeeks = Math.floor((280 - (t2-t1)/(MILLISECONDS_IN_DAYS)) / 7);

return gestationAgeWeeks;
}

function GestationalAgeDays()
{
var MILLISECONDS_IN_DAYS = new Number(86400000);

var us_EDD = '${Working estimated delivery date}';
var us_date = '${Date of ultrasound}';

var estimateDeliv = new Date(Date.parse(us_EDD.replace(/-/g, '/')));
var ultrasoundDate = new Date(Date.parse(us_date.replace(/-/g, '/')));

var t2 = estimateDeliv.getTime();
var t1 = ultrasoundDate.getTime();

var gestationAgeWeeks = Math.floor((280 - (t2-t1)/(MILLISECONDS_IN_DAYS)) / 7);

var gestationaAgeDays = gestationAgeWeeks * 7;

return gestationaAgeDays;
}

function dayOfLife()
{
var MILLISECONDS_IN_DAYS = new Number(86400000);

var us_EDD = '${Neonate birthdate}';
var us_date = '${Date of ultrasound}';

var estimateDeliv = new Date(Date.parse(us_EDD.replace(/-/g, '/')));
var ultrasoundDate = new Date(Date.parse(us_date.replace(/-/g, '/')));

var t2 = estimateDeliv.getTime();
var t1 = ultrasoundDate.getTime();

var dayOfLife = Math.floor((t2-t1)/(MILLISECONDS_IN_DAYS));

return dayOfLife;
}