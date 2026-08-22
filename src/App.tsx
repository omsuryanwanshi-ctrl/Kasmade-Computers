import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandsPage } from './pages/BrandsPage';
import { SoftwarePage } from './pages/SoftwarePage';
import { AboutPage } from './pages/AboutPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { AppStore } from './services/store';
import { Product, ServiceItem } from './types';
import { SERVICES_DATA } from './data/initialData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [products, setProducts] = useState<Product[]>(() => AppStore.getProducts());
  const [services] = useState<ServiceItem[]>(SERVICES_DATA);

  // Quote modal state
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [defaultRequirementType, setDefaultRequirementType] = useState<string>('');

  useEffect(() => {
    const handleProductsUpdated = () => {
      setProducts(AppStore.getProducts());
    };
    window.addEventListener('kdc_products_updated', handleProductsUpdated);
    return () => window.removeEventListener('kdc_products_updated', handleProductsUpdated);
  }, []);

  const handleOpenQuote = (requirementOrServiceName?: string) => {
    setSelectedProduct(null);
    setDefaultRequirementType(requirementOrServiceName || 'Laptop');
    setIsQuoteOpen(true);
  };

  const handleEnquireProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsQuoteOpen(true);
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            products={products}
            services={services}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEnquireProduct={handleEnquireProduct}
            onOpenQuote={() => handleOpenQuote()}
          />
        );
      case 'products':
        return (
          <ProductsPage
            products={products}
            onEnquireProduct={handleEnquireProduct}
            onOpenQuote={() => handleOpenQuote()}
          />
        );
      case 'services':
        return (
          <ServicesPage
            services={services}
            onOpenQuote={(srv) => handleOpenQuote(srv)}
          />
        );
      case 'brands':
        return <BrandsPage onOpenQuote={(brand) => handleOpenQuote(brand)} />;
      case 'software':
        return <SoftwarePage onOpenQuote={(soft) => handleOpenQuote(soft)} />;
      case 'about':
        return (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      case 'why-us':
        return (
          <WhyChooseUsPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      case 'quote':
        return <QuotePage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage products={products} setProducts={setProducts} />;
      default:
        return (
          <HomePage
            products={products}
            services={services}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onEnquireProduct={handleEnquireProduct}
            onOpenQuote={() => handleOpenQuote()}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page View */}
      <main style={{ flex: 1 }}>{renderCurrentPage()}</main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingActions />

      {/* Global Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedProduct={selectedProduct}
        defaultRequirementType={defaultRequirementType}
      />
    </div>
  );
}

export default App;
