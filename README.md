🍔 DevBurger Interface (Front-end):

✨ Visão Geral do Projeto
O DevBurger Interface é o projeto Front-end que materializa a experiência de usuário para a nossa hamburgueria online. Ele é a camada de apresentação que interage com a robusta DevBurger API, utilizando uma arquitetura de comunicação baseada em Microsserviços.

Este Front-end foi desenhado com foco em performance, responsividade e usabilidade, garantindo que o cliente tenha uma navegação fluida desde a escolha do lanche até a finalização do pagamento.

🎯 Experiência e Funcionalidades de Alto Nível:

Jornada do Cliente Completa: Implementação total do fluxo de e-commerce, incluindo Login, Registro, Catálogo Interativo, Carrinho de Compras e Checkout.

Checkout Seguro com Stripe: Interface especializada para o processamento de pagamentos, utilizando o Stripe.js para lidar com dados de cartão de forma segura (PCI Compliance).

Responsividade & Acessibilidade: Design focado em mobile-first para garantir uma experiência consistente em qualquer dispositivo.

🚀 Diferenciais Técnicos:

Arquitetura Orientada a Serviços: Demonstra domínio na construção de soluções desacopladas, onde o Front-end atua como um client eficiente da API (Back-end).

Styling Profissional com Styled Components: Utilização de CSS-in-JS para encapsulamento de estilos e criação de uma biblioteca de componentes reutilizáveis, garantindo manutenibilidade e escalabilidade do design.

Gerenciamento de Estado Otimizado: (Se aplicável: mencione Redux, Context API, ou Zustand) para lidar com a complexidade do carrinho e do estado do usuário de forma performática.

Integração Stripe.js: Domínio na integração de bibliotecas de terceiros para transações financeiras, lidando com chaves publicáveis e tokens de pagamento.

Comunicação Assíncrona: Gerenciamento robusto de requisições assíncronas com a API (http://localhost:3001), incluindo tratamento de erros e estados de carregamento.

💻 Tecnologias:

React: Biblioteca JavaScript principal.

Styled Components: Utilizado para estilização de componentes.

JavaScript (ES6+): Linguagem de desenvolvimento.

Stripe.js: Para elementos de pagamento no Front-end.

Axios / Fetch API: Para a comunicação HTTP com a API.


⚙️ Configuração do Projeto (Setup):

Para testar o projeto, você deve ter a DevBurger API rodando em segundo plano na porta 3001.

1. Clonar o Repositório
Bash

git clone https://github.com/Thaisa-R/DevBurger-Interface.git
cd DevBurger-Interface
2. Instalar Dependências
Bash

npm install
# ou
# yarn install
3. Configurar Variáveis de Ambiente
O Front-end precisa saber o endereço da API e sua Chave Publicável do Stripe (que é segura para o navegador).

Crie um arquivo chamado .env (ou a convenção do seu framework) na raiz do projeto.

Preencha com as variáveis abaixo.

Conteúdo do arquivo .env:

Snippet de código

# URL da API do Back-end (Garantir que esteja na porta correta)
REACT_APP_API_URL=http://localhost:3001

# Chave Publicável do Stripe (pk_test_...)
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_suaChavePublicavelAqui
4. Rodar a Aplicação
Inicie o Front-end:

Bash

npm start
# ou
# yarn start
A aplicação será carregada (geralmente em http://localhost:3000), pronta para se conectar à API.

✅ Lembre-se: Mantenha a API Back-end rodando (em http://localhost:3001) para que a interface funcione corretamente!
