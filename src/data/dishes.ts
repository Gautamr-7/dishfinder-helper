
export interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper",
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Traditional Neapolitan pizza with tomatoes, mozzarella, fresh basil, and olive oil",
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with parmesan cheese, croutons, and classic Caesar dressing",
    imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
  },
];
