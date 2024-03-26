
function Poziv() {
    var oDbBaza = firebase.database().ref('filmovi');
 
    oDbBaza.on('value', function (snapshot) 
    {
        var tablica = $("#klijent tbody");
        tablica.empty();
        var a = 0;
 
        snapshot.forEach(function (childSnapshot) {
            var oFilmovi = childSnapshot.val();
           
            a++;
 
            var link = oFilmovi.link;
            var naziv = oFilmovi.naziv;
            var godina = oFilmovi.godina;
            var zanrovi = oFilmovi.zanrovi.join(", ");
            var birao = oFilmovi.birao.join(", ");
            var pregledano = oFilmovi.pregledano ? "Da" : "Ne";
 
            // Dodavanje reda u tablicu
            tablica.append("<tr> <td>" + link + "</td><td>" + naziv + "</td><td>" + godina + "</td><td>" + zanrovi + "</td><td>" + birao + "</td><td>" + pregledano + "</td> </tr>");
        });
    });
 }




window.onload = function () {
    Poziv();
 }
//___________________________________________________________________________________________________DODAJ




    
   
function pretraziTablicu() {
  
    var tekstPretrage = document.getElementById('intpTrazi').value.toLowerCase();

    
    var redovi = document.querySelectorAll('#klijent tbody tr');

    
    redovi.forEach(function (red) {
        var tekstReda = red.textContent.toLowerCase();

       
        if (tekstReda.includes(tekstPretrage)) {
            red.style.display = 'table-row'; 
        } else {
            red.style.display = 'none'; 
        }
    });
}


$(document).ready(function() {
    
    $('#updateDropdownAzurirajK').change(function() {
        var sKey = $('#updateDropdownAzurirajK option:selected').val();
        azurirajKorisnikaRacun(sKey); 
    });
});


    

    
function Poziv() {
    var oDbBaza = firebase.database().ref('filmovi');
 
    oDbBaza.on('value', function (snapshot) 
    {
        var tablica = $("#klijent tbody");
        tablica.empty();
        var a = 0;
 
        snapshot.forEach(function (childSnapshot) {
            var oFilmovi = childSnapshot.val();
           
            a++;
 
            var link = oFilmovi.link;
            var naziv = oFilmovi.naziv;
            var godina = oFilmovi.godina;
            var zanrovi = oFilmovi.zanrovi.join(", ");
            var birao = oFilmovi.birao.join(", ");
            var pregledano = oFilmovi.pregledano;
 
            // Kreiranje checkboxa na temelju pregledano vrijednosti
            var checkboxChecked = pregledano ? "checked" : "";
 
            // Dodavanje reda u tablicu
            tablica.append("<tr> <td>" + link + "</td><td>" + naziv + "</td><td>" + godina + "</td><td>" + zanrovi + "</td><td>" + birao + "</td><td><input type='checkbox'  " + checkboxChecked + "></td> </tr>");
        });
    });
 }






////////////////////////////////////////////////////////////////////////////////
//////
///
document.getElementById('otvoriModul').addEventListener('click', function() {
    $('#myModal').modal('show');
   
});
document.getElementById('spremi').addEventListener('click', spremiDodavanje);
function  spremiDodavanje() {
   
  
    var link =  $('#link').val();
    var naziv = $('#naziv').val();
    var godina = $('#godina').val();
    var zanrovi = $('#zanrovi').val().split(',').map(function(item) {
      return item.trim();
    });
    var birao = $('#birao').val().split(',').map(function(item) {
      return item.trim();
    });
    var pregledano = document.getElementById('pregledano').checked;
  
    // Spremanje podataka u Firebase bazu
    var filmRef = firebase.database().ref('filmovi').push();
    filmRef.set({
      link: link,
      naziv: naziv,
      godina: godina,
      zanrovi: zanrovi,
      birao: birao,
      pregledano: pregledano
    });
  
    // Zatvaranje modala
    var modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.hide();
  }




















document.getElementById('otvoriModul').addEventListener('click', function() {
    $('#dodajKlijentaM').modal('show');
});

document.getElementById('spremiK').addEventListener('click', function() {
    spremiDodavanje()();
});
$('#dodajKlijentaM').on('hidden.bs.modal', function () {
    location.reload(); 
  });
 $(document).ready(function() {
    $('#azurirajKlijentaModal').on('hidden.bs.modal', function () {
       
        $('#updateDropdownAzurirajK').val('');
        location.reload(); 
    });
});