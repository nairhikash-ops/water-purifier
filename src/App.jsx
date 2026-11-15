import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WaterVitalitySection from './components/WaterVitalitySection';
import CinematicShowcase from './components/CinematicShowcase';
import TdsWaterGuide from './components/TdsWaterGuide';
import AmcAndServices from './components/AmcAndServices';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import PurifierQuizModal from './components/PurifierQuizModal';
import FreeWaterTestModal from './components/FreeWaterTestModal';
import CartDrawer from './components/CartDrawer';
import OrderSuccessModal from './components/OrderSuccessModal';
import AdminLeadsModal from './components/AdminLeadsModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [waterTestOpen, setWaterTestOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.selectedColor === product.selectedColor
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, selectedColor, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, selectedColor);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.selectedColor === selectedColor
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, selectedColor) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.selectedColor === selectedColor))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenQuiz={() => setQuizOpen(true)}
        onOpenWaterTest={() => setWaterTestOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Body */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero
          onOpenQuiz={() => setQuizOpen(true)}
          onOpenWaterTest={() => setWaterTestOpen(true)}
        />
        <TrustBar />
        <WaterVitalitySection
          onOpenQuiz={() => setQuizOpen(true)}
          onOpenWaterTest={() => setWaterTestOpen(true)}
        />
        <TdsWaterGuide
          onOpenWaterTest={() => setWaterTestOpen(true)}
        />
        <CinematicShowcase
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />
        <TestimonialsAndFaq />
        <AmcAndServices
          onBookingSuccess={() => {}}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenWaterTest={() => setWaterTestOpen(true)}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <PurifierQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onAddToCart={handleAddToCart}
      />

      <FreeWaterTestModal
        isOpen={waterTestOpen}
        onClose={() => setWaterTestOpen(false)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderCompleted={(ord) => setCompletedOrder(ord)}
      />

      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

      <AdminLeadsModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

      {/* Floating Buttons */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenWaterTest={() => setWaterTestOpen(true)}
      />
    </div>
  );
}
