$(function () {

    let $list, $newItemForm, $newItemButton;
    let item = '';
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $newItemButton.show();
    $newItemForm.hide();

    $('li').hide().each(function (index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    function updateCount() {
        const items = $('li').length;

        $('#counter').text(items);
    }
    updateCount();

    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    })

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        const text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
        $newItemButton.show();
        $newItemForm.hide();

        updateCount();
    })

    $list.on('click', 'li', function () {
        const complete = $(this).hasClass('complete');

        if (complete === true) {
            $(this).remove();

        } else {
            item = $(this).text();
            $(this).remove();

            updateCount();
        }
    });
});