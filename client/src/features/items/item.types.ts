export interface ItemListResponse {
  map(arg0: () => import("react").JSX.Element): import("react").ReactNode;
  length: number;
  statusCode: number;
  data: {
    message: string;
    count: number;
    itemList: ItemType[];
  };
  success: boolean;
}

export interface ItemType {
  _id: string;
  title: string;
  description: string;
  prodImages: string[];
  prodImage: string;
  category: string;
  price: number;
  discount: number;
  discountedPrice: number;
  trader: TraderType[];
  tradeWith: TraderType[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TraderType {
  _id: string;
  username: string;
  email: string;
  password: string;
  about: string;
  mobile: string;
  location: string;
  avatar: string;
  items: string[];
  services: any[];
  porterRequests: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  refreshToken: string;
}
