// Site-wide constants for BluePeak Estimation

export const SITE = {
  name: "BluePeak Estimation",
  tagline: "Accurate Estimates. Stronger Projects. Better Results.",
  description:
    "Professional construction cost estimating services for contractors across all 50 states. Residential, commercial, industrial & MEP estimates delivered in 24–48 hours with 98% accuracy.",
  url: "https://www.bluepeakestimation.com",
  email: "EMAIL_PLACEHOLDER",
  phone: "PHONE_PLACEHOLDER",
  whatsapp: "WHATSAPP_PLACEHOLDER",
  address: "United States of America",
  businessHours: "Monday – Friday: 8:00 AM – 6:00 PM EST",
  founded: "2015",
};

export const SOCIAL = {
  linkedin: "#",
  facebook: "#",
  instagram: "#",
  twitter: "#",
  youtube: "#",
};

export const STATS = [
  { value: 5000, suffix: "+", label: "Projects Estimated" },
  { value: 98, suffix: "%", label: "Bid Success Rate" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 48, suffix: "h", label: "Avg. Turnaround" },
];

export const SERVICES = [
  {
    slug: "construction-estimating",
    title: "Construction Estimating",
    shortTitle: "Estimating",
    icon: "Calculator",
    description:
      "Comprehensive construction cost estimates using industry-leading software and expert estimators with 10+ years of field experience.",
    color: "#1565D8",
    category: "Core Services",
  },
  {
    slug: "material-takeoff",
    title: "Material Takeoff",
    shortTitle: "Takeoff",
    icon: "ClipboardList",
    description:
      "Precise quantity takeoffs from blueprints, drawings, and specifications — complete material schedules for accurate bidding.",
    color: "#1565D8",
    category: "Core Services",
  },
  {
    slug: "quantity-surveying",
    title: "Quantity Surveying",
    shortTitle: "QS",
    icon: "Ruler",
    description:
      "Expert quantity surveying services covering all trades, ensuring every material and labor unit is accurately measured and priced.",
    color: "#1565D8",
    category: "Core Services",
  },
  {
    slug: "bid-preparation",
    title: "Bid Preparation",
    shortTitle: "Bidding",
    icon: "FileText",
    description:
      "Complete bid package preparation including scope of work, unit prices, and proposal documents to help you win more contracts.",
    color: "#082B6B",
    category: "Core Services",
  },
  {
    slug: "residential-estimation",
    title: "Residential Estimation",
    shortTitle: "Residential",
    icon: "Home",
    description:
      "Detailed cost estimates for single-family homes, multi-family developments, renovations, and residential additions.",
    color: "#082B6B",
    category: "By Trade",
  },
  {
    slug: "commercial-estimation",
    title: "Commercial Estimation",
    shortTitle: "Commercial",
    icon: "Building2",
    description:
      "Accurate commercial construction estimates for office buildings, retail centers, warehouses, and mixed-use developments.",
    color: "#082B6B",
    category: "By Trade",
  },
  {
    slug: "industrial-estimation",
    title: "Industrial Estimation",
    shortTitle: "Industrial",
    icon: "Factory",
    description:
      "Specialized estimates for manufacturing plants, processing facilities, heavy industrial, and petrochemical projects.",
    color: "#082B6B",
    category: "By Trade",
  },
  {
    slug: "civil-estimation",
    title: "Civil Estimation",
    shortTitle: "Civil",
    icon: "Construction",
    description:
      "Earthwork, grading, site utilities, roads, bridges, and civil infrastructure cost estimation with GPS-level precision.",
    color: "#2A7FFF",
    category: "By Trade",
  },
  {
    slug: "mep-estimation",
    title: "MEP Estimation",
    shortTitle: "MEP",
    icon: "Zap",
    description:
      "Mechanical, electrical, and plumbing estimating services for commercial and industrial projects of all scales.",
    color: "#2A7FFF",
    category: "Specialty",
  },
  {
    slug: "concrete-estimation",
    title: "Concrete Estimation",
    shortTitle: "Concrete",
    icon: "Layers",
    description:
      "Complete concrete takeoffs covering foundations, slabs, walls, columns, beams, and post-tensioned systems.",
    color: "#2A7FFF",
    category: "Specialty",
  },
  {
    slug: "steel-estimation",
    title: "Steel Estimation",
    shortTitle: "Steel",
    icon: "GitMerge",
    description:
      "Structural steel takeoffs and estimates including fabrication, erection, and connection details for complex structures.",
    color: "#2A7FFF",
    category: "Specialty",
  },
  {
    slug: "drywall-estimation",
    title: "Drywall Estimation",
    shortTitle: "Drywall",
    icon: "Square",
    description:
      "Detailed drywall and framing takeoffs covering all interior partitions, ceilings, and exterior sheathing.",
    color: "#2A7FFF",
    category: "Specialty",
  },
  {
    slug: "roofing-estimation",
    title: "Roofing Estimation",
    shortTitle: "Roofing",
    icon: "Home",
    description:
      "Accurate roofing estimates for flat, sloped, commercial, and residential systems including all membrane and shingle types.",
    color: "#2A7FFF",
    category: "Specialty",
  },
  {
    slug: "electrical-estimation",
    title: "Electrical Estimation",
    shortTitle: "Electrical",
    icon: "Zap",
    description:
      "Full electrical takeoffs covering power distribution, lighting, conduit, panels, switchgear, and low-voltage systems.",
    color: "#082B6B",
    category: "MEP",
  },
  {
    slug: "mechanical-estimation",
    title: "Mechanical Estimation",
    shortTitle: "Mechanical",
    icon: "Wind",
    description:
      "HVAC and mechanical system estimates including ductwork, equipment, piping, and controls for any project type.",
    color: "#082B6B",
    category: "MEP",
  },
  {
    slug: "plumbing-estimation",
    title: "Plumbing Estimation",
    shortTitle: "Plumbing",
    icon: "Droplets",
    description:
      "Complete plumbing system takeoffs covering domestic water, sanitary, storm, gas, and fire protection systems.",
    color: "#082B6B",
    category: "MEP",
  },
  {
    slug: "earthwork-estimation",
    title: "Earthwork Estimation",
    shortTitle: "Earthwork",
    icon: "Mountain",
    description:
      "Mass haul analysis, cut and fill calculations, grading, and excavation estimates using advanced 3D modeling software.",
    color: "#082B6B",
    category: "Civil",
  },
  {
    slug: "painting-estimation",
    title: "Painting Estimation",
    shortTitle: "Painting",
    icon: "Paintbrush",
    description:
      "Interior and exterior painting estimates covering surface prep, primers, coatings, and specialty finishes by trade.",
    color: "#082B6B",
    category: "Specialty",
  },
];

export const INDUSTRIES = [
  {
    slug: "commercial",
    title: "Commercial",
    description: "Office buildings, retail centers, hotels, and mixed-use developments",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    slug: "residential",
    title: "Residential",
    description: "Single-family homes, condominiums, townhouses, and multi-family housing",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    slug: "industrial",
    title: "Industrial",
    description: "Warehouses, manufacturing plants, distribution centers, and industrial parks",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Hospitals, medical centers, outpatient clinics, and healthcare facilities",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    slug: "education",
    title: "Education",
    description: "Schools, universities, research facilities, and campus buildings",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  },
  {
    slug: "government",
    title: "Government",
    description: "Federal buildings, courthouses, military facilities, and public infrastructure",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description: "Bridges, highways, tunnels, airports, and transportation systems",
    icon: "Waypoints",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    slug: "retail",
    title: "Retail",
    description: "Shopping centers, strip malls, big-box stores, and retail fit-outs",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
  },
  {
    slug: "energy",
    title: "Energy",
    description: "Power plants, solar farms, wind projects, and utility infrastructure",
    icon: "Bolt",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description: "Hotels, resorts, restaurants, entertainment venues, and leisure facilities",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=600&q=80",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit Your Plans",
    description:
      "Upload your drawings, blueprints, or specifications. We accept all formats — PDF, CAD, Revit, and more.",
    icon: "Upload",
  },
  {
    step: "02",
    title: "Blueprint Review",
    description:
      "Our senior estimators analyze your project scope, specifications, and any RFIs to ensure complete understanding.",
    icon: "Search",
  },
  {
    step: "03",
    title: "Quantity Takeoff",
    description:
      "We perform comprehensive digital takeoffs using PlanSwift, Bluebeam, and On-Screen Takeoff for maximum accuracy.",
    icon: "Ruler",
  },
  {
    step: "04",
    title: "Cost Estimation",
    description:
      "Materials, labor, equipment, and overhead are priced using current RSMeans data and local market rates.",
    icon: "Calculator",
  },
  {
    step: "05",
    title: "Estimate Delivery",
    description:
      "You receive a detailed, formatted estimate in Excel/PDF within 24–48 hours — ready to submit for bid.",
    icon: "Send",
  },
  {
    step: "06",
    title: "Revision & Support",
    description:
      "We offer one round of free revisions and ongoing support so you can bid with complete confidence.",
    icon: "RefreshCw",
  },
];

export const TESTIMONIALS = [
  {
    name: "Michael Henderson",
    title: "CEO",
    company: "Henderson General Contracting",
    location: "Dallas, TX",
    rating: 5,
    quote:
      "BluePeak Estimation transformed how we bid projects. Their estimates are incredibly detailed and accurate — we've gone from winning 2 out of 10 bids to winning 6 out of 10. The ROI is extraordinary.",
    avatar: "MH",
  },
  {
    name: "Sarah Rodriguez",
    title: "Project Manager",
    company: "Pinnacle Construction Group",
    location: "Miami, FL",
    rating: 5,
    quote:
      "The turnaround time is remarkable. We submitted our plans on Monday morning and had a complete, professional estimate by Tuesday afternoon. The detail level rivals what we get from in-house estimators.",
    avatar: "SR",
  },
  {
    name: "James O'Brien",
    title: "Owner",
    company: "O'Brien & Sons Builders",
    location: "Chicago, IL",
    rating: 5,
    quote:
      "As a small general contractor, having access to BluePeak's expertise gives us a competitive edge we couldn't afford to hire in-house. Professional, responsive, and worth every dollar.",
    avatar: "JO",
  },
  {
    name: "David Kim",
    title: "VP of Operations",
    company: "Apex Structural Solutions",
    location: "Los Angeles, CA",
    rating: 5,
    quote:
      "The MEP estimates we get from BluePeak are used directly by our subcontractors. That says everything about the quality. Accurate, clear, and formatted exactly how we need them.",
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    title: "Principal",
    company: "Thompson Development LLC",
    location: "Atlanta, GA",
    rating: 5,
    quote:
      "We've trusted BluePeak with over 40 projects in the last three years. They understand the construction market deeply and their numbers hold up during construction. No surprises.",
    avatar: "LT",
  },
  {
    name: "Robert Martinez",
    title: "Senior Estimator",
    company: "Northstar Commercial Builders",
    location: "Phoenix, AZ",
    rating: 5,
    quote:
      "What sets BluePeak apart is the communication. They flag issues in the drawings we missed, ask the right questions, and deliver estimates that reflect real-world conditions. Truly professional.",
    avatar: "RM",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What types of construction projects do you estimate?",
    answer:
      "BluePeak Estimation covers all construction types including residential, commercial, industrial, healthcare, education, government, and infrastructure projects. We estimate all trades — from concrete and steel to MEP systems, drywall, roofing, and finishes.",
  },
  {
    question: "How fast can I receive my estimate?",
    answer:
      "Our standard turnaround is 24–48 hours for most projects. For larger, complex projects, we provide a timeline after reviewing your plans. Rush delivery (within 12 hours) is available for an additional fee.",
  },
  {
    question: "What file formats do you accept for plans?",
    answer:
      "We accept all standard formats including PDF, CAD (DWG/DXF), Revit (RVT), Bluebeam, and printed plan scans. Any format that shows the project dimensions, specifications, and scope of work.",
  },
  {
    question: "How accurate are your estimates?",
    answer:
      "Our estimates carry a 98% accuracy rate based on client feedback and project close-out data. We use RSMeans cost data, local market pricing, and current material costs to ensure every estimate reflects real-world conditions.",
  },
  {
    question: "Do you sign NDAs and confidentiality agreements?",
    answer:
      "Yes. We understand that construction plans are proprietary and sensitive. We are happy to sign NDAs and confidentiality agreements before reviewing any project documents.",
  },
  {
    question: "What software do you use for estimating?",
    answer:
      "We use industry-standard software including PlanSwift, Bluebeam Revu, On-Screen Takeoff (OST), RSMeans Online, and Microsoft Excel for deliverables. All takeoffs are digital and fully traceable.",
  },
  {
    question: "Do you offer revisions if something changes?",
    answer:
      "Yes. We include one round of revisions at no additional cost. If scope changes significantly, we will discuss pricing transparently before proceeding with additional revisions.",
  },
  {
    question: "Can you estimate just a portion of a project?",
    answer:
      "Absolutely. We can provide estimates for individual trades, specific phases, or portions of a project. We tailor the scope of work to exactly what you need.",
  },
  {
    question: "What states do you serve?",
    answer:
      "We serve contractors and developers across all 50 US states. Our team is familiar with regional labor rates, material costs, and local market conditions in major markets including New York, Los Angeles, Chicago, Houston, Phoenix, and beyond.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via our Get Free Estimate form, email, or phone. Upload your plans, describe your project, and we'll send you a proposal within a few hours. No commitment required for the initial review.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "how-to-win-more-construction-bids",
    title: "How to Win More Construction Bids with Accurate Estimating",
    excerpt:
      "Winning construction bids isn't just about being the lowest number — it's about being the most credible and accurate. Here's how professional estimating gives you the edge.",
    category: "Bidding Strategy",
    date: "2026-06-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    featured: true,
  },
  {
    slug: "construction-material-takeoff-guide",
    title: "The Complete Guide to Construction Material Takeoffs",
    excerpt:
      "A thorough material takeoff is the foundation of every accurate construction estimate. Learn the process, common mistakes, and how to ensure nothing is missed.",
    category: "Estimating Guide",
    date: "2026-06-08",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    featured: false,
  },
  {
    slug: "mep-estimating-best-practices",
    title: "MEP Estimating Best Practices for Commercial Projects",
    excerpt:
      "Mechanical, electrical, and plumbing estimates are among the most complex in construction. Discover the standards and methods that keep MEP bids competitive.",
    category: "MEP Estimating",
    date: "2026-05-28",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    featured: false,
  },
  {
    slug: "outsourcing-construction-estimating",
    title: "Why Contractors Are Outsourcing Their Estimating — and Winning",
    excerpt:
      "Outsourcing construction estimating isn't a shortcut — it's a strategic advantage. Discover how leading contractors are cutting costs and improving bid accuracy.",
    category: "Industry Trends",
    date: "2026-05-20",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    featured: false,
  },
  {
    slug: "construction-cost-estimation-software",
    title: "Top Construction Cost Estimation Software in 2026",
    excerpt:
      "From PlanSwift to RSMeans, we break down the industry's leading estimating tools — what they do best, and which trade they're built for.",
    category: "Technology",
    date: "2026-05-10",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
  {
    slug: "residential-construction-cost-per-square-foot",
    title: "Residential Construction Cost Per Square Foot in 2026",
    excerpt:
      "Construction costs vary wildly by state, material, and project type. This guide breaks down what to expect for residential projects across major US markets.",
    category: "Cost Data",
    date: "2026-05-01",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    featured: false,
  },
];

export const PROJECTS = [
  {
    title: "Downtown Mixed-Use Tower",
    location: "New York, NY",
    trade: "Commercial",
    value: "$48M",
    sqft: "320,000 sq ft",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "52-story mixed-use development including retail, office, and residential components. Full MEP, concrete, and steel estimation.",
  },
  {
    title: "Regional Medical Center Expansion",
    location: "Houston, TX",
    trade: "Healthcare",
    value: "$22M",
    sqft: "95,000 sq ft",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    description: "Phased hospital expansion covering surgical suites, imaging center, and patient tower. Full MEP and specialty systems estimation.",
  },
  {
    title: "Industrial Distribution Campus",
    location: "Dallas, TX",
    trade: "Industrial",
    value: "$15M",
    sqft: "500,000 sq ft",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "Multi-building industrial campus with dock-high warehousing, office build-out, and full site development.",
  },
  {
    title: "Highway Interchange Reconstruction",
    location: "Los Angeles, CA",
    trade: "Civil",
    value: "$35M",
    sqft: "4.2 miles",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    description: "Complex highway reconstruction including bridge replacement, retaining walls, storm drainage, and full earthwork analysis.",
  },
  {
    title: "Luxury Residential Community",
    location: "Miami, FL",
    trade: "Residential",
    value: "$8.5M",
    sqft: "180,000 sq ft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    description: "120-unit luxury condominium development with pools, amenities, and underground parking. Full trades estimation.",
  },
  {
    title: "University Science Building",
    location: "Chicago, IL",
    trade: "Education",
    value: "$28M",
    sqft: "145,000 sq ft",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    description: "State-of-the-art research and laboratory facility requiring specialized MEP, clean room, and data center estimation.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", description: "Complete estimating services" },
      { label: "Construction Estimating", href: "/services/construction-estimating", description: "Full project cost estimates" },
      { label: "Material Takeoff", href: "/services/material-takeoff", description: "Quantity takeoff from plans" },
      { label: "MEP Estimation", href: "/services/mep-estimation", description: "Mechanical, electrical, plumbing" },
      { label: "Civil Estimation", href: "/services/civil-estimation", description: "Earthwork & infrastructure" },
      { label: "Commercial Estimation", href: "/services/commercial-estimation", description: "Office, retail & more" },
      { label: "Residential Estimation", href: "/services/residential-estimation", description: "Homes & multi-family" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
