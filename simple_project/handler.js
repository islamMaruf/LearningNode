function home() {
    console.log('Executing from home');
}
function review(){
    console.log('Executing from review');
}

exports.home = home;
exports.review = review;