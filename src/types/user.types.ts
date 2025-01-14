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
};
export type TSeller= {
  storeName: string;
  storeDetails: {
    state: string;
    city: string;
    country: string;
    postalCode: string;
  };
  email: string;
  mobile: string;
};


export type UserRole = "user" | "seller" | "admin";
