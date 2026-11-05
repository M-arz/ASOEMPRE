import React, { useState } from 'react';
import { 
  ShoppingBag, Store, Users, CheckCircle, Smartphone, 
  MapPin, ShieldCheck, Heart, Search, Filter, ArrowRight,
  TrendingUp, Truck, CreditCard, Layers, ChevronRight, Menu, X, Sparkles
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Almuerzo Ejecutivo Casero',
    category: 'gastronomia',
    price: 14000,
    merchant: 'Doña Martha (Restaurantes Plazoleta)',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
    desc: 'Bandeja completa con sopa, seco, jugo natural y postre. Preparación diaria con sazón santandereana.'
  },
  {
    id: 2,
    name: 'Combo Hamburguesa Artesanal',
    category: 'gastronomia',
    price: 18000,
    merchant: 'Urban Burger (Comida Rápida)',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    desc: 'Carne 150g 100% res, queso costeño asado, cebolla caramelizada y papas a la francesa.'
  },
  {
    id: 3,
    name: 'Empanadas Vallunas (Docena)',
    category: 'gastronomia',
    price: 15000,
    merchant: 'Empanadas El Portal',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80',
    desc: 'Empanadas crujientes de carne desmechada y papa con ají casero.'
  },
  {
    id: 4,
    name: 'Tamal Santandereano Tradicional',
    category: 'gastronomia',
    price: 12000,
    merchant: 'Tradición Bucara',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
    desc: 'Elaborado con masa de maíz aliñada, pollo, cerdo y garbanzos en hoja de plátano.'
  },
  {
    id: 5,
    name: 'Porción de Lechona Tolimense',
    category: 'gastronomia',
    price: 16000,
    merchant: 'Don Pedro Lechonería',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',
    desc: 'Lechona crocante servida con arepa de maíz blanco sin arroz.'
  },
  {
    id: 6,
    name: 'Ensalada de Frutas Especial',
    category: 'gastronomia',
    price: 10000,
    merchant: 'Frutas & Vida Plazoleta',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80',
    desc: 'Mezcla de 7 frutas frescas, queso rallado, crema de leche y helado.'
  },
  {
    id: 7,
    name: 'Osito Amigurumi Tejido a Mano',
    category: 'crochet',
    price: 35000,
    merchant: 'Tejidos y Amor (Crochet Universitario)',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1558679908-541bcf1249ff?w=500&q=80',
    desc: 'Muñeco de crochet hecho a mano con hilo 100% algodón hipoalergénico.'
  },
  {
    id: 8,
    name: 'Bolso Artesanal en Macramé',
    category: 'crochet',
    price: 55000,
    merchant: 'Artesanías Santandereanas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80',
    desc: 'Diseño exclusivo tejido con fibras naturales de algodón y detalles en madera.'
  },
  {
    id: 9,
    name: 'Kit de Maquillaje Glow Natural',
    category: 'maquillaje',
    price: 45000,
    merchant: 'Glow Beauty Store',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    desc: 'Incluye rubor líquido, tinta de labios e iluminador hidratante libre de crueldad animal.'
  },
  {
    id: 10,
    name: 'Collar & Pulsera Bisutería Fina',
    category: 'maquillaje',
    price: 28000,
    merchant: 'Bisutería Bucaramanga Art',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    desc: 'Juego de accesorios elaborados con mostacilla calibrada y baño de oro de 18k.'
  },
  {
    id: 11,
    name: 'Chaqueta Denim Pintada a Mano',
    category: 'ropa',
    price: 95000,
    merchant: 'Confecciones & Arte Joven',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80',
    desc: 'Prenda única ilustrada por diseñadores universitarios con pintura textil resistente.'
  },
  {
    id: 12,
    name: 'Calzado Urbano en Cuero Sintético',
    category: 'ropa',
    price: 78000,
    merchant: 'Calzado Santander Express',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80',
    desc: 'Zapatillas cómodas, livianas y duraderas fabricadas localmente en Bucaramanga.'
  },
  {
    id: 13,
    name: 'Funda Antigolpes + Cristal Templado',
    category: 'tecnologia',
    price: 22000,
    merchant: 'TecnoCel Bucaramanga',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80',
    desc: 'Protección militar 360° disponible para todos los modelos de iPhone y Android.'
  },
  {
    id: 14,
    name: 'Mantenimiento preventivo de Laptop',
    category: 'tecnologia',
    price: 40000,
    merchant: 'Sistemas & Soporte Universitario',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    desc: 'Limpieza física profunda, cambio de pasta térmica y optimización de software en 2 horas.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [orderStep, setOrderStep] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState('plazoleta');
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [activeOrder, setActiveOrder] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos los Rubros', icon: Layers },
    { id: 'gastronomia', name: 'Gastronomía & Plazoleta', icon: Store },
    { id: 'crochet', name: 'Artesanías & Crochet', icon: Heart },
    { id: 'maquillaje', name: 'Maquillaje & Bisutería', icon: Sparkles },
    { id: 'ropa', name: 'Ropa & Calzado', icon: ShoppingBag },
    { id: 'tecnologia', name: 'Tecnología & Servicios', icon: Smartphone }
  ];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const newOrder = {
      id: 'ASO-' + Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      total: cartTotal,
      deliveryType,
      paymentMethod,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'preparacion'
    };
    setActiveOrder(newOrder);
    setCart([]);
    setIsCheckoutOpen(false);
    setActiveTab('tracking');
    setOrderStep(2);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header Superior Institucional */}
      <header className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20">
              <Store className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-emerald-400/20 text-emerald-200 text-xs font-semibold px-2 py-0.5 rounded-full border border-emerald-400/30">
                  UCC - Caso 27
                </span>
                <span className="bg-blue-400/20 text-blue-200 text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-400/30">
                  Ley 454 de 1998
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                ASOEMPRE BUCARAMANGA
              </h1>
              <p className="text-xs text-emerald-100 hidden sm:block">
                Asociación de Emprendedores Universitarios & Comercio Electrónico Solidario
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-emerald-950/40 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'marketplace'
                  ? 'bg-white text-emerald-900 shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              <Store className="w-4 h-4" /> Catálogo Digital
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'tracking'
                  ? 'bg-white text-emerald-900 shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              <Truck className="w-4 h-4" /> Rastreo en Vivo
            </button>
            <button
              onClick={() => setActiveTab('modelo')}
              className={`px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'modelo'
                  ? 'bg-white text-emerald-900 shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" /> Modelo Solidario
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="relative bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-3 py-2 rounded-xl flex items-center gap-2 shadow-md transition-transform active:scale-95 text-xs sm:text-sm"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Carrito</span>
              {cart.length > 0 && (
                <span className="bg-red-500 text-white font-bold rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.reduce((a, c) => a + c.qty, 0)}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden bg-white/10 p-2 rounded-xl text-white hover:bg-white/20"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-emerald-900/95 backdrop-blur-md px-4 py-3 border-t border-emerald-600/30 flex flex-col gap-2">
            <button
              onClick={() => { setActiveTab('marketplace'); setIsMobileMenuOpen(false); }}
              className={`p-3 rounded-lg text-left font-medium text-sm flex items-center gap-2 ${
                activeTab === 'marketplace' ? 'bg-white text-emerald-900 font-bold' : 'text-white'
              }`}
            >
              <Store className="w-4 h-4" /> Catálogo Digital
            </button>
            <button
              onClick={() => { setActiveTab('tracking'); setIsMobileMenuOpen(false); }}
              className={`p-3 rounded-lg text-left font-medium text-sm flex items-center gap-2 ${
                activeTab === 'tracking' ? 'bg-white text-emerald-900 font-bold' : 'text-white'
              }`}
            >
              <Truck className="w-4 h-4" /> Rastreo de Pedido
            </button>
            <button
              onClick={() => { setActiveTab('modelo'); setIsMobileMenuOpen(false); }}
              className={`p-3 rounded-lg text-left font-medium text-sm flex items-center gap-2 ${
                activeTab === 'modelo' ? 'bg-white text-emerald-900 font-bold' : 'text-white'
              }`}
            >
              <Users className="w-4 h-4" /> Modelo Asociativo UCC
            </button>
          </div>
        )}
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6">
        {activeTab === 'marketplace' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" /> Formalización & Digitalización
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mb-2">
                  Plazoleta Virtual de Emprendedores Universitarios
                </h2>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                  Apoya formalmente a los 25 jóvenes emprendedores de Bucaramanga. Compra en línea, paga de forma segura mediante QR o pasarelas locales y recibe en casa o retira en la plazoleta física.
                </p>
                <div className="flex items-center gap-3 text-xs text-emerald-200">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-400" /> Plazoleta Centro, Bucaramanga
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Cámara de Comercio
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar comida, crochet, ropa, tecnología, bisutería..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap flex items-center gap-2 border transition-all ${
                        isSelected
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm font-bold'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        {product.merchant}
                      </span>
                      <span className="absolute top-3 right-3 bg-emerald-500 text-emerald-950 font-bold text-xs px-2 py-0.5 rounded-md">
                        ★ {product.rating}
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-slate-800 text-base mb-1 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-xs line-clamp-2 mb-3 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">Precio COP</span>
                      <span className="text-lg font-extrabold text-slate-900">
                        ${product.price.toLocaleString('es-CO')}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white p-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-1.5 text-xs"
                    >
                      <ShoppingBag className="w-4 h-4" /> Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Sistema de Seguimiento ASOEMPRE</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeOrder ? `Pedido #${activeOrder.id}` : 'Demostración de Rastreo'}
                  </h2>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full">
                  {activeOrder ? 'En Preparación' : 'Estado de Muestra'}
                </span>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
                      1
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Catálogo & Pedido Confirmado</h3>
                    <p className="text-slate-500 text-xs">El cliente seleccionó los productos en la plataforma digital ASOEMPRE.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white">
                      2
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Pago Electrónico Verificado</h3>
                    <p className="text-slate-500 text-xs">Transacción procesada vía QR/Nequi/PSE con confirmación inmediata al emprendedor.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs ring-4 ring-white animate-pulse">
                      3
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Preparación en Plazoleta Centro</h3>
                    <p className="text-slate-500 text-xs">El joven emprendedor universitario está alistando el pedido en su puesto de trabajo.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs ring-4 ring-white">
                      4
                    </div>
                    <h3 className="font-bold text-slate-400 text-sm sm:text-base">Entrega en Sitio o Domicilio Local</h3>
                    <p className="text-slate-400 text-xs">El cliente consume en la plazoleta o recibe mediante la logística asociativa.</p>
                  </div>
                </div>

                {activeOrder && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-6">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Detalles del Pedido</h4>
                    <div className="divide-y divide-slate-200 text-xs">
                      {activeOrder.items.map(item => (
                        <div key={item.id} className="py-2 flex justify-between">
                          <span>{item.qty}x {item.name}</span>
                          <span className="font-bold">${(item.price * item.qty).toLocaleString('es-CO')}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-300 pt-2 mt-2 flex justify-between font-bold text-sm text-slate-900">
                      <span>Total Pagado:</span>
                      <span className="text-emerald-700">${activeOrder.total.toLocaleString('es-CO')}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modelo' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full inline-block">
                Marco Normativo: Ley 454 de 1998
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Modelo Asociativo y Autogestionario ASOEMPRE
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                ASOEMPRE BUCARAMANGA funciona bajo el **Modelo de Gestión Socio-Empresarial**. Reúne a 25 jóvenes emprendedores universitarios para operar colectivamente, reducir costos de pasarelas de pago y acceder a formalización en la Cámara de Comercio de Bucaramanga.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Estructura Orgánica</h3>
                  <p className="text-slate-500 text-xs">
                    Asamblea General de Asociados, Consejo de Administración democrático y comités de apoyo comercial.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-800 text-sm mb-1">Gestión Económica Solidaria</h3>
                  <p className="text-slate-500 text-xs">
                    Fondo social alimentado por los asociados para el mantenimiento de la app y campañas de marketing conjunto.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 mt-6">
                <h3 className="font-bold text-slate-900 text-base mb-3">Equipo Evaluativo de Trabajo (UCC)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                    <span className="font-bold text-emerald-950 block">Andrés Felipe Arrieta Montes</span>
                    <span className="text-emerald-700">Ing. de Sistemas - Montería</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-800 block">Wilkim Amed Monroy Castro</span>
                    <span className="text-slate-600">Derecho - Villavicencio</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-800 block">Salomón Barba Gando</span>
                    <span className="text-slate-600">Ing. Mecánica - Medellín</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-800 block">Juan Sebastián Ramírez Rodríguez</span>
                    <span className="text-slate-600">Enfermería - Villavicencio</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-bold text-slate-800 block">Sophia Osorio Saldarriaga</span>
                    <span className="text-slate-600">Contaduría Pública - Pereira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal Carrito / Checkout */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-600" /> Carrito de Compras ASOEMPRE
              </h3>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-slate-400 space-y-2">
                  <ShoppingBag className="w-12 h-12 mx-auto stroke-1" />
                  <p className="text-sm">Tu carrito está vacío.</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-slate-100">
                    {cart.map((item) => (
                      <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800">{item.name}</h4>
                          <span className="text-slate-400 text-[11px] block">{item.merchant}</span>
                          <span className="text-emerald-700 font-bold">${item.price.toLocaleString('es-CO')} c/u</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-6 h-6 bg-white rounded font-bold text-slate-700 shadow-sm"
                          >
                            -
                          </button>
                          <span className="font-bold px-1">{item.qty}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-6 h-6 bg-white rounded font-bold text-slate-700 shadow-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCreateOrder} className="space-y-4 pt-4 border-t border-slate-200">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Modalidad de Entrega</label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('plazoleta')}
                          className={`p-2.5 rounded-xl border text-center font-medium ${
                            deliveryType === 'plazoleta' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-200'
                          }`}
                        >
                          Consumo / Recogida en Plazoleta
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType('domicilio')}
                          className={`p-2.5 rounded-xl border text-center font-medium ${
                            deliveryType === 'domicilio' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-200'
                          }`}
                        >
                          Domicilio Bucaramanga
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Método de Pago Seguro</label>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('qr')}
                          className={`p-2 rounded-xl border text-center ${
                            paymentMethod === 'qr' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-200'
                          }`}
                        >
                          QR / Nequi
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('pse')}
                          className={`p-2 rounded-xl border text-center ${
                            paymentMethod === 'pse' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-200'
                          }`}
                        >
                          PSE / Banco
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('tarjeta')}
                          className={`p-2 rounded-xl border text-center ${
                            paymentMethod === 'tarjeta' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-200'
                          }`}
                        >
                          Tarjeta
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between font-extrabold text-slate-900 text-sm">
                      <span>Total a Pagar:</span>
                      <span className="text-emerald-700 text-base">${cartTotal.toLocaleString('es-CO')}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-98 text-sm"
                    >
                      Confirmar Pedido & Simular Pago
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
