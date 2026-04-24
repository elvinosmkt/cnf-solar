import { Link } from 'react-router-dom'
import { Sun, TrendingUp, Zap, DollarSign, Bell, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const portfolio = [
  { name: 'CNF Nordeste #01', tokens: 40, value: 'R$ 20.000', return: '+R$ 267/mês', pct: '+16%', up: true },
  { name: 'CNF Centro-Oeste #01', tokens: 20, value: 'R$ 10.000', return: '+R$ 121/mês', pct: '+14.5%', up: true },
]

const activity = [
  { type: 'Rendimento', desc: 'CNF Nordeste #01 – Abril/25', amount: '+R$ 267,00', date: '05/04/2025', positive: true },
  { type: 'Rendimento', desc: 'CNF Centro-Oeste #01 – Abril/25', amount: '+R$ 121,00', date: '05/04/2025', positive: true },
  { type: 'Compra', desc: '20 tokens CNF Centro-Oeste #01', amount: '-R$ 10.000,00', date: '15/03/2025', positive: false },
  { type: 'Compra', desc: '40 tokens CNF Nordeste #01', amount: '-R$ 20.000,00', date: '02/03/2025', positive: false },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Olá, João 👋</h1>
            <p className="text-slate-400 text-sm mt-1">Veja o desempenho dos seus tokens solares</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/buy-tokens" className="solar-btn-primary text-sm">
              + Comprar Tokens
            </Link>
            <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: DollarSign, label: 'Saldo total', value: 'R$ 30.000', sub: '60 tokens', color: 'text-amber-400', bg: 'bg-amber-500/10' },
            { icon: TrendingUp, label: 'Rendimento acumulado', value: 'R$ 3.888', sub: 'desde o início', color: 'text-green-400', bg: 'bg-green-500/10' },
            { icon: Zap, label: 'Rendimento este mês', value: 'R$ 388', sub: 'Abril 2025', color: 'text-sky-400', bg: 'bg-sky-500/10' },
            { icon: Sun, label: 'Próximo pagamento', value: '05/05/2025', sub: 'estimado R$ 388', color: 'text-purple-400', bg: 'bg-purple-500/10' },
          ].map(({ icon: Icon, label, value, sub, color, bg }) => (
            <div key={label} className="glass-card p-6 border-white/5">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div className={`text-2xl font-black ${color} mb-1`}>{value}</div>
              <div className="text-white text-xs font-medium">{label}</div>
              <div className="text-slate-600 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-card p-6 border-white/5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-bold text-lg">Meu portfólio</h2>
              <Link to="/investments" className="text-amber-400 hover:text-amber-300 text-sm flex items-center gap-1">
                Ver tudo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {portfolio.map((p) => (
                <div key={p.name} className="flex items-center justify-between p-4 bg-white/3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{p.name}</div>
                      <div className="text-slate-500 text-xs">{p.tokens} tokens · {p.value}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm">{p.return}</div>
                    <div className="text-slate-500 text-xs">{p.pct} a.a.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-white/5">
            <h2 className="text-white font-bold text-lg mb-5">Extrato recente</h2>
            <div className="space-y-3">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${a.positive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    {a.positive ? <ArrowUpRight className=\"w-4 h-4 text-green-400\" /> : <ArrowDownRight className=\"w-4 h-4 text-red-400\" />}
                  </div>
                  <div className=\"flex-1 min-w-0\">
                    <div className=\"text-white text-xs font-medium\">{a.type}</div>
                    <div className=\"text-slate-500 text-xs truncate\">{a.desc}</div>
                    <div className=\"text-slate-600 text-xs\">{a.date}</div>
                  </div>
                  <div className={`text-xs font-bold shrink-0 ${a.positive ? 'text-green-400' : 'text-slate-400'}`}>
                    {a.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
