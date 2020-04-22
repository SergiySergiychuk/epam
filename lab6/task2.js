const createAndShowList = function(data) {
    const ul = document.createElement('ul')
    data.data.forEach(element => {
        const li = document.createElement('li');
        li.innerText = ''.concat(element.id, ', ', element.employee_name, ', ', element.employee_salary, '.')
        ul.appendChild(li);
    });
    $('body')[0].appendChild(ul);
}
$.ajax({
        type: "GET",
        url: "http://dummy.restapiexample.com/api/v1/employees",
        data: "data",
        dataType: "json",
    })
    .done(createAndShowList)