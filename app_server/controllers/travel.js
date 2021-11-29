const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

  
 const renderTravelList = (res, responseBody) => {
     let message = null;
     let pageTitle = process.env.npm_package_description + ' Travel';
     if(!(responseBody instanceof Array)){
         message = 'API lookup error';
         response = [];
     } else {
         if (!responseBody.length){
             message = 'NO trips exist in databasesel';
         }
     }
     res.render('travel',{
         title: pageTitle,
         trips: responsBody,
         message
     });
 }

/* get travle list*/
const travelList = (req,res) => {
   const path ='/api/trips';
   const requestOptions ={
       url: '${apiOptions.server}${path}',
       method: 'GET',
       json: {},
   };
   console.info('>>travelcontroller.travelList calling' + requestOptions.url);
   request(
       apiOptions,
       (err, {statusCode}, body) => {
           if (err) {
               console.error(err);
           }
           renderTravelist(req,res,body);
       }
   )}


module.exports = {
    travelList
};