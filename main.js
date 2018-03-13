
(function () {
    let table = document.createElement('table');
    document.body.appendChild(table);
    let values = [1,2,3,4,5,6,7,8,9,10];
    values.forEach(function(rowValue){
        let tr = document.createElement('tr');
        values.forEach(function(colValue){
            let td = document.createElement('td');
            let text = document.createTextNode(rowValue*colValue);
            td.appendChild(text);
            tr.appendChild(td);
        });
        table.appendChild(tr);

    });
    let menubtn = document.getElementsByClassName('menu-btn')[0];
    menubtn.onclick = function () {
        document.body.classList.add("shownav");
    }

    let menuClose = document.getElementsByClassName('menu__close')[0];
    menuClose.onclick = function () {
        document.body.classList.remove("shownav");
    }
})();

