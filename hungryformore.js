const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
  //Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
  //Use that variable to add Kristyn's lost shoe to Thom's accessories array.

  thomsCloset[2].push(kristynsCloset.shift());
  console.log(thomsCloset);
  console.log("-------------------------------------------------------------------------")
  //console.log(thomsCloset)

  //Modify your code to put together 3 separate outfits for Kristyn and Thom. 
  //Put the output in a sentence to tell us what we'll be wearing. Mix and match!

  console.log("-------------------------------------------------------------------------")
  console.log(`Kristie will be wearing ${kristynsCloset[2]} , ${kristynsCloset[3]} and ${kristynsCloset[0]}`);
  console.log(`Thom will be wearing ${thomsCloset[0][2]} ,${thomsCloset[1][2]} and ${thomsCloset[2][1]}`);

  console.log("-------------------------------------------------------------------------")

  //Dirty Laundry

  //1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

  kristynsCloset.forEach((item) => {
    console.log(`WHIRRR: Now washing (${item})`);
  })

  console.log("-------------------------------------------------------------------------")

  //Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

  //console.log(thomsCloset[0][0])
  //console.log(thomsCloset.length)
  for(let cntr=0;cntr < thomsCloset.length;cntr++){
    //console.log(thomsCloset[0].length);
    for(let ctr=0;ctr<thomsCloset[cntr].length;ctr++){
        console.log(thomsCloset[cntr][ctr])
    }
  }



