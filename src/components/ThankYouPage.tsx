import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

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

const ThankYouPage = () => {
  const [schedulingCompleted, setSchedulingCompleted] = useState(false);

  useEffect(() => {
    // Rastreia conversão quando a página de agradecimento carrega
    trackFbEvent('CompleteRegistration', {
      content_name: 'Form Submission Success',
      status: 'success'
    });
    
    // Rastreia conversão no Google Ads para todas as variantes
    // Usando o ID de conversão para a página de agradecimento
    trackGoogleAdsEvent('AW-16697614922/liY9CJ-ys6QaEMrEhZo-');

    // Adiciona um listener para mensagens do iframe do HubSpot
    const handleMessage = (event: MessageEvent) => {
      // Verifica se a mensagem é do iframe do HubSpot e se indica que o agendamento foi concluído
      if (event.data && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
        setSchedulingCompleted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-profundo to-profundo/95 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full text-center">
        <div className="mb-8 md:mb-12">
          <div className="animate-bounce">
            <CheckCircle2 className="h-16 w-16 md:h-24 md:w-24 text-trampay mx-auto" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 font-poppins">
          <span className="text-white">Cadastro </span>
          <span className="text-[#FFA500]">Concluído!</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 px-2">
          Obrigado pelo seu cadastro. Nos próximos minutos um dos nossos especialistas entrará em contato para entender melhor sobre o seu negócio e te ajudar a faturar mais. No entanto, caso você queira nos dizer a sua disponibilidade, já agende uma reunião com nosso especialista no calendário abaixo.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg max-w-4xl mx-auto">
          <p className="text-white mb-3 md:mb-4 text-base md:text-lg">Agende uma reunião com nossa equipe:</p>
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-lg">
            <iframe 
              src="https://meetings.hubspot.com/caio-uchoa-trampay/trampay" 
              className="w-full h-full border-0"
              frameBorder="0" 
              scrolling="yes"
              allow="camera; microphone; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Agendar reunião com a equipe Trampay"
            ></iframe>
          </div>
          
          {schedulingCompleted && (
            <div className="mt-6">
              <a 
                href="https://wa.me/5561981729425"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackFbEvent('Contact', { content_name: 'WhatsApp' });
                  trackGoogleAdsEvent('AW-16697614922/liY9CJ-ys6QaEMrEhZo-');
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-trampay to-objetivo text-profundo font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(40,250,123,0.3)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Fale com um especialista
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;