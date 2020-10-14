
$(document).ready(function () {


  // реализация слайдера
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // вставляем svg  в код
  let itemFaq = document.querySelectorAll('.faq__item');

  itemFaq.forEach(element => {
    element.addEventListener('click', () => {
      let answer = element.querySelector('.faq__answer')
      answer.classList.toggle('active')
      element.classList.toggle('active')
    })
  })

  

  // Настройка якоря
  const anchors = document.querySelectorAll('.anchor')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // кнопка открытия меню 
  const menuBtn = () => {
    let btn = document.querySelector('.header__menuBtn');
    let menu = document.querySelector('.header__absMenu');

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      menu.classList.toggle('active');
    })
  }
  menuBtn()

  // активация fancybox, к сожалению не нашёл качественного аналога и подключил ради него и jQuery (и ради форм)
  $('.fancybox').fancybox()

  // маска
  $('input[name="phone"]').mask('+7 (999) 999-99-99');

  // Настройка формы
  function checkName(name) {
    if (name == '') {
        return false;
    } else {
        return true;
    }
  }
  function checkPhone(phone) {
    if (phone == '') {
        return false;
    } else {
        return true;
    }
  }


  $('.popupForm__form').submit(function(e) {
    e.preventDefault();
    // Проверка на верно введенный номер телефона (проверка на пустоту)
    let phone = $(this).find('input[name="phone"]').val();
    let name = $(this).find('input[name="name"]').val();

    if (checkName(name)) {
      $(this).find('input[name="name"]').removeClass('error');
    } else {
      $(this).find('input[name="name"]').addClass('error');
    }

    if (checkPhone(phone)) {
      $(this).find('input[name="phone"]').removeClass('error');
    } else {
      $(this).find('input[name="phone"]').addClass('error');
    }


    if (checkPhone(phone) && checkName(name)) {
        $.ajax({
            url: "sendMessage.php",
            type: "POST",
            data: {
              name: name,
              phone: phone
            },
            success: function(){
              $.fancybox.close();
              $.fancybox.open( $('#thanksPopup') );
              setTimeout(function() {
                  $.fancybox.close();
              }, 2000);
            }
        });
    } else {
        console.log('Ошибка');
    }
  });

  let svg = document.querySelectorAll('.svg');
  svg.forEach(element => {
    let img = element;
    let imgClass = img.getAttribute('class');
    let imgURL = img.getAttribute('src');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', imgURL);
    xhr.responseType = 'document'; 
    xhr.onreadystatechange = function (data) {
      let svgi = xhr.response.querySelector('svg');
      if (typeof imgClass !== 'undefined') {
        svgi.setAttribute('class', imgClass);
      }
      img.replaceWith(svgi);
    }
    xhr.send();
  })
});
