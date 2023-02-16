function toggle() {
  if (document.getElementsByClassName('button')[0].textContent == 'More') {
    document.getElementsByClassName('button')[0].textContent = 'Less';
  } else {
    document.getElementsByClassName('button')[0].textContent = 'More';
  }

  if (document.getElementById('extra').style.display == 'none') {
    document.getElementById('extra').style.display = 'block';
  } else {
    document.getElementById('extra').style.display = 'none';
  }
}
