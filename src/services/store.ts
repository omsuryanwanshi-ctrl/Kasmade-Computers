import { Product, Enquiry, BusinessInfo, SiteBanners } from '../types';
import { INITIAL_PRODUCTS, BUSINESS_INFO } from '../data/initialData';

const PRODUCTS_KEY = 'kdc_products_v3';
const ENQUIRIES_KEY = 'kdc_enquiries_v1';
const INFO_KEY = 'kdc_business_info_v1';
const BANNERS_KEY = 'kdc_banners_v1';

export const DEFAULT_BANNERS: SiteBanners = {
  heroBg: './assets/hero_bg.jpg',
  servicesBg: './assets/services_bg.jpg',
  promoBanner: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1920&auto=format&fit=crop&q=80'
};

export class AppStore {
  // Products
  static getProducts(): Product[] {
    try {
      const stored = localStorage.getItem(PRODUCTS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load products from storage:', e);
    }
    this.saveProducts(INITIAL_PRODUCTS);
    return INITIAL_PRODUCTS;
  }

  static saveProducts(products: Product[]): void {
    try {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
      window.dispatchEvent(new Event('kdc_products_updated'));
    } catch (e) {
      console.error('Failed to save products:', e);
    }
  }

  static addProduct(product: Omit<Product, 'id' | 'createdAt'>): Product {
    const products = this.getProducts();
    const newProduct: Product = {
      ...product,
      id: 'prod-' + Date.now(),
      createdAt: new Date().toISOString()
    };
    products.unshift(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  static updateProduct(product: Product): void {
    const products = this.getProducts();
    const index = products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      products[index] = product;
      this.saveProducts(products);
    }
  }

  static deleteProduct(id: string): void {
    const products = this.getProducts().filter((p) => p.id !== id);
    this.saveProducts(products);
  }

  // Banners & Images Management
  static getBanners(): SiteBanners {
    try {
      const stored = localStorage.getItem(BANNERS_KEY);
      if (stored) {
        return { ...DEFAULT_BANNERS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load banners from storage:', e);
    }
    return DEFAULT_BANNERS;
  }

  static saveBanners(banners: SiteBanners): void {
    try {
      localStorage.setItem(BANNERS_KEY, JSON.stringify(banners));
      window.dispatchEvent(new Event('kdc_banners_updated'));
    } catch (e) {
      console.error('Failed to save banners:', e);
    }
  }

  // Enquiries
  static getEnquiries(): Enquiry[] {
    try {
      const stored = localStorage.getItem(ENQUIRIES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load enquiries:', e);
    }
    const sample: Enquiry[] = [
      {
        id: 'enq-101',
        customerName: 'Suresh Patil',
        mobile: '9822100000',
        email: 'suresh.patil@example.com',
        requirementType: 'Laptop',
        productOrService: 'HP Pavilion 15 Core i5 Laptop',
        brandPreference: 'HP',
        quantity: 1,
        budget: 'Mid Range',
        message: 'Looking for a reliable laptop for accounting and daily office use.',
        status: 'pending',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
      },
      {
        id: 'enq-102',
        customerName: 'Dr. Rahul Sonawane',
        mobile: '9423100000',
        email: 'rahul.sonawane@clinic.com',
        requirementType: 'CCTV',
        productOrService: 'CP PLUS HD & IP Bullet Security Cameras',
        brandPreference: 'CP Plus',
        quantity: 4,
        budget: 'Best Value',
        message: 'Need 4 outdoor CCTV cameras with DVR and mobile setup for clinic.',
        status: 'contacted',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
      }
    ];
    this.saveEnquiries(sample);
    return sample;
  }

  static saveEnquiries(enquiries: Enquiry[]): void {
    try {
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(enquiries));
      window.dispatchEvent(new Event('kdc_enquiries_updated'));
    } catch (e) {
      console.error('Failed to save enquiries:', e);
    }
  }

  static submitEnquiry(enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry {
    const enquiries = this.getEnquiries();
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: 'enq-' + Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    enquiries.unshift(newEnquiry);
    this.saveEnquiries(enquiries);
    return newEnquiry;
  }

  static updateEnquiryStatus(id: string, status: 'pending' | 'contacted' | 'completed'): void {
    const enquiries = this.getEnquiries();
    const index = enquiries.findIndex((e) => e.id === id);
    if (index !== -1) {
      enquiries[index].status = status;
      this.saveEnquiries(enquiries);
    }
  }

  static deleteEnquiry(id: string): void {
    const enquiries = this.getEnquiries().filter((e) => e.id !== id);
    this.saveEnquiries(enquiries);
  }

  // Business Info
  static getBusinessInfo(): BusinessInfo {
    try {
      const stored = localStorage.getItem(INFO_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load business info:', e);
    }
    return BUSINESS_INFO;
  }

  static saveBusinessInfo(info: BusinessInfo): void {
    try {
      localStorage.setItem(INFO_KEY, JSON.stringify(info));
      window.dispatchEvent(new Event('kdc_info_updated'));
    } catch (e) {
      console.error('Failed to save info:', e);
    }
  }

  // WhatsApp Link Helper
  static generateWhatsAppUrl(phone: string = '9545943951', text?: string): string {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const defaultMsg = 'Hello Kasmade Data Corporation, I am interested in your products/services. Please share more details.';
    const message = encodeURIComponent(text || defaultMsg);
    return `https://wa.me/${fullPhone}?text=${message}`;
  }
}
