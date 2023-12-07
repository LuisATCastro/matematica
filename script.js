
function setTheme(theme) {
    if (theme === 'dark') {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  }
  
  $('.btn-group .btn').on('click', function () {
    const theme = $(this).data('theme');
    setTheme(theme);
  
    localStorage.setItem('theme', theme);
  });
  
  $(document).ready(function () {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
  
      $(`.btn-group .btn[data-theme="${theme}"]`).addClass('selected-theme');
    }
  });