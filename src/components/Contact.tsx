import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-8">Vamos conversar?</h3>
            <p className="text-slate-400 mb-12 max-w-lg leading-relaxed">
              Tem alguma dúvida sobre como tokenizar sua usina ou como começar a investir? Nossa equipe de especialistas está pronta para ajudar.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'E-mail', value: 'contato@cnfsolar.com.br' },
                { icon: Phone, label: 'WhatsApp', value: '(11) 99999-9999' },
                { icon: MapPin, label: 'Sede', value: 'Av. Paulista, 1000 - São Paulo, SP' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white font-bold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 border-white/5">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Seu nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="João Silva" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" placeholder="joao@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Assunto</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none">
                  <option className="bg-slate-900">Quero investir</option>
                  <option className="bg-slate-900">Quero tokenizar minha usina</option>
                  <option className="bg-slate-900">Suporte técnico</option>
                  <option className="bg-slate-900">Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Mensagem</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors h-32 resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="solar-btn-primary w-full justify-center py-4">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
