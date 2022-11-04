const products = [
    {
      id: 1,
      price: 500,
      name: "pickle",
      type: "vegetable",
      eatable: true,
      drinkable: undefined,
      amount: 10000,
    },
    {
      id: 2,
      price: 1250,
      name: "apple",
      type: "fruit",
      eatable: true,
      drinkable: undefined,
      left: 30,
    },
    {
      id: 23,
      price: 120,
      name: "orange juice",
      type: "juice",
      drinkable: true,
      eatable: true,
      left: 30,
    },
  ];

  for(i=0; i<=products.length; i+=1){
    console.log(`name: ${products[i].name}, price: ${products[i].price}, drinkable: ${products[i].drinkable}`)
  }

