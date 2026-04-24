import { TrendingUp, DollarSign, Calculator, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Profitability() {
  const [investAmount, setInvestAmount] = useState(10000)
  const monthlyReturn = 0.0133 // 16% a.a. / 12
  
  return (
    <section id="rentabilidade" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Métricas Financeiras</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-8">
              Rentabilidade que vence a <span className="text-gradient">inflação e o CDI</span>
            </h3>
            
            <div className="space-y-6">
              {[
                { label: 'Expectativa de Retorno', value: '14% - 18% ao ano', icon: TrendingUp, color: 'text-green-400' },
                { label: 'Distribuição Mensal', value: 'Receba direto na sua carteira', icon: DollarSign, color: 'text-amber-400' },
                { label: 'Lastro Real', value: 'Geração de energia física', icon: Calculator, color: 'text-sky-400' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-4 glass-card border-white/5">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold">{item.label}</div>
                    <div className="text-slate-500 text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 border-amber-500/10">
            <h4 className="text-white font-bold text-xl mb-6">Simulador de Retorno</h4>
            <div className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm mb-3">Quanto você quer investir?</label>
                <input 
                  type="range" 
                  min="500" 
                  max="100000" 
                  step="500"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-slate-600 text-[10px] mt-2 font-bold uppercase">
                  <span>R$ 500</span>
                  <span>R$ 100k</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <div className="text-slate-500 text-xs mb-1 uppercase font-bold tracking-wider">Investimento</div>
                <div className="text-white font-black text-3xl mb-6">R$ {investAmount.toLocaleString('pt-BR')}</div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Retorno Mensal Est.</div>
                    <div className="text-green-400 font-bold">R$ {(investAmount * monthlyReturn).toFixed(2).replace('.', ',')}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Retorno Anual Est.</div>
                    <div className="text-amber-400 font-bold">R$ {(investAmount * monthlyReturn * 12).toFixed(2).replace('.', ',')}</div>
                  </div>
                </div>
              </div>

              <button className="solar-btn-primary w-full justify-center py-4">
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-slate-600 text-[10px] text-center uppercase font-bold tracking-tight">
                *Simulação baseada em projetos atuais de 16% a.a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
