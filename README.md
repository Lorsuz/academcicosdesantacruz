# Gresasc

Este projeto é uma proposta de criação de um site institucional mesclado com um e-commerce para o Grêmio Recreativo Escola de Samba Acadêmico de Santa Cruz - GRESASC -, e tem como objetivo fornecer e automatizar parcialmente o gerenciamento de dados da escola referente aos dados dos associados referentes aos produtos da loja , ao mesmo tempo em que coleta informações sobre a história da escola para usuários comuns, a fim de ter um design atraente e agradável baseado em técnicas de design UI e UX.

## Sumário

1. ***[Como executar o projeto para desenvolvimento?](#instalação)***
1. ***[Requisitos do Sistema](#requisitos-do-sistema)***
1. ***[Visão Geral ](#visão-geral-da-aplicação)***
1. ***[Fluxogramas da Aplicação E-commerce](#fluxogramas)***
1. ***[Estrutura do Banco de Dados](#database)***
1. ***[Links para Contato dos Desenvolvedores](#contato-da-equipe-de-desenvolvedores)***
1. ***[Notas de Versão](#notas-de-versão)***
1. ***[Perguntas Frequentes](#faq)***
1. ***[Licença do Projeto](#licença)***
1. ***[Créditos](#créditos)***

## Instalação

Como executar o projeto para desenvolvimento?

1. Faça download do Projeto em sua máquina pelo git clone ou arquivo zip
2. Abra o diretório do Projeto no terminal.
3. Execute os seguintes comandos:

```bash
cd client
npm i
npm run dev
```

4. Em um novo terminal, execute os seguintes comandos:

```bash
cd server
npm i
npm run tsc
```

5. Em um novo terminal, execute os seguintes comandos

```bash
cd server
npm run dev
```

***OBS**: Caso não seja a primeira vez executando o projeto não se faz necessário o comando `npm i`.*

## Requisitos do Sistema

Para instalar e executar o nosso software, o seu sistema deve atender aos seguintes requisitos mínimos:

### Requisitos de Hardware

- **Processador**: Processador Intel Core i5 ou equivalente
- **Memória RAM**: 8 GB de RAM
- **Espaço em Disco**: 100 GB de espaço disponível em disco
- **Placa Gráfica**: Placa gráfica compatível com DirectX 11
- **Resolução de Tela**: Mínimo de 1280x720 pixels
- **Dispositivos de Entrada**: Teclado e mouse ou dispositivo de apontamento equivalente

### Requisitos de Software

- **Sistema Operacional**: Windows 10 (64 bits)
- **Navegador da Web**: Google Chrome (última versão), Mozilla Firefox (última versão)
- **Outros**: Conexão com a internet para download e instalação do software

### Observações

- Recomendamos que o seu sistema esteja sempre atualizado com as últimas atualizações de software e drivers de hardware para garantir o melhor desempenho e compatibilidade com o nosso software.
- Estes são os requisitos mínimos para executar o software. Recomendamos hardware mais poderoso para uma experiência ideal.
## Visão Geral da Aplicação

### Elementos Gráficos

- **Palheta de cores:** 

- **Tipografias:** 

- **Template Figma:** [FIGMA](https://www.figma.com/file/3tYCWPb0yP9Q0gg7hU0xjv/e-commerce-project?type=design&node-id=1-17&mode=design&t=JVDWWflIOSy22y3M-0)

- **Fluxo no Figma:** [FIGMA](https://www.figma.com/file/fBux0nIKw6LB1THDx23bw6/e-commerce-project?type=whiteboard&node-id=0-1&t=0p5423Xaka97ywlL-0)

- **Repositório:** [GitHub](https://github.com/lorsuz/gresasc)

### Tecnologias utilizadas

- **Formatação**
	- Eslint
	- Prettier

- **Front-End**
	- React
	- Vite
	- TypeScript
	- Styled-Components
	- Redux
	- Axios

- **APIs Externas**
	- Stripe Payments
	- API dos Correios

- **Back-End**
	- Node JS
	- Express JS
	- TypeScript
	- MongoDB


## Fluxogramas da Loja
Futuramente, serão adicionado com detalhes e imagens para melhor entendimento sobre o funcionamento da aplicação, mas no momento esta sessão terá como conteúdo apenas sobre para o que se planeja utiliza-la.

### Fluxo de Processos
Representar a sequência de atividades e processos em um sistema de e-commerce. Ele vai mostrar desde a chegada do cliente ao site até a finalização da compra, incluindo todas as etapas intermediárias, como seleção de produtos, adição ao carrinho, pagamento e confirmação do pedido. processo de compra dentro do sistema de e-commerce. Ele detalha as etapas que o cliente percorre desde a seleção do produto até a conclusão da compra, destacando áreas de atrito que podem afetar a experiência do usuário.

#### A seguir instruções para o construção do fluxograma de processos:

1. **Identificação dos Processos Principais**:
    - Liste todos os processos principais envolvidos no funcionamento do seu sistema de e-commerce. Isso pode incluir desde o processo de seleção e compra de produtos até o processamento de pedidos, gerenciamento de estoque, atendimento ao cliente, entre outros.
2. **Definição das Etapas de Cada Processo**:
    - Para cada processo identificado, defina as etapas ou atividades que compõem esse processo. Por exemplo, no processo de seleção e compra de produtos, as etapas podem incluir pesquisa de produtos, adição ao carrinho, seleção de método de pagamento e finalização da compra.
3. **Sequenciamento das Etapas**:
    - Determine a ordem em que as etapas de cada processo devem ser executadas. Isso ajudará a estabelecer a sequência correta de atividades e garantir uma execução eficiente do processo.
4. **Conexões entre Processos**:
    - Identifique as interações entre os diferentes processos do sistema de e-commerce. Por exemplo, o processo de processamento de pedidos pode depender do estoque disponível no processo de gerenciamento de estoque, e o processo de atendimento ao cliente pode ser acionado após a finalização da compra.
5. **Desenho do Fluxograma**:
    - Utilize software de diagramação para desenhar o fluxograma de processos. Comece com um símbolo de início e conecte as etapas de cada processo com setas indicando a sequência das atividades. Utilize símbolos específicos para representar decisões, paralelismo, entrada/saída de dados, entre outros.
6. **Inclua Detalhes Relevantes**:
    - Adicione detalhes importantes a cada etapa do fluxograma, como responsáveis pela execução, prazos, ferramentas ou sistemas utilizados, e quaisquer condições ou critérios de decisão associados.
7. **Revisão e Ajustes**:
    - Após criar o fluxograma de processos, revise-o cuidadosamente para garantir que todas as etapas e interações tenham sido representadas corretamente. Faça ajustes conforme necessário para tornar o fluxograma claro e fácil de entender.

### Fluxo de Dados

Representar como os dados fluem dentro do sistema de e-commerce. Isso incluirá a entrada de dados do cliente, processamento de pedidos, atualização de inventário e geração de relatórios.

#### A seguir instruções para o construção do fluxograma de dados:

1. **Rotas da API**: Representação visual das diferentes rotas ou endpoints da API, juntamente com os métodos HTTP suportados (GET, POST, PUT, DELETE, etc.).
2. **Operações CRUD**: Indicação das operações CRUD suportadas por cada rota ou endpoint. Isso mostra quais recursos podem ser criados, lidos, atualizados ou excluídos pela aplicação front-end.
3. **Dados Transmitidos**: Descrição dos dados que são transmitidos entre o front-end e o back-end em cada solicitação, incluindo parâmetros de consulta, corpo da solicitação (payload) e qualquer resposta retornada pelo servidor.
4. **Autenticação e Autorização**: Detalhes sobre como a autenticação e a autorização são tratadas nas solicitações entre o front-end e o back-end, como tokens de acesso, cookies ou cabeçalhos de autenticação.
5. **Fluxo de Informações**: Representação visual de como os dados fluem entre o front-end e o back-end, mostrando o caminho que os dados percorrem desde a solicitação inicial do usuário até a resposta do servidor e vice-versa.

### Fluxo de Navegação
Mapear a navegação do usuário pelo site de e-commerce. Ele mostrará as páginas e telas do sistema, bem como as conexões entre elas, permitindo que os desenvolvedores compreendam a experiência do usuário e identifiquem áreas onde melhorias podem ser feitas.

#### A seguir instruções para o construção do fluxograma de Navegação:

1. **Identificar as Páginas Principais**
2. **Estabelecer as Conexões entre as Páginas**
3. **Mapear as Transições de Página**:
    Para cada página, identifique as possíveis transições de página que um usuário pode fazer. Por exemplo, na página de produtos, o usuário pode clicar em um produto para ver os detalhes ou adicionar o produto ao carrinho. Na página de checkout, o usuário pode prosseguir para a finalização da compra ou voltar para o carrinho.
4. **Inclua Opções de Navegação**:
    Certifique-se de incluir opções de navegação consistentes em todas as páginas, como links de navegação principal, breadcrumbs (trilhas de navegação) e botões de retorno. Isso facilita a experiência do usuário e ajuda os visitantes a se orientarem pelo site.
5. **Revise e Refine**:
    Após criar o fluxograma de navegação inicial, revise-o cuidadosamente para garantir que todas as páginas e transições importantes tenham sido incluídas. Faça ajustes conforme necessário para tornar a navegação mais clara e intuitiva para os usuários.

## Database

```sql
CREATE DATABASE gresasc;

USE gresasc;

CREATE TABLE Clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100),
	nickname VARCHAR(100),
	email VARCHAR(255),
	senha VARCHAR(255),
	genero ENUM('Masculino', 'Feminino'),
	telefone INT,
	nascimento DATE,
	verificado BOOLEAN,
	Administrador BOOLEAN
);

CREATE TABLE ImagensClientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	imagem_perfil VARCHAR(255),
	imagem_background VARCHAR(255),
	FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE Token(
	id INT AUTO_INCREMENT PRIMARY KEY,
	client_id INT,
	token VARCHAR(255),
	data_vencimento DATE,
	FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE Endereco(
	id INT AUTO_INCREMENT PRIMARY KEY,
	client_id INT,
	pais VARCHAR(50),
	estado VARCHAR(50),
	cidade VARCHAR(100),
	bairro VARCHAR(100),
	rua VARCHAR(150),
	numero INT(4)
	CEP VARCHAR(9)
	complemento VARCHAR(50),
	principal BOOLEAN,
	FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE Categorias (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	color VARCHAR(20),
	imagem_capa VARCHAR(255)
);

CREATE TABLE Produtos (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	descricao TEXT,
	preco DECIMAL(10, 2),
	cor_nome VARCHAR(40),
	cor_valor VARCHAR(15),
	estoque INT,
	qtd_pedidos INT,	
	categoria VARCHAR(100)
);

CREATE TABLE ImagensProduto(
	id INT AUTO_INCREMENT PRIMARY KEY,
	produtos_id INT,
	imagem_url VARCHAR(255),
	principal BOOLEAN,
	FOREIGN KEY (Produtos_id) REFERENCES Produtos(id)
)

CREATE TABLE PromocaoProduto(
	id INT AUTO_INCREMENT PRIMARY KEY,
	produtos_id INT,
	promocao_tipo ENUM('porcentagem', 'dinheiro') #
	promocao_valor INT,
	valor_minimo DECIMAL(10, 2),
	valor_maximo DECIMAL(10, 2),
	FOREIGN KEY (Produtos_id) REFERENCES Produtos(id)
);

CREATE RelacaoProdutosCategorias(
	id INT AUTO_INCREMENT PRIMARY KEY,
	produto_id INT;
	categoria_id INT;
	FOREIGN KEY (Produtos_id) REFERENCES Produtos(id);
	FOREIGN KEY (Categoria_id) REFERENCES Categoria(id)
);

CREATE TABLE CarrinhoCompras (
	id INT AUTO_INCREMENT PRIMARY KEY,
	cliente_id INT,
	produto_id INT,
	quantidade INT,
	FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
	FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);

CREATE TABLE Pedidos (
	id INT AUTO_INCREMENT PRIMARY KEY,
	cliente_id INT,
	data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	status_pedido ENUM('andamento', 'cancelado', 'entregue', 'devolvido')
	FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE ItensPedido (
	id INT AUTO_INCREMENT PRIMARY KEY,
	pedido_id INT,
	produto_id INT,
	quantidade INT,
	preco_unitario DECIMAL(10, 2),
	FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
	FOREIGN KEY (produto_id) REFERENCES Produtos(id)
);
```

## Contato da Equipe de Desenvolvedores

|              |Integrante 1|Integrante 2|Integrante 3|
|--------------|:----------:|:----------:|:----------:|
|**Site**      |            |            |            |
|**Telefone**  |            |            |            |
|**GitHub**    |            |            |            |
|**Email**     |            |            |            |


## Perguntas Frequentes (FAQ)

### Como faço para instalar o software?
Para instalar o software, siga as instruções fornecidas no arquivo README do projeto na sessão sobre [Instalação](#instalação). Isso envolve baixar o código-fonte do repositório do GitHub e seguir as etapas de configuração e instalação.

### O software é gratuito?
Sim, mas o software é distribuído sob a ***CC BY-NC 4.0***, o que significa que é gratuito para uso não comercial. Consulte o arquivo [LICENSE](./LICENSE.md) para obter mais informações sobre os termos da licença.

### Quais são os requisitos de sistema?
Os requisitos de sistema podem variar dependendo da plataforma em que o software é executado. Consulte a documentação do usuário ou o arquivo README do projeto para obter informações específicas sobre os requisitos de sistema recomendados.

### Como faço para relatar um bug ou solicitar um novo recurso?
Para relatar bugs ou solicitar novos recursos, abra uma nova issue no repositório do GitHub do projeto. Certifique-se de fornecer o máximo de detalhes possível, incluindo informações sobre o ambiente de execução, passos para reproduzir o problema e quaisquer mensagens de erro.

### Como posso contribuir para o desenvolvimento do software?
Se você deseja contribuir para o desenvolvimento do software, consulte as diretrizes de contribuição no arquivo [CONTRIBUTING.md](./CONTRIBUTING.md) do projeto. Lá, você encontrará informações sobre como enviar pull requests, diretrizes de codificação e outros detalhes importantes para contribuir com sucesso para o projeto.


## Notas de Versão
***OBS:** Os modelos a seguir são meramente ilustrativos e não refletem a realidade do desenvolvimento.*

### Versão 1.0.0 - 2024-03-28

#### Novidades
- Adicionado suporte para login com redes sociais (Google, Facebook, Twitter).
- Implementada funcionalidade de compartilhamento de posts nas redes sociais.
- Incluído recurso de notificações push para novos eventos.
- Melhorias na interface do usuário para uma experiência mais intuitiva.

#### Correções
- Corrigido problema de exibição de imagens em dispositivos iOS.
- Solucionado erro de formatação de texto em determinadas páginas.
- Corrigidos bugs relacionados à autenticação de usuários.

### Versão 1.0.1 - 2024-04-15

#### Correções
- Corrigido bug que causava travamento ao abrir certas páginas.
- Ajustes de desempenho para reduzir o tempo de carregamento das imagens.
- Atualização da documentação do usuário para incluir instruções de uso.

### Versão 1.0.2 - 2024-05-03

#### Correções
- Corrigido problema de vazamento de memória ao carregar grandes conjuntos de dados.
- Ajustes na lógica de negócios para melhorar a estabilidade do aplicativo.


## Licença

Este trabalho está licenciado sob a [Licença CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1).

Licença Creative Commons Attribution-NonCommercial 4.0 International

Esta é uma licença human-readable resumo (e não substitui a [licença](https://creativecommons.org/licenses/by-nc/4.0/legalcode)).

### Você é livre para:

- **Compartilhar** — copiar e redistribuir o material em qualquer suporte ou formato.
- **Adaptar** — remixar, transformar, e criar a partir do material.

### Sob os seguintes termos:

- **Atribuição** — Você deve dar o crédito apropriado, prover um link para a licença e indicar se mudanças foram feitas. Você pode fazê-lo de qualquer forma razoável, mas não de forma que sugira que o licenciante endossa você ou o seu uso.
- **NãoComercial** — Você não pode usar o material para fins comerciais.
- **Sem restrições adicionais** — Você não pode aplicar termos legais ou medidas tecnológicas que restrinjam legalmente outras pessoas de fazerem algo que a licença permita.

### Avisos:

- Você não tem que cumprir com os termos da licença para elementos do material em domínio público ou quando o uso é permitido por uma exceção ou limitação aplicável.
- Não são dadas quaisquer garantias. A licença pode não dar-lhe todas as permissões necessárias para o uso pretendido. Por exemplo, outros direitos, como publicidade, privacidade, ou direitos morais podem limitar a forma como você usa o material.

Para obter mais informações sobre os termos de licenciamento, consulte o arquivo [LICENSE](./LICENSE.md).

Para visualizar a licença completa, acesse o seguinte link: [Licença CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1).

## Créditos

### Reconhecimento de contribuições de terceiros

Agradecemos às seguintes pessoas por suas contribuições para o projeto:

- [Nome do Colaborador](link_do_perfil) - Contribuição específica ou descrição do trabalho realizado.
- [Nome do Colaborador](link_do_perfil) - Contribuição específica ou descrição do trabalho realizado.

### Bibliotecas utilizadas

Este projeto faz uso das seguintes bibliotecas de código aberto:

- [Nome da Biblioteca](link_para_repositório) - Descrição da biblioteca ou breve resumo do seu propósito.
- [Nome da Biblioteca](link_para_repositório) - Descrição da biblioteca ou breve resumo do seu propósito.

Agradecemos aos mantenedores e contribuidores dessas bibliotecas por seu trabalho incrível!

