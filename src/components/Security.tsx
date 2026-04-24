import { Shield, Lock, FileCheck, Search } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Regulação CVM',
    desc: 'Operamos rigorosamente sob as normas da CVM, garantindo transparência e proteção legal ao investidor.',
    color: 'text-sky-400'
  },
  {
    icon: FileCheck,
    title: 'PPA Garantido',
    desc: 'As usinas possuem contratos de compra de energia de longo prazo com distribuidoras e grandes empresas.',
    color: 'text-amber-400'
  },
  {
    icon: Lock,
    title: 'Custódia Digital',
    desc: 'Seus tokens são custodiados de forma segura e registrados em rede blockchain pública.',
    color: 'text-purple-400'
  },
  {
    icon: Search,
    title: 'Auditoria Técnica',
    desc: 'Todos os projetos passam por due diligence rigorosa e monitoramento de performance em tempo real.',
    color: 'text-green-400'
  }
]

export default function Security() {
  return (
    <section id="seguranca" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Infraestrutura</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">Segurança em cada etapa do processo</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Aliamos a solidez do setor elétrico com a transparência da tecnologia blockchain para oferecer o investimento mais seguro do mercado.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-sky-500/10 border border-white/5">
              <div className="text-white font-bold mb-2">Certificação Digital</div>
              <div className="text-slate-500 text-sm">Cada projeto possui um ID único na blockchain que comprova sua propriedade e participação nos lucros.</div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass-card p-8 hover:bg-white/8 transition-colors border-white/5">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${pillar.color}`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{pillar.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
