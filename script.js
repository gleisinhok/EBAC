$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const tarefa = $('input').val();
        const novaTarefa = $(`<li>${tarefa}</li>`)
        $(novaTarefa).appendTo('ul');

        $('input').val('')
    });

    $('.lista_tarefas ul').on('click', 'li', function () {
        $(this).toggleClass('riscado');
    });
});