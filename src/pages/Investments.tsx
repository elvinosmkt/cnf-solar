import { Link } from 'react-router-dom'
import { Sun, MapPin, TrendingUp, Zap, Users, ArrowRight, Filter } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  { id: 'nordeste-01', name: 'CNF Nordeste #01', location: 'Petrolina – PE', capacity: '8 MW', return: '16%', progress: 92, total: 'R$ 20M', raised: 'R$ 18,4M', tokenPrice: 'R$ 500' },
  { id: 'centro-oeste-01', name: 'CNF Centro-Oeste #01', location: 'Cuiabá – MT', capacity: '5 MW', return: '14.5%', progress: 61, total: 'R$ 12M', raised: 'R$ 7,3M', tokenPrice: 'R$ 500' },
  { id: 'bahia-02', name: 'CNF Bahia #02', location: 'Barreiras – BA', capacity: '10 MW', return: '17.2%', progress: 0, total: 'R$ 25M', raised: 'R$ 0', tokenPrice: 'R$ 500' },
]

export default function Investments() {
  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-black text-white mb-8">Projetos Solares</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="glass-card p-6 hover:border-amber-500/25 transition-all group">
              <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">{p.name}</h3>
              <div className="flex items-center gap-1 text-slate-500 text-sm mt-0.5 mb-4"><MapPin className="w-3.5 h-3.5" />{p.location}</div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white/3 rounded-xl p-3 text-center">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Capacidade</div>
                  <div className="text-white font-bold text-xs">{p.capacity}</div>
                </div>
                <div className="bg-white/3 rounded-xl p-3 text-center">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Retorno a.a.</div>
                  <div className="text-green-400 font-bold text-xs">{p.return}</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5"><span className="text-slate-500">Captação</span><span className="text-slate-400">{p.progress}%</span></div>
                <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
              <Link to={`/token/${p.id}`} className="solar-btn-primary w-full justify-center text-xs py-2.5">
                Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
