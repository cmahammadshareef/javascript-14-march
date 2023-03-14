let string = "";
let buttons = document.querySelector('.button')
Array.from(buttons).forEach(function (button) {
    button.addEventlistener('click', () => {
        if (e.target.innerHtml == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHtml == 'c') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHtml;
            document.querySelector('input').value = string;
        }
    });
})