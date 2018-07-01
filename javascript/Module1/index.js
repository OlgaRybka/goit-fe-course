'use strict';

let denied = "Отменено пользователем!";
let forbidden= "Доступ запрещен!"
let welcome="Добро пожаловать!"

const ADMIN_LOGIN = prompt ("Please enter your login", " ");
if (ADMIN_LOGIN===null) {
    alert (denied);
}
else if (ADMIN_LOGIN !== "admin") {
    alert (forbidden);
}
else {const ADMIN_PASSWORD =prompt("Please enter your password"," ");

if (ADMIN_PASSWORD ===null){ 
    alert (denied);
}
else if (ADMIN_PASSWORD !== "m4ngo1zh4ackz0r") { 
    alert (forbidden);
}
else { alert (welcome);
}
}