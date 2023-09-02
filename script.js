//   document.getElementById('next').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }
const toggleBtn = document.querySelector('.toggle-button')
const toggleBtnIcon = document.querySelector('.toggle-button i')
const dropwdownmenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
  dropwdownmenu.classList.toggle('open')
  const isopen = dropwdownmenu.classList.contains('open')

  toggleBtnIcon.classList = isopen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}