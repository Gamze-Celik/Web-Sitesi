var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function iletisimKontrol() {
    var ad = document.forms["iletisimFormu"]["ad"].value;
    var soyad= document.forms["iletisimFormu"]["soyad"].value;
    var cinsiyet = document.forms["iletisimFormu"]["cinsiyet"].value;
    var mail = document.forms["iletisimFormu"]["mail"].value;
    var telefon = document.forms["iletisimFormu"]["telefon"].value;
    var parola = document.forms["iletisimFormu"]["parola"].value;

      if (ad == "") {
        alert("Ad boş bırakılamaz.");
        return false;
      }
      if (soyad == "") {
        alert("Soyad boş bırakılamaz.");
        return false;
      }
      if (cinsiyet == "") {
        alert("Cinsiyet boş bırakılamaz.");
        return false;
      }
      if (mail == "") {
        alert("Mail boş bırakılamaz.");
        return false;
      }
      if (telefon == "") {
        alert("Telefon numarası boş bırakılamaz.");
        return false;
      }
      if (parola == "") {
        alert("Parola boş bırakılamaz.");
        return false;
      }
  }

