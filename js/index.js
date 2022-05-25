
emailjs.init('bfIuxoAFjsrz2NswM');

const setFadeBtns = () => {
    var projects = ['p1', 'p2', 'p3'];
    projects.forEach((p) => {
        $(`#${p}`).hover(() => {
            $(`#${p}-btn`).animate({
                opacity: 1.0
            });
        }, () => {
            $(`#${p}-btn`).animate({
                opacity: 0.0
            });
        });
    });
};

$(document).ready(() => {
    setFadeBtns();
    $('.contact-form').submit((event) => {
        emailjs.sendForm('service_portfolio_site', 'template_contact', '#contact-form')
            .then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        event.preventDefault();
    });
});