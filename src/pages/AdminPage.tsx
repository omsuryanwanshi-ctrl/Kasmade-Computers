import React, { useState, useEffect } from 'react';
import { Product, Enquiry, BusinessInfo, ProductCategory, SiteBanners } from '../types';
import { AppStore, DEFAULT_BANNERS } from '../services/store';
import {
  Lock,
  Unlock,
  Package,
  Inbox,
  Settings,
  Layers,
  Plus,
  Trash2,
  Edit2,
  PhoneCall,
  MessageSquare,
  Sparkles,
  Save,
  Check,
  AlertCircle,
  Image as ImageIcon,
  Upload,
  RefreshCw
} from 'lucide-react';

interface AdminPageProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const AdminPage: React.FC<AdminPageProps> = ({ products, setProducts }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('kdc_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'banners' | 'enquiries' | 'settings'>('dashboard');

  // Enquiries
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => AppStore.getEnquiries());

  // Business Info
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>(() => AppStore.getBusinessInfo());
  const [infoSaved, setInfoSaved] = useState(false);

  // Banners
  const [banners, setBanners] = useState<SiteBanners>(() => AppStore.getBanners());
  const [bannerSaved, setBannerSaved] = useState(false);

  // Product Modal / Form State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState<ProductCategory>('laptops');
  const [prodSubCategory, setProdSubCategory] = useState('');
  const [prodBrand, setProdBrand] = useState('HP');
  const [prodDesc, setProdDesc] = useState('');
  const [prodSpecs, setProdSpecs] = useState('');
  const [prodImage, setProdImage] = useState('');
  const [prodFeatured, setProdFeatured] = useState(false);
  const [prodBadge, setProdBadge] = useState('');

  useEffect(() => {
    const handleEnquiriesUpdated = () => {
      setEnquiries(AppStore.getEnquiries());
    };
    const handleBannersUpdated = () => {
      setBanners(AppStore.getBanners());
    };
    window.addEventListener('kdc_enquiries_updated', handleEnquiriesUpdated);
    window.addEventListener('kdc_banners_updated', handleBannersUpdated);
    return () => {
      window.removeEventListener('kdc_enquiries_updated', handleEnquiriesUpdated);
      window.removeEventListener('kdc_banners_updated', handleBannersUpdated);
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '2012' || passcode === 'admin' || passcode === 'kdc2012') {
      setIsAuthenticated(true);
      sessionStorage.setItem('kdc_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passcode. (Hint: 2012 or admin)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('kdc_admin_auth');
  };

  // Helper to convert uploaded file to Base64 data URL
  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setProdImage(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerUpload = (key: keyof SiteBanners, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('File size exceeds 8MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          const updated = { ...banners, [key]: uploadEvent.target.result as string };
          setBanners(updated);
          AppStore.saveBanners(updated);
          setBannerSaved(true);
          setTimeout(() => setBannerSaved(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveBanners = (e: React.FormEvent) => {
    e.preventDefault();
    AppStore.saveBanners(banners);
    setBannerSaved(true);
    setTimeout(() => setBannerSaved(false), 3000);
  };

  const resetBannersToDefault = () => {
    if (window.confirm('Reset all website banner images to original default photos?')) {
      setBanners(DEFAULT_BANNERS);
      AppStore.saveBanners(DEFAULT_BANNERS);
      setBannerSaved(true);
      setTimeout(() => setBannerSaved(false), 3000);
    }
  };

  // Product Form Management
  const openNewProductModal = () => {
    setEditingProductId(null);
    setProdName('');
    setProdCategory('laptops');
    setProdSubCategory('Notebooks');
    setProdBrand('HP');
    setProdDesc('');
    setProdSpecs('Intel Core i5\n16GB RAM\n512GB SSD');
    setProdImage('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80');
    setProdFeatured(false);
    setProdBadge('');
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (p: Product) => {
    setEditingProductId(p.id);
    setProdName(p.name);
    setProdCategory(p.category);
    setProdSubCategory(p.subCategory || '');
    setProdBrand(p.brand);
    setProdDesc(p.description);
    setProdSpecs(p.specifications.join('\n'));
    setProdImage(p.image);
    setProdFeatured(p.featured);
    setProdBadge(p.badge || '');
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodName) return;

    const specsArray = prodSpecs
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingProductId) {
      const updated: Product = {
        id: editingProductId,
        name: prodName,
        category: prodCategory,
        subCategory: prodSubCategory,
        brand: prodBrand,
        description: prodDesc,
        specifications: specsArray,
        image: prodImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
        featured: prodFeatured,
        badge: prodBadge || undefined,
        createdAt: new Date().toISOString()
      };
      AppStore.updateProduct(updated);
      setProducts(AppStore.getProducts());
    } else {
      AppStore.addProduct({
        name: prodName,
        category: prodCategory,
        subCategory: prodSubCategory,
        brand: prodBrand,
        description: prodDesc,
        specifications: specsArray,
        image: prodImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
        featured: prodFeatured,
        badge: prodBadge || undefined
      });
      setProducts(AppStore.getProducts());
    }

    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      AppStore.deleteProduct(id);
      setProducts(AppStore.getProducts());
    }
  };

  const handleUpdateStatus = (id: string, status: 'pending' | 'contacted' | 'completed') => {
    AppStore.updateEnquiryStatus(id, status);
    setEnquiries(AppStore.getEnquiries());
  };

  const handleDeleteEnquiry = (id: string) => {
    if (window.confirm('Delete this customer enquiry?')) {
      AppStore.deleteEnquiry(id);
      setEnquiries(AppStore.getEnquiries());
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    AppStore.saveBusinessInfo(businessInfo);
    setInfoSaved(true);
    setTimeout(() => setInfoSaved(false), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div style={{ background: '#070D18', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div
          style={{
            background: '#0B1528',
            border: '1.5px solid #D4AF37',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            width: '100%',
            maxWidth: '440px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: '#F3C343'
              }}
            >
              <Lock size={28} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
              Admin Portal
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
              Kasmade Data Corporation Management Dashboard
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Enter Security Passcode / PIN</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Enter PIN (e.g. 2012)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                autoFocus
              />
              {authError && (
                <div style={{ color: '#EF4444', fontSize: '0.82rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AlertCircle size={14} />
                  <span>{authError}</span>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%' }}>
              <Unlock size={18} />
              <span>Unlock Admin Panel</span>
            </button>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.78rem', color: '#64748B' }}>
              Authorized Access Only • Kasmade Data Corporation © 2026
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#F8FAFC', minHeight: '90vh', paddingBottom: '5rem' }}>
      {/* Top Admin Header */}
      <div style={{ background: '#0B1528', color: '#FFFFFF', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', padding: '1.5rem 0' }}>
        <div className="kdc-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span className="section-tag light" style={{ marginBottom: '0.2rem' }}>
              <Sparkles size={12} /> Management Portal
            </span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>
              Kasmade Data Corporation Dashboard
            </h1>
          </div>

          <button onClick={handleLogout} className="btn btn-outline-white btn-sm">
            <Lock size={14} />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div className="kdc-container" style={{ marginTop: '2rem' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
          {[
            { id: 'dashboard', label: 'Overview Dashboard', icon: Layers, count: null },
            { id: 'products', label: 'Product Inventory', icon: Package, count: products.length },
            { id: 'banners', label: 'Banners & Images', icon: ImageIcon, count: null },
            { id: 'enquiries', label: 'Customer Enquiries', icon: Inbox, count: enquiries.filter((e) => e.status === 'pending').length },
            { id: 'settings', label: 'Store Information', icon: Settings, count: null }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '1px solid',
                  borderColor: isActive ? '#D4AF37' : '#E2E8F0',
                  background: isActive ? '#0B1528' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  cursor: 'pointer'
                }}
              >
                <Icon size={16} color={isActive ? '#F3C343' : '#64748B'} />
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span style={{ background: isActive ? '#D4AF37' : '#E2E8F0', color: isActive ? '#0B1528' : '#1E293B', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="kdc-card" style={{ padding: '1.75rem', borderLeft: '4px solid #D4AF37' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Products</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0B1528', marginTop: '0.25rem' }}>{products.length}</div>
                <div style={{ fontSize: '0.78rem', color: '#16A34A', marginTop: '0.35rem' }}>In Active Catalog</div>
              </div>

              <div className="kdc-card" style={{ padding: '1.75rem', borderLeft: '4px solid #E63946' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Pending Enquiries</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#E63946', marginTop: '0.25rem' }}>
                  {enquiries.filter((e) => e.status === 'pending').length}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.35rem' }}>Awaiting store response</div>
              </div>

              <div className="kdc-card" style={{ padding: '1.75rem', borderLeft: '4px solid #3B82F6' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Total Enquiries Logged</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0B1528', marginTop: '0.25rem' }}>{enquiries.length}</div>
                <div style={{ fontSize: '0.78rem', color: '#3B82F6', marginTop: '0.35rem' }}>All-time quotations</div>
              </div>

              <div className="kdc-card" style={{ padding: '1.75rem', borderLeft: '4px solid #16A34A' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Active Services</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0B1528', marginTop: '0.25rem' }}>9</div>
                <div style={{ fontSize: '0.78rem', color: '#16A34A', marginTop: '0.35rem' }}>Hardware & Software</div>
              </div>
            </div>

            {/* Recent Enquiries Feed */}
            <div className="kdc-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B1528' }}>
                  Recent Customer Quotation Requests
                </h3>
                <button onClick={() => setActiveTab('enquiries')} className="btn btn-outline-gold btn-sm" style={{ color: '#B58E22', borderColor: '#D4AF37' }}>
                  View All Enquiries
                </button>
              </div>

              {enquiries.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {enquiries.slice(0, 5).map((enq) => (
                    <div
                      key={enq.id}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '10px',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
                          <strong style={{ fontSize: '1.05rem', color: '#0B1528' }}>{enq.customerName}</strong>
                          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>• {enq.mobile}</span>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '4px',
                              background: enq.status === 'pending' ? '#FEE2E2' : enq.status === 'contacted' ? '#FEF3C7' : '#DCFCE7',
                              color: enq.status === 'pending' ? '#DC2626' : enq.status === 'contacted' ? '#D97706' : '#16A34A'
                            }}
                          >
                            {enq.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                          <strong>{enq.requirementType}:</strong> {enq.productOrService} (Qty: {enq.quantity})
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>
                          {enq.message}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <a
                          href={`tel:${enq.mobile}`}
                          className="btn btn-navy btn-sm"
                          title="Call Customer"
                        >
                          <PhoneCall size={14} />
                          <span>Call</span>
                        </a>
                        <button
                          onClick={() => {
                            const msg = `Hello ${enq.customerName}, regarding your quotation request on Kasmade Data Corporation for *${enq.productOrService}*.`;
                            window.open(AppStore.generateWhatsAppUrl(enq.mobile, msg), '_blank');
                          }}
                          className="btn btn-whatsapp btn-sm"
                        >
                          <MessageSquare size={14} />
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#94A3B8' }}>No enquiries logged yet.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCT MANAGEMENT WITH IMAGE UPLOAD */}
        {activeTab === 'products' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B1528' }}>Product Catalog ({products.length})</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B' }}>Add, edit, change product images via upload or URL, and manage inventory.</p>
              </div>

              <button onClick={openNewProductModal} className="btn btn-gold">
                <Plus size={18} />
                <span>Add New Product</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {products.map((p) => (
                <div key={p.id} className="kdc-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '170px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', background: '#F1F5F9', position: 'relative' }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button
                      onClick={() => openEditProductModal(p)}
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        background: 'rgba(11,21,40,0.85)',
                        border: '1px solid #D4AF37',
                        color: '#F3C343',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        backdropFilter: 'blur(6px)'
                      }}
                    >
                      <ImageIcon size={13} />
                      <span>Change Image</span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', background: '#0B1528', color: '#F3C343', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                      {p.brand}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>
                      {p.category}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0B1528', marginBottom: '0.5rem' }}>
                    {p.name}
                  </h4>

                  <p style={{ fontSize: '0.82rem', color: '#64748B', marginBottom: '1rem', flex: 1 }}>
                    {p.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '0.75rem' }}>
                    <button
                      onClick={() => openEditProductModal(p)}
                      className="btn btn-navy btn-sm"
                      style={{ flex: 1 }}
                    >
                      <Edit2 size={14} />
                      <span>Edit Product</span>
                    </button>

                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="btn btn-sm"
                      style={{ background: '#FEE2E2', color: '#DC2626', border: '1px solid #FECACA' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BANNERS & VISUAL MEDIA MANAGEMENT */}
        {activeTab === 'banners' && (
          <div className="kdc-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B1528' }}>Banner & Visual Media Management</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B' }}>
                  Upload new photos or provide image URLs for the Hero background, Services background, and promotional banners.
                </p>
              </div>

              <button onClick={resetBannersToDefault} className="btn btn-navy btn-sm">
                <RefreshCw size={14} />
                <span>Reset to Defaults</span>
              </button>
            </div>

            {bannerSaved && (
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', color: '#16A34A', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} />
                <span>Banner images updated and saved across the website!</span>
              </div>
            )}

            <form onSubmit={handleSaveBanners} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* 1. Hero Banner Image */}
              <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B1528' }}>Hero Section Background</h4>
                  <span style={{ fontSize: '0.75rem', background: '#0B1528', color: '#F3C343', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>HOME PAGE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                  {/* Preview */}
                  <div style={{ height: '180px', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid #D4AF37', background: '#000000', position: 'relative' }}>
                    <img src={banners.heroBg} alt="Hero Background Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.7)', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem' }}>
                      Current Live Hero
                    </div>
                  </div>

                  {/* Upload Actions */}
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: '#334155' }}>Upload Local File</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleBannerUpload('heroBg', e)}
                        style={{ padding: '0.5rem', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '8px', width: '100%', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: '#334155' }}>Or Image URL</label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#CBD5E1' }}
                        value={banners.heroBg}
                        onChange={(e) => setBanners({ ...banners, heroBg: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Services Banner Image */}
              <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B1528' }}>Technical Services Background</h4>
                  <span style={{ fontSize: '0.75rem', background: '#0B1528', color: '#F3C343', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>SERVICES PAGE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                  {/* Preview */}
                  <div style={{ height: '180px', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid #D4AF37', background: '#000000', position: 'relative' }}>
                    <img src={banners.servicesBg} alt="Services Background Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.7)', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem' }}>
                      Current Live Services
                    </div>
                  </div>

                  {/* Upload Actions */}
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: '#334155' }}>Upload Local File</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleBannerUpload('servicesBg', e)}
                        style={{ padding: '0.5rem', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '8px', width: '100%', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: '#334155' }}>Or Image URL</label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#CBD5E1' }}
                        value={banners.servicesBg}
                        onChange={(e) => setBanners({ ...banners, servicesBg: e.target.value })}
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Promotional Banner */}
              <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B1528' }}>Promotional & Hardware Showcase Banner</h4>
                  <span style={{ fontSize: '0.75rem', background: '#0B1528', color: '#F3C343', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>PRODUCTS PAGE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                  {/* Preview */}
                  <div style={{ height: '180px', borderRadius: '10px', overflow: 'hidden', border: '1.5px solid #D4AF37', background: '#000000', position: 'relative' }}>
                    <img src={banners.promoBanner} alt="Promotional Banner Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.7)', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem' }}>
                      Current Live Hardware Banner
                    </div>
                  </div>

                  {/* Upload Actions */}
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: '#334155' }}>Upload Local File</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleBannerUpload('promoBanner', e)}
                        style={{ padding: '0.5rem', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '8px', width: '100%', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: '#334155' }}>Or Image URL</label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#CBD5E1' }}
                        value={banners.promoBanner || ''}
                        onChange={(e) => setBanners({ ...banners, promoBanner: e.target.value })}
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Owner / Founder Photo */}
              <div style={{ background: '#FFF8E7', padding: '1.5rem', borderRadius: '12px', border: '2px solid #D4AF37' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0B1528' }}>Owner / Founder Photo</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>This photo appears on the About Us page as the founder portrait.</p>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#D4AF37', color: '#0B1528', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700 }}>ABOUT PAGE</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                  {/* Preview */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '160px', height: '200px', borderRadius: '12px', overflow: 'hidden', border: '3px solid #D4AF37', background: '#0B1528', boxShadow: '0 8px 25px rgba(212,175,55,0.25)' }}>
                      <img
                        src={banners.ownerPhoto || './assets/owner_manoj_kandekar.jpg'}
                        alt="Owner Portrait Preview"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                        onError={(e) => { e.currentTarget.src = './assets/owner_manoj_kandekar.jpg'; }}
                      />
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>Manoj A. Kandekar — Live Preview</span>
                  </div>

                  {/* Upload Actions */}
                  <div>
                    <div className="form-group">
                      <label className="form-label" style={{ color: '#334155', fontWeight: 700 }}>📸 Upload New Owner Photo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleBannerUpload('ownerPhoto', e)}
                        style={{ padding: '0.5rem', background: '#FFFFFF', border: '1.5px solid #D4AF37', borderRadius: '8px', width: '100%', fontSize: '0.88rem' }}
                      />
                      <p style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.35rem' }}>Recommended: Portrait/vertical photo, 400×500px or taller.</p>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ color: '#334155' }}>Or Image URL</label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#D4AF37' }}
                        value={banners.ownerPhoto || ''}
                        onChange={(e) => setBanners({ ...banners, ownerPhoto: e.target.value })}
                        placeholder="https://example.com/photo.jpg"
                      />
                    </div>

                    {banners.ownerPhoto && banners.ownerPhoto !== './assets/owner_manoj_kandekar.jpg' && (
                      <button
                        type="button"
                        onClick={() => setBanners({ ...banners, ownerPhoto: './assets/owner_manoj_kandekar.jpg' })}
                        className="btn btn-navy btn-sm"
                        style={{ marginTop: '0.75rem' }}
                      >
                        <RefreshCw size={13} />
                        <span>Restore Original Photo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-gold btn-lg">
                <Save size={18} />
                <span>Save All Changes</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: ENQUIRY MANAGEMENT */}
        {activeTab === 'enquiries' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B1528' }}>Customer Quotation Inquiries ({enquiries.length})</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B' }}>Track quotation leads, update status, and communicate directly with customers.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {enquiries.map((enq) => (
                <div key={enq.id} className="kdc-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B1528' }}>{enq.customerName}</h4>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '6px',
                            background: enq.status === 'pending' ? '#FEE2E2' : enq.status === 'contacted' ? '#FEF3C7' : '#DCFCE7',
                            color: enq.status === 'pending' ? '#DC2626' : enq.status === 'contacted' ? '#D97706' : '#16A34A'
                          }}
                        >
                          Status: {enq.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.9rem', color: '#475569' }}>
                        <strong>Mobile:</strong> <a href={`tel:${enq.mobile}`} style={{ color: '#0B1528', fontWeight: 600 }}>+91 {enq.mobile}</a> | <strong>Email:</strong> {enq.email}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <select
                        value={enq.status}
                        onChange={(e) => handleUpdateStatus(enq.id, e.target.value as any)}
                        style={{ padding: '0.45rem 0.85rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.85rem', fontWeight: 600, background: '#FFFFFF' }}
                      >
                        <option value="pending">Mark as Pending</option>
                        <option value="contacted">Mark as Contacted</option>
                        <option value="completed">Mark as Completed</option>
                      </select>

                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        style={{ background: '#FEE2E2', border: '1px solid #FECACA', color: '#DC2626', padding: '0.45rem 0.65rem', borderRadius: '8px', cursor: 'pointer' }}
                        title="Delete Enquiry"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div style={{ background: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.88rem' }}>
                      <div><strong style={{ color: '#64748B' }}>Requirement:</strong> {enq.requirementType}</div>
                      <div><strong style={{ color: '#64748B' }}>Product/Model:</strong> {enq.productOrService}</div>
                      <div><strong style={{ color: '#64748B' }}>Brand Pref:</strong> {enq.brandPreference || 'N/A'}</div>
                      <div><strong style={{ color: '#64748B' }}>Quantity:</strong> {enq.quantity}</div>
                      <div><strong style={{ color: '#64748B' }}>Budget Range:</strong> {enq.budget || 'Market Best'}</div>
                    </div>
                    {enq.message && (
                      <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0', fontSize: '0.88rem', color: '#334155' }}>
                        <strong>Customer Note:</strong> {enq.message}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={`tel:${enq.mobile}`} className="btn btn-navy btn-sm">
                      <PhoneCall size={15} />
                      <span>Call Customer</span>
                    </a>

                    <button
                      onClick={() => {
                        const msg = `Hello ${enq.customerName}, regarding your quotation request on Kasmade Data Corporation for *${enq.productOrService}*.`;
                        window.open(AppStore.generateWhatsAppUrl(enq.mobile, msg), '_blank');
                      }}
                      className="btn btn-whatsapp btn-sm"
                    >
                      <MessageSquare size={15} />
                      <span>Direct WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: STORE SETTINGS */}
        {activeTab === 'settings' && (
          <div className="kdc-card" style={{ padding: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0B1528' }}>Store Information & Live Content</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B' }}>Edit phone numbers, email, shop address, and brand taglines without touching code.</p>
            </div>

            {infoSaved && (
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', color: '#16A34A', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Check size={18} />
                <span>Store information saved successfully!</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Business Name</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.name}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Owner / Contact Person</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.owner}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, owner: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Primary Mobile Number</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.phones[0]}
                    onChange={(e) => {
                      const copy = [...businessInfo.phones];
                      copy[0] = e.target.value;
                      setBusinessInfo({ ...businessInfo, phones: copy });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Secondary Mobile Number</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.phones[1]}
                    onChange={(e) => {
                      const copy = [...businessInfo.phones];
                      copy[1] = e.target.value;
                      setBusinessInfo({ ...businessInfo, phones: copy });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Office Landline</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.officePhone}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, officePhone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.email}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: '#334155' }}>Store Physical Address</label>
                <input
                  type="text"
                  className="form-input"
                  style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                  value={businessInfo.address}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Primary Tagline</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.tagline}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, tagline: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#334155' }}>Secondary Tagline</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ background: '#F8FAFC', color: '#0F172A', borderColor: '#CBD5E1' }}
                    value={businessInfo.secondaryTagline}
                    onChange={(e) => setBusinessInfo({ ...businessInfo, secondaryTagline: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-gold btn-lg">
                <Save size={18} />
                <span>Save Store Information</span>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Product Add / Edit Modal with Direct Image File Upload */}
      {isProductModalOpen && (
        <div className="modal-overlay" onClick={() => setIsProductModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              {editingProductId ? 'Edit Product' : 'Add New Product to Inventory'}
            </h3>

            <form onSubmit={handleSaveProduct}>
              <div className="form-group">
                <label className="form-label">Product Name *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. HP 15s Intel Core i5 Laptop"
                  value={prodName}
                  onChange={(e) => setProdName(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    className="form-select"
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value as any)}
                  >
                    <option value="laptops">Laptops</option>
                    <option value="desktops">Desktops & AIO</option>
                    <option value="components">Components & Upgrades</option>
                    <option value="peripherals">Peripherals & Printers</option>
                    <option value="networking">Networking</option>
                    <option value="cctv">CCTV & Security</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Brand *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. HP, Lenovo, CP Plus"
                    value={prodBrand}
                    onChange={(e) => setProdBrand(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Sub-Category</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ultrabooks, Gaming, NVMe SSD"
                    value={prodSubCategory}
                    onChange={(e) => setProdSubCategory(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Badge (Optional)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Best Seller, Top Pick"
                    value={prodBadge}
                    onChange={(e) => setProdBadge(e.target.value)}
                  />
                </div>
              </div>

              {/* Product Image Section (Upload & URL & Live Preview) */}
              <div style={{ background: '#081120', padding: '1.25rem', borderRadius: '10px', border: '1px solid #334155', marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ color: '#F3C343', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ImageIcon size={16} /> Product Image (Upload File or Enter URL)
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', alignItems: 'center' }}>
                  {/* Image Preview Thumbnail */}
                  <div style={{ width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #D4AF37', background: '#000000' }}>
                    <img
                      src={prodImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'}
                      alt="Product Preview"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div>
                    {/* File Upload Button */}
                    <div style={{ marginBottom: '0.75rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.3rem' }}>
                        1. Choose Image from Computer:
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProductImageUpload}
                        style={{ padding: '0.4rem', background: '#0B1528', border: '1px solid #334155', borderRadius: '6px', width: '100%', color: '#CBD5E1', fontSize: '0.82rem' }}
                      />
                    </div>

                    {/* Or URL input */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.3rem' }}>
                        2. Or Paste Image URL:
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                        placeholder="https://images.unsplash.com/..."
                        value={prodImage}
                        onChange={(e) => setProdImage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Short Description</label>
                <textarea
                  rows={2}
                  className="form-textarea"
                  placeholder="Overview of the product features..."
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Key Specifications (One per line)</label>
                <textarea
                  rows={3}
                  className="form-textarea"
                  placeholder="Intel Core i5&#10;16GB RAM&#10;512GB SSD"
                  value={prodSpecs}
                  onChange={(e) => setProdSpecs(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
                <input
                  type="checkbox"
                  id="prodFeatured"
                  checked={prodFeatured}
                  onChange={(e) => setProdFeatured(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }}
                />
                <label htmlFor="prodFeatured" style={{ color: '#E2E8F0', fontSize: '0.9rem', cursor: 'pointer' }}>
                  Feature this product on Home Page showcase
                </label>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-gold btn-lg" style={{ flex: 1 }}>
                  <span>{editingProductId ? 'Update Product' : 'Add to Catalog'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="btn btn-outline-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
