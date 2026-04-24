import { ArrowRight, Zap, TrendingUp, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-solar-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              Tokenização de Energia Solar
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Invista no Sol, <br />
              <span className="text-gradient">Colha Rendimentos.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
              Democratizamos o acesso ao investimento em energia limpa. Tokens a partir de R$ 500 com rentabilidade superior à renda fixa tradicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="solar-btn-primary px-8 py-4 text-lg group">
                Investir agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#como-funciona" className="solar-btn-outline px-8 py-4 text-lg">
                Como funciona
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-white font-black text-2xl">16%</div>
                <div className="text-slate-500 text-sm">Rentabilidade Média</div>
              </div>
              <div>
                <div className="text-white font-black text-2xl">R$ 500</div>
                <div className="text-slate-500 text-sm">Aporte Mínimo</div>
              </div>
              <div>
                <div className="text-white font-black text-2xl">100%</div>
                <div className="text-slate-500 text-sm">Energia Limpa</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="glass-card p-6 border-amber-500/20 relative animate-float">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">CNF Nordeste #01</div>
                    <div className="text-slate-500 text-xs text-uppercase font-bold">Petrolina, PE</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-black text-xl">16% a.a.</div>
                  <div className="text-slate-500 text-xs">Retorno Est.</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400 font-bold uppercase tracking-wider">Captação</span>
                    <span className="text-white font-bold">92%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Capacidade</div>
                    <div className="text-white font-bold text-sm">8.2 MW</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Tokens Restantes</div>
                    <div className="text-white font-bold text-sm">1.240</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-500 text-xs">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Certificado Auditado & Registrado em Blockchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
