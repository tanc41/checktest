let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();





        var allowedDomains = {
            "category1-type1": ["https://vk.com/"],
            "category2-type2": ["https://t.me/"],
            // Добавьте другие комбинации категории и типа, если необходимо.
        };

        function validateLink() {
            var category = document.getElementById("category").value;
            var type = document.getElementById("type").value;
            var link = document.getElementById("link").value;

            var key = category + "-" + type;

            if (allowedDomains.hasOwnProperty(key)) {
                var validDomains = allowedDomains[key];

                var validLink = false;
                for (var i = 0; i < validDomains.length; i++) {
                    if (link.startsWith(validDomains[i])) {
                        validLink = true;
                        break;
                    }
                }

                if (validLink) {
      var category = document.getElementById('category').value;
      var service = document.getElementById('service').value;
      var type = document.getElementById('type').value;
      var link = document.getElementById('link').value;
      var quantity = document.getElementById('quantity').value;
        
      var formData = {
        category: category,
        service: service,
        type: type,
        link: link,
        quantity: quantity
      };
        console.log(formData)
            tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData(JSON.stringify(formData));

                    alert("Данные успешно отправлены на сервер.");
                    return false; // Отменить отправку формы
                } else {
                    alert("Недопустимая ссылка.");
                    return false; // Отменить отправку формы.
                }

    });
            } else {
                alert("Комбинация категории и типа не определена.");
                return false; // Отменить отправку формы.
            }
        }
