import { Link } from 'react-router-dom'
import { Sun, Zap, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center glow-amber-sm">
                <Sun className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">CNF</span>
                <span className="text-amber-400 font-bold text-lg"> Solar</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
              Democratizamos o acesso ao investimento em energia solar limpa e rentável via tokenização blockchain. Regulado pela CVM e ANEEL.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Plataforma</h4>
            <ul className="space-y-2.5 text-slate-500 text-sm">
              <li><Link to="/#como-funciona" className="hover:text-amber-400">Como funciona</Link></li>
              <li><Link to="/investments" className="hover:text-amber-400">Projetos</Link></li>
              <li><Link to="/#seguranca" className="hover:text-amber-400">Segurança</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Investidor</h4>
            <ul className="space-y-2.5 text-slate-500 text-sm">
              <li><Link to="/auth" className="hover:text-amber-400">Criar conta</Link></li>
              <li><Link to="/dashboard" className="hover:text-amber-400">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Redes</h4>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-amber-400 hover:border-amber-500/30 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">© 2025 CNF Solar Ltda. Todos os direitos reservados.</p>
          <p className="text-slate-700 text-xs max-w-md text-center md:text-right">Investimentos envolvem riscos. Oferta regulada pela CVM 88.</p>
        </div>
      </div>
    </footer>
  )
}
