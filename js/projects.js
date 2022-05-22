function fadeIn(element) {
    var fade = () => {
        $(element).animate({
            opacity: 1.0
        });
    };
    return fade;

}

function fadeOut(element) {
    var fade = () => {
        $(element).animate({
            opacity: 0.0
        });
    };
    return fade;
}

$(document).ready(() => {
    var projects = ['p1', 'p2', 'p3'];
    projects.forEach((p) => {
        $(`#${p}`)
            .hover(fadeIn(`#${p}-text`), fadeOut(`#${p}-text`));
    });

});