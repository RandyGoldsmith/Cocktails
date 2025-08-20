import Category from "../models/category";
import Drink from "../models/drink";

export const CATEGORIES = [
  new Category("d1", "Classic Cocktails", "#f5428d"), // Muted Brown
  new Category("d2", "Tropical & Fruity", "#f54242"), // Golden Yellow
  new Category("d3", "Whiskey-Based", "#f5a442"), // Dark Brown
  new Category("d4", "Gin & Tonic Variations", "#f5d142"), // Teal Green
  new Category("d5", "Vodka Mixes", "#368dff"), // Light Blue
  new Category("d6", "Creamy & Dessert", "#41d95d"), // Tan/Cream
  new Category("d7", "Low/No ABV", "#9eecff"), // Light Green
  new Category("d8", "Shots & Shooters", "#b9ffb0"), // Light Purple
  new Category("d9", "Sparkling & Bubbly", "#ffc7ff"), // Gold
  new Category("d10", "Hot Drinks", "#47fced"), // Saddle Brown
];

export const DRINKS = [
  new Drink(
    "drink1",
    ["d1", "d3"],
    "Old Fashioned",
    "pricey",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Old_Fashioned_Cocktail.jpg/800px-Old_Fashioned_Cocktail.jpg",
    5, // Prep time in minutes
    [
      "2 oz Bourbon or Rye Whiskey",
      "2 dashes Angostura Bitters",
      "1 Sugar Cube (or 1 tsp simple syrup)",
      "Orange Peel (for garnish)",
      "Large Ice Cube",
    ],
    [
      "Place sugar cube in an Old Fashioned glass.",
      "Saturate sugar cube with bitters.",
      "Add a splash of water (or a few drops of soda water) and muddle until sugar is dissolved.",
      "Add whiskey and a large ice cube.",
      "Stir gently until well chilled.",
      "Express the oils from an orange peel over the drink, then drop it in.",
    ],
    false, // isGlutenFree (assuming whiskey is gluten-free for most)
    false, // isVegan (bitters can contain glycerin, check specific brand)
    false, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink2",
    ["d1", "d4"],
    "Gin & Tonic",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gin_and_Tonic.jpg/800px-Gin_and_Tonic.jpg",
    3,
    ["2 oz Gin", "4-5 oz Tonic Water", "Lime Wedge (for garnish)", "Ice"],
    [
      "Fill a highball glass with ice.",
      "Pour in the gin.",
      "Top with tonic water.",
      "Garnish with a lime wedge.",
      "Stir gently.",
    ],
    true, // isGlutenFree
    true, // isVegan
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink3",
    ["d2"],
    "Pina Colada",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pina_Colada_cocktail.jpg/800px-Pina_Colada_cocktail.jpg",
    7,
    [
      "2 oz White Rum",
      "3 oz Pineapple Juice",
      "1 oz Cream of Coconut",
      "0.5 oz Fresh Lime Juice",
      "Pineapple Slice and Cherry (for garnish)",
      "Crushed Ice",
    ],
    [
      "Combine all ingredients (except garnish) in a blender.",
      "Blend until smooth and slushy.",
      "Pour into a chilled hurricane or highball glass.",
      "Garnish with a pineapple slice and a cherry.",
    ],
    true, // isGlutenFree
    false, // isVegan (due to cream of coconut, sometimes contains dairy stabilizers or derived products, but mostly vegan)
    true, // isVegetarian
    false // isLactoseFree (contains cream of coconut)
  ),

  new Drink(
    "drink4",
    ["d1", "d5"],
    "Cosmopolitan",
    "pricey",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cosmopolitan_%28cocktail%29.jpg/800px-Cosmopolitan_%28cocktail%29.jpg",
    5,
    [
      "1.5 oz Citrus Vodka",
      "1 oz Cointreau or Triple Sec",
      "0.5 oz Cranberry Juice",
      "0.5 oz Fresh Lime Juice",
      "Orange Peel or Lime Wedge (for garnish)",
      "Ice",
    ],
    [
      "Add all ingredients to a shaker with ice.",
      "Shake well until thoroughly chilled.",
      "Strain into a chilled coupe or martini glass.",
      "Garnish with an orange peel or lime wedge.",
    ],
    true, // isGlutenFree
    true, // isVegan
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink5",
    ["d1", "d3"],
    "Manhattan",
    "pricey",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Manhattan_Cocktail.jpg/800px-Manhattan_Cocktail.jpg",
    4,
    [
      "2 oz Rye or Bourbon Whiskey",
      "0.75 oz Sweet Vermouth",
      "2 dashes Angostura Bitters",
      "Maraschino Cherry (for garnish)",
      "Ice",
    ],
    [
      "Combine whiskey, sweet vermouth, and bitters in a mixing glass with ice.",
      "Stir until well chilled.",
      "Strain into a chilled coupe or martini glass.",
      "Garnish with a maraschino cherry.",
    ],
    false, // isGlutenFree (assuming whiskey)
    false, // isVegan (vermouth and bitters may contain animal products, check specific brand)
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink6",
    ["d6"],
    "Espresso Martini",
    "pricey",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Espresso_Martini.jpg/800px-Espresso_Martini.jpg",
    7,
    [
      "1.5 oz Vodka",
      "1 oz Coffee Liqueur (e.g., Kahlua)",
      "1 oz Freshly Brewed Espresso (chilled)",
      "0.5 oz Simple Syrup (optional, to taste)",
      "3 Coffee Beans (for garnish)",
      "Ice",
    ],
    [
      "Add all ingredients to a shaker with ice.",
      "Shake vigorously until well chilled and a thick foam forms.",
      "Double strain into a chilled coupe or martini glass.",
      "Garnish with three coffee beans.",
    ],
    true, // isGlutenFree
    false, // isVegan (some coffee liqueurs might not be, check brand)
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink7",
    ["d7"],
    "Virgin Mojito",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mojito_with_lime_and_mint.jpg/800px-Mojito_with_lime_and_mint.jpg",
    5,
    [
      "10-12 Fresh Mint Leaves",
      "2 Lime Wedges",
      "1 oz Simple Syrup",
      "Club Soda or Sparkling Water",
      "Ice",
    ],
    [
      "In a sturdy glass, gently muddle mint leaves and lime wedges with simple syrup.",
      "Fill the glass with ice.",
      "Top with club soda or sparkling water.",
      "Stir gently.",
      "Garnish with a mint sprig and a lime slice.",
    ],
    true, // isGlutenFree
    true, // isVegan
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink8",
    ["d8"],
    "Lemon Drop Shot",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lemon_Drop_Shot.jpg/800px-Lemon_Drop_Shot.jpg",
    2,
    [
      "1.5 oz Citrus Vodka",
      "0.5 oz Fresh Lemon Juice",
      "0.5 oz Simple Syrup",
      "Sugar (for rim, optional)",
      "Lemon Wedge (for garnish, optional)",
      "Ice",
    ],
    [
      "If desired, sugar-rim a shot glass.",
      "Add vodka, lemon juice, and simple syrup to a shaker with ice.",
      "Shake well until thoroughly chilled.",
      "Strain into the shot glass.",
      "Garnish with a lemon wedge.",
    ],
    true, // isGlutenFree
    true, // isVegan
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink9",
    ["d9"],
    "Mimosa",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mimosa_cocktail.jpg/800px-Mimosa_cocktail.jpg",
    2,
    ["4 oz Chilled Champagne or Prosecco", "2 oz Chilled Orange Juice"],
    [
      "Pour orange juice into a champagne flute.",
      "Slowly top with chilled champagne or prosecco.",
      "Stir gently.",
    ],
    true, // isGlutenFree
    true, // isVegan (if wine is vegan, some wineries use animal products)
    true, // isVegetarian
    true // isLactoseFree
  ),

  new Drink(
    "drink10",
    ["d10"],
    "Hot Toddy",
    "affordable",
    "simple",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hot_Toddy.jpg/800px-Hot_Toddy.jpg",
    7,
    [
      "2 oz Whiskey (e.g., Bourbon or Scotch)",
      "1 Tablespoon Honey",
      "0.5 oz Fresh Lemon Juice",
      "Boiling Water",
      "Lemon Slice or Cinnamon Stick (for garnish)",
    ],
    [
      "Pour whiskey, honey, and lemon juice into a mug.",
      "Top with boiling water.",
      "Stir until honey is dissolved.",
      "Garnish with a lemon slice or cinnamon stick.",
    ],
    false, // isGlutenFree (assuming whiskey)
    false, // isVegan (honey)
    true, // isVegetarian
    true // isLactoseFree
  ),
];
