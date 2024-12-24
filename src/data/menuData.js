export const categories = [
  { id: "all", name: "Tümü" },
  { id: "klasik", name: "Klasik" },
  { id: "special", name: "Özel" },
  { id: "vegetarian", name: "Vejeteryan" },
  { id: "sides", name: "Yan Ürün" },
  { id: "drinks", name: "İçecek" },
];

export const menuItems = [
  {
    id: 1,
    name: "Margarita",
    description: "Mozarella peyniri, domates sosu, fesleğen",
    price: 120.0,
    category: "klasik",
    image: "/images/margherita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pepperoni, mozarella peyniri, domates sosu",
    price: 140.0,
    category: "klasik",
    image: "/images/pepperoni.jpg",
  },
  {
    id: 3,
    name: "4 Peynirli",
    description: "Mozarella, parmesan, rokfor, cheddar peyniri",
    price: 160.0,
    category: "special",
    image: "/images/four-cheese.jpg",
  },
  {
    id: 4,
    name: "Mantarlı Vejeteryan",
    description: "Mantar, yeşil biber, mısır, zeytin, soğan",
    price: 130.0,
    category: "vegetarian",
    image: "/images/vegetarian.jpg",
  },
  {
    id: 5,
    name: "Sarımsaklı Ekmek",
    description: "Özel sarımsaklı sos ile hazırlanmış ekmek",
    price: 45.0,
    category: "sides",
    image: "/images/garlic-bread.jpg",
  },
  {
    id: 6,
    name: "Cola 1L",
    description: "1 Litrelik Cola",
    price: 30.0,
    category: "drinks",
    image: "/images/cola.jpg",
  },
];
