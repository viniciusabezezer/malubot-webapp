import { Clock, BookOpen, Heart, MapPin } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-school-green selection:text-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Simple logo placeholder - using school colors */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-school-green to-school-orange flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <h1 className="font-bold text-gray-900 leading-tight">EEMTI Profa</h1>
              <h1 className="font-bold text-school-green leading-tight">Maria Luíza Saboia</h1>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
            <div className="w-96 h-96 rounded-full bg-school-green blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-10">
            <div className="w-96 h-96 rounded-full bg-school-orange blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-school-green text-sm font-semibold mb-6 shadow-sm border border-green-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-school-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-school-green"></span>
              </span>
              Seu assistente escolar 24/7
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-3xl">
              Boas-vindas à EEMTI Maria Luíza Saboia Ribeiro —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-green to-school-orange">a Malu!</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Aqui é o nosso pátio escolar, onde você pode se informar sobre eventos, regulamentos e notícias da nossa escola. Aqui, a Malu tá ON!
            </p>


          </div>
        </section>

        {/* Features / Info Section */}
        <section className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Sobre a Nossa Escola</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mais do que um espaço de aprendizado, somos um ambiente de desenvolvimento integral para nossos alunos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-school-green mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Tempo Integral</h4>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos um modelo de ensino em tempo integral, garantindo imersão no aprendizado e mais oportunidades de desenvolvimento ao longo do dia.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-school-orange mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Disciplinas Eletivas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Os alunos podem personalizar parte de sua jornada com uma grade diversificada de disciplinas eletivas, estimulando diferentes talentos e vocações.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                  <Heart className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Escola Acolhedora</h4>
                <p className="text-gray-600 leading-relaxed">
                  Nosso lema é o acolhimento. Trabalhamos para criar um ambiente seguro, respeitoso e humano, onde cada aluno se sente parte de uma grande família.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-slate-300 py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-school-green to-school-orange flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <h2 className="font-bold text-white text-lg">EEMTI Profa Maria Luíza Saboia</h2>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-400 max-w-sm">
              <MapPin className="w-5 h-5 shrink-0 text-school-green" />
              <p>Paracuru, CE - Escola de Ensino Médio em Tempo Integral da rede estadual do Ceará (SEDUC-CE).</p>
            </div>
          </div>
          
          <div className="md:text-right">
            <p className="text-sm text-slate-500 mb-4">
              Dúvidas ou informes rápidos?
            </p>

          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} EEMTI Profa Maria Luíza Saboia. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Web Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
