let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

 tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData("43545");

