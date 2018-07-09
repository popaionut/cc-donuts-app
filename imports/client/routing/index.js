import route from './router';

//User
import Register from '/imports/client/pages/users/Register';
import Login from '/imports/client/pages/users/Login';
import Home from '/imports/client/pages/home/Home';

// donuts
import DonutsList from '/imports/client/pages/donuts/DonutsList';
import DonutsCreate from '/imports/client/pages/donuts/DonutsCreate';


route('/', Home, {}, {
    name: 'home'
});
route('/login', Login, {}, {
    name: 'login'
});
route('/register', Register, {}, {
    name: 'register'
});
route('/donuts', DonutsList, {}, {
    name: 'donuts.list'
});
route('/donuts/create/:_id?', DonutsCreate, {}, {
    name: 'donuts.create'
});



