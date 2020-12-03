export default class RegForm {
    constructor() {
        this.getData();
    }

    getData () {
        const form = document.querySelector('.form');
        if (form) {
            const name = form.querySelector('[name="name"]');
            name.addEventListener("input", (event) => {
                event.preventDefault();
                const regexp = /[a-zа-я]+$/gi;
                const message = "Имя должно содержать только буквы";
                this.check(name.value, regexp, message, name.name);
            });

            const phone = form.querySelector('[name="phone"]');
            phone.addEventListener("input", (event) => {
                event.preventDefault();
                const regexp = /^\+7\(\d{3}\b\)\d{3}\b-\d{4}\b/;
                const message = "Введите телефон в формате +7(000)000-0000"
                this.check(phone.value, regexp, message, phone.name);npm
            });

            const email = form.querySelector('[name="email"]');
            email.addEventListener("input", (event) => {
                event.preventDefault();
                const regexp = /^[a-z]+[.-]*[a-z]+@mail.ru/i;
                const message = "Введите email в формате 'mymail@mymail.ru', 'my-mail@mymail.ru', 'my.mail@mymail.ru'";
                this.check(email.value, regexp, message, email.name);
            });
        }
    }

    check(data, regexp, message, dataName) {
        const form = document.querySelector('.form');

        if (!data.match(regexp)) {
            if (!document.querySelector(`.alert.${dataName}`)) {
                let span = document.createElement('span');
                span.classList.add('alert', dataName);
                span.innerHTML = message;
                form.before(span);
            }
        } else {
            if (document.querySelector(`.alert.${dataName}`)) {
                document.querySelector(`.alert.${dataName}`).remove();
            }
        }
    }
}