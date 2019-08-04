$(function(){

   
     // body
    let header = $("<header></header>");
    let main = $("<main></main>");
    let footer = $("<footer></footer>");
     
    

    // create Add Nav / header
    let nav = $("<nav>");
    let divCont= $("<div>");
    let contA = $("<a>").attr({
        class: "navbar-brand", href: "#"
    }).text("Start Bootstrap");

    let divUl = $("<div>").addClass("collapse navbar-collapse");

    let ul = $("<ul>").addClass("navbar-nav ml-auto");

    let listA = $("<li>").addClass("nav-item active");

    let liA = $("<a>").attr({

        class: "nav-link", href: "#"
    }) . text("Home");

    let listB = $("<li>").addClass("nav-item");
    let liB = $("<a>").attr({
        class: "nav-link", href: "#"
    }) . text("About");

    let listC = $("<li>").addClass("nav-item");
    let liC = $("<a>").attr({
        class: "nav-link", href: "#"
    }) . text("Services");

    let listD = $("<li>").addClass("nav-item");
    let liD = $("<a>").attr({
        class: "nav-link", href: "#"
    }) . text("Contact");


    // pageContent create add main
    let head = $("<header>").addClass("jumbotron my-4");
   let divContent = $("<div>").addClass("container");

   let H1 = $("<h1>").attr({
       class: "display-3"
   }) .text("A Warm Welcome");

   let headPar = $("<p>").attr({
       class: "lead"
   }) . text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.")

   let btnA = $("<a>").attr({
       class: "btn btn-primary btn-lg"
   }) . text("Call to action!")

    let divRowa = $("<div>").addClass("row text-center");
    let divCola = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
    let divCarda = $("<div>").addClass("card h-100");
    let imgA = $("<img>").attr({
        class: "card-img-top", src: ("https://image.shutterstock.com/image-photo/happy-beautiful-blond-young-woman-600w-159616337.jpg")
    })
    let cardBodya = $("<div>").addClass("card-body")
    let h4a = $("<h4>").attr({
        class: "card-title"
    }) .text("Car Life")
    let pElea = $("<p>").attr({
        class: "card-text"
    }) .text(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.")

    let cardFootera = $("<div>").addClass("card-footer");
    let cardfoota = $("<a>").attr({
        class: "btn btn-primary", href: "#"
    }) .text("Find Out More!")

    let divColb = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
    let divCardb = $("<div>").addClass("card h-100");
    let imgB = $("<img>").attr({
        class: "card-img-top", src: "https://image.shutterstock.com/image-photo/look-behind-wedding-couple-kissing-600w-772051069.jpg"
    })

  let cardBodyb = $("<div>").addClass("card-body")
    let h4b = $("<h4>").attr({
        class: "card-title"
    }) .text("Car Love")
    let pEleb = $("<p>").attr({
        class: "card-text"
    }) .text(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.")
    
    let cardFooterb = $("<div>").addClass("card-footer");
    let cardFootb = $("<a>").attr({
        class: "btn btn-primary", href: "#"
    }) .text("Find Out More!")

    let divColc = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
    let divCardc = $("<div>").addClass("card h-100");
    let imgc = $("<img>").attr({
        class: "card-img-top", src: "https://image.shutterstock.com/image-photo/three-happy-sensual-caucasian-girlfriends-600w-73865512.jpg"
    })

    let cardBodyc = $("<div>").addClass("card-body")
    let h4c = $("<h4>").attr({
        class: "card-title"
    }) .text("Car Girls")
    let pElec = $("<p>").attr({
        class: "card-text"
    }) .text(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.")

    let cardFooterc = $("<div>").addClass("card-footer");
    let cardFootc = $("<a>").attr({
        class: "btn btn-primary", href: "#"
    }) .text("Find Out More!")
  
   
    let divCold = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
    let divCardd = $("<div>").addClass("card h-100");
    let imgd = $("<img>").attr({
        class: "card-img-top", src: "https://image.shutterstock.com/image-photo/summer-vacation-travel-concept-image-600w-1368716882.jpg"
    })

   let cardBodyd = $("<div>").addClass("card-body")
    let h4d = $("<h4>").attr({
        class: "card-title"
    }) .text("adventure")
    let pEled = $("<p>").attr({
        class: "card-text"
    }) .text(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.")
    

    let cardFooterd = $("<div>").addClass("card-footer");
    let cardFootd = $("<a>").attr({
        class: "btn btn-primary", href: "#"
    }) .text("Find Out More!")
   
    
    // create footer add
    let footerFinish = $("<footer>").addClass("py-5 bg-dark");
    let divContFoot = $("<div>").addClass("container");
    let pLast = $("<p>").attr({
        class: "m-0 text-center text-white"
    }) .text("Copyright © Your Website 2019")

   
   
    // addClass
    $(nav).addClass("navbar navbar-expand-lg navbar-dark bg-dark fixed-top");
    $(divCont).addClass("container");

    


    // Append 
    $("body").append(header, main, footer);
     $("header").append(nav);
    $(nav).append(divCont);
    $(divCont).append(contA);
    $(divCont).append(divUl);
    $(divUl).append(ul);
    $(divUl).append(listA);
    $(listA).append(liA);
    $(divUl).append(listB);
    $(listB).append(liB);
    $(divUl).append(listC);
    $(listC).append(liC);
    $(divUl).append(listD);
    $(listD).append(liD);
    $("main").append(divContent);
    $(divContent).append(head);
    $(divContent).append(H1);
    $(head).append(H1);
    $(head).append(headPar);
    $(head).append(btnA);
    $(divContent).append(divRowa);
    $(divContent).append(divCola);
    $(divContent).append(divCarda);
    $(divContent).append(imgA);
    $(divContent).append(cardBodya);
    $(cardBodya).append(h4a);
    $(cardBodya).append(pElea);
    $(divContent).append(cardFootera);
    $(cardFootera).append(cardfoota);
    $(divContent).append(divColb);
    $(divContent).append(divCardb);
    $(divContent).append(imgB);
    $(divContent).append(cardBodyb);
    $(cardBodyb).append(h4b);
    $(cardBodyb).append(pEleb);
    $(divContent).append(cardFooterb);
    $(cardFooterb).append(cardFootb);
    $(divContent).append(divColc);
    $(divContent).append(divCardc);
    $(divContent).append(imgc);
    $(divContent).append(cardBodyc);
    $(cardBodyc).append(h4c);
    $(cardBodyc).append(pElec);
    $(divContent).append(cardFooterc);
    $(cardFooterc).append(cardFootc);
    $(divContent).append(divCold);
    $(divContent).append(divCardd);
    $(divContent).append(imgd);
    $(divContent).append(cardBodyd);
    $(cardBodyd).append(h4d);
    $(cardBodyd).append(pEled);
    $(divContent).append(cardFooterd);
    $(cardFooterd).append(cardFootd);
        $(divContent).append(footerFinish);
    $(footerFinish).append(divContFoot);
    $(divContFoot).append(pLast);


/*  Finish */

});