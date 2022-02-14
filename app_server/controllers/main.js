const index = (req,res) => {
    res.render('index', {title: 'Travlr Geta aways'});
};

module.exports = {
    index
}