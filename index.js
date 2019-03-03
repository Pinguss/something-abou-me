
  $(".btnMoje").click( function(){

    var number = Math.floor(Math.random() * 101);
    $("h1").text(number + "% láska!");

    if (number < 30){
      var vysledek = "Tvá láska k feldě míří k bodu mrazu... 😢";
    }

    else if (number >= 30 && number < 50){
      vysledek = "Pozor! Tvá láska k feldě nejspíš prochází krizí! Je třeba jí posílit! 😉";
    }

    else if (number >= 50 && number < 80){
      vysledek = "Máš feldu moc rád/a! Jen tak dál! 😊";
      }

    else{
      vysledek = "Úžasný! Ty feldu skutečně miluješ! Jsi nefalšovaný felďácký milovník! 😍";
      const playSound = new Audio("audio/felicie.mp3").play();
      $(".btnMoje").remove();
      $(".feldaDrift img").attr("src","http://zonderpump.com/images/skoda-felicia.jpg");
      }

  $("p").text(vysledek);
  });
