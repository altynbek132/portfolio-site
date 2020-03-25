const slick = () => {
  $('.modal__slides').slick({
    // setting-name: setting-value
  });
};

const closeModals = () => {
  const buttons = document.getElementsByClassName('btn-close');
  const handler = () => {
    document.body.classList.toggle('no-scroll');
  };
  [...buttons].forEach((el) => el.addEventListener('click', handler));
};

$(document).ready(function() {
  // slick();
});
