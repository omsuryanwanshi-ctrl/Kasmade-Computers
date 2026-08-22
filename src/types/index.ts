export type ProductCategory =
  | 'laptops'
  | 'desktops'
  | 'components'
  | 'peripherals'
  | 'networking'
  | 'cctv'
  | 'software'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  brand: string;
  description: string;
  specifications: string[];
  image: string;
  featured: boolean;
  badge?: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  features: string[];
  turnaroundTime?: string;
}

export interface BrandItem {
  id: string;
  name: string;
  logo?: string;
  category: string;
  popularFor: string;
}

export interface Enquiry {
  id: string;
  customerName: string;
  mobile: string;
  email: string;
  requirementType: string;
  productOrService: string;
  brandPreference?: string;
  quantity: number;
  budget?: string;
  message: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: string;
}

export interface SiteBanners {
  heroBg: string;
  servicesBg: string;
  promoBanner?: string;
}

export interface BusinessInfo {
  name: string;
  brand: string;
  tagline: string;
  secondaryTagline: string;
  established: string;
  owner: string;
  phones: string[];
  officePhone: string;
  address: string;
  email: string;
  businessType: string;
  googleMapQuery: string;
  banners?: SiteBanners;
}
