export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  purchased: boolean;
}

export interface Guest {
  id: number;
  name: string;
  email: string;
  hasRSVP: boolean;
}

export interface Registry {
  id: number;
  eventName: string;
  ownerName: string;
  date: string; // "YYYY-MM-DD"
  description: string;
  items: Item[];
  guests: Guest[];
}
