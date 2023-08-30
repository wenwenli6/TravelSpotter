const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);  //User.register is provided by passport-local-mongoose
        req.login(registeredUser, err => { //req.login: passport的功能
            if (err) return next(err);
            req.flash('success', 'Welcome to TravelSpotter!');
            res.redirect('/spots');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

//在用户登录成功后，向用户显示欢迎消息，然后将用户重定向到他们之前尝试访问的页面或默认的 '/spots' 页面。
module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/spots';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout(); //passport middleware
    // req.session.destroy();
    req.flash('success', "You logged out successfully!");
    res.redirect('/spots');
}