import { Link } from 'react-router-dom'
import { Sun, Shield, Download, ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Certificates() {
  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <h1 className="text-3xl font-black text-white mb-8">Certificados</h1>
        <div className="glass-card p-8 border border-amber-500/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center"><Sun className="w-6 h-6 text-slate-900" /></div>
              <div><h3 className="text-white font-bold text-lg">CNF Nordeste #01</h3><p className="text-slate-500 text-sm">40 tokens · R$ 20.000</p></div>
            </div>
            <button className="solar-btn-outline py-2 px-4 text-xs"><Download className="w-4 h-4" /> Baixar PDF</button>
          </div>
          <div className="p-4 bg-white/3 rounded-xl flex items-center gap-3 text-slate-400 text-xs font-mono">
            <Shield className="w-4 h-4 text-sky-400" /> Hash: 0x3a7f9c2e...8d41c
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
