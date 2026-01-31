export const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000)
}));
