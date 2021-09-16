




const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
    const giveaway = document.querySelector('.giveaway');
    const deadline = document.querySelector('.deadline');
    const items = document.querySelectorAll('.deadline-format h4');

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();
    console.log(tempYear)
    console.log(tempMonth)
    console.log(tempDay)
    const futureDate = new Date(tempYear, tempMonth, tempDay + 8, 12, 30, 0);
    // const futureDate = new Date(tempYear, tempMonth, tempDay , 6, 20, 0);
    // let futureDate = new Date(2021, 4, 8, 11, 30, 0);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    let month = futureDate.getMonth();
    month = months[month];
    const weekday = weekdays[futureDate.getDay()];
    const date = futureDate.getDate();
    giveaway.textContent = `Launching on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;
    const futureTime = futureDate.getTime();

    function getRemaindingTime() {
      const today = new Date().getTime();
      const t = futureTime - today;
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;
      let days = t / oneDay;
      days = Math.floor(days);
      let hours = Math.floor((t % oneDay) / oneHour);
      let minutes = Math.floor((t % oneHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);
      const values = [days, hours, minutes, seconds];
      function format(item) {
        // if (item < 10) {
        //   return (item = `0${item}`);
        // }
        return item;
      }
      items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
      });

      if (t < 0) {
        clearInterval(countdown);
        // deadline.innerHTML = `<h4 class="expired">sorry, this Lunching has  expired!</h4>`;
      }
    }
    // countdown;
    let countdown = setInterval(getRemaindingTime, 1000);
    //set initial values
    getRemaindingTime();




    // ============================ ADD to cart =====================

      let carts = document.querySelectorAll('.addcart');
    let products = [
      {
        name: 'camera',
        tag: 'cm1',
        price: 600,
        incart: 0
      },
      {
        name: 'smartmobile',
        tag: 'mobil6',
        price: 500,
        incart: 0
      },
      {
        name: 'smartwatch',
        tag: 'watch1',
        price: 700,
        incart: 0
      },
      {
        name: 'Laptop',
        tag: 'laptop2',
        price: 900,
        incart: 0
      },
      {
        name: 'Camara',
        tag: 'cam4',
        price: 650,
        incart: 0
      },
      {
        name: 'smartwatch',
        tag: 'watch3',
        price: 600,
        incart: 0
      }

    ]

    for (let i = 0; i < carts.length; i++) {
      carts[i].addEventListener('click', () => {
        cartnumber(products[i]);
        totalcost(products[i]);
        // displayC(products[i]);
      })
    }

    function onloadingcart() {
      let productno = localStorage.getItem('cartnumber');
      if (productno) {
        document.querySelector('.icon span').textContent = productno;
      }

    }
    function cartnumber (product) {
      let productno = localStorage.getItem('cartnumber');
      productno = parseInt(productno);

      if (productno) {
        localStorage.setItem('cartnumber', productno + 1);
        document.querySelector('.icon span').textContent = productno + 1;
      }
      else {
        localStorage.setItem('cartnumber', 1);
        document.querySelector('.icon span').textContent = 1;
      }

      setproduct(product);
    }

    function setproduct(product) {
      // console.log("inside ",product)
      let cartitem = localStorage.getItem('productcart');
      cartitem = JSON.parse(cartitem);

      if (cartitem != null) {
        if (cartitem[product.tag] == undefined) {
          cartitem = {
            ...cartitem,
            [product.tag]: product
          }
        }
        cartitem[product.tag].incart += 1;
      }
      else {
        product.incart = 1;
        cartitem = {
          [product.tag]: product
        }

      }
       localStorage.setItem('productcart', JSON.stringify(cartitem));
    }


    function totalcost(product) {
      let cartcost = localStorage.getItem('totalcost');
      //  console.log("myitem",product.price);

      console.log(cartcost);
      if (cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + product.price);
      }
      else {
        localStorage.setItem("totalcost", product.price);

      }

    }
     
    // function displayC() {
    //   let cartitem = localStorage.getItem('productcart');
    //   cartitem = JSON.parse(cartitem);
    //   console.log(cartitem);
    //   let cartcost = localStorage.getItem('totalcost');  
      
    //   let productcontainer = document.querySelector('.products');
    //   if (cartitem && productcontainer) {
    //     console.log("inside this");
    //     productcontainer.innerHTML = '';
    //     Object.values(cartitem).map(item => {
    //       // console.log("hey");
    //       productcontainer.innerHTML += `

          
    //   <div class= "product">
    //     <img src ="./image/${item.tag}.jpg">
    //      <span>${item.name}</span>
    //   </div>
    //   <div class="price">&nbsp;&nbsp;&nbsp;&nbsp;${item.price}</div>
    //   <div class="quantity"><br><br><br>${item.incart}</div>
    //   <div class="total">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //      $${item.incart * item.price},00
    //   </div> 
      
    //   `;
    
       
    // });
    // productcontainer.innerHTML += `
    // <div class="totalcontainer">
    //   <h4 class = "btotaltitle">Total</h4>
    //   <h4 class = "btotal">$${cartcost}</h4>

    //  ` }

 
    // }
    onloadingcart();
    // displayC();



    // ============================ Galary =====================


  const menu = [
  {
    id: 1,
    title: "SmartPhone",
    category: "mobile",
    price: 15.99,
    img: "./image/mobil1.jpg",
    desc: `I'm baby woke mlkshk wolf  hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "laptop",
    price: 13.99,
    img: "./image/mobil7.jpg",
    desc: `vaporware iPhone leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "SmartWatch",
    category: "watch",
    price: 6.99,
    img: "./image/watch1.jpg",
    desc: `ombucha chillwave fanny pack  booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "laptop",
    price: 20.99,
    img: "./image/laptop2.jpg",
    desc: `Shabby chic keffiyeh neutra  shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Camara",
    category: "camara",
    price: 22.99,
    img: "./image/cam1.png",
    desc: `franzen vegan pabst bicycle kickstarterfarm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "laptop",
    price: 18.99,
    img: "./image/laptop3.jpg",
    desc: `Portland chicharrones ethical edison bulb, iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "laptop",
    price: 8.99,
    img: "./image/laptop2.jpg",
    desc: `carry jianbing normcore live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "laptop",
    price: 12.99,
    img: "./image/laptop2.jpg",
    desc: `on it tumblr kickstarter palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "watch",
    price: 16.99,
    img: "./image/watch2.jpg",
    desc: `skateboard fam synth edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "mobile",
    price: 22.99,
    img: "./image/watch1.jpg",
    desc: `skateboard fam synth authentic semiotics. ccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center1");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
 }
   