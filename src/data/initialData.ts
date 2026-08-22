import { Product, ServiceItem, BrandItem, BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'KASMADE DATA CORPORATION',
  brand: 'KDC – Multi Brand Store',
  tagline: 'SATISFACTION IS OUR MOTTO',
  secondaryTagline: 'Your Trust, Our Service... Always!',
  established: 'Since 2012',
  owner: 'Manoj A. Kandekar',
  phones: ['9545943951', '8237508008'],
  officePhone: '02592 229501',
  address: 'Shop No. 2, Near Munjoba Par, Subhash Road, Deola, Nashik, Maharashtra',
  email: 'kdatacorporation@rediffmail.com',
  businessType: 'Computer Sales, Service & Multi Brand Technology Store',
  googleMapQuery: 'Shop No. 2, Near Munjoba Par, Subhash Road, Deola, Nashik, Maharashtra'
};

export const INITIAL_PRODUCTS: Product[] = [
  // Laptops
  {
    id: 'prod-lap-1',
    name: 'HP Pavilion 15 Core i5 Laptop',
    category: 'laptops',
    subCategory: 'Notebooks',
    brand: 'HP',
    description: 'High-performance notebook designed for business, multitasking and academic workflows.',
    specifications: ['Intel Core i5 Processor', '16GB DDR4 RAM', '512GB NVMe M.2 SSD', '15.6" FHD Anti-Glare Display', 'Windows 11 Home & Office'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Best Seller',
    createdAt: '2026-01-01'
  },
  {
    id: 'prod-lap-2',
    name: 'Lenovo ThinkPad E14 Professional Laptop',
    category: 'laptops',
    subCategory: 'Ultrabooks',
    brand: 'Lenovo',
    description: 'Legendary ThinkPad build quality with military-grade durability for business and enterprise professionals.',
    specifications: ['Intel Core i5 / i7 Processor', '16GB DDR5 RAM', '1TB PCIe SSD', 'FHD IPS Screen with Privacy Shutter', 'Backlit Spill-Resistant Keyboard'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Commercial Grade',
    createdAt: '2026-01-02'
  },
  {
    id: 'prod-lap-3',
    name: 'Dell Inspiron 15 Thin & Light Laptop',
    category: 'laptops',
    subCategory: 'Notebooks',
    brand: 'Dell',
    description: 'Reliable computing everyday laptop with ergonomic lift-hinge design and vibrant display.',
    specifications: ['Intel Core 13th Gen CPU', '8GB / 16GB Expandable RAM', '512GB High-Speed SSD', 'Waves MaxxAudio Pro Audio', 'ExpressCharge Battery'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-03'
  },
  {
    id: 'prod-lap-4',
    name: 'ASUS TUF Gaming F15 Performance Laptop',
    category: 'laptops',
    subCategory: 'Gaming Laptops',
    brand: 'ASUS',
    description: 'Geared for serious gaming and heavy rendering with high refresh rate and military-grade durability.',
    specifications: ['Intel Core i7 Processor', 'NVIDIA GeForce RTX Graphics', '16GB DDR5 4800MHz RAM', '144Hz IPS FHD Display', 'Dual Fans with Anti-Dust'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'High Performance',
    createdAt: '2026-01-04'
  },
  {
    id: 'prod-lap-5',
    name: 'Acer Aspire 5 Multi-Tasking Laptop',
    category: 'laptops',
    subCategory: 'Notebooks',
    brand: 'Acer',
    description: 'Versatile, lightweight laptop for office computing, online classes, and daily productive tasks.',
    specifications: ['AMD Ryzen 5 Series CPU', '16GB DDR4 Memory', '512GB Fast NVMe SSD', 'Elevated Hinge Design', 'Wi-Fi 6 Support'],
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-05'
  },

  // Desktops & All-in-One
  {
    id: 'prod-desk-1',
    name: 'HP ProOne All-in-One Desktop PC',
    category: 'desktops',
    subCategory: 'All-in-One Computers',
    brand: 'HP',
    description: 'Sleek, clutter-free all-in-one desktop computer with micro-edge anti-glare display for offices and homes.',
    specifications: ['Intel Core i5 Processor', '8GB / 16GB DDR4 RAM', '512GB SSD + 1TB HDD Option', '23.8" FHD IPS Screen', 'Wireless Keyboard & Mouse Included'],
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Popular Office PC',
    createdAt: '2026-01-06'
  },
  {
    id: 'prod-desk-2',
    name: 'Lenovo IdeaCentre Tower Desktop',
    category: 'desktops',
    subCategory: 'Desktop PCs',
    brand: 'Lenovo',
    description: 'Heavy-duty computing tower engineered for continuous office operations and productivity software.',
    specifications: ['Intel Core i3 / i5 CPU Options', 'Up to 32GB RAM Support', 'Fast NVMe SSD Storage', 'Multiple Display & USB Ports', 'Energy Efficient PSU'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-07'
  },
  {
    id: 'prod-desk-3',
    name: 'KDC Custom-Built Gaming & Editing PC Tower',
    category: 'desktops',
    subCategory: 'Custom-Built PC Towers',
    brand: 'ASUS',
    description: 'Expertly assembled in-house by KDC technicians with clean cable management and thermal optimization.',
    specifications: ['Intel Core i7 / AMD Ryzen 7', 'NVIDIA GeForce RTX GPU', '32GB High-Speed DDR5 RAM', '1TB Gen4 NVMe SSD', 'ARGB Tempered Glass Cabinet'],
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'KDC Custom Build',
    createdAt: '2026-01-08'
  },

  // Internal Components & Upgrades
  {
    id: 'prod-comp-1',
    name: 'Intel Core i5 & i7 Desktop Processors',
    category: 'components',
    subCategory: 'Processors',
    brand: 'Intel',
    description: 'Genuine box pack Intel desktop processors with hybrid architecture for peak gaming and multitasking.',
    specifications: ['LGA1700 Socket Compatibility', 'Intel Smart Cache', 'Integrated Intel UHD Graphics', 'Supports DDR4 & DDR5', '3-Year Manufacturer Warranty'],
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-09'
  },
  {
    id: 'prod-comp-2',
    name: 'AMD Ryzen 5 & Ryzen 7 Multi-Core CPUs',
    category: 'components',
    subCategory: 'Processors',
    brand: 'AMD',
    description: 'Leading AMD AM4 / AM5 processors with high multi-threaded performance for creators and gamers.',
    specifications: ['Zen Architecture', 'High Clock Boost Frequencies', 'AMD Wraith Stealth / Prism Cooler', 'PCIe 4.0 / 5.0 Ready'],
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-10'
  },
  {
    id: 'prod-comp-3',
    name: 'ASUS & Gigabyte Motherboards',
    category: 'components',
    subCategory: 'Motherboards',
    brand: 'ASUS',
    description: 'Feature-rich Intel and AMD chipsets motherboards with robust power delivery and M.2 heatsinks.',
    specifications: ['B760 / B650 / H610 Series', 'PCIe Steel Slot Armor', 'Dual M.2 NVMe Slots', 'Realtek Gigabit LAN & HD Audio'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-11'
  },
  {
    id: 'prod-comp-4',
    name: 'Crucial & Kingston DDR4 / DDR5 Desktop & Laptop RAM',
    category: 'components',
    subCategory: 'RAM',
    brand: 'Crucial',
    description: '100% genuine memory modules for instant speed boost and seamless multitasking.',
    specifications: ['8GB / 16GB / 32GB Capacities', '3200MHz DDR4 / 5600MHz DDR5', 'Low Latency Performance', 'Lifetime Limited Warranty'],
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Genuine Stock',
    createdAt: '2026-01-12'
  },
  {
    id: 'prod-comp-5',
    name: 'Western Digital & Kingston NVMe PCIe SSDs',
    category: 'components',
    subCategory: 'SSD / Storage',
    brand: 'Western Digital',
    description: 'Ultra-fast solid-state drives delivering blazing boot speeds and lightning software loading.',
    specifications: ['256GB / 512GB / 1TB / 2TB', 'Speeds up to 3500MB/s - 7000MB/s', 'M.2 2280 Form Factor', '5-Year Manufacturer Warranty'],
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-13'
  },
  {
    id: 'prod-comp-6',
    name: 'Seagate Surveillance & NAS Hard Drives',
    category: 'components',
    subCategory: 'HDD',
    brand: 'Seagate',
    description: '24/7 continuous duty hard drives engineered for CCTV video recording and backup storage.',
    specifications: ['1TB, 2TB, 4TB, 6TB Capacities', 'SkyHawk / IronWolf Series', 'AllFrame Technology', 'Tuned for Heavy Write Workloads'],
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-14'
  },
  {
    id: 'prod-comp-7',
    name: 'NVIDIA GeForce RTX Graphics Cards',
    category: 'components',
    subCategory: 'Graphics Cards / GPUs',
    brand: 'ASUS',
    description: 'Dedicated GPU graphics cards for 3D modeling, AutoCAD, video editing, and modern gaming.',
    specifications: ['RTX 3050 / RTX 4060 Series', 'Ray Tracing & DLSS AI Acceleration', 'Dual Fan Efficient Cooling', 'HDMI 2.1 & DisplayPort Outputs'],
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-15'
  },
  {
    id: 'prod-comp-8',
    name: 'Power Supply Units (SMPS) & Liquid Coolers',
    category: 'components',
    subCategory: 'Cooling & Power',
    brand: 'Corsair',
    description: 'Certified power supply units and advanced cooling solutions for stable system lifespan.',
    specifications: ['450W, 550W, 650W, 750W 80+ Certified', 'ARGB Cabinet Cooling Fans', '240mm AIO Liquid Coolers', 'Heavy-Duty Circuit Protection'],
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-16'
  },

  // Peripherals & Accessories
  {
    id: 'prod-per-1',
    name: 'Dell & Acer IPS Full HD Computer Monitors',
    category: 'peripherals',
    subCategory: 'Monitors',
    brand: 'Dell',
    description: 'Crisp IPS display monitors with ultra-thin bezels, vibrant colors, and eye comfort technology.',
    specifications: ['22", 24" & 27" Screen Sizes', '1080p FHD IPS Panels', '75Hz / 100Hz Refresh Rate', 'HDMI & VGA Connectivity', 'Flicker-Free & Low Blue Light'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-17'
  },
  {
    id: 'prod-per-2',
    name: 'Logitech Wireless & Mechanical Keyboards and Mice',
    category: 'peripherals',
    subCategory: 'Keyboards & Mice',
    brand: 'Logitech',
    description: 'Ergonomic input devices built for long typing sessions, smooth tracking, and wireless ease.',
    specifications: ['2.4GHz Wireless & Bluetooth', 'Spill-Resistant Keyboard Keys', 'High-Precision Optical Sensor', 'Extended Battery Life up to 24 Months'],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-18'
  },
  {
    id: 'prod-per-3',
    name: 'Epson EcoTank & Canon All-in-One Ink Tank Printers',
    category: 'peripherals',
    subCategory: 'Printers & Scanners',
    brand: 'Epson',
    description: 'Ultra-low cost color printing, scanning, and copying solution for businesses, schools, and offices.',
    specifications: ['Print, Scan & Copy All-in-One', 'Wi-Fi & Direct USB Printing', 'High Page Yield Inks', 'Fast Borderless Printing', '1-Year Warranty'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Store Top Seller',
    createdAt: '2026-01-19'
  },
  {
    id: 'prod-per-4',
    name: 'HP LaserJet Professional Office Printers',
    category: 'peripherals',
    subCategory: 'Printers',
    brand: 'HP',
    description: 'Sharp, black & white laser printing with rapid output and dependable duty cycle.',
    specifications: ['Monochrome Laser Technology', 'Up to 20ppm Print Speeds', 'Compact Footprint', 'Affordable Toner Cartridge Support'],
    image: 'https://images.unsplash.com/photo-1589330694653-dad6d3240a91?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-20'
  },
  {
    id: 'prod-per-5',
    name: 'Microtek & APC Line Interactive UPS Systems',
    category: 'peripherals',
    subCategory: 'UPS & Power',
    brand: 'APC',
    description: 'Reliable power backup and surge protection to prevent system crashes and data loss.',
    specifications: ['600VA / 1000VA / 1500VA', 'Automatic Voltage Regulation (AVR)', 'Battery Backup for PC & Router', 'Overload & Surge Protection'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-21'
  },
  {
    id: 'prod-per-6',
    name: 'SanDisk & Kingston USB Flash Drives & External HDDs',
    category: 'peripherals',
    subCategory: 'Storage & Accessories',
    brand: 'SanDisk',
    description: 'Portable, rugged storage devices for daily document sharing, media backup, and operating system installers.',
    specifications: ['32GB, 64GB, 128GB Flash Drives', '1TB / 2TB External USB 3.0 HDDs', 'Metal Body & OTG Type-C Options'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-22'
  },

  // Networking
  {
    id: 'prod-net-1',
    name: 'TP-Link & D-Link Dual-Band Wi-Fi 6 Routers',
    category: 'networking',
    subCategory: 'Routers',
    brand: 'TP-Link',
    description: 'High-speed wireless routers with beamforming antennas for seamless coverage across home and commercial spaces.',
    specifications: ['Dual-Band Gigabit Wireless', 'High-Gain External Antennas', 'WPA3 Security Protocol', 'Guest Network & Parental Controls'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-23'
  },
  {
    id: 'prod-net-2',
    name: '8-Port / 16-Port Gigabit Network Ethernet Switches',
    category: 'networking',
    subCategory: 'Network Switches',
    brand: 'D-Link',
    description: 'Plug-and-play desktop switches for expanding office LAN connectivity with zero configuration needed.',
    specifications: ['10/100/1000Mbps Auto-Negotiation', 'Metal Rugged Casing', 'Energy Efficient Green Tech', 'PoE & Non-PoE Models Available'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-24'
  },
  {
    id: 'prod-net-3',
    name: 'Cat6 LAN Cables, Connectors & Wi-Fi Extenders',
    category: 'networking',
    subCategory: 'LAN Accessories',
    brand: 'D-Link',
    description: 'Pure copper networking cables, RJ45 connectors, crimping tools, and range extenders.',
    specifications: ['Cat6 UTP Solid Copper Cable', 'Gold-Plated RJ45 Connectors', 'Wall-Plug Wi-Fi Range Boosters'],
    image: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-01-25'
  },

  // CCTV & Security / Surveillance
  {
    id: 'prod-cctv-1',
    name: 'CP PLUS 2.4MP / 5MP Full HD Weatherproof Outdoor Bullet Camera',
    category: 'cctv',
    subCategory: 'CCTV Cameras',
    brand: 'CP Plus',
    description: 'Heavy-duty outdoor surveillance camera with smart IR night vision up to 30 meters and IP67 weather resistance.',
    specifications: ['1080p FHD / 5MP Clarity Options', 'Smart IR LEDs up to 30m', 'IP67 Weatherproof All-Metal Housing', 'Supports Mobile App Live Streaming', '2-Year Manufacturer Warranty'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Outdoor Best Seller',
    createdAt: '2026-01-26'
  },
  {
    id: 'prod-cctv-2',
    name: 'CP PLUS & Hikvision 2.4MP HD Indoor Dome Camera with Audio',
    category: 'cctv',
    subCategory: 'Dome Cameras',
    brand: 'CP Plus',
    description: 'Discreet indoor ceiling surveillance camera with wide-angle lens and built-in high-sensitivity audio microphone.',
    specifications: ['Full HD 1080p Crystal Clear Video', 'Built-in Audio Recording Microphone', 'Wide Angle 2.8mm / 3.6mm Lens', '24x7 Day & Night Vision Filter', 'Ceiling & Wall Mountable'],
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Audio Supported',
    createdAt: '2026-01-27'
  },
  {
    id: 'prod-cctv-3',
    name: 'Hikvision 5MP ColorVu Full-Time Color Night Vision Bullet Camera',
    category: 'cctv',
    subCategory: 'CCTV Cameras',
    brand: 'Hikvision',
    description: 'Revolutionary ColorVu technology delivers bright, full-color video 24/7 even in total darkness with F1.0 super aperture.',
    specifications: ['5MP Ultra HD Color Resolution', '24/7 Full Time Vivid Color Imaging', 'F1.0 Super Aperture & Advanced Sensor', 'Warm White Supplemental Light up to 20m', 'IP67 Heavy Weather Resistance'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Full Color Night Vision',
    createdAt: '2026-01-28'
  },
  {
    id: 'prod-cctv-4',
    name: 'CP PLUS EzyKam 360° Smart Wireless Pan-Tilt Wi-Fi Camera',
    category: 'cctv',
    subCategory: 'Wireless / Smart Cameras',
    brand: 'CP Plus',
    description: 'Smart Wi-Fi security camera with 360-degree rotation, motion tracking, two-way audio talk, and SD card recording.',
    specifications: ['360° Pan & 90° Tilt Remote Control', 'Two-Way Audio Talkback System', 'AI Motion Detection & Human Tracking', 'Supports MicroSD up to 256GB & Cloud', 'Instant Phone Notification Alerts'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Smart Wi-Fi',
    createdAt: '2026-01-29'
  },
  {
    id: 'prod-cctv-5',
    name: '4G SIM Solar-Powered Outdoor PTZ Security Camera',
    category: 'cctv',
    subCategory: 'Wireless / Smart Cameras',
    brand: 'CP Plus',
    description: 'Standalone surveillance with solar panel and 4G SIM card slot—ideal for farms, agricultural fields, construction sites, and remote godowns without Wi-Fi.',
    specifications: ['Built-in Solar Charging Panel & Battery', '4G SIM Card Connectivity (No Wi-Fi Needed)', '360° PTZ Motorized Rotation', 'PIR Motion Sensor & Color Night Vision', 'All-Weather Waterproof IP66'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Farm & Solar Ready',
    createdAt: '2026-01-30'
  },
  {
    id: 'prod-cctv-6',
    name: 'CP PLUS 4CH / 8CH / 16CH H.265+ 4K Ultra HD DVR Unit',
    category: 'cctv',
    subCategory: 'CCTV Systems',
    brand: 'CP Plus',
    description: 'Central digital video recorder with H.265+ high compression, HDMI 4K video out, and seamless mobile live view.',
    specifications: ['Supports 4, 8, 16 Camera Channels', 'H.265+ Video Coding Saves 70% Storage', 'Simultaneous HDMI & VGA 1080p/4K Output', 'gCMOB / iCMOB Mobile App Live Sync', 'Supports up to 10TB Surveillance HDD'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80',
    featured: true,
    createdAt: '2026-01-31'
  },
  {
    id: 'prod-cctv-7',
    name: 'Seagate SkyHawk & WD Purple 1TB / 2TB / 4TB Surveillance Hard Drives',
    category: 'cctv',
    subCategory: 'CCTV Accessories',
    brand: 'Seagate',
    description: 'Specially engineered continuous 24x7 surveillance storage drives designed to record high-frame video without dropping frames.',
    specifications: ['1TB, 2TB, 4TB, 6TB Capacities', 'Engineered for 24x7 Continuous DVR/NVR Duty', 'ImagePerfect / AllFrame Firmware', 'Supports up to 64 HD Video Streams', '3-Year Manufacturer Warranty'],
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&auto=format&fit=crop&q=80',
    featured: false,
    badge: '24x7 Certified',
    createdAt: '2026-02-01'
  },
  {
    id: 'prod-cctv-8',
    name: 'Heavy Duty 4-Channel / 8-Channel / 16-Channel CCTV SMPS Power Supply Box',
    category: 'cctv',
    subCategory: 'CCTV Accessories',
    brand: 'CP Plus',
    description: 'Stabilized regulated power supply with surge protection and short-circuit auto-recovery for uninterrupted camera power.',
    specifications: ['12V DC Regulated Multi-Output Channels', 'Short Circuit & Surge Overload Protection', 'Metal Cabinet with Key Lock Support', 'Individual Channel Fuse Protection'],
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-02-02'
  },
  {
    id: 'prod-cctv-9',
    name: 'Complete 4-Camera Full HD Ready-to-Install CCTV Surveillance Combo Kit',
    category: 'cctv',
    subCategory: 'CCTV Systems',
    brand: 'CP Plus',
    description: 'All-in-one complete CCTV surveillance package for shops, residences, offices, and warehouses.',
    specifications: ['4x Full HD Cameras (2 Bullet + 2 Dome)', '1x 4-Channel HD DVR Recorder', '1x 1TB Surveillance Hard Drive', '1x 4-Port SMPS Power Supply Box', '90m 3+1 Pure Copper Cable Roll & BNC Connectors'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80',
    featured: true,
    badge: 'Complete Package',
    createdAt: '2026-02-03'
  },
  {
    id: 'prod-cctv-10',
    name: 'CP PLUS 3+1 Pure Copper Coaxial CCTV Cable Roll (90m) & Waterproof BNC Kits',
    category: 'cctv',
    subCategory: 'CCTV Accessories',
    brand: 'CP Plus',
    description: 'High-shielded pure copper transmission cable with low attenuation and heavy-duty waterproof BNC DC connectors.',
    specifications: ['90-Meter Factory Sealed Roll', 'Solid Bare Electrolytic Copper Conductor', 'Flame Retardant PVC Sheath', 'Includes 8x BNC & 4x DC Brass Connectors'],
    image: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=600&auto=format&fit=crop&q=80',
    featured: false,
    createdAt: '2026-02-04'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Computer & Laptop Repair',
    category: 'Hardware Diagnostics & Repairs',
    icon: 'Wrench',
    description: 'Expert diagnostic and repair services for all laptop and desktop brands with fast turnaround and genuine replacement parts.',
    features: [
      'Hardware troubleshooting & comprehensive diagnosis',
      'Laptop screen replacement & hinge repairs',
      'Keyboard replacement & trackpad fixes',
      'DC charging port & motherboard chip-level repair',
      'Overheating & cooling fan servicing'
    ],
    turnaroundTime: 'Same Day / 24 Hours'
  },
  {
    id: 'srv-2',
    title: 'Component Upgrades',
    category: 'Performance Enhancement',
    icon: 'Cpu',
    description: 'Breathe new life into your existing PC or laptop with fast SSD storage and high-speed RAM upgrades.',
    features: [
      'High-speed SSD installation & OS migration',
      'DDR4 & DDR5 RAM capacity upgrades',
      'Dedicated GPU graphics card upgrades',
      'Storage expansion with secondary HDDs & NVMe drives',
      'System performance optimization & BIOS tuning'
    ],
    turnaroundTime: '1 - 2 Hours'
  },
  {
    id: 'srv-3',
    title: 'Software Services',
    category: 'Operating Systems & Setup',
    icon: 'Laptop2',
    description: 'Complete operating system setup, official software configuration, and data backup solutions.',
    features: [
      'Official Windows OS installation & license setup',
      'Data backup, recovery & seamless system migration',
      'Productivity software & driver updates',
      'System recovery & blue-screen (BSOD) fixes',
      'Customized application setup for business and offices'
    ],
    turnaroundTime: 'Same Day'
  },
  {
    id: 'srv-4',
    title: 'Security & Antivirus Services',
    category: 'Cybersecurity & Protection',
    icon: 'ShieldCheck',
    description: 'Protect your valuable confidential data from ransomware, viruses, malware, and unauthorized intrusions.',
    features: [
      'Deep virus, spyware & malware eradication',
      'Genuine antivirus installation & license renewal',
      'Firewall & internet security configuration',
      'Automated scheduled system scan setup',
      'Browser cleanup & malicious pop-up removal'
    ],
    turnaroundTime: '1 - 3 Hours'
  },
  {
    id: 'srv-5',
    title: 'AMC Support (Annual Maintenance)',
    category: 'Enterprise & Institutional',
    icon: 'FileCheck2',
    description: 'Tailored Annual Maintenance Contracts (AMC) for schools, colleges, banks, offices, and commercial establishments.',
    features: [
      'Scheduled preventive maintenance visits',
      'Priority emergency on-call technical support',
      'Comprehensive hardware & networking monitoring',
      'Quarterly system cleaning and optimization',
      'Discounted genuine replacement parts'
    ],
    turnaroundTime: 'Priority On-Call Contract'
  },
  {
    id: 'srv-6',
    title: 'Custom PC Assembly',
    category: 'Bespoke Workstations & Gaming',
    icon: 'Sliders',
    description: 'Custom-built computer rigs tailored to your specific budget, gaming requirements, CAD drafting, or 4K video editing.',
    features: [
      'Custom component selection & compatibility checks',
      'Professional PC assembly & neat cable routing',
      'Thermal paste application & airflow management',
      'Benchmark testing & burn-in stability verification',
      'Warranty support on every individual component'
    ],
    turnaroundTime: '24 - 48 Hours'
  },
  {
    id: 'srv-7',
    title: 'Networking & Wi-Fi Services',
    category: 'Connectivity & Infrastructure',
    icon: 'Wifi',
    description: 'Robust wired LAN cabling and high-speed Wi-Fi network setup for seamless internet throughout your facility.',
    features: [
      'Office LAN cabling & crimping with Cat6 standards',
      'High-speed Wi-Fi router setup & range extension',
      'Network switch installation & IP address configuration',
      'Network troubleshooting & speed bottleneck diagnostics',
      'File sharing and network printer sharing setup'
    ],
    turnaroundTime: 'On-Site Scheduling'
  },
  {
    id: 'srv-8',
    title: 'Printer Repair & Toner Services',
    category: 'Printers & Imaging',
    icon: 'Printer',
    description: 'Comprehensive troubleshooting and servicing for InkTank, LaserJet, and dot-matrix printers.',
    features: [
      'LaserJet and InkTank printer head cleaning & repair',
      'Paper jam & roller pickup troubleshooting',
      'High-grade toner refilling and cartridge replacement',
      'Printer driver configuration & Wi-Fi network setup',
      'Scanner calibration & setup'
    ],
    turnaroundTime: 'Same Day / 24 Hours'
  },
  {
    id: 'srv-9',
    title: 'CCTV Installation & Maintenance',
    category: 'Surveillance & Security',
    icon: 'Camera',
    description: 'End-to-end security camera setup, DVR/NVR configuration, and live mobile phone monitoring setup.',
    features: [
      'Indoor dome & outdoor bullet camera installation',
      'DVR / NVR wiring, power supply & hard drive setup',
      'Mobile app remote viewing configuration',
      'CCTV maintenance, camera realignment & cleaning',
      'Surveillance video backup extraction'
    ],
    turnaroundTime: 'On-Site Scheduled Setup'
  }
];

export const BRANDS_DATA: BrandItem[] = [
  { id: 'b-1', name: 'HP', category: 'Laptops, Desktops & Printers', popularFor: 'Pavilion, ProBook & LaserJet Printers' },
  { id: 'b-2', name: 'Lenovo', category: 'Laptops & Desktop PCs', popularFor: 'ThinkPad, IdeaPad & Legion Series' },
  { id: 'b-3', name: 'Dell', category: 'Laptops, Desktops & Monitors', popularFor: 'Inspiron, Vostro & UltraSharp IPS Displays' },
  { id: 'b-4', name: 'ASUS', category: 'Laptops, Components & Motherboards', popularFor: 'TUF Gaming, ROG & Prime Motherboards' },
  { id: 'b-5', name: 'Acer', category: 'Laptops & Monitors', popularFor: 'Aspire, Nitro & Commercial Displays' },
  { id: 'b-6', name: 'Epson', category: 'InkTank Printers & Scanners', popularFor: 'EcoTank Series for Low-Cost Color Printing' },
  { id: 'b-7', name: 'Canon', category: 'Printers, Scanners & Imaging', popularFor: 'PIXMA & ImageCLASS High Speed Printers' },
  { id: 'b-8', name: 'CP Plus', category: 'CCTV & Security Solutions', popularFor: 'HD Surveillance Cameras, DVRs & NVRs' },
  { id: 'b-9', name: 'Brother', category: 'Laser Printers & Multi-Function', popularFor: 'Heavy-Duty Office Printers & Toners' },
  { id: 'b-10', name: 'Intel', category: 'Processors & Chipsets', popularFor: 'Core i3, i5, i7, i9 Desktop Processors' },
  { id: 'b-11', name: 'AMD', category: 'Processors & Radeon Graphics', popularFor: 'Ryzen 5, Ryzen 7 Multi-Core CPUs' },
  { id: 'b-12', name: 'Logitech', category: 'Keyboards, Mice & Webcams', popularFor: 'Wireless Peripherals & Office Productivity' },
  { id: 'b-13', name: 'Quick Heal', category: 'Antivirus & Security Software', popularFor: 'Total Security & Internet Security Suites' },
  { id: 'b-14', name: 'TP-Link', category: 'Networking & Wi-Fi', popularFor: 'High Speed Wi-Fi Routers & Extenders' },
  { id: 'b-15', name: 'Western Digital', category: 'Storage & SSDs', popularFor: 'WD Green, WD Blue & Black NVMe Drives' },
  { id: 'b-16', name: 'Seagate', category: 'Hard Drives & Surveillance', popularFor: 'SkyHawk CCTV Drives & BarraCuda HDDs' }
];

export const SOFTWARE_SUITES = [
  {
    title: 'Operating Systems',
    icon: 'Monitor',
    items: ['Microsoft Windows 11 Home & Pro Genuine Licenses', 'Windows 10 Pro for Enterprise', 'macOS Configuration & Recovery', 'Linux Distributions (Ubuntu, Fedora, Mint)']
  },
  {
    title: 'Productivity & Office Software',
    icon: 'FileText',
    items: ['Microsoft 365 Personal & Family Subscriptions', 'Microsoft Office Home & Business Licenses', 'PDF Editors & Document Management Tools', 'Accounting & Billing Software Setup']
  },
  {
    title: 'Antivirus & Internet Security',
    icon: 'Shield',
    items: ['Quick Heal Total Security & Antivirus Pro', 'K7 Total Security Multi-Device Protection', 'Kaspersky Internet Security', 'Ransomware Protection & Firewall Utilities']
  },
  {
    title: 'System & Backup Utilities',
    icon: 'HardDrive',
    items: ['Automated Data Backup & Cloud Sync Tools', 'Disk Partitioning & Cloning Utilities', 'Hardware Diagnostics & Temperature Monitoring', 'Driver Update & System Recovery Toolsets']
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Genuine Products',
    desc: '100% genuine products directly sourced with official brand warranties and verified serial numbers.',
    icon: 'Award'
  },
  {
    title: 'Expert Technicians',
    desc: 'Over a decade of hands-on expertise handling complex chip-level repairs, diagnostics, and upgrades.',
    icon: 'UserCheck'
  },
  {
    title: 'Fast Turnaround',
    desc: 'Quick diagnostics and prompt service so your business or personal work never faces prolonged downtime.',
    icon: 'Zap'
  },
  {
    title: 'Multi Brand Store',
    desc: 'Compare and choose from HP, Lenovo, Dell, ASUS, Acer, Epson, CP Plus and more all under one roof.',
    icon: 'Layers'
  },
  {
    title: 'Complete Technology Solutions',
    desc: 'From buying a new laptop to networking, CCTV surveillance, custom PC builds, and software support.',
    icon: 'Cpu'
  },
  {
    title: 'Customer Satisfaction Motto',
    desc: '“Satisfaction is Our Motto” – established in 2012 with thousands of happy repeat customers in Deola and Nashik region.',
    icon: 'HeartHandshake'
  }
];
