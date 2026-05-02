import { useState, useEffect } from 'react';
import { Clock, BookOpen, Heart, MapPin } from 'lucide-react';
import { ChatWidget } from './components/ChatWidget';

const QUOTES = [
  { text: "Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.", author: "Paulo Freire" },
  { text: "Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.", author: "Paulo Freire" },
  { text: "Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo.", author: "Paulo Freire" },
  { text: "A leitura do mundo precede a leitura da palavra.", author: "Paulo Freire" },
  { text: "Quando a educação não é libertadora, o sonho do oprimido é ser o opressor.", author: "Paulo Freire" },
  { text: "O aprendizado é o que antecipa o desenvolvimento.", author: "Lev Vygotsky" },
  { text: "Através dos outros nos tornamos nós mesmos.", author: "Lev Vygotsky" },
  { text: "O que uma criança pode fazer com assistência hoje, ela fará sozinha amanhã.", author: "Lev Vygotsky" },
  { text: "Todo viver é um conhecer e todo conhecer é um viver.", author: "Humberto Maturana" },
  { text: "O amor é a emoção que constitui o domínio de ações em que nossas interações recorrentes com o outro fazem do outro um legítimo outro.", author: "Humberto Maturana" },
  { text: "A educação é o ponto em que decidimos se amamos o mundo o bastante para assumir a responsabilidade por ele.", author: "Hannah Arendt" },
  { text: "Educar é crescer. E crescer é viver.", author: "Anísio Teixeira" },
  { text: "Só existe saber na invenção, na reinvenção, na busca inquieta, impaciente, permanente, que os homens fazem no mundo.", author: "Paulo Freire" },
  { text: "A principal meta da educação é criar homens que sejam capazes de fazer coisas novas e não simplesmente repetir o que outras gerações já fizeram.", author: "Jean Piaget" },
  { text: "O conhecimento exige uma presença curiosa do sujeito diante do mundo.", author: "Paulo Freire" },
  { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
  { text: "Feliz aquele que transfere o que sabe e aprende o que ensina.", author: "Cora Coralina" },
];

function QuoteTicker() {
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

  return (
    <div className="quote-ticker">
      <div className="ticker-track">
        <span className="ticker-text">
          "{quote.text}" — <strong>{quote.author}</strong>
        </span>
        <span className="ticker-text" aria-hidden="true">
          "{quote.text}" — <strong>{quote.author}</strong>
        </span>
      </div>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-school-green selection:text-white">
      {/* Quote Ticker */}
      <QuoteTicker />

      {/* Header */}
      <header className={`bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Logo EEMTI Maria Luíza Saboia Ribeiro"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="font-bold text-gray-900 leading-tight text-sm">EEMTI Profa</h1>
              <h1 className="font-bold text-school-green leading-tight text-sm">Maria Luíza Saboia</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 hero-gradient">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-[0.07]">
            <div className="w-[500px] h-[500px] rounded-full bg-school-green blur-[100px]"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-[0.07]">
            <div className="w-[500px] h-[500px] rounded-full bg-school-orange blur-[100px]"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-school-green text-sm font-semibold mb-6 shadow-sm border border-green-100/50">
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
        <section className="py-20 border-t border-white/30 features-gradient">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Sobre a Nossa Escola</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mais do que um espaço de aprendizado, somos um ambiente de desenvolvimento integral para nossos alunos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-school-green mb-6">
                  <Clock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Tempo Integral</h4>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos um modelo de ensino em tempo integral, garantindo imersão no aprendizado e mais oportunidades de desenvolvimento ao longo do dia.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-school-orange mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Disciplinas Eletivas</h4>
                <p className="text-gray-600 leading-relaxed">
                  Os alunos podem personalizar parte de sua jornada com uma grade diversificada de disciplinas eletivas, estimulando diferentes talentos e vocações.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-md transition-all hover:-translate-y-1 duration-300">
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
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Logo EEMTI Maria Luíza"
                className="w-10 h-10 rounded-full object-cover"
              />
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
