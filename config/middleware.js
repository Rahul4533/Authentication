module.exports.setflash= function(req,res,next){

    res.locals.success_message= req.flash('success_message');
    res.locals.error_message= req.flash('Error_Message');
    res.locals.error= req.flash('Error');

    next();


}

module.exports.checkAuth= function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
}

module.exports.setAuthancitedUser= function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}