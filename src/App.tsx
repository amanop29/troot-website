import { motion } from 'motion/react';
import { Headphones, Backpack, Package, Users, ArrowRight, Instagram } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { useEffect, useState } from 'react';
import logo from './assets/troot-logo-web.svg';

export default function App() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'COMING SOON';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  const features = [
    { icon: Headphones, label: 'Premium Headsets' },
    { icon: Backpack, label: 'Bags' },
    { icon: Package, label: 'Accessories' },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{ fontFamily: "'Tomorrow', sans-serif" }}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#2b2b2b 1px, transparent 1px),
            linear-gradient(90deg, #2b2b2b 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 25s linear infinite'
        }} />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#91ea21]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2b2b2b]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Liquid Ether Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#91ea21]/20 rounded-full"
        style={{ filter: 'blur(80px)' }}
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2b2b2b]/15 rounded-full"
        style={{ filter: 'blur(80px)' }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 1.4, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#91ea21]/15 rounded-full"
        style={{ filter: 'blur(60px)' }}
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Instagram */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end px-6 pt-6 pb-4"
        >
          <motion.a
            href="https://www.instagram.com/trootecno/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-br from-[#91ea21]/20 to-[#91ea21]/5 border border-[#91ea21]/30 hover:border-[#91ea21]/60 transition-all"
          >
            <Instagram className="w-6 h-6 text-[#2b2b2b]" strokeWidth={2} />
          </motion.a>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Troot" 
              className="w-44 h-auto md:w-60"
            />
          </motion.div>          {/* Coming Soon Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#2b2b2b] mb-6 tracking-[0.15em] uppercase relative min-h-[5rem] md:min-h-[7rem] flex items-center justify-center">
              <span className="inline-flex items-center">
                {displayText}
                {displayText.length > 0 && (
                  <motion.span
                    className="inline-block w-1.5 h-12 md:h-20 bg-[#91ea21] ml-3"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2">
              <motion.div 
                className="h-px w-16 bg-[#91ea21]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-[#91ea21]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div 
                className="h-px w-16 bg-[#91ea21]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <p className="text-[#2b2b2b]/70 text-lg leading-relaxed">
              Premium headsets, bags & accessories.
              <br />
              <span className="text-[#91ea21]">Performance meets style.</span>
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 border-2 border-white/40 hover:border-[#91ea21]/50 transition-all shadow-2xl" style={{ 
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-2xl border-2 border-white/50 shadow-lg" style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                    }}>
                      <feature.icon className="w-10 h-10 text-[#2b2b2b]" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-[#2b2b2b]/80 whitespace-nowrap">{feature.label}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {['Premium', 'Lifestyle', 'Performance', 'Style'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 border-[#2b2b2b]/20 text-[#2b2b2b]/70 hover:border-[#91ea21] hover:text-[#91ea21] transition-colors"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* B2B Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="w-full max-w-3xl px-4 mb-20"
          >
            <Card className="border-2 border-[#91ea21]/30 bg-gradient-to-br from-[#91ea21]/5 to-white p-8 md:p-10 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#91ea21]/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#91ea21]/20">
                    <Users className="w-6 h-6 text-[#2b2b2b]" strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-[#2b2b2b]">Troot B2B</h2>
                </div>
                
                <p className="text-[#2b2b2b]/70 mb-8 text-lg">
                  Bulk orders & customized corporate solutions
                </p>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-[#91ea21] hover:bg-[#91ea21]/90 text-[#2b2b2b] gap-2 group"
                >
                  <motion.a
                    href="https://form.typeform.com/to/aUmK6PMd"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="relative border-t border-[#91ea21]/20 bg-gradient-to-b from-white to-[#91ea21]/10 py-12 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="space-y-3">
                <motion.a
                  href="https://share.google/ssupFfjaOcOpduU97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2b2b2b] mb-4 tracking-wide uppercase hover:text-[#91ea21] transition-colors inline-block"
                  whileHover={{ x: 3 }}
                >
                  <h3>TROOTECNO LLP</h3>
                </motion.a>
                <div className="space-y-2 text-[#2b2b2b]/60 text-sm">
                  <motion.a
                    href="https://share.google/ssupFfjaOcOpduU97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[#91ea21] transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-[#91ea21] mt-0.5">📍</span>
                    <span>Building No. 30, Flat No. 701,<br />Prerna CHS Ltd, Nehru Nagar,<br />Kurla (E), Mumbai - 400024</span>
                  </motion.a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h3 className="text-[#2b2b2b] mb-4 tracking-wide uppercase">Get In Touch</h3>
                <div className="space-y-2 text-sm">
                  <motion.a
                    href="tel:+919699430552"
                    className="flex items-center gap-2 text-[#2b2b2b]/60 hover:text-[#91ea21] transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <span>📞</span>
                    <span>9699430552</span>
                  </motion.a>
                  <motion.a
                    href="mailto:info@troot.in"
                    className="flex items-center gap-2 text-[#2b2b2b]/60 hover:text-[#91ea21] transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <span>✉️</span>
                    <span>info@troot.in</span>
                  </motion.a>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-3">
                <h3 className="text-[#2b2b2b] mb-4 tracking-wide uppercase">Follow Us</h3>
                <motion.a
                  href="https://www.instagram.com/trootecno/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2b2b2b]/60 hover:text-[#91ea21] transition-colors text-sm"
                  whileHover={{ x: 3 }}
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                  <span>@trootecno</span>
                </motion.a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-[#91ea21]/20">
              <p className="text-[#2b2b2b]/40 text-sm">
                © {new Date().getFullYear()} TROOTECNO LLP. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@300;400;500;600;700&display=swap');
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </div>
  );
}
