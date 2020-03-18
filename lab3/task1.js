let children = [0, 1, 2, 3, 4, 5];
let profession = ["ERP-програміст", "HTML-верстальник", "Адміністратор бази даних", "Веб-дизайнер"];
let p_name = ["Катя", "Аня", "Софія", "Наталка", "Юля", "Віка"];
let country = [
    { name: "Великобританія", city: "Лондон" },
    { name: "Канада", city: "Оттава" },
    { name: "США", city: "Вашингтон" },
    { name: "Данія", city: "Капенгаген" }
]
let user_children;
let user_profession;
let user_p_name;
let user_city;

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
alert('Ви переїдите у місто ' + user_city + ' на посаду ' + user_profession)