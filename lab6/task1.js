const emailRegex = /([^a-z|A-Z|\d|@|.])/;
const textRegex = /([^a-z|A-Z|\d])/;
const submitButton = $('.submit-btn');

function showThatValueIsUncorrect(uncorrectMessage) {
    uncorrectMessage.text('Uncorrect value');
    uncorrectMessage.removeAttr('hidden');
    submitButton.attr('disabled', true);
}

function showThatValueIsCorrect(uncorrectMessage) {
    uncorrectMessage.attr('hidden', true);
    submitButton.removeAttr('disabled');
}

$('.email-input').keyup(() => {
    const uncorrectMessage = $('.uncorrect-message_email');
    if ($('.email-input').val().match(emailRegex)) {
        showThatValueIsUncorrect(uncorrectMessage);
    } else {
        showThatValueIsCorrect(uncorrectMessage);
    }
});
$('.name-input').keyup(() => {
    const uncorrectMessage = $('.uncorrect-message_name');
    if ($('.name-input').val().match(textRegex)) {
        showThatValueIsUncorrect(uncorrectMessage);
    } else {
        showThatValueIsCorrect(uncorrectMessage);

    }
});
$('.message-input').keyup(() => {
    const uncorrectMessage = $('.uncorrect-message_message');
    if ($('.message-input').val().match(textRegex)) {
        showThatValueIsUncorrect(uncorrectMessage);
    } else {
        showThatValueIsCorrect(uncorrectMessage);
    }
});

function validationOnEmptyString(data) {
    let isValid = true;
    data.forEach(element => {
        if (!element.value) {
            $(`.uncorrect-message_${element.name}`).removeAttr('hidden');
            isValid = false;
        }
    });
    return isValid
}
$('.mainForm').submit((e) => {
    e.preventDefault();
    const data = validationOnEmptyString($('.mainForm').serializeArray());
    if (data) {
        $.ajax({
            type: "POST",
            url: "https://create-your-monster.herokuapp.com",
            data: data,
            dataType: "jsonp",
            success: function(response) {
                console.log('success')
            }
        })
    }
});