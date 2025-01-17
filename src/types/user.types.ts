export type TUser = {
  id: number;
  name: string;
  firstname?: string;
  lastname?: string;
  email: string;
  role: string;
  mobile?: string;
  profilePicture?: string;
  address?: string;
  storeName?: string;
  storeDetails?: {
    state: string;
    city?: string;
    country: string;
    postalCode: string;
  };
};



export type UserRole = "user" | "seller" | "admin";
