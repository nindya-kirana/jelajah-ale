export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  category: "food" | "drink";
};

export const foodMenu: MenuItem[] = [
  {
    name: "Paket Nila Goreng",
    description: "Nila goreng + nasi + es teh",
    price: "Rp23.000",
    image: "/images/food/nila-goreng.png",
    category: "food",
  },
  {
    name: "Paket Nila Bakar",
    description: "Nila bakar + nasi + es teh",
    price: "Rp25.000",
    image: "/images/food/nila-bakar.png",
    category: "food",
  },
  {
    name: "Paket Ayam Goreng",
    description: "Ayam goreng + nasi + es teh",
    price: "Rp20.000",
    image: "/images/food/ayam-goreng.png",
    category: "food",
  },
  {
    name: "Paket Ayam Bakar",
    description: "Ayam bakar + nasi + es teh",
    price: "Rp22.000",
    image: "/images/food/ayam-bakar.png",
    category: "food",
  },
  {
    name: "Fishbowl",
    description: "Ricebowl nila saus barbeque + es teh",
    price: "Rp23.000",
    image: "/images/food/fishbowl.png",
    category: "food",
  },
  {
    name: "Nasi Putih",
    description: "Nasi putih",
    price: "Rp5.000",
    image: "/images/food/nasi-putih.png",
    category: "food",
  },
  {
    name: "Ca Kangkung",
    description: "Tumis kangkung",
    price: "Rp10.000",
    image: "/images/food/ca-kangkung.png",
    category: "food",
  },
  {
    name: "Ca Tauge",
    description: "Tumis tauge",
    price: "Rp10.000",
    image: "/images/food/ca-tauge.png",
    category: "food",
  },
  {
    name: "Tahu",
    description: "Tahu goreng",
    price: "Rp7.000",
    image: "/images/food/tahu.png",
    category: "food",
  },
  {
    name: "Tempe",
    description: "Tempe goreng",
    price: "Rp7.000",
    image: "/images/food/tempe.png",
    category: "food",
  },
  {
    name: "Mix Tahu & Tempe",
    description: "Kombinasi tahu dan tempe",
    price: "Rp8.000",
    image: "/images/food/tahu-tempe.png",
    category: "food",
  },
  {
    name: "Paket Bakwan",
    description: "Bakwan goreng",
    price: "Rp7.000",
    image: "/images/food/bakwan.png",
    category: "food",
  },
  {
    name: "Paket Mendoan",
    description: "Tempe mendoan",
    price: "Rp7.000",
    image: "/images/food/mendoan.png",
    category: "food",
  },
  {
    name: "Nugget",
    description: "Nugget goreng",
    price: "Rp10.000",
    image: "/images/food/nugget.png",
    category: "food",
  },
  {
    name: "Kentang Goreng",
    description: "Kentang goreng",
    price: "Rp10.000",
    image: "/images/food/kentang-goreng.png",
    category: "food",
  },
];

export const drinkMenu: MenuItem[] = [
  {
    name: "Air Mineral",
    description: "Air mineral",
    price: "Rp5.000",
    image: "/images/food/air-mineral.png",
    category: "drink",
  },
  {
    name: "Teh",
    description: "Tersedia dalam pilihan dingin atau panas",
    price: "Rp4.000",
    image: "/images/food/teh.png",
    category: "drink",
  },
  {
    name: "Jeruk",
    description: "Tersedia dalam pilihan dingin atau panas",
    price: "Rp6.000",
    image: "/images/food/jeruk.png",
    category: "drink",
  },
  {
    name: "Kopi",
    description: "Tersedia dalam pilihan dingin atau panas",
    price: "Rp6.000",
    image: "/images/food/kopi.png",
    category: "drink",
  },
  {
    name: "Milo",
    description: "Minuman Milo",
    price: "Rp7.000",
    image: "/images/food/milo.png",
    category: "drink",
  },
  {
    name: "Chocolatos",
    description: "Minuman Chocolatos",
    price: "Rp7.000",
    image: "/images/food/chocolatos.png",
    category: "drink",
  },
  {
    name: "Nutrisari",
    description: "Minuman Nutrisari",
    price: "Rp5.000",
    image: "/images/food/nutrisari.png",
    category: "drink",
  },
];