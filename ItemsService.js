const categoriesData = {
  "category1": {
    name: "Категория 1",
    services: [
      {
        value: "service1",
        label: "Услуга 1",
        types: [
          {
            value: "type1",
            label: "Тип 1",
            description: `📨 Telegram подписчики без отписок
<br>🤵‍♀ Качество: MIX аккаунты из разных стран, часть RU<br>
🛡 Гарантия<br>
⌛️ Запуск услуги: до 2 часов
🚀 Скорость: до 5000-20000 в сутки
🔻 Списания: в рамках погрешности до 5% в течение 30 дней

🔗 Указывать ссылку на канал/группу
Пример:
https://t.me/CHANNELNAME

▫️ Возможна накрутка на приватные каналы!
▫️ Без списаний - отсутствие списаний в течение 30 дней
▫️ Заказы на каналы 18+ могут быть отменены`,
            rules: ["https://vk.com/", "https://example.com"],
          },
          {
            value: "type2",
            label: "Тип 2",
            description: "<strong>Описание Типа 2 для Услуги 1 в Категории 1.</strong>",
            rules: ["https://t.me/", "https://example2.com"],
          },
          // ... (другие типы)
        ],
      },
      // ... (другие услуги)
    ],
  },
  "category2": {
    name: "Категория 2",
    services: [
      {
        value: "service4",
        label: "Услуга 4",
        types: [
          {
            value: "type10",
            label: "Тип 10",
            description: "Описание Типа 10 для Услуги 4 в Категории 2.",
            rules: ["https://example3.com"],
          },
          {
            value: "type11",
            label: "Тип 11",
            description: "<strong>Описание</strong> Типа 11<br>для Услуги 4 в Категории 2.",
            rules: ["https://example4.com"],
          },
          // ... (другие типы)
        ],
      },
      // ... (другие услуги)
    ],
  },
};
export { categoriesData };
