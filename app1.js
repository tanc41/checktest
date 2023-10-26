let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData("Привет Андрей");
    tg.answerWebAppQuery("HELLO")
});

    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();

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
            tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData(formData);

    });


