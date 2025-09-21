////////////////////////GETS CURRENT-YEAR///////////////////////////////////

/*Φτιάχνεις μια μεταβλήτη yearEL το EL=element για συντομογραφια στα html elements καλείς την function queryselector που θα παέι να εντοπίσει το element με το class .year*/
const yearEl = document.querySelector(".year");

/*Ότι είναι σε μορφή Όνομα() είναι function*/

/*Εδώ συγκεκριμένα έχεις μια μεταβλήτη currentYear που έχει μέσα new Date() που είναι constructor function δηλαδή φτιάχνει μια νέα ημερομηνία σαν καλούπι
και την method .getFullYear() αποθηκεύει μέσα στο καλούπι την ημερομηνία που έχουμε*/
const currentYear = new Date().getFullYear();
/*Τύπωσε στην console το περιεχόμενο της μεταβλήτης currentYear*/
console.log(currentYear);
/*Άλλαξε το περιεχόμενο την μεταβλήτης yearEl με το περιεχόμενο της μεταβλήτης currentYear*/
yearEl.textContent = currentYear;

// // Βρίσκουμε το main image
// const mainImage = document.getElementById("mainImage");

// // Παίρνουμε όλες τις μικρές εικόνες
// const thumbnails = document.querySelectorAll(".thumb");

// // Για κάθε μικρή εικόνα, προσθέτουμε event listener
// thumbnails.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", () => {
//     // Αλλάζουμε το src της main image με αυτό της thumbnail
//     mainImage.src = thumbnail.src;
//   });
// });

const mainImage = document.getElementById("mainImage");
//Θα επιστρέφει το thumb που κλικάρεις πάντα*/
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    if (mainImage.src === thumbnail.src) return; // Αν είναι ήδη ίδια, μην κάνεις τίποτα αν κλικάρεις πάλι στην ίδια φώτο

    // Κάνε fade out πρώτα δίνει στο id image το class fade-out και ξέρουμε ότι όταν ((AND-SEL)) #mainImage.fade-out τότε opacity:0
    mainImage.classList.add("fade-out");

    // Περίμενε το animation να τελειώσει πριν αλλάξεις την εικόνα
    setTimeout(() => {
      mainImage.src = thumbnail.src;

      // Αφαιρείς το fade-out για να επανέλθει δηλαδή βγάλε από το #mainImage το class .fade-out
      mainImage.classList.remove("fade-out");
    }, 400); // Ίδιο με το transition του CSS (0.4s = 400ms)
  });
});

// JS Advace κωδικάς για να αλλάζει η φωτογραφία στο αντιστοιχό χρώμα μόνο αν το img έχει το id=cta-main

const mainImg = document.getElementById("cta-main");
const colorDivs = document.querySelectorAll(".product-colors .color");

colorDivs.forEach((div) => {
  div.addEventListener("click", () => {
    // Αφαιρούμε το active από όλα
    colorDivs.forEach((d) => d.classList.remove("active"));

    // Προσθέτουμε active μόνο στο κλικαρισμένο
    div.classList.add("active");

    const classList = Array.from(div.classList);
    const colorClass = classList.find(
      (cls) => cls.startsWith("color-") && cls !== "color"
    );

    // fade out
    mainImg.style.opacity = 0;

    setTimeout(() => {
      if (colorClass) {
        const rawColor = colorClass.replace("color-", "");
        const formattedColor =
          rawColor.charAt(0).toUpperCase() + rawColor.slice(1).toLowerCase();
        const imagePath = `imgs/product-image/WM-${formattedColor}.jpg`;
        mainImg.src = imagePath;
      } else {
        mainImg.src = "imgs/product-image/WM-Black.jpg";
      }

      // fade in
      mainImg.style.opacity = 1;
    }, 300);
  });
});

////////////////////MOBILE-NAV/////////////////////////////////

/*Δηλώνεις μια μεταβλήτη btnNavEL και εντοπίζεις μέσω της query function το Element με το class.btn-mobile-nav στην HTML*/

//Σημείωση το pretier οργανώνει το περιεχόμενο και σε js να φαίνεται πιο ωραίο*/
const btnNavEL = document.querySelector(".nav-btn");
/*Δηλώνεις μια μεταβλήτη HeaderEL και εντοπίζεις μέσω της query method το Element με το class .main-header στην HTML*/
const headerEl = document.querySelector(".main-header");

/*Κάνεις ένα event method οπου αν κλικαρίστει το button τότε να ισχύουν τα παρακάτω μέσα στο function body {}*/
btnNavEL.addEventListener("click", function () {
  // Το .main-header έχει την ιδιότητα classList που μπορεί μέσω function να προσθέσει(add) να αφαιρέσει(remove) η να προσθέσει και να αφαίρει class ταυτόχρονα μέσω του (toggle)
  // Θα γράψεις το όνομα του class χωρίς . για το function .toggle

  /*headerEL=μεταβλήτη .classList=ιδιότητα toggle=method*/
  headerEl.classList.toggle("nav-open");
  //Το toggle function θα κοιτάζει αν υπάρχει το .nav-open αν δεν υπάρχει μέσα στον κώδικα θα το προσθέτει και όταν υπάρχει θα το αφαιρεί*/
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

/*Η μεταβλήτη με το όνομα allLinks διαλέγει μέσω της method queryAll όλα τα στοιχεία στην HTML που είναι της μορφής a:link και όχι απλά <a> δηλαδή όλα τα <a href> που έχουν href το All είναι όταν θες να διαλέξεις πάνω από ένα στοιχείο*/

const allLinks = document.querySelectorAll("a:link");
/*Θα τυπώσει όλα τα στοιχεία με <a href> στην κονσόλα δες το Nodelist στο devtools θα σου δείξει όλα τα links στην σελίδα σου*/
console.log(allLinks);

//Ξεχώρισε όλα τα links επειδή το allLinks είναι όλα τα links και θες να τα ξεχωρίσεις από ένα το καθένα για να τους βάλεις event click ξεχωριστά μέσω του method forEach

/*Όλα τα στοιχεία allLinks.forEach είναι ένα link μόνο του το δηλώνεις μέσω της function με το όνομα που έδωσες (link)*/
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    console.log(href);

    // Αν το href ξεκινάει με #
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault(); // Ακυρώνεις μόνο τα anchor links

      // Scroll back to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other sections
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Κλείσιμο mobile nav
      if (link.classList.contains("nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

/*Να φαίνεται το sticky header μόνο αν είσαι κάτω από το hero-section στο viewport*/

/*Μια μεταβλήτη sectionCartEl που εντοπίζει μέσω του query method το στοιχεία (sections) με το class section-hero και .section-cart στην HTML*/

const sectionHeroCartEl = document.querySelector(
  ".section-hero, .section-cart"
);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      // .hero-section .sticky για να βάζει τo sticky class μέσα στο body μέσω classList σαν parent του header και να ισχύει το margin-top:9.6rem παρόμοια κατάσταση με το accordeon .nav-open
      document.body.classList.add("sticky");
    }

    // Αν φαίνεται το .hero-section βγάλε το sticky
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    /*Που να εμφανίζεται το συγκεκριμενο element null μέσα στο viewport*/
    root: null,
    /*Όταν 0% του hero.section φαίνεται στο viewport να ενεργοποιήθει το sticky event*/
    threshold: 0,
    /*Να εμφανίζεται 80px πιο πριν το sticky καθώς μπλοκάρει το featured-section*/
    // Ο υπολογισμός έρχεται από το fixed-height του sticky που ήταν 8rem για αυτό και διαλέξαμε εδώ αυτή την τιμή για αυτό και βάλαμε fixed-height στο sticky στην CSS
    // Πρέπει να είναι αναγκαστικά px όχι της % η rem
    rootMargin: "-80px",
  }
);
/*Μέσω του observer method να παρατηρείς το .hero-section όταν βγει εκτός viewport τότε να εμφανίσεις το sticky header*/
obs.observe(sectionHeroCartEl);

// Πατώντας πάνω στο X κάνεις clear το console στο devtools
