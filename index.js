$(".btnMoje").click( function(){

    var number = Math.floor(Math.random() * 101);
    $("h1").text(number + "% láska!");

    if (number < 30){
      var vysledek = "Tvá láska k feldě míří k bodu mrazu... 😢";
      const playSound = new Audio("audio/break-my-heart.mp3").play();
      $(".btnMoje").remove();
      $(".feldaFail img").attr("src","https://i.imgur.com/PRBKIKB.gif?noredirect");
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
      $(".feldaDrift img").attr("src","https://thumbs.gfycat.com/OptimisticDistortedGrayfox-size_restricted.gif");
      $("h1").css({'color': '#red'});


// https://codepen.io/bferioli/pen/qEGaPp

      var HeartsBackground = {
        heartHeight: 70,
        heartWidth: 74,
        hearts: [],
        heartImage: 'https://cdn4.iconfinder.com/data/icons/reaction/33/love-512.png',
        maxHearts: 8,
        minScale: 0.4,
        draw: function() {
          this.setCanvasSize();
          this.ctx.clearRect(0, 0, this.w, this.h);
          for (var i = 0; i < this.hearts.length; i++) {
            var heart = this.hearts[i];
            heart.image = new Image();
            heart.image.style.height = heart.height;
            heart.image.src = this.heartImage;
            this.ctx.globalAlpha = heart.opacity;
            this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
          }
          this.move();
        },
        move: function() {
          for(var b = 0; b < this.hearts.length; b++) {
            var heart = this.hearts[b];
            heart.y += heart.ys;
            if(heart.y > this.h) {
              heart.x = Math.random() * this.w;
              heart.y = -1 * this.heartHeight;
            }
          }
        },
        setCanvasSize: function() {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.w = this.canvas.width;
          this.h = this.canvas.height;
        },
        initialize: function() {
          this.canvas = $('#canvas')[0];

          if(!this.canvas.getContext)
            return;

          this.setCanvasSize();
          this.ctx = this.canvas.getContext('2d');

          for(var a = 0; a < this.maxHearts; a++) {
            var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
            this.hearts.push({
              x: Math.random() * this.w,
              y: Math.random() * this.h,
              ys: Math.random() + 1,
              height: scale * this.heartHeight,
              width: scale * this.heartWidth,
              opacity: scale
            });
          }

          setInterval($.proxy(this.draw, this), 30);
        }
      };

      $(document).ready(function(){
        HeartsBackground.initialize();
      });

      }

  $("p").text(vysledek);
  });
