
$(document).ready(function () {
    
    $('#theme-selector').on('change', function () {
        var selectedTheme = $(this).val()
        if(selectedTheme === 'light') {
            document.getElementById('theme-stylesheet').setAttribute('href', './css/light.css')
        }
        else if (selectedTheme === 'dark') {
            $('#theme-stylesheet').attr('href', './css/dark.css')
        }
    })
})