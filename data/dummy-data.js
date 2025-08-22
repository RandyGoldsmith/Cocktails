import Category from "../models/category";
import Drink from "../models/drink";

export const CATEGORIES = [
  new Category("d1", "Classic Cocktails", "#A7705B"), // Muted Brown
  new Category("d2", "Tropical & Fruity", "#E5BE5E"), // Golden Yellow
  new Category("d3", "Whiskey-Based", "#7B4F4B"), // Dark Brown
  new Category("d4", "Gin & Tonic Variations", "#528C7A"), // Teal Green
  new Category("d5", "Vodka Mixes", "#8C9EFF"), // Light Blue
  new Category("d6", "Creamy & Dessert", "#C2B280"), // Tan/Cream
  new Category("d7", "Low/No ABV", "#90EE90"), // Light Green
  new Category("d8", "Shots & Shooters", "#E0BBE4"), // Light Purple
  new Category("d9", "Sparkling & Bubbly", "#FFD700"), // Gold
  new Category("d10", "Hot Drinks", "#8B4513"), // Saddle Brown
];

export const DRINKS = [
  new Drink(
    "drink1",
    ["d1", "d3"],
    "Old Fashioned",
    "pricey",
    "simple",
    "https://images.unsplash.com/photo-1621873495884-845a939892d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwZmFzaGlvbmVkfGVufDB8fDB8fHww", // Pexels
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
    false,
    false,
    false,
    true
  ),

  new Drink(
    "drink2",
    ["d1", "d4"],
    "Gin & Tonic",
    "affordable",
    "simple",
    "https://images.unsplash.com/photo-1597960194480-fc6b5e3181fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2luJTIwYW5kJTIwdG9uaWN8ZW58MHx8MHx8fDA%3D", // Pexels
    3,
    ["2 oz Gin", "4-5 oz Tonic Water", "Lime Wedge (for garnish)", "Ice"],
    [
      "Fill a highball glass with ice.",
      "Pour in the gin.",
      "Top with tonic water.",
      "Garnish with a lime wedge.",
      "Stir gently.",
    ],
    true,
    true,
    true,
    true
  ),

  new Drink(
    "drink3",
    ["d2"],
    "Pina Colada",
    "affordable",
    "simple",
    "https://plus.unsplash.com/premium_photo-1720446089066-661e8fb6b7b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGluYSUyMGNvbGFkYXxlbnwwfHwwfHx8MA%3D%3Dels.com/photos/2288005/pexels-photo-2288005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    true,
    false,
    true,
    false
  ),

  new Drink(
    "drink4",
    ["d1", "d5"],
    "Cosmopolitan",
    "pricey",
    "simple",
    "https://images.unsplash.com/photo-1650691979881-5f88ba1fb6fb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29zbW9wb2xpdGFufGVufDB8fDB8fHww.pexels.com/photos/3576751/pexels-photo-3576751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    true,
    true,
    true,
    true
  ),

  new Drink(
    "drink5",
    ["d1", "d3"],
    "Manhattan",
    "pricey",
    "simple",
    "https://plus.unsplash.com/premium_photo-1661377336516-2d802ad096c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFuaGF0dGFuJTIwZHJpbmt8ZW58MHx8MHx8fDA%3D.com/photos/10186831/pexels-photo-10186831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    false,
    false,
    true,
    true
  ),

  new Drink(
    "drink6",
    ["d6"],
    "Espresso Martini",
    "pricey",
    "simple",
    "https://images.unsplash.com/photo-1678261739137-85881474209c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXNwcmVzc28lMjBNYXJ0aW5pfGVufDB8fDB8fHww/photos/16382099/pexels-photo-16382099/free-photo-of-two-espresso-martini-cocktails-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    true,
    false,
    true,
    true
  ),

  new Drink(
    "drink7",
    ["d7"],
    "Virgin Mojito",
    "affordable",
    "simple",
    "https://images.unsplash.com/photo-1634496064950-02f043806b09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmlyZ2luJTIwTW9qaXRvfGVufDB8fDB8fHww.com/photos/3387138/pexels-photo-3387138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    true,
    true,
    true,
    true
  ),

  new Drink(
    "drink8",
    ["d8"],
    "Lemon Drop Shot",
    "affordable",
    "simple",
    "https://images.unsplash.com/photo-1615540732605-8e57bca2d432?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVtb24lMjBEcm9wJTIwc2hvdCUyMGRyaW5rfGVufDB8fDB8fHww/pexels-photo-15745483/free-photo-of-yellow-liquid-in-shot-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    true,
    true,
    true,
    true
  ),

  new Drink(
    "drink9",
    ["d9"],
    "Mimosa",
    "affordable",
    "simple",
    "https://images.unsplash.com/photo-1555766720-1e727844cc8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWltb3NhfGVufDB8fDB8fHww.com/photos/2088814/pexels-photo-2088814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
    2,
    ["4 oz Chilled Champagne or Prosecco", "2 oz Chilled Orange Juice"],
    [
      "Pour orange juice into a champagne flute.",
      "Slowly top with chilled champagne or prosecco.",
      "Stir gently.",
    ],
    true,
    true,
    true,
    true
  ),

  new Drink(
    "drink10",
    ["d10"],
    "Hot Toddy",
    "affordable",
    "simple",
    "https://images.unsplash.com/photo-1585777786852-51917fc4eba2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwdG9kZHl8ZW58MHx8MHx8fDA%3D/7262842/pexels-photo-7262842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Pexels
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
    false,
    false,
    true,
    true
  ),
];
