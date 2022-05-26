
emailjs.init('bfIuxoAFjsrz2NswM');
const experience1 = ["Refactored 15 Jenkins Pipelines by introducing Jenkins Shared Libraries to eliminate errors, increased reusability and portability, increase team productivity by 10%",
    "Led informational session on Jenkins Shared Libraries for Operations team",
    "Integrated new Splunk to Slack functionality in the above microservice, which supplied Act-On's support team additional 30 days for renewal resolutions"
];
const experience2 = [
    "Expanded functionality for ingest of trade execution data from 4 to 6 data formats",
    "Introduced first metrics dashboards on team for monitoring and tracking trade parsing at the behest of team engineering lead",
    "Designed and implemented visual event tracking with Prometheus; incorporated 100+ daily log messages from Kafka event streams with PromQL"
];

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

const createButton = (exp, items) => {
    var btn = document.createElement('button');
    btn.textContent = 'See More';
    btn.className = 'btn expand';
    btn.setAttribute('id', `${exp}-btn`);
    btn.onclick = () => {
        items.forEach((item) => {
            $(`#${exp}-list`).append(
                $(`<li>${item}</li>`)
                    .attr('class', `listitem list-${exp}`)
                    .css({ opacity: 0.0 })
                    .animate({ opacity: 1.0, duration: 600 }));
        });
        $(`#${exp}-btn`).remove();
        createMinButton(exp, items);
    };
    return btn;
};

const createMinButton = (expId, items) => {
    return $(`#${expId}`)
        .append($('<button>')
            .attr('class', 'btn expand')
            .attr('id', `${expId}-less`)
            .text('Collapse')
            .click(() => {
                $(`.list-${expId}`).remove();
                $(`#${expId}-less`).remove();
                $(`#${expId}`)
                    .append(createButton(expId, items));
            })
        );
};

const expand = (expId, items) => {
    $(`#${expId}`).append(createButton(expId, items));
};

$(document).ready(function () {
    setFadeBtns();
    $('#contact-form').submit((event) => {
        emailjs.sendForm('service_portfolio_site', 'template_contact', '#contact-form')
            .then(() => {
                alert('Thank you! Message has been sent.');
            }, (err) => {
                alert(`An error occurred while sending message. Please try again.`);
                console.log(err);
            });
        event.preventDefault();
        document.getElementById('contact-form').reset();
    });
    expand('experience1', experience1);
    expand('experience2', experience2);
});