import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Zap, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('register')
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="min-h-screen bg-solar-mesh flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-500/6 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center glow-amber">
            <Sun className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <span className="text-white font-bold text-xl">CNF</span>
            <span className="text-amber-400 font-bold text-xl"> Solar</span>
          </div>
        </Link>

        <div className="glass-card p-8 border border-amber-500/10">
          <div className="flex rounded-xl bg-white/5 p-1 mb-8">
            {(['register', 'login'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  mode === m
                    ? 'bg-amber-500 text-slate-900 shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m === 'register' ? 'Criar conta' : 'Entrar'}
              </button>
            ))}
          </div>

          {mode === 'register' ? (
            <form className="space-y-4">
              <h2 className="text-white font-bold text-xl mb-2">Criar sua conta gratuita</h2>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="Nome" />
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="Sobrenome" />
              </div>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="CPF" />
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="E-mail" />
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="Senha" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <Link to="/dashboard" className="solar-btn-primary w-full justify-center py-3 mt-2">
                Criar conta gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </form>
          ) : (
            <form className="space-y-4">
              <h2 className="text-white font-bold text-xl mb-2">Bem-vindo de volta</h2>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="E-mail" />
              <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm" placeholder="Senha" />
              <Link to="/dashboard" className="solar-btn-primary w-full justify-center py-3 mt-2">
                Entrar
                <Zap className="w-4 h-4" />
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
