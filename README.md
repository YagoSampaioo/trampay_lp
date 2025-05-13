# Trampay - Landing Page

Este repositório contém o código-fonte da landing page da Trampay, uma plataforma de capital de giro inteligente para empresas de logística e transporte.

## Estrutura do Projeto

O projeto é construído com React, TypeScript e Vite, utilizando Tailwind CSS para estilização. A estrutura de arquivos é organizada da seguinte forma:

```
trampay-landing/
├── public/                # Arquivos públicos
├── src/                   # Código-fonte
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── LogoCarousel.tsx  # Carrossel de logos de clientes
│   │   ├── Sections.tsx      # Seções reutilizáveis (Vídeo, Problemas, Soluções, Footer)
│   │   └── ThankYouPage.tsx  # Página de agradecimento após envio do formulário
│   ├── App.tsx            # Componente principal e rotas
│   ├── index.css          # Estilos globais e animações
│   ├── main.tsx           # Ponto de entrada da aplicação
│   ├── types.ts           # Definições de tipos TypeScript
│   └── vite-env.d.ts      # Definições de ambiente Vite
├── index.html             # Arquivo HTML principal
├── tailwind.config.js     # Configuração do Tailwind CSS
├── postcss.config.js      # Configuração do PostCSS
├── vite.config.ts         # Configuração do Vite
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## Páginas e Rotas

O projeto utiliza React Router para gerenciar as rotas:

1. **Página Principal (`/`)**: Versão padrão da landing page focada em capital de giro.
2. **Variante 1 (`/v1`)**: Versão alternativa focada em gestão de pagamentos.
3. **Variante 2 (`/v2`)**: Versão alternativa focada em agendamento de escalas.
4. **Página de Agradecimento (`/obrigado`)**: Exibida após o envio do formulário.

## Componentes Principais

### App.tsx

O componente principal que contém:
- Configuração de rotas
- Definição das variantes da landing page
- Lógica do formulário de contato
- Rastreamento de eventos do Facebook Pixel

### Componentes Reutilizáveis

1. **VideoSection**: Exibe um vídeo demonstrativo com controles de reprodução.
2. **ProblemsSection**: Apresenta os problemas que a Trampay resolve.
3. **SolutionSection**: Mostra as soluções oferecidas pela plataforma.
4. **LogoCarousel**: Exibe um carrossel animado com logos de clientes.
5. **ThankYouPage**: Página de agradecimento após envio do formulário.
6. **Footer**: Rodapé com links e informações de contato.

## Variantes da Landing Page

O projeto suporta três variantes da landing page, cada uma com conteúdo específico:

1. **Default**: Focada em capital de giro para entregadores.
2. **Variant1**: Focada em automatização de pagamentos para prestadores de serviço.
3. **Variant2**: Focada em agendamento de escalas para entregadores.

Cada variante possui:
- Título e subtítulo personalizados
- Estatísticas específicas
- Problemas e soluções adaptados ao contexto
- Imagens ilustrativas (para variant1 e variant2)

## Integrações

### Facebook Pixel

O projeto integra o Facebook Pixel para rastreamento de eventos:

- Cada variante da landing page possui um ID de Pixel específico:
  - Default: `1134476054813935`
  - Variant1: `1272438437158868`
  - Variant2: `974921477945588`

- Eventos rastreados:
  - `PageView`: Quando a página é carregada
  - `Lead`: Quando o formulário é enviado
  - `SubmitApplication`: Quando o formulário é enviado com sucesso
  - `CompleteRegistration`: Quando a página de agradecimento é carregada
  - `ViewContent`: Quando o usuário visualiza o formulário de contato
  - `Contact`: Quando o usuário clica no botão de WhatsApp

### API de Formulário

O formulário de contato envia dados para uma API Webhook do n8n:
- Endpoint: `https://n8n.trampay.com/webhook/b5494e01-42f6-4136-baba-cbe8ec4d8a9a`
- Método: `POST`
- Dados enviados:
  - Nome da empresa
  - Nome do responsável
  - Email corporativo
  - Telefone/WhatsApp
  - Setor de atuação
  - Quantidade de prestadores
  - Principal dor a resolver
  - Cargo do responsável

### HubSpot Meetings

Na página de agradecimento, é integrado um iframe do HubSpot Meetings para agendamento de reuniões:
- URL: `https://meetings.hubspot.com/caio-uchoa-trampay/trampay`

## Estilização

O projeto utiliza Tailwind CSS com uma paleta de cores personalizada:

```javascript
colors: {
  trampay: '#28FA7B',    // Cor principal da marca
  objetivo: '#00D88A',   // Cor secundária para objetivos
  focal: '#DEF6EB',      // Cor de fundo focal
  offwhite: '#FFFCF2',   // Cor branca com tom suave
  bold: '#E2FA53',       // Cor de destaque
  sobrio: '#244549',     // Cor para textos secundários
  profundo: '#002711'    // Cor para textos principais e fundos escuros
}
```

Fontes utilizadas:
- **Poppins**: Para títulos e textos de destaque
- **Source Sans 3**: Para textos gerais

## Animações

O projeto inclui várias animações para melhorar a experiência do usuário:

- **fade-in**: Para elementos que aparecem gradualmente
- **float**: Para ícones flutuantes com diferentes velocidades
- **scroll**: Para o carrossel de logos de clientes

## Responsividade

A landing page é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- Layout fluido com Tailwind CSS
- Grid de estatísticas que se ajusta para uma coluna em dispositivos móveis
- Imagens e elementos que se redimensionam conforme necessário
- Formulário que se adapta para uma coluna em telas menores

## Implantação

O projeto está configurado para implantação em diferentes plataformas:

- **Netlify**: Configuração em `netlify.toml`
- **Vercel**: Configuração em `vercel.json`

Ambas as configurações incluem redirecionamentos para garantir que as rotas do React Router funcionem corretamente.

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Para construir para produção:
   ```
   npm run build
   ```

## Considerações de Performance

- Otimização de imagens através de URLs externas
- Carregamento assíncrono do script do Facebook Pixel
- Animações CSS eficientes
- Uso de Tailwind CSS para reduzir o tamanho do CSS final
- Lazy loading de componentes quando apropriado

## Manutenção e Atualização

Para atualizar o conteúdo da landing page:

1. **Textos e Estatísticas**: Edite as constantes em `App.tsx` no objeto `LANDING_VARIANTS`
2. **Imagens**: Atualize as URLs nas funções `getImageSource` e `getImageAlt`
3. **Logos de Clientes**: Modifique o array `logos` em `LogoCarousel.tsx`
4. **Vídeo**: Atualize a URL do vídeo em `VideoSection` no arquivo `Sections.tsx`
5. **Pixel do Facebook**: Atualize os IDs no arquivo `index.html`
6. **Endpoint do Formulário**: Modifique a URL na função `handleSubmit` em `App.tsx`# trampay_lp
