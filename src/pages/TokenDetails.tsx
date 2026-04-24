import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Sun, MapPin, TrendingUp, Zap, Users, Shield, FileText, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TokenDetails() {
  const { id } = useParams<{ id: string }>()
  const [qty, setQty] = useState(1)

  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link to="/investments" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8">
              <h1 className="text-3xl font-black text-white mb-2">CNF Nordeste #01</h1>
              <p className="text-slate-400 leading-relaxed mb-6">Usina fotovoltaica de 8 MW instalada no município de Petrolina, uma das regiões com maior incidência solar do Brasil.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: TrendingUp, value: '16% a.a.', label: 'Retorno', color: 'text-green-400' },
                  { icon: Zap, value: '8 MW', label: 'Capacidade', color: 'text-sky-400' },
                  { icon: Sun, value: '14.2k MWh', label: 'Energia/ano', color: 'text-amber-400' },
                  { icon: Users, value: '847', label: 'Investidores', color: 'text-purple-400' },
                ].map(({ icon: Icon, value, label, color }) => (
                  <div key={label} className="bg-white/3 rounded-xl p-4 text-center">
                    <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
                    <div className={`font-black ${color} text-sm`}>{value}</div>
                    <div className="text-slate-600 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-card p-6 border border-amber-500/20 sticky top-24">
            <h3 className="text-white font-bold text-lg mb-1">Investir neste projeto</h3>
            <p className="text-slate-500 text-sm mb-6">Token: R$ 500 cada</p>
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white font-bold">−</button>
              <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value)))} className="flex-1 input-field text-center font-bold" />
              <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white font-bold">+</button>
            </div>
            <Link to="/buy-tokens" className="solar-btn-primary w-full justify-center py-3">Comprar {qty} tokens</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
