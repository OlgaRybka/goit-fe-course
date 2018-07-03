'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let denied = "Отменено пользователем!";
let forbidden= "Доступ запрещен!"
let welcome="Добро пожаловать!"

const login  = prompt ("Please enter your login", " ");
if (login ===null) {
    alert (denied);
}
else if (login !== ADMIN_LOGIN) {
    alert (forbidden);
}
else {const password =prompt("Please enter your password"," ");

if (password ===null){ 
    alert (denied);
}
else if (password !== ADMIN_PASSWORD) { 
    alert (forbidden);
}
else { alert (welcome);
}
}
