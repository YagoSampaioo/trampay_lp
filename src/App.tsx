import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, Wallet, Users, Clock, Shield, ChevronRight, Calendar, Facebook, Instagram, Linkedin, CreditCard, Banknote, PiggyBank, DollarSign, Coins, Receipt, Building2, Truck, Package, ArrowUp, CheckCheck, AlertTriangle, FileCheck, CreditCard as CreditCardIcon, BarChart3, Zap, Briefcase } from 'lucide-react';
import { FormData, SectorType, ProviderCountType, MainPainType, RoleType, PaymentVolumeType } from './types';
import { VideoSection, ProblemsSection, SolutionSection, Footer } from './components/Sections';
import LogoCarousel from './components/LogoCarousel';
import ThankYouPage from './components/ThankYouPage';

// Função de rastreamento do Pixel do Facebook
const trackFbEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};

// Função de rastreamento do Google Ads
const trackGoogleAdsEvent = (conversionId: string, value: number = 1.0, currency: string = 'BRL') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': conversionId,
      'value': value,
      'currency': currency
    });
  }
};

// Variantes da página de destino
const LANDING_VARIANTS = {
  default: {
    title: "Cresça sua operação usando o nosso capital de giro",
    subtitle: "Garanta pagamentos antecipados para seus entregadores sem comprometer o fluxo financeiro da sua empresa!",
    stats: [
      { number: '30mil+', label: 'Entregadores atendidos' },
      { number: 'R$180M+', label: 'Em capital de giro distribuído' },
      { number: '60%+', label: 'Aumento na eficiência operacional' }
    ],
    problems: [
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
    ],
    solutions: [
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
    ],
    googleAds: {
      pageView: 'AW-16697614922/8HnGCKKys6QaEMrEhZo-',
      formSubmit: 'AW-16697614922/liY9CJ-ys6QaEMrEhZo-'
    }
  },
  variant1: {
    title: "Automatize Pagamentos para Prestadores de Serviço e Ganhe Eficiência",
    subtitle: "Pague milhares de profissionais com apenas alguns cliques e elimine processos manuais!",
    stats: [
      { number: '80%', label: 'Redução no tempo gasto com pagamentos' },
      { number: 'R$1.9B+', label: 'Em transações processadas' },
      { number: '3.9M+', label: 'De transações únicas processadas' }
    ],
    showImage: true,
    problems: [
      {
        title: 'Processo manual e demorado',
        description: 'Seu time ainda gerencia pagamentos por planilhas e transferências bancárias manuais?'
      },
      {
        title: 'Falta de controle financeiro',
        description: 'Dificuldade para acompanhar o histórico de transações e extratos?'
      },
      {
        title: 'Erros nos pagamentos',
        description: 'Repasse incorreto pode gerar retrabalho, prejuízos e insatisfação dos prestadores!'
      },
      {
        title: 'Fraude e risco de pagamento indevido',
        description: 'Sem conferência automática da chave Pix, os valores podem cair na conta errada.'
      }
    ],
    solutions: [
      {
        icon: CreditCardIcon,
        title: 'Sistema completo de gestão',
        description: 'Automatize e controle todas as transações em um só lugar.'
      },
      {
        icon: Zap,
        title: 'Pagamento em poucos cliques',
        description: 'Pague milhares de prestadores sem limites e sem burocracia.'
      },
      {
        icon: BarChart3,
        title: 'Histórico detalhado',
        description: 'Transparência total sobre seus pagamentos com extrato sempre disponível.'
      },
      {
        icon: FileCheck,
        title: 'Conciliação automática',
        description: 'Evite erros e retrabalho com integração via API.'
      },
      {
        icon: Shield,
        title: 'Verificação automática',
        description: 'Segurança contra fraudes com verificação de chave Pix e CPF.'
      },
      {
        icon: Briefcase,
        title: 'Permissões personalizadas',
        description: 'Controle quem pode visualizar e autorizar pagamentos na sua empresa.'
      }
    ],
    googleAds: {
      pageView: 'AW-16697614922/FYkSCJjepaQaEMrEhZo-',
      formSubmit: 'AW-16697614922/yVgKCJvepaQaEMrEhZo-'
    }
  },
  variant2: {
    title: "Elimine a confusão\ne o risco jurídico no\nagendamento de entregadores",
    subtitle: "Automatize a gestão de escalas e garanta que sua operação nunca pare!",
    stats: [
      { number: '60%', label: 'Redução em falhas na escala' },
      { number: '40mil+', label: 'Entregadores ativos' },
      { number: '100%', label: 'Segurança jurídica' }
    ],
    showImage: true,
    problems: [
      {
        title: 'Desorganização na escala',
        description: 'Seu time ainda entra em contato com o prestador pelo whatsapp ou telegram?'
      },
      {
        title: 'Faltas inesperadas',
        description: 'Motoristas somem no dia da entrega e você perde produtividade?'
      },
      {
        title: 'Problemas jurídicos',
        description: 'Sem controle sobre os agendamentos, sua empresa pode estar exposta!'
      },
      {
        title: 'Baixa adesão dos entregadores',
        description: 'Você ainda faz a escala dos prestadores por um formulário?'
      }
    ],
    solutions: [
      {
        icon: Calendar,
        title: 'Escalas publicadas automaticamente',
        description: 'Entregadores escolhem seus turnos com antecedência.'
      },
      {
        icon: BarChart3,
        title: 'Ranking de prioridade',
        description: 'Escale os melhores profissionais primeiro.'
      },
      {
        icon: Zap,
        title: 'Notificação automática',
        description: 'Avise os motoristas quando novas escalas são abertas.'
      },
      {
        icon: Clock,
        title: 'Monitoramento em tempo real',
        description: 'Acompanhe a adesão e engajamento da frota.'
      },
      {
        icon: Shield,
        title: 'Gestão integrada e segura',
        description: 'Sem necessidade de formulários e mensagens manuais.'
      },
      {
        icon: CheckCheck,
        title: 'Redução de faltas e atrasos',
        description: 'Controle total sobre quem está escalado.'
      }
    ],
    googleAds: {
      pageView: 'AW-16697614922/UrwoCKTGs6QaEMrEhZo-',
      formSubmit: 'AW-16697614922/imHuCKHGs6QaEMrEhZo-'
    }
  }
};

function HomePage({ variant = 'default' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    responsibleName: '',
    email: '',
    phone: '',
    sector: 'logistics',
    otherSector: '',
    providerCount: 'less500',
    mainPain: 'fastPayment',
    otherPain: '',
    role: 'operationsDirector',
    otherRole: '',
    paymentVolume: '100-200k'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    trackFbEvent('PageView');
    
    const content = LANDING_VARIANTS[variant];
    if (content.googleAds && content.googleAds.pageView) {
      trackGoogleAdsEvent(content.googleAds.pageView);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, variant]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const getPageName = () => {
    const path = location.pathname;
    if (path.includes('capitaldegiro')) return 'Capital de Giro';
    if (path.includes('pagamentoemlote')) return 'Pagamento em Lote';
    if (path.includes('agendamento')) return 'Agendamento';
    return 'Página Principal';
  };

  const formatDataForHubspot = (data: FormData) => {
    const providerCountMap: Record<string, string> = {
      'less500': 'menos_500',
      '1000-2000': '1000_2000',
      '2000-5000': '2000_5000',
      'more5000': 'acima_5000'
    };

    const sectorMap: Record<string, string> = {
      'logistics': 'logistica',
      'marketplace': 'marketplace',
      'transport': 'transporte',
      'fintech': 'fintech',
      'other': 'outro'
    };

    const mainPainMap: Record<string, string> = {
      'fastPayment': 'pagamento_rapido',
      'schedule': 'agendamento',
      'identity': 'validacao_identidade',
      'capital': 'capital_de_giro',
      'other': 'outro'
    };

    const roleMap: Record<string, string> = {
      'operationsDirector': 'diretor_operacoes',
      'financialDirector': 'diretor_financeiro',
      'logisticsManager': 'gerente_logistica',
      'transportManager': 'gerente_transporte',
      'cLevel': 'c_level',
      'operations': 'operacoes',
      'other': 'outro'
    };

    const formattedData = {
      ...data,
      providerCount: providerCountMap[data.providerCount] || data.providerCount,
      sector: sectorMap[data.sector] || data.sector,
      mainPain: mainPainMap[data.mainPain] || data.mainPain,
      role: roleMap[data.role] || data.role,
      sourcePage: location.pathname,
      pageTitle: getPageName()
    };

    if (data.sector === 'other' && data.otherSector) {
      formattedData.sectorDetail = data.otherSector;
    }

    if (data.mainPain === 'other' && data.otherPain) {
      formattedData.mainPainDetail = data.otherPain;
    }

    if (data.role === 'other' && data.otherRole) {
      formattedData.roleDetail = data.otherRole;
    }

    return formattedData;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formattedData = formatDataForHubspot(formData);

      const response = await fetch('https://n8n.trampay.com/webhook/hubspot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar o formulário');
      }

      trackFbEvent('Lead', {
        content_name: 'Form Submission',
        content_category: 'form',
        value: 1,
        currency: 'BRL'
      });
      
      trackFbEvent('SubmitApplication');
      
      const content = LANDING_VARIANTS[variant];
      if (content.googleAds && content.googleAds.formSubmit) {
        trackGoogleAdsEvent(content.googleAds.formSubmit);
      }

      navigate('/obrigado');
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingIcon = ({ icon: Icon, className }: { icon: any, className: string }) => (
    <div className={`absolute ${className}`}>
      <Icon className="text-trampay/30" />
    </div>
  );

  const content = LANDING_VARIANTS[variant];

  const getProductName = () => {
    switch(variant) {
      case 'variant1': return 'Gestão de Pagamentos';
      case 'variant2': return 'Agendamento de Escalas';
      default: return 'Capital de Giro';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-focal via-offwhite to-focal font-source-sans">
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 z-50 p-4 bg-profundo text-white rounded-full shadow-lg hover:bg-trampay hover:text-profundo transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <header className="relative overflow-hidden min-h-[80vh] flex items-center justify-center pt-8 pb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-objetivo via-trampay to-bold opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(40,250,123,0.1),rgba(0,39,17,0.1)_100%)]"></div>
        
        <FloatingIcon icon={CreditCard} className="top-20 left-[10%] animate-float" />
        <FloatingIcon icon={Banknote} className="top-40 right-[15%] animate-float-slow" />
        <FloatingIcon icon={PiggyBank} className="bottom-32 left-[20%] animate-float-slower" />
        <FloatingIcon icon={DollarSign} className="top-1/3 left-[30%] animate-float" />
        <FloatingIcon icon={Coins} className="bottom-1/4 right-[25%] animate-float-slow" />
        
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-objetivo/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-trampay/20 rounded-full blur-3xl"></div>
          
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-bold/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-trampay/15 rounded-full blur-xl animate-float-slow"></div>
        </div>
        
        <FloatingIcon icon={Receipt} className="top-[60%] left-[5%] animate-float" />
        <FloatingIcon icon={Building2} className="bottom-[15%] right-[10%] animate-float-slower" />
        <FloatingIcon icon={Truck} className="top-[80%] right-[20%] animate-float-slow" />
        <FloatingIcon icon={Package} className="bottom-[30%] left-[15%] animate-float" />

        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins text-profundo animate-fade-in leading-tight whitespace-pre-line">
                {content.title}
              </h1>
              <p className="text-lg md:text-xl mb-12 text-sobrio">
                {content.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-profundo font-poppins">{stat.number}</div>
                    <div className="text-sm text-sobrio mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,39,17,0.2)]">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-profundo font-poppins">
                    Quer ver como funciona na prática?
                  </h2>
                  <p className="text-lg text-sobrio mt-2">
                    Preencha o formulário abaixo!
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        required
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Nome da Empresa *"
                      />
                    </div>
                    <div>
                      <input
                        required
                        id="responsibleName"
                        type="text"
                        value={formData.responsibleName}
                        onChange={e => setFormData(prev => ({ ...prev, responsibleName: e.target.value }))}
                        className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Nome Completo *"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        required
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="E-mail Corporativo *"
                      />
                    </div>
                    <div>
                      <input
                        required
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Telefone / WhatsApp *"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-sobrio mb-2">
                      Setor de Atuação da Empresa <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="sector"
                      value={formData.sector}
                      onChange={e => setFormData(prev => ({ ...prev, sector: e.target.value as SectorType }))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="logistics">Logística</option>
                      <option value="marketplace">Marketplace</option>
                      <option value="transport">Transporte</option>
                      <option value="fintech">Fintech</option>
                      <option value="other">Outro</option>
                    </select>
                    {formData.sector === 'other' && (
                      <input
                        type="text"
                        value={formData.otherSector}
                        onChange={e => setFormData(prev => ({ ...prev, otherSector: e.target.value }))}
                        className="mt-2 w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Especifique o setor"
                      />
                    )}
                  </div>

                  <div>
                    <label htmlFor="providerCount" className="block text-sm font-medium text-sobrio mb-2">
                      Quantidade de Prestadores de Serviço Cadastrados <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="providerCount"
                      value={formData.providerCount}
                      onChange={e => setFormData(prev => ({ ...prev, providerCount: e.target.value as ProviderCountType }))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="less100">Menos de 100</option>
                      <option value="100-500">Entre 100 e 500</option>
                      <option value="500-1000">Entre 500 e 1000</option>
                      <option value="1000-2000">Entre 1000 e 2000</option>
                      <option value="2000-5000">Entre 2000 e 5000</option>
                      <option value="more5000">Mais de 5000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mainPain" className="block text-sm font-medium text-sobrio mb-2">
                      Qual é a Principal Dor que Você Deseja Resolver? <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="mainPain"
                      value={formData.mainPain}
                      onChange={e => setFormData(prev => ({ ...prev, mainPain: e.target.value as MainPainType }))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="fastPayment">Preciso pagar meus prestadores de forma mais rápida e automática</option>
                      <option value="schedule">Quero organizar melhor a escala dos meus entregadores</option>
                      <option value="identity">Preciso validar a identidade dos motoristas para evitar fraudes</option>
                      <option value="capital">Preciso de capital para aliviar meu caixa</option>
                      <option value="other">Outro</option>
                    </select>
                    {formData.mainPain === 'other' && (
                      <input
                        type="text"
                        value={formData.otherPain}
                        onChange={e => setFormData(prev => ({ ...prev, otherPain: e.target.value }))}
                        className="mt-2 w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Especifique sua principal dor"
                      />
                    )}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-sobrio mb-2">
                      Cargo do Responsável <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="role"
                      value={formData.role}
                      onChange={e => setFormData(prev => ({ ...prev, role: e.target.value as RoleType }))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="operationsDirector">Diretor de Operações</option>
                      <option value="financialDirector">Diretor Financeiro</option>
                      <option value="logisticsManager">Gerente de Logística</option>
                      <option value="transportManager">Gerente de Transporte</option>
                      <option value="cLevel">C-Level</option>
                      <option value="operations">Operações</option>
                      <option value="other">Outro</option>
                    </select>
                    {formData.role === 'other' && (
                      <input
                        type="text"
                        value={formData.otherRole}
                        onChange={e => setFormData(prev => ({ ...prev, otherRole: e.target.value }))}
                        className="mt-2 w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                        placeholder="Especifique o cargo"
                      />
                    )}
                  </div>

                  <div>
                    <label htmlFor="paymentVolume" className="block text-sm font-medium text-sobrio mb-2">
                      Volume de pagamento para entregadores <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="paymentVolume"
                      value={formData.paymentVolume}
                      onChange={e => setFormData(prev => ({ ...prev, paymentVolume: e.target.value as PaymentVolumeType }))}
                      className="w-full px-3 py-2 rounded-xl border-2 border-focal focus:ring-2 focus:ring-trampay focus:border-trampay text-sobrio bg-white/80 backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="100-200k">100 a 200 mil</option>
                      <option value="200-300k">200 mil a 300 mil</option>
                      <option value="300-400k">300 mil a 400 mil</option>
                      <option value="400-500k">400 mil a 500 mil</option>
                      <option value="more500k">Mais de 500 mil</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-bold to-trampay text-profundo font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-lg font-poppins ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:shadow-[0_8px_30px_rgba(40,250,123,0.3)]'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Envie para falar com um especialista'}
                  </button>

                  {submitError && (
                    <div className="text-red-600 text-center mt-4">
                      {submitError}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      <VideoSection />
      <ProblemsSection />
      <SolutionSection />
      <LogoCarousel />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/capitaldegiro" element={<HomePage variant="default" />} />
      <Route path="/pagamentoemlote" element={<HomePage variant="variant1" />} />
      <Route path="/agendamento" element={<HomePage variant="variant2" />} />
      <Route path="/obrigado" element={<ThankYouPage />} />
      <Route path="/" element={<HomePage variant="default" />} />
    </Routes>
  );
}

export default App;