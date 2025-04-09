const initialProductsState = [
    { id: 1, name: 'Royal Canin Adulto', price: 550, image:'images/royal-canin-adulto-2KG.jpg' },
    { id: 2, name: 'Pro Plan Adulto 13Kg', price: 1500, image: 'images/pro-plan-adulto-13KG.jpg' },
    { id: 3, name: 'Hills Adulto 14.9Kg', price: 1750, image: '/images/hills-adulto-14.9KG.jpg' },
    { id: 4, name: 'Royal Canin Adulto Large 13.9Kg', price: 2050, image: 'images/royal-canin-adulto-large-13.6KG.jpg' },
    { id: 5, name: 'Royal Canin Puppy Large 13.9Kg', price: 2200, image: '/images/royal-canin-puppy-large-13.6KG.jpg' },
    { id: 6, name: 'Natural Gourmet Adulto 15Kg', price: 1870, image: '/images/natural-gourmet-adulto-15KG.jpg'},
  ];
  
  const productsReducer = (state = initialProductsState, action) => {
    return state;
  };
  
  export default productsReducer;