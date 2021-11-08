const travel = (req,res) => {
    pagetitle = process.env.npm_package_description + '- Travel ';
    res.render('travel', {title: 'Travlr Geta aways'});
};

module.exports = {
    travel
}