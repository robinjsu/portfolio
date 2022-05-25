const fadeBtns = () => {
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
    fadeBtns();
    $('.contact-form').submit((event) => {
        Email.send({
            SecureToken: `${process.env.SMTP_TOKEN}`,
            To: 'robinjsu@gmail.com',
            From: 'robisu@pdx.edu',
            Subject: 'visitor message',
            Body: `Message from ${$('#name').val()} - ${$('#email').val()}
                   ${$('#message').val()}`
        }).then(
            message => alert(message)
        );
        event.preventDefault();

    });
});