import React, { useState, useRef } from 'react';
import { Wallet, Shield, Clock, Users, Calendar, CheckCircle2, Facebook, Instagram, Linkedin, XCircle, Play } from 'lucide-react';

export const VideoSection = () => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-profundo">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,250,123,0.08),transparent_70%)]"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-poppins">
            Veja como funciona na prática
          </h2>
          <p className="text-xl text-white/80">
            Descubra como a Trampay está revolucionando o mercado de pagamentos
          </p>
        </div>
        <div className="relative">
          {/* Contêiner de efeito de brilho */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isPaused ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute inset-[-100px] scale-110">
              <div className="absolute inset-0 bg-trampay/20 blur-[60px] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-objetivo/15 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Contêiner de vídeo */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(40,250,123,0.2)] bg-black/40 backdrop-blur-sm">
            <div className="relative aspect-w-16 aspect-h-9 group cursor-pointer" onClick={handlePlayPause}>
              {isPaused && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 bg-profundo rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Play className="h-10 w-10 text-trampay ml-1" />
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                src="https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media//videoplayback.mp4"
                className="w-full h-full object-cover"
                preload="metadata"
                poster="https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media//8XqGtD0HAp8-HD.jpg"
                onPlay={() => setIsPaused(false)}
                onPause={() => setIsPaused(true)}
                onEnded={() => setIsPaused(true)}
              >
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProblemsSection = () => (
  <section className="py-32 relative bg-focal">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-profundo font-poppins">
          Problemas que resolvemos
        </h2>
        <p className="text-xl text-sobrio">
          Entendemos os desafios da sua operação e oferecemos soluções eficientes para cada um deles
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: 'Descasamento de caixa',
            description: 'Seus clientes pagam em 60 dias, mas seus motoristas precisam receber em 7, 15 dias ou até mesmo no dia seguinte?'
          },
          {
            title: 'Entregadores sem dinheiro para rodar',
            description: 'Muitos motoristas deixam de trabalhar porque não têm capital para gasolina, alimentação e manutenção?'
          },
          {
            title: 'Baixa adesão de motoristas',
            description: 'Empresas que oferecem pagamentos mais rápidos retêm mais entregadores e aumentam a produtividade.'
          },
          {
            title: 'Burocracia para acessar crédito',
            description: 'Capital de giro tradicional exige análise de crédito, juros altos e demora para liberação.'
          }
        ].map((problem, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(0,39,17,0.1)] hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <XCircle className="h-6 w-6 text-red-600 group-hover:text-red-700 transition-colors duration-500" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-profundo font-poppins mb-3">{problem.title}</h3>
                <p className="text-lg text-sobrio">{problem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SolutionSection = () => (
  <section className="py-32 relative overflow-hidden bg-offwhite">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-profundo font-poppins">
          Nossa Solução
        </h2>
        <p className="text-xl text-sobrio">
          Uma plataforma completa para gerenciar seus pagamentos e manter sua operação funcionando
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Wallet,
            title: 'Antecipe pagamentos sem custo',
            description: 'O capital de giro é financiado dentro da própria operação.'
          },
          {
            icon: Shield,
            title: 'Pagamento antecipado garantido',
            description: 'Acabe com a pressão dos motoristas e mantenha a frota ativa.'
          },
          {
            icon: Clock,
            title: 'Gestão em tempo real',
            description: 'Controle total dos pagamentos e movimentações financeiras.'
          },
          {
            icon: Users,
            title: 'Aumente sua base de motoristas',
            description: 'Atraia e retenha mais entregadores com pagamentos flexíveis.'
          },
          {
            icon: Calendar,
            title: 'Planejamento financeiro',
            description: 'Organize seu fluxo de caixa com previsibilidade.'
          },
          {
            icon: CheckCircle2,
            title: 'Processo simplificado',
            description: 'Integração rápida e sem burocracia.'
          }
        ].map((solution, index) => (
          <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,39,17,0.05)] hover:shadow-[0_8px_30px_rgba(40,250,123,0.2)] transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-trampay to-objetivo flex items-center justify-center mb-6">
              <solution.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-profundo font-poppins">{solution.title}</h3>
            <p className="text-sobrio">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-profundo py-16 relative overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Trampay</h3>
          <p className="text-white/80 mb-8 max-w-md">
            Revolucionando o mercado de pagamentos com soluções inteligentes para sua operação.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/trampay/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-trampay transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://www.facebook.com/trampayoficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-trampay transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/trampayoficial?igsh=MXdtdncxeDB5NmVldA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-trampay transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://trampay.com/politicas-de-privacidade" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-trampay transition-colors"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a 
                href="https://trampay.com/politicas-de-privacidade" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-trampay transition-colors"
              >
                Termos de Uso
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5561981729425" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-trampay transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/10">
        <p className="text-center text-white/60">
          © {new Date().getFullYear()} Trampay. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);