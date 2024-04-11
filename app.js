const menu = document.querySelector(".nav_menu");
const menuList = document.querySelector(".nav_list");
const links = document.querySelectorAll('.nav_link');

menu.addEventListener("click", function () {
  menuList.classList.toggle("nav_list--show");
});

    link.addEventListener('click', function(){
        menuList.classList.remove('nav_list--show');
    })
})