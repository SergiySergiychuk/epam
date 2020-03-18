const children = [0, 1, 2, 3, 4, 5];
const profession = ["ERP-програміст", "HTML-верстальник", "Адміністратор бази даних", "Веб-дизайнер"];
const p_name = ["Катя", "Аня", "Софія", "Наталка", "Юля", "Віка"];
const country = [
    { name: "Великобританія", city: "Лондон" },
    { name: "Канада", city: "Оттава" },
    { name: "США", city: "Вашингтон" },
    { name: "Данія", city: "Капенгаген" }
]
const user_children;
const user_profession;
const user_p_name;
const user_city;

for (const elem of children) {
    if (confirm('Ви хочете: ' + elem + ' дітей')) {
        user_children = elem;
        break;
    }
}
for (const elem of profession) {
    if (confirm('Ви хочете працювати на посаді: ' + elem)) {
        user_profession = elem;
        break;
    }
}
for (const elem of p_name) {
    if (confirm('Ви хочете партнера з іменем: ' + elem)) {
        user_p_name = elem;
        break;
    }
}
for (const elem of country) {
    if (confirm('Ви хочете жити в країні під назвою: ' + elem.name)) {
        user_city = elem.city;
        break;
    }
}
alert('Ви укладите шлюб з ' + user_p_name + ' та у вас буде ' + user_children + ' дітей');
alert('Ви переїдите у місто ' + user_city + ' на посаду ' + user_profession);