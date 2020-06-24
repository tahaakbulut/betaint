//Royal Preloader Start//
$(document).ready(function () {
    $("body").queryLoader2({
        backgroundColor: "#f8bf00",
        barHeight: 0,
        minimumTime: 0,
        fadeOutTime: 300,
        onComplete: function () {
            $('#preloader').remove();
            document.querySelector('body').removeAttribute('style');
        },
        onProgress: function () {
            document.querySelector('body').setAttribute('style', 'overflow:hidden');
        }
    });
});
//Preload End//
$(document).ready(function () {
    $('#searchSelect').select2({
        maximumSelectionLength: 1,
        dropdownParent: $('.header-line-search'),
        language: "tr"
    });
    $("#searchInput").select2({
        data: [
                {
                    "id": 1,
                    "text": "Bir Harp Gelini"
                },
                {
                    "id": 2,
                    "text": "Bir Harp Gelini 2"
                },
                {
                    "id": 3,
                    "text": "Bir Harp Gelini 3"
                }
            ],
        maximumSelectionLength: 1,
        minimumInputLength: 2,
        dropdownParent: $('.header-line-search'),
        language: "tr",
    });
});