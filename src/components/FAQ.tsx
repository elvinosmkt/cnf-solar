import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'O que é a tokenização de energia solar?',
    a: 'É o processo de dividir a propriedade e os direitos de geração de uma usina solar em frações digitais chamadas tokens. Ao adquirir um token, você passa a ter direito proporcional à receita gerada pela venda daquela energia.'
  },
  {
    q: 'Qual o valor mínimo para investir?',
    a: 'Na CNF Solar, buscamos democratizar o investimento. Você pode começar a investir em usinas solares de alta performance com apenas R$ 500.'
  },
  {
    q: 'Como recebo meus rendimentos?',
    a: 'Os rendimentos são distribuídos mensalmente direto na sua carteira na plataforma. Você pode solicitar o saque via PIX para sua conta bancária a qualquer momento.'
  },
  {
    q: 'O investimento é seguro?',
    a: 'Sim. Todas as nossas ofertas seguem as normas da CVM. Além disso, as usinas são seguradas e possuem contratos de venda de energia (PPA) de longo prazo, garantindo previsibilidade de receita.'
  },
  {
    q: 'Posso vender meus tokens antes do prazo?',
    a: 'Sim, a CNF Solar disponibiliza um mercado secundário onde você pode anunciar seus tokens para outros investidores da plataforma, garantindo liquidez ao seu investimento.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Suporte ao Investidor</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-white">Dúvidas Frequentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-amber-500/30 bg-white/10' : 'border-white/5'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-bold text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
