window.onload = function() {
  const iconMenuBtn = document.getElementsByClassName('icon-menu')[0];
  const clickMenu = document.getElementsByClassName('click-menu')[0];
  iconMenuBtn.onclick = function() {
    if (clickMenu.style.display === 'none') {
      clickMenu.style.display = 'flex';
    } else {
      clickMenu.style.display = 'none';
    }
  }
}