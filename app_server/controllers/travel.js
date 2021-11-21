const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const travel = (req,res) => {
    pagetitle = process.env.npm_package_description + '- Travel ';
    res.render('travel', {title: 'Travlr Geta aways',trips});
};

module.exports = {
    travel
}