import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BuyTokens() {
  const [step, setStep] = useState(1)
  const [qty, setQty] = useState(10)
  const total = qty * 500

  return (
    <div className="min-h-screen bg-solar-mesh">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <Link to="/investments" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="glass-card p-8">
          {step === 1 ? (
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Confirmar Investimento</h2>
              <div className="p-5 bg-white/3 rounded-xl mb-6">
                <div className="flex justify-between mb-2"><span className="text-slate-400">Tokens</span><span className="text-white">{qty} × R$ 500</span></div>
                <div className="flex justify-between border-t border-white/8 pt-3"><span className="text-white font-bold">Total</span><span className="text-amber-400 font-black text-xl">R$ {total.toLocaleString('pt-BR')}</span></div>
              </div>
              <button onClick={() => setStep(2)} className="solar-btn-primary w-full justify-center">Ir para pagamento</button>
            </div>
          ) : (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-white font-black text-2xl mb-2">Pedido realizado!</h2>
              <p className="text-slate-400 mb-8">Complete o pagamento via PIX para ativar seus tokens.</p>
              <Link to="/dashboard" className="solar-btn-primary justify-center">Ver meu dashboard</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
