// import 'jquery';

function fadeIn(element) {
    var fade = () => {
        $(element).animate({
            opacity: 1.0
        })
    }
    return fade;

}

function fadeOut(element) {
    var fade = () => {
        $(element).animate({
            opacity: 0.0
        })
    }
    return fade;
}

$(document).ready(() => {
    $('#proj1')
        .hover(fadeIn('#p1-text'), fadeOut('#p1-text'))
    // $('#p2-text')
    //     .hover(fadeIn($(this)), fadeOut($(this)))
    // $('#p3-text')
    //     .hover(fadeIn($(this)), fadeOut($(this)))
})