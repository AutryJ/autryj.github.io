function showhide() {
    var d = new Date();
    var s = document.getElementById(+d.getDay());
    s.style.display = (s.style.display == 'block') ? 'none' : 'block';
}