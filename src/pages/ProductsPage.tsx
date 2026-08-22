import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, Layers, Laptop, Cpu, Monitor, Wifi, Camera, RefreshCw, Sparkles } from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  onEnquireProduct: (product: Product) => void;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onEnquireProduct,
  onOpenQuote
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const categories: { id: string; label: string; icon: any }[] = [
    { id: 'all', label: 'All Products', icon: Layers },
    { id: 'laptops', label: 'Laptops & Ultrabooks', icon: Laptop },
    { id: 'desktops', label: 'Desktops & AIO', icon: Monitor },
    { id: 'components', label: 'Components & Upgrades', icon: Cpu },
    { id: 'peripherals', label: 'Peripherals & Printers', icon: Monitor },
    { id: 'networking', label: 'Networking & Wi-Fi', icon: Wifi },
    { id: 'cctv', label: 'CCTV & Surveillance', icon: Camera }
  ];

  // Extract unique brands
  const brands = useMemo(() => {
    const brandSet = new Set<string>();
    products.forEach((p) => {
      if (p.brand) brandSet.add(p.brand);
    });
    return ['all', ...Array.from(brandSet).sort()];
  }, [products]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesBrand =
        selectedBrand === 'all' || item.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [products, searchQuery, selectedCategory, selectedBrand]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  return (
    <div className="bg-products-tech" style={{ minHeight: '85vh', paddingBottom: '5rem' }}>
      {/* Page Header Banner with Realistic Hardware Background */}
      <section
        className="bg-products-dark-banner"
        style={{
          color: '#ffffff',
          padding: '4.5rem 0',
          borderBottom: '1.5px solid rgba(212, 175, 55, 0.4)',
          marginBottom: '3rem'
        }}
      >
        <div className="kdc-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag light" style={{ marginBottom: '0.65rem' }}>
              <Sparkles size={13} /> Complete Multi Brand Inventory
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Computer Hardware, Systems & Accessories
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#E2E8F0', lineHeight: 1.65, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Explore certified laptops, custom gaming PCs, Intel & AMD processors, high-speed RAM, SSDs, printers, CCTV surveillance kits, and networking gear.
            </p>
          </div>
        </div>
      </section>

      <div className="kdc-container">
        {/* Search & Filter Bar with Glassmorphism */}
        <div
          className="kdc-card"
          style={{
            padding: '1.75rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search products, brands, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  background: '#FFFFFF'
                }}
              />
            </div>

            {/* Brand Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Filter size={18} color="#D4AF37" />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  background: '#FFFFFF'
                }}
              >
                <option value="all">All Brands ({brands.length - 1}+ Available)</option>
                {brands.filter((b) => b !== 'all').map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {(searchQuery || selectedCategory !== 'all' || selectedBrand !== 'all') && (
              <button
                onClick={resetFilters}
                className="btn btn-navy btn-sm"
                style={{ justifySelf: 'start' }}
              >
                <RefreshCw size={14} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0' }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    border: '1px solid',
                    borderColor: isActive ? '#D4AF37' : '#E2E8F0',
                    background: isActive ? '#0B1528' : 'rgba(255,255,255,0.9)',
                    color: isActive ? '#FFFFFF' : '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(11,21,40,0.2)' : 'none'
                  }}
                >
                  <Icon size={15} color={isActive ? '#F3C343' : '#64748B'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <div style={{ fontSize: '1rem', color: '#334155', fontWeight: 600 }}>
            Showing <strong>{filteredProducts.length}</strong> matching products
          </div>
          <button onClick={onOpenQuote} className="btn btn-outline-gold btn-sm" style={{ color: '#B58E22', borderColor: '#D4AF37', background: 'rgba(255,255,255,0.9)' }}>
            Request Custom Quotation
          </button>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={onEnquireProduct}
              />
            ))}
          </div>
        ) : (
          <div
            className="kdc-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B1528', marginBottom: '0.5rem' }}>
              No products found matching your search.
            </div>
            <p style={{ color: '#64748B', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              We stock hundreds of additional components and computer models in our physical store in Deola. Contact us directly to enquire!
            </p>
            <button onClick={resetFilters} className="btn btn-navy">
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
