const ajaxSettings = {
    method: 'delete'
};

$('#delete-task').on('click', ()=>{

    const taskId = $('#task-id').val();
    $.ajax(`/task/delete/${taskId}`, ajaxSettings);
    window.location.href='/';
});