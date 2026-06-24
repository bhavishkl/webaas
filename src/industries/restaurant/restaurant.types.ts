// Restaurant-specific type extensions
export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  tags?: string[];
}
