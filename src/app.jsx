import React, { useState } from 'react';
import { 
  MapPin, Clock, Phone, Mail, Instagram, Star, ChevronDown,
  ShoppingCart, Coffee, Utensils, Leaf, ThumbsUp, ThumbsDown, MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ Importamos imágenes locales
import heroImage from './assets/hero.jpg';
import uberEatsLogo from './assets/logo-ubereats.png';
import rappiLogo from './assets/logo-rappi.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ... (el resto del código igual hasta la sección del Hero)
  
  // 👇 Solo cambio relevante: en Hero y Delivery sections
  // (copio solo las partes modificadas para brevedad; el resto es igual a tu código)

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section (solo parte con imagen) */}
      <section id="inicio" className="bg-white pt-16">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* ... texto izquierdo igual ... */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                {/* ✅ IMAGEN LOCAL */}
                <img 
                  src={heroImage} 
                  alt="Helado de yogurt griego fresco en Fresana, Guadalajara" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gray-100"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gray-100"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ... secciones intermedias igual ... */}

      {/* Pedido a Domicilio - con logos reales */}
      <section id="delivery" className="py-16 bg-gray-50">
        {/* ... título igual ... */}
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-black text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            {/* ✅ LOGO REAL */}
            <img 
              src={uberEatsLogo} 
              alt="Uber Eats" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">Uber Eats</h3>
            <span className="text-sm bg-white text-black px-3 py-1 rounded-full">Entrega en 30 min</span>
          </motion.a>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-black text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            {/* ✅ LOGO REAL */}
            <img 
              src={rappiLogo} 
              alt="Rappi" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 object-contain"
            />
            <h3 className="text-xl font-bold mb-2">Rappi</h3>
            <span className="text-sm bg-white text-black px-3 py-1 rounded-full">Promo: Envío gratis</span>
          </motion.a>
        </div>
        {/* ... resto igual ... */}
      </section>

      {/* ... resto del código igual (Contacto, Footer, etc.) */}
    </div>
  );
};

export default App;