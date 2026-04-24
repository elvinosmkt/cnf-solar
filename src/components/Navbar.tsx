import { Link } from 'react-router-dom'
import { Sun, Menu, X, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Como funciona', href: '/#como-funciona' },
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Segurança', href: '/#seguranca' },
    { label: 'FAQ', href: '/#faq' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center glow-amber group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <span className="text-white font-black text-xl tracking-tight">CNF</span>
              <span className="text-amber-400 font-black text-xl tracking-tight"> Solar</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <Link to="/auth" className="solar-btn-primary py-2 px-5 text-sm">
              Começar a investir
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-slate-300 hover:text-amber-400 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link to="/auth" className="solar-btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
            Começar a investir
          </Link>
        </div>
      )}
    </nav>
  )
}
