import { Sun, Shield, Wallet, Link as LinkIcon } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Escolha seu Projeto',
    desc: 'Navegue por usinas solares em operação ou construção e escolha onde investir.',
    color: 'bg-amber-500/20 text-amber-400'
  },
  {
    icon: LinkIcon,
    title: 'Adquira seus Tokens',
    desc: 'Cada token representa uma fração da usina. Simples, rápido e 100% digital.',
    color: 'bg-sky-500/20 text-sky-400'
  },
  {
    icon: Sun,
    title: 'Receba Mensalmente',
    desc: 'A energia gerada é vendida e você recebe sua parte proporcional todo mês.',
    color: 'bg-green-500/20 text-green-400'
  },
  {
    icon: Shield,
    title: 'Segurança Blockchain',
    desc: 'Seu investimento é registrado em contrato inteligente, garantindo transparência total.',
    color: 'bg-purple-500/20 text-purple-400'
  }
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Fluxo de Investimento</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-white mb-6">Como funciona a CNF Solar</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Transformamos a complexidade do setor elétrico em uma experiência de investimento fluida e acessível para todos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="glass-card p-8 group hover:border-amber-500/30 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-7 h-7" />
              </div>
              <div className="text-slate-500 text-sm font-bold mb-2">Passo 0{i + 1}</div>
              <h4 className="text-white font-bold text-xl mb-3">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
