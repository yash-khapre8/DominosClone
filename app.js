

// Takeaway is clicked
document.querySelectorAll('.order-btn').forEach(function(btn, idx) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.order-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Only show takeaway modal if Takeaway is clicked (index 1)
    if (btn.textContent.trim().startsWith('Takeaway')) {
      document.getElementById('takeawayModal').style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.getElementById('takeawayModal').style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

// Hide the modal when back arrow is clicked
document.getElementById('closeTakeaway').onclick = function() {
  document.getElementById('takeawayModal').style.display = 'none';
  document.body.style.overflow = '';
};




// dine in section

// Show Dine In section when "Dine-in" button is clicked
document.querySelectorAll('.order-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Remove 'active' from all buttons and add to clicked
    document.querySelectorAll('.order-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show Dine In section only if this is the Dine-in button
    if (btn.textContent.trim().startsWith('Dine-in')) {
      document.getElementById('dineinSection').style.display = 'block';
      // Optionally hide other modals/sections here
    } else {
      document.getElementById('dineinSection').style.display = 'none';
    }
  });
});

// Hide Dine In section when back arrow is clicked
document.getElementById('dineinBack').onclick = function() {
  document.getElementById('dineinSection').style.display = 'none';
  // Optionally, reset order type selection here
};


// rewerds section


// Open modal (example: when user clicks the card)
document.getElementById('cheesyRewardsCard').onclick = function() {
  document.getElementById('cheesyRewardsModal').style.display = 'flex';
};

// Close modal when clicking the close button
document.getElementById('closeCheesyModal').onclick = function() {
  document.getElementById('cheesyRewardsModal').style.display = 'none';
};

// Optional: Close modal when clicking outside the modal content
document.getElementById('cheesyRewardsModal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};




document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const menuSection = document.getElementById('menu');

  // Prevent default hash navigation and show only menu
  if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Stop the default link behavior
      // Hide all sections
      document.querySelectorAll('.menu, .track-order, .cart, .home').forEach(section => {
        section.style.display = 'none';
      });
      // Show only the menu
      menuSection.style.display = 'block';
      // Optional: Scroll to menu if needed
      menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});



/* login section */



// Show modal on Login button click
document.querySelector('.profile-sidebar-login').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

// Skip/close modal
document.getElementById('loginSkip').onclick = function() {
  document.getElementById('loginModal').style.display = 'none';
  document.body.style.overflow = '';
};

// Enable Send OTP when 10 digits entered
const mobileInput = document.getElementById('loginMobile');
const sendOtpBtn = document.getElementById('loginSendOtp');
mobileInput.addEventListener('input', function() {
  if (this.value.length === 10 && /^\d+$/.test(this.value)) {
    sendOtpBtn.disabled = false;
    sendOtpBtn.classList.add('active');
  } else {
    sendOtpBtn.disabled = true;
    sendOtpBtn.classList.remove('active');
  }
});


// nutrion section

// Show the Nutrition section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('nutrition')) {
      document.getElementById('nutritionSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide the Nutrition section when back arrow is clicked
document.getElementById('nutritionBack').onclick = function() {
  document.getElementById('nutritionSection').style.display = 'none';
  document.body.style.overflow = '';
};

// terms section

// Show the Terms section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().includes('Terms')) {
      document.getElementById('termsSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide the Terms section when back arrow is clicked
document.getElementById('termsBack').onclick = function() {
  document.getElementById('termsSection').style.display = 'none';
  document.body.style.overflow = '';
};


// bulk order

// Show Bulk Order when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('bulk order')) {
      document.getElementById('bulkOrderSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide Bulk Order when back arrow is clicked
document.getElementById('bulkBack').onclick = function() {
  document.getElementById('bulkOrderSection').style.display = 'none';
  document.body.style.overflow = '';
};


// offer section

// Show Offers section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('deal') || li.textContent.trim().toLowerCase().includes('offer')) {
      document.getElementById('offersSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide Offers section when back arrow is clicked
document.getElementById('offersBack').onclick = function() {
  document.getElementById('offersSection').style.display = 'none';
  document.body.style.overflow = '';
};



// tracking order

// Show Track Order section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('track')) {
      document.getElementById('trackOrderSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide Track Order section on back arrow
document.getElementById('trackBack').onclick = function() {
  document.getElementById('trackOrderSection').style.display = 'none';
  document.body.style.overflow = '';
};


// order history

// Show Order History section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('order history')) {
      document.getElementById('orderHistorySection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide on back arrow
document.getElementById('orderHistoryBack').onclick = function() {
  document.getElementById('orderHistorySection').style.display = 'none';
  document.body.style.overflow = '';
};



/* feedback */
// Show Feedback section when sidebar item is clicked
document.querySelectorAll('.profile-sidebar-list li').forEach(li => {
  li.addEventListener('click', function() {
    if (li.textContent.trim().toLowerCase().includes('feedback')) {
      document.getElementById('feedbackSection').style.display = 'block';
      document.getElementById('profileSidebar').style.right = '-370px';
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Hide Feedback section on back arrow
document.getElementById('feedbackBack').onclick = function() {
  document.getElementById('feedbackSection').style.display = 'none';
  document.body.style.overflow = '';
};





function showSection(sectionId) {
  // Hide all
  document.querySelectorAll('.menu, .track-order, .cart, .home').forEach(section => {
    section.style.display = 'none';
  });
  // Show the one you want
  const section = document.getElementById(sectionId);
  if (section) section.style.display = 'block';
}

// Example: For a cart button
const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection('cart');
  });
}




if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  // Fallback if geolocation is not supported
}
function success(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // Now reverse geocode to get area/city name
}
function error() {
  // Handle error or fallback
}


function getAreaName(lat, lng) {
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
    .then(response => response.json())
    .then(data => {
      // Use data.address.suburb, data.address.city, etc.
      const area =  data.address.city || data.address.town || data.address.village || 'Your Area';
      document.getElementById('user-location-main').textContent = area;
      document.getElementById('user-location-detail').textContent = data.display_name;
    });
}




if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  document.getElementById('user-location-main').textContent = "Location not supported";
  document.getElementById('user-location-detail').textContent = "";
}
function success(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
    .then(response => response.json())
    .then(data => {
      const area = data.address.city || data.address.town || data.address.village || 'Your Area';
      document.getElementById('user-location-main').textContent = area;
      document.getElementById('user-location-detail').textContent = data.display_name;
    });
}
function error() {
  document.getElementById('user-location-main').textContent = "Location unavailable";
  document.getElementById('user-location-detail').textContent = "";
}







const offerPopup = document.getElementById('coupon-popup');
const offerBtn = document.getElementById('offers-btn'); 
const closeOffer = document.getElementById('close-coupons');

offerBtn?.addEventListener('click', () => {
  offerPopup.style.display = 'flex';
});

closeOffer?.addEventListener('click', () => {
  offerPopup.style.display = 'none';
});

document.querySelectorAll('.apply-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.coupon-card').querySelector('.code').textContent;
    alert(` Coupon "${code}" applied!`);
  });
});






const buttons = document.querySelectorAll(".order-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });


  const profileIcon = document.getElementById('profileIcon');
const profileSidebar = document.getElementById('profileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Open sidebar
profileIcon.addEventListener('click', function() {
  profileSidebar.classList.add('open');
  sidebarOverlay.classList.add('show');
});

// Close sidebar when clicking outside
sidebarOverlay.addEventListener('click', function() {
  profileSidebar.classList.remove('open');
  sidebarOverlay.classList.remove('show');
});

// Optional: Close sidebar with ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    profileSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
  }
});


// Domino's Pizza Website JavaScript

// Menu data
const menuData = {
  "pizzas": {
    "veg": [
        
         {
        id: 100,
        name: "Cheese & Corn",
        description: "Sweet corn and double cheese on a crispy crust",
        image: "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/1fd7cfcb-75e7-45b1-94d5-b54d32cf814e_PMGoldenCornHome.jpg",
        category: "veg",
        prices: { regular: 209, medium: 399, large: 599 },
        popular: true
      },
      {
        "id": 1,
        "name": "Margherita",
        "description": "A hugely popular margherita, with a deliciously tangy single cheese topping",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 109, "medium": 245, "large": 455},
        "toppings": ["Cheese", "Tomato Sauce"],
        "popular": true
      },
      {
        "id": 2,
        "name": "Cheese Burst",
        "description": "Cheese lovers paradise with extra cheese filled in the crust",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/2fe42a32-0138-4612-b3a9-1f8aacb0b5b5_FullsizeThe5FeastChickenCB.jpg?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 344, "medium": 578, "large": 899},
        "toppings": ["Double Cheese", "Cheese-filled Crust"],
        "popular": true
      },
      {
        "id": 3,
        "name": "Indi Tandoori Paneer",
        "description": "Tandoori spiced paneer cubes with red paprika and mint mayo",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/8abd61ff-024b-45fe-a221-6b72d601cb49_indi_paneer_side_full.webp?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 305, "medium": 559, "large": 815},
        "toppings": ["Tandoori Paneer", "Red Paprika", "Mint Mayo"]
      },
      {
        "id": 4,
        "name": "Veggie Paradise",
        "description": "Loaded with crisp capsicum, red paprika, mushroom, onion, and tomato",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a542d031-5fc8-4902-bbb3-25eebd3ace7e_veggie_paradise_side.webp?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 269, "medium": 479, "large": 719},
        "toppings": ["Capsicum", "Mushroom", "Onion", "Tomato", "Red Paprika"]
      },
      {
        "id": 5,
        "name": "Farmhouse",
        "description": "Delightful combination of onion, capsicum, tomato and grilled mushroom",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a52b70f2-01cb-42b8-ae4f-566df999115c_farmhouse_side.webp?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 344, "medium": 578, "large": 899},
        "toppings": ["Onion", "Capsicum", "Tomato", "Grilled Mushroom"]
      },
      {
        "id": 6,
        "name": "Peppy Paneer",
        "description": "Chunky paneer with crisp capsicum and spicy red pepper",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/ff2e39b8-87cc-4f3f-a2f5-06198a85f3df_peppy_paneer_side.webp?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 344, "medium": 578, "large": 899},
        "toppings": ["Paneer", "Capsicum", "Red Paprika"]
      },
        {
        "id": 7,
        "name": "Fiery Jalapeno & Paprika",
        "description": "A hugely popular pizza, with a jalapeno & paprika topping",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/7eb2937b-ad12-46c5-a1b0-b7718de05304_FieryJalapenoPaprikaSideFullsize.jpg?ver=V0.0.1",
        "category": "veg",
        "prices": {"regular": 199, "medium": 299, "large": 449},
        "toppings": ["Cheese", "Tomato Sauce"],
        "popular": true
      },
      {
  "id": 9,
  "name": "Paneer Makhani",
  "description": "Paneer, onion, capsicum with desi makhani sauce on a cheesy crust",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/28012ab8-104b-4a76-b13b-b1d98c5805af_PMOnionCapsicumPaneerHome.jpg?ver=V0.0.1",
  "category": "veg",
  "prices": {"regular": 279, "medium": 499, "large": 699},
  "toppings": ["Paneer", "Onion", "Capsicum", "Makhani Sauce"],
  "popular": true
},
{
  "id": 25,
  "name": "Double Cheese Margherita",
  "description": "Classic margherita topped with double cheese for extra indulgence",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1",
  "category": "veg",
  "prices": {"regular": 189, "medium": 339, "large": 539},
  "toppings": ["Cheese", "Tomato Sauce"],
  "popular": true
},
{
  "id": 26,
  "name": "Veg Extravaganza",
  "description": "Loaded with black olives, onion, capsicum, mushroom, corn, and jalapeno",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d7530589-1336-442b-aa6e-598680086abb_extravaganza_side_full.webp?ver=V0.0.1",
  "category": "veg",
  "prices": {"regular": 249, "medium": 459, "large": 699},
  "toppings": ["Black Olives", "Onion", "Capsicum", "Mushroom", "Corn", "Jalapeno"],
  "popular": true
},
{
  "id": 27,
  "name": "Cheese & Tomato",
  "description": "Classic cheese and tomato on a crispy crust",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1",
  "category": "veg",
  "prices": {"regular": 169, "medium": 309, "large": 499},
  "toppings": ["Cheese", "Tomato Sauce"],
  "popular": false
},
{
  "id": 34,
  "name": "Veg Pasta (Creamy Tomato)",
  "description": "Pasta in a creamy tomato sauce with veggies",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a718c4d8-de90-476b-b9fc-7e6b42fc6ffe_plain_GB_side.webp?ver=V0.0.1",
  "category": "sides",
  "prices": {"regular": 129, "medium": null, "large": null},
  "toppings": ["Pasta", "Tomato Sauce", "Veggies"],
  "popular": true
}



    ],
    "nonveg": [
      {
        "id": 7,
        "name": "Chicken Dominator",
        "description": "Double crunch chicken with onion, tomato, red paprika and hot spicy chicken",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/a124eca5-86d1-49c3-87c3-8b5820f4f306_chickendominatorsidejpgFull2x2702.jpg?ver=V0.0.1",
        "category": "nonveg",
        "prices": {"regular": 369, "medium": 619, "large": 959},
        "toppings": ["Double Crunch Chicken", "Onion", "Tomato", "Red Paprika"],
        "popular": true
      },
      {
        "id": 8,
        "name": "Pepper Barbecue Chicken",
        "description": "Succulent barbecue chicken pieces sprinkled with pepper",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/845058d7-1f2a-4bfb-b4d2-a153fd83622c_PM_ppr_bbq_side.webp?ver=V0.0.1",
        "category": "nonveg",
        "prices": {"regular": 259, "medium": 469, "large": 699},
        "toppings": ["BBQ Chicken", "Pepper", "Onion"]
      },
      {
        "id": 9,
        "name": "Chicken Golden Delight",
        "description": "Double cheese chicken golden delight with barbeque chicken",
        "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/1c24a762-9bdf-4b1d-a5ed-23c4ebf16036_golden_delight_side.webp?ver=V0.0.1",
        "category": "nonveg",
        "prices": {"regular": 389, "medium": 689, "large": 999},
        "toppings": ["Double Cheese", "Barbeque Chicken", "Golden Corn"]
      },
      {
  "id": 16,
  "name": "Pepper Barbecue Chicken",
  "description": "Juicy chicken with pepper barbecue sauce on a smoky crust",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/64800a6e-b68b-46be-9e99-8d7ae9cba826_Chk_pepp_GB_side.webp?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 329, "medium": 569, "large": 769},
  "toppings": ["Chicken", "Barbecue Sauce", "Pepper"],
  "popular": true
},
{
  "id": 18,
  "name": "Chicken Tikka",
  "description": "Juicy chicken tikka, onion, and capsicum on a spicy base",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/feab85cb-a232-479f-9c10-e6cfc793deca_indi_chicken_side.webp?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 349, "medium": 599, "large": 799},
  "toppings": ["Chicken Tikka", "Onion", "Capsicum"],
  "popular": true
},
{
  "id": 19,
  "name": "Chicken Fiesta",
  "description": "Chicken, capsicum, onion, and red paprika with spicy sauce",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/47bab7b9-29ed-4969-8fd4-155b0fa97401_FullsizeGarlicCheesikenrice.jpg?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 359, "medium": 609, "large": 809},
  "toppings": ["Chicken", "Capsicum", "Onion", "Red Paprika"],
  "popular": true
},
{
  "id": 20,
  "name": "Chicken Max",
  "description": "Double chicken, onion, capsicum, and spicy sauce for a bold flavor",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/4d289f6c-6c76-4988-8dad-abf12a2b5f76_FullsizeHotfieryCheesiken.jpg?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 369, "medium": 619, "large": 819},
  "toppings": ["Chicken", "Onion", "Capsicum", "Spicy Sauce"],
  "popular": true
},
{
  "id": 28,
  "name": "Non Veg Supreme",
  "description": "Loaded with chicken, chicken sausage, capsicum, onion, and red paprika",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/cdda31cf-1a7f-4a68-8f2b-8e0055a87bfd_nonveg_supreme_side.webp?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 319, "medium": 579, "large": 839},
  "toppings": ["Chicken", "Chicken Sausage", "Capsicum", "Onion", "Red Paprika"],
  "popular": true
},
{
  "id": 29,
  "name": "Chicken Pepperoni",
  "description": "Classic pepperoni pizza with chicken pepperoni and cheese",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/0677c2ea-f096-4027-a5c6-6e84918c28b5_Primavera.jpg?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 319, "medium": 579, "large": 839},
  "toppings": ["Chicken Pepperoni", "Cheese"],
  "popular": true
},
{
  "id": 30,
  "name": "Indi Chicken Tikka",
  "description": "Tandoori spiced chicken tikka with onion, capsicum, and mint mayo",
  "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/14b66c03-4580-4b44-9333-c550b188bd87_FullsizeIndiChickenTikkaCB.jpg?ver=V0.0.1",
  "category": "nonveg",
  "prices": {"regular": 319, "medium": 579, "large": 839},
  "toppings": ["Chicken Tikka", "Onion", "Capsicum", "Mint Mayo"],
  "popular": true
}




    ]
  },


  "sides": [
    {
      "id": 10,
      "name": "Garlic Breadsticks",
      "description": "Freshly baked garlic breadsticks with herbs",
      "price": 99,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a718c4d8-de90-476b-b9fc-7e6b42fc6ffe_plain_GB_side.webp?ver=V0.0.1",
      "category": "sides"
    },
    {
      "id": 11,
      "name": "Stuffed Garlic Bread",
      "description": "Stuffed with cheese and seasoned with garlic",
      "price": 149,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/8414923f-7e8e-4552-aec4-697d54b63042_Classic_GB_side.webp?ver=V0.0.1",
      "category": "sides"
    },
    {
      "id": 12,
      "name": "Chicken Wings",
      "description": "Spicy chicken wings with hot sauce",
      "price": 199,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/a3bdd517-494f-4cc2-a08c-4933e01437ec_GrilledWingsLemonPepper.jpg?ver=V0.0.1",
      "category": "sides"
    },
 
{
      "id": 10,
      "name": "Veg Parcel ",
      "description": "Snacky bites! Pizza rolls with paneer & creamy harissa sauce",
      "price": 149,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/a1b4e8c0-3cb5-44f2-b6e3-68ad58ce6ff2_zingy_parcel_v_side.webp?ver=V0.0.1",
      "category": "sides"
    },

{
      "id": 10,
      "name": " Chicken Parcel",
      "description": "Snacky bites! Pizza rolls with chicken & creamy harissa sauce",
      "price": 149,
       "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/c6eb34a5-6f93-4b1b-8b3d-e685a1316031_zingy_parcel_nv_side.webp?ver=V0.0.1",
      "category": "sides"
    },


  ],


  "desserts": [
    {
      "id": 13,
      "name": "Choco Lava Cake",
      "description": "Warm chocolate cake with molten chocolate center",
      "price": 109,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/9370665f-5afe-4065-a38a-08fcf7081116_CLC_side.webp?ver=V0.0.1",
      "category": "desserts"
    },
     {
      "id": 13,
      "name": "Red velvet Lava Cake",
      "description": "Warm creamy and cheese cake center",
      "price": 1399,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/d54749b2-6577-4e7b-961e-d15bc69b33a8_RV_side.webp?ver=V0.0.1",
      "category": "desserts"
    },
    {
      "id": 13,
      "name": "Butterscotch Mousse Cake",
      "description": "Butterscotch flavoured mousse",
      "price": 1399,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/9bebff29-041f-420e-839f-cd301d46cb64_Butterscotch_mousse.webp?ver=V0.0.1",
      "category": "desserts"
    }
  ],
  "beverages": [
    {
      "id": 14,
      "name": "Coca Cola",
      "description": "Refreshing Coca Cola 475ml",
      "price": 70,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/c75f77f0-987b-45df-b976-12be349df9dc_CokeHomeProductV1.jpg?ver=V0.0.1",
      "category": "beverages"
    },
    {
      "id": 15,
      "name": "Sprite",
      "description": "Lime flavored drink 475ml",
      "price": 70,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/e7db5ad9-7908-4ddf-93b2-0ab45576311d_SpriteHomeProductV1.jpg?ver=V0.0.1",
      "category": "beverages"
    },
      {
      "id": 16,
      "name": "B Natural Alphonsos from Ratnagiri ",
      "description": "Alphonsos only from Ratnagiri with the goodness of Fiber 300ml",
      "price": 75,
      "image": "https://images.dominos.co.in/nextgen-catalog/media/prod/Dominos/HomeProductV1/81691d54-b9e5-4b26-8f1b-c757e22dd43d_BNRatnagiriAlphonso-BEV0145-HomeProduct.jpg?ver=V0.0.1",
      "category": "beverages"
    }
  ]
};
// on click 



// Global state
let cart = [];
let currentCategory = 'all';
let currentPizza = null;
let appliedPromo = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderMenu();
    updateCartDisplay();
}

function setupEventListeners() {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', handleCategoryChange);
    });

    // Cart modal
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }

    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCartModal);
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    const applyPromoBtn = document.getElementById('applyPromo');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', applyPromoCode);
    }

    // Pizza modal
    const closePizzaModalBtn = document.getElementById('closePizzaModal');
    if (closePizzaModalBtn) {
        closePizzaModalBtn.addEventListener('click', closePizzaModal);
    }

    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addPizzaToCart);
    }

    // Size selection
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', updatePizzaPrice);
    });

    // Crust selection
    const crustSelect = document.getElementById('crustSelect');
    if (crustSelect) {
        crustSelect.addEventListener('change', updatePizzaPrice);
    }

    // Hero CTA
    const heroCTA = document.querySelector('.hero__cta');
    if (heroCTA) {
        heroCTA.addEventListener('click', () => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Close modals when clicking outside
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCartModal();
        });
    }

    const pizzaModal = document.getElementById('pizzaModal');
    if (pizzaModal) {
        pizzaModal.addEventListener('click', (e) => {
            if (e.target === pizzaModal) closePizzaModal();
        });
    }
}

function handleNavigation(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    e.target.classList.add('active');

    // Show/hide sections
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    
    if (targetId === 'home') {
        const heroSection = document.querySelector('.hero');
        const offersSection = document.querySelector('.offers');
        if (heroSection) heroSection.classList.remove('hidden');
        if (offersSection) offersSection.classList.remove('hidden');
    } else {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }
}

function handleCategoryChange(e) {
    const category = e.target.dataset.category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    currentCategory = category;
    renderMenu();
}

function renderMenu() {
    const menuItems = document.getElementById('menuItems');
    if (!menuItems) return;
    
    menuItems.innerHTML = '';
    
    const allItems = [];
    
    // Collect all menu items based on category
    if (currentCategory === 'all' || currentCategory === 'veg') {
        allItems.push(...menuData.pizzas.veg);
    }
    if (currentCategory === 'all' || currentCategory === 'nonveg') {
        allItems.push(...menuData.pizzas.nonveg);
    }
    if (currentCategory === 'all' || currentCategory === 'sides') {
        allItems.push(...menuData.sides);
    }
    if (currentCategory === 'all' || currentCategory === 'desserts') {
        allItems.push(...menuData.desserts);
    }
    if (currentCategory === 'all' || currentCategory === 'beverages') {
        allItems.push(...menuData.beverages);
    }

    // Filter by current category if not 'all'
    const filteredItems = currentCategory === 'all' ? allItems : 
        allItems.filter(item => item.category === currentCategory);

    filteredItems.forEach(item => {
        const menuItemEl = createMenuItemElement(item);
        menuItems.appendChild(menuItemEl);
    });
}

function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    
    const isPizza = item.prices && typeof item.prices === 'object';
    const price = isPizza ? 
        `₹${item.prices.regular} - ₹${item.prices.large}` : 
        `₹${item.price}`;
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-item__image">
        <div class="menu-item__content">
            <div class="menu-item__header">
                <h3 class="menu-item__name">${item.name}</h3>
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            <p class="menu-item__description">${item.description}</p>
            <div class="menu-item__footer">
                <div class="price-display">
                    <span class="${isPizza ? 'price-range' : 'single-price'}">${price}</span>
                </div>
                <button class="add-btn" data-item-id="${item.id}" data-is-pizza="${isPizza}">
                    ${isPizza ? 'Customize' : 'Add'}
                </button>
            </div>
        </div>
    `;
    
    // Add event listener to the button
    const addBtn = div.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
        if (isPizza) {
            openPizzaModal(item.id);
        } else {
            addToCart(item.id);
        }
    });
    
    return div;
}

function openPizzaModal(pizzaId) {
    // Find pizza in data
    currentPizza = null;
    for (const category of ['veg', 'nonveg']) {
        const pizza = menuData.pizzas[category].find(p => p.id === pizzaId);
        if (pizza) {
            currentPizza = pizza;
            break;
        }
    }
    
    if (!currentPizza) return;
    
    // Populate modal
    const pizzaModalTitle = document.getElementById('pizzaModalTitle');
    const pizzaModalImage = document.getElementById('pizzaModalImage');
    
    if (pizzaModalTitle) pizzaModalTitle.textContent = currentPizza.name;
    if (pizzaModalImage) pizzaModalImage.src = currentPizza.image;
    
    // Update size options with prices
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach((option, index) => {
        const size = ['regular', 'medium', 'large'][index];
        const price = currentPizza.prices[size];
        const priceSpan = option.querySelector('.size-price');
        if (priceSpan) priceSpan.textContent = `₹${price}`;
    });
    
    // Reset selections
    const regularRadio = document.querySelector('input[name="size"][value="regular"]');
    if (regularRadio) regularRadio.checked = true;
    
    const crustSelect = document.getElementById('crustSelect');
    if (crustSelect) crustSelect.selectedIndex = 0;
    
    updatePizzaPrice();
    
    const pizzaModal = document.getElementById('pizzaModal');
    if (pizzaModal) pizzaModal.classList.add('active');
}

function closePizzaModal() {
    const pizzaModal = document.getElementById('pizzaModal');
    if (pizzaModal) pizzaModal.classList.remove('active');
    currentPizza = null;
}

function updatePizzaPrice() {
    if (!currentPizza) return;
    
    const selectedSizeEl = document.querySelector('input[name="size"]:checked');
    const crustSelect = document.getElementById('crustSelect');
    const currentPriceEl = document.getElementById('currentPrice');
    
    if (!selectedSizeEl || !crustSelect || !currentPriceEl) return;
    
    const selectedSize = selectedSizeEl.value;
    const selectedCrust = crustSelect.value;
    
    let price = currentPizza.prices[selectedSize];
    
    // Add crust price if cheese burst
    if (selectedCrust === 'Cheese Burst (+₹50)') {
        price += 50;
    }
    
    currentPriceEl.textContent = price;
}

function addPizzaToCart() {
    if (!currentPizza) return;
    
    const selectedSizeEl = document.querySelector('input[name="size"]:checked');
    const crustSelect = document.getElementById('crustSelect');
    
    if (!selectedSizeEl || !crustSelect) return;
    
    const selectedSize = selectedSizeEl.value;
    const selectedCrust = crustSelect.value;
    
    let price = currentPizza.prices[selectedSize];
    if (selectedCrust === 'Cheese Burst (+₹50)') {
        price += 50;
    }
    
    const cartItem = {
        id: `${currentPizza.id}-${selectedSize}-${selectedCrust}`,
        productId: currentPizza.id,
        name: currentPizza.name,
        image: currentPizza.image,
        size: selectedSize,
        crust: selectedCrust.replace(' (+₹50)', ''),
        price: price,
        quantity: 1,
        type: 'pizza'
    };
    
    addItemToCart(cartItem);
    closePizzaModal();
    showToast(`${currentPizza.name} added to cart!`);
}

function addToCart(itemId) {
    // Find item in data
    let item = null;
    
    // Search in sides, desserts, beverages
    for (const category of ['sides', 'desserts', 'beverages']) {
        const found = menuData[category].find(i => i.id === itemId);
        if (found) {
            item = found;
            break;
        }
    }
    
    if (!item) return;
    
    const cartItem = {
        id: item.id.toString(),
        productId: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
        type: 'item'
    };
    
    addItemToCart(cartItem);
    showToast(`${item.name} added to cart!`);
}

function addItemToCart(cartItem) {
    const existingItem = cart.find(item => item.id === cartItem.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    renderCartItems();
    updateCartTotals();
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) cartModal.classList.add('active');
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) cartModal.classList.remove('active');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item__image">
            <div class="cart-item__details">
                <div class="cart-item__name">${item.name}</div>
                ${item.type === 'pizza' ? 
                    `<div class="cart-item__meta">${item.size} | ${item.crust}</div>` : 
                    ''
                }
            </div>
            <div class="cart-item__controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item__price">₹${item.price * item.quantity}</div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
    `).join('');
}

function updateQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartDisplay();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showToast('Item removed from cart');
}

function updateCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const taxes = Math.round(subtotal * 0.18); // 18% GST
    let total = subtotal + taxes;
    
    // Apply promo discount
    if (appliedPromo) {
        if (appliedPromo === 'SAVE30' && subtotal >= 499) {
            total = total * 0.7; // 30% off
        } else if (appliedPromo === 'BOGO50') {
            // Simple BOGO implementation - 50% off total
            total = total * 0.5;
        }
    }
    
    const subtotalEl = document.getElementById('subtotal');
    const taxesEl = document.getElementById('taxes');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (taxesEl) taxesEl.textContent = `₹${taxes}`;
    if (totalEl) totalEl.textContent = `₹${Math.round(total)}`;
}

function applyPromoCode() {
    const promoInput = document.getElementById('promoInput');
    if (!promoInput) return;
    
    const code = promoInput.value.trim().toUpperCase();
    const validCodes = ['BOGO50', 'SAVE30'];
    
    if (validCodes.includes(code)) {
        appliedPromo = code;
        updateCartTotals();
        showToast(`Promo code ${code} applied!`);
        promoInput.value = '';
    } else {
        showToast('Invalid promo code');
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    // Simulate checkout process
    showToast('Order placed successfully! Redirecting to payment...');
    
    setTimeout(() => {
        cart = [];
        appliedPromo = null;
        updateCartDisplay();
        closeCartModal();
        
        // Show order tracking
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const trackLink = document.querySelector('.nav-link[href="#track"]');
        if (trackLink) trackLink.classList.add('active');
        
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });
        
        const trackSection = document.getElementById('track');
        if (trackSection) trackSection.classList.remove('hidden');
        
        showToast('Order confirmed! Track your order below.');
    }, 2000);
}



function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm) {
        renderMenu();
        return;
    }
    
    // Search through all items
    const allItems = [
        ...menuData.pizzas.veg,
        ...menuData.pizzas.nonveg,
        ...menuData.sides,
        ...menuData.desserts,
        ...menuData.beverages
    ];
    
    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    
    // Render filtered results
    const menuItems = document.getElementById('menuItems');
    if (!menuItems) return;
    
    menuItems.innerHTML = '';
    filteredItems.forEach(item => {
        const menuItemEl = createMenuItemElement(item);
        menuItems.appendChild(menuItemEl);
    });
    
    if (filteredItems.length === 0) {
        menuItems.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); grid-column: 1 / -1;">No items found matching your search.</p>';
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Make functions globally available for onclick handlers
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;




// DOMINO'S CUSTOMISATION & ADD-TO-CART FUNCTIONALITY

document.addEventListener("DOMContentLoaded", function () {
  const customiseButtons = document.querySelectorAll(".customise-btn");
  const addButtons = document.querySelectorAll(".add-btn");

  customiseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pizza-card");
      const title = card.querySelector(".pizza-title").innerText;
      console.log(`Customising: ${title}`);
      // Trigger your modal or customisation UI here
    });
  });

  addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pizza-card");
      const title = card.querySelector(".pizza-title").innerText;
      const price = card.querySelector(".pizza-price").innerText;

      const pizza = {
        name: title,
        price: price,
        quantity: 1
      };

      addToCart(pizza);
    });
  });

  function addToCart(item) {
    const cartItems = JSON.parse(localStorage.getItem("dominosCart")) || [];

    // Check if item already exists in cart
    const existingItem = cartItems.find(pizza => pizza.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(item);
    }

    localStorage.setItem("dominosCart", JSON.stringify(cartItems));
    renderCart();
  }

  function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem("dominosCart")) || [];
    console.log("Cart:", cartItems);
    // You can update your cart UI from here
  }
});



const reels = [
    "https://www.instagram.com/reel/DKKKMjPyeVi/embed/",
    "https://www.instagram.com/p/DK4wpk1vzRV/embed/",
    "https://www.instagram.com/p/DKwzbdPIqe4/embed/",
    "https://www.instagram.com/reel/DJo8ilBvY-O/embed/",
      "https://www.instagram.com/reel/DI8120GsF5F/embed/",
  "https://www.instagram.com/reel/DH3cXYmSbTf/embed/",
  "https://www.instagram.com/reel/DK4bsXSymwI/embed/",
  "https://www.instagram.com/reel/DJwaQjTyr26/embed/"
];


let currentReel = 0;

document.getElementById("openReels").addEventListener("click", () => {
  showReel(currentReel);
  document.getElementById("reelModal").classList.remove("hidden");
});

document.getElementById("closeReel").addEventListener("click", () => {
  document.getElementById("reelModal").classList.add("hidden");
});

document.getElementById("prevReel").addEventListener("click", () => {
  currentReel = (currentReel - 1 + reels.length) % reels.length;
  showReel(currentReel);
});

document.getElementById("nextReel").addEventListener("click", () => {
  currentReel = (currentReel + 1) % reels.length;
  showReel(currentReel);
});

function showReel(index) {
  const iframe = document.getElementById("reelViewer");
  iframe.src = reels[index];
}

// Show the order confirmation modal after successful order placement
function handleOrderPlacement() {
  // Generate a random order number (you can use a better system if you have one)
  const orderNumber = 'DOM' + Math.floor(100000 + Math.random() * 900000);

  // Set the order number in the modal
  document.getElementById('orderNumber').textContent = orderNumber;

  // Show the modal
  document.getElementById('orderModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Optionally, clear the cart after order is placed
  cart = [];
  updateCartDisplay();
}

// Attach this to your "Place Order" or "Checkout" button
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
      showToast('Your cart is empty!');
      return;
    }
    handleOrderPlacement();
  });
}

// Track Order and New Order button handlers in the modal
function trackOrder() {
  // Hide modal and show tracking section
  document.getElementById('orderModal').style.display = 'none';
  document.body.style.overflow = '';
  showSection('trackOrderSection'); // Use your section navigation logic
}

function newOrder() {
  // Hide modal and redirect to menu/home
  document.getElementById('orderModal').style.display = 'none';
  document.body.style.overflow = '';
  showSection('menu'); // Use your section navigation logic
}

// Optionally, close modal when clicking outside modal content
document.getElementById('orderModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
    document.body.style.overflow = '';
  }
});
