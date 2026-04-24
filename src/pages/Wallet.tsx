import { Link } from 'react-router-dom'
import { Wallet, ArrowLeft, TrendingUp, DollarSign } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <h1 className="text-3xl font-black text-white mb-8">Minha Carteira</h1>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Wallet, label: 'Saldo disponível', value: 'R$ 655,00', color: 'text-amber-400' },
            { icon: TrendingUp, label: 'Tokens investidos', value: 'R$ 30.000', color: 'text-green-400' },
            { icon: DollarSign, label: 'Total acumulado', value: 'R$ 3.888', color: 'text-sky-400' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="glass-card p-6 text-center">
              <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
              <div className={`text-2xl font-black ${color} mb-1`}>{value}</div>
              <div className="text-white text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
