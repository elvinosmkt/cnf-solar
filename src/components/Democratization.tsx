import { MapPin, Zap, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'CNF Nordeste #01',
    location: 'Petrolina, PE',
    return: '16% a.a.',
    progress: 92,
    status: 'Captação Ativa',
    tag: 'Oportunidade'
  },
  {
    title: 'CNF Centro-Oeste #01',
    location: 'Cuiabá, MT',
    return: '14.5% a.a.',
    progress: 61,
    status: 'Em Captação',
    tag: 'Premium'
  },
  {
    title: 'CNF Sudeste #02',
    location: 'Mococa, SP',
    return: '15.2% a.a.',
    progress: 100,
    status: 'Encerrado',
    tag: 'Sold Out'
  }
]

export default function Democratization() {
  return (
    <section id="projetos" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Mercado Primário</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-white">Projetos em Destaque</h3>
          </div>
          <Link to="/investments" className="solar-btn-outline py-2 px-6 text-sm">
            Ver todos os projetos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-slate-800 relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${project.status === 'Encerrado' ? 'bg-slate-900 text-slate-500 border-slate-700' : 'bg-amber-500 text-slate-950 border-amber-400'}`}>
                    {project.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-xl">{project.title}</h4>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/3 rounded-xl p-3">
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Alvo</div>
                    <div className="text-white font-bold">{project.return}</div>
                  </div>
                  <div className="bg-white/3 rounded-xl p-3">
                    <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Status</div>
                    <div className="text-amber-400 font-bold text-sm truncate">{project.status}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                    <span className="text-slate-500">Captação</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-1000 ${project.status === 'Encerrado' ? 'grayscale opacity-50' : ''}`} 
                      style={{ width: `${project.progress}%` }} 
                    />
                  </div>
                </div>

                <Link to="/auth" className={`mt-6 w-full flex justify-center py-3 rounded-xl text-sm font-bold transition-all ${project.status === 'Encerrado' ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-white/5 text-white hover:bg-amber-500 hover:text-slate-950'}`}>
                  {project.status === 'Encerrado' ? 'Captação Concluída' : 'Ver Detalhes do Projeto'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
