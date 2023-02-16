function lockedProfile() {
  const elements = Array.from(
    document.querySelectorAll('body div main div.profile')
  );

  elements.forEach((el) => {
    const hiddenProfile = el.querySelector('div');
    const button = el.querySelector('div button');
    const checker = el.querySelector('input');

    button.addEventListener('click', (e) => {
      if (!checker.checked) {
        if (button.textContent == 'Show more') {
          hiddenProfile.style.display = 'block';
          button.textContent = 'Hide it';
        } else {
          hiddenProfile.style.display = 'none';
          button.textContent = 'Show more';
        }
      }
    });
  });
}
