let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";


        const orderForm = document.getElementById("orderForm");

        orderForm.addEventListener("click", function () {
            // Получение данных из формы
            const category = document.getElementById("category").value;
            const service = document.getElementById("service").value;
            const type = document.getElementById("type").value;
            const link = document.getElementById("link").value;
            const quantity = document.getElementById("quantity").value;

            // Создание объекта для отправки на сервер
            const formData = {
                category,
                service,
                type,
                link,
                quantity
            };
 tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData(formData);
        });
