$(document).ready(() => {
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
});