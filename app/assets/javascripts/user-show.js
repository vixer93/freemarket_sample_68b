window.addEventListener("load", function(){
  $(function(){
    $(".mypage").hover(function(){
      console.log("hello")
      $(".mypage-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.mypage-btn').animate({marginRight : ''}, 100)
    });
    $( '.mypage' ).hover( function(){
			$(".mypage-btn").css("color", "black")
		},function(){
			$(".mypage-btn").css('color' ,'')
    });

    $(".exhibition").hover(function(){
      console.log("hello")
      $(".exhibition-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.exhibition-btn').animate({marginRight : ''}, 100)
    });
    $( '.exhibition' ).hover( function(){
			$(".exhibition-btn").css("color", "black")
		},function(){
			$(".exhibition-btn").css('color' ,'')
    });

    $(".exhibited").hover(function(){
      console.log("hello")
      $(".exhibited-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.exhibited-btn').animate({marginRight : ''}, 100)
    });
    $( '.exhibited' ).hover( function(){
			$(".exhibited-btn").css("color", "black")
		},function(){
			$(".exhibited-btn").css('color' ,'')
    });

    $(".transaction").hover(function(){
      console.log("hello")
      $(".transaction-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.transaction-btn').animate({marginRight : ''}, 100)
    });
    $( '.transaction' ).hover( function(){
			$(".transaction-btn").css("color", "black")
		},function(){
			$(".transaction-btn").css('color' ,'')
    });

    $(".sold").hover(function(){
      console.log("hello")
      $(".sold-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.sold-btn').animate({marginRight : ''}, 100)
    });
    $( '.sold' ).hover( function(){
			$(".sold-btn").css("color", "black")
		},function(){
			$(".sold-btn").css('color' ,'')
    });

    $(".purchase").hover(function(){
      console.log("hello")
      $(".purchase-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.purchase-btn').animate({marginRight : ''}, 100)
    });
    $( '.purchase' ).hover( function(){
			$(".purchase-btn").css("color", "black")
		},function(){
			$(".purchase-btn").css('color' ,'')
    });

    $(".purchased").hover(function(){
      console.log("hello")
      $(".purchased-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.purchased-btn').animate({marginRight : ''}, 100)
    });
    $( '.purchased' ).hover( function(){
			$(".purchased-btn").css("color", "black")
		},function(){
			$(".purchased-btn").css('color' ,'')
    });

    $(".card").hover(function(){
      console.log("hello")
      $(".card-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.card-btn').animate({marginRight : ''}, 100)
    });
    $( '.card' ).hover( function(){
			$(".card-btn").css("color", "black")
		},function(){
			$(".card-btn").css('color' ,'')
    });

    $(".logout").hover(function(){
      console.log("hello")
      $(".logout-btn").animate({marginRight : '-2px'}, 100)
    },function(){
      $('.logout-btn').animate({marginRight : ''}, 100)
    });
    $( '.logout' ).hover( function(){
			$(".logout-btn").css("color", "black")
		},function(){
			$(".logout-btn").css('color' ,'')
		});
  });
});