# Contribuindo para o Projeto

Obrigado por considerar contribuir para este projeto! As contribuições são essenciais para melhorar o software e torná-lo ainda mais útil para a comunidade. Antes de começar, por favor, leia este documento para entender como você pode contribuir para o projeto.

## Relatando Problemas

Se você encontrar algum problema ou bug no software, por favor, abra uma nova issue no nosso rastreador de problemas do GitHub. Certifique-se de fornecer informações detalhadas sobre o problema, incluindo passos para reproduzir, mensagens de erro, e qualquer outra informação relevante.

## Solicitando Novos Recursos

Se você tiver uma ideia para um novo recurso ou melhoria, ficaremos felizes em ouvir suas sugestões! Por favor, abra uma nova issue no nosso rastreador de problemas do GitHub e descreva sua proposta em detalhes. Tentaremos avaliar e discutir a viabilidade e o impacto de sua sugestão.

## Regras de Uniformidade de Código para Desenvolvimento em Conjunto

Ao contribuir para este projeto, é importante seguir as seguintes regras de uniformidade de código para garantir consistência e legibilidade no código-fonte.

### Declaração de variáveis

- Nunca declarar variáveis do tipo `var` em JavaScript/Typescript.
- Sempre que possível utilize `const` à `let` em JavaScript/Typescript.
- Tudo que não é visto pelo usuário deve estar em inglês, exceto arquivos ".md".

### Convenções de Nomenclatura

- Use camelCase para nomes de variáveis e funções/métodos em JavaScript/Typescript.
- Use PascalCase para nomes de classes e componentes em JavaScript/Typescript.

### Indentação e Espaçamento

- Use tabulações em vez de espaços para a indentação.
- Use 2 espaços para as tabulações de indentação em HTML, CSS e JavaScript/Typescript.

### Comentários

- Comente o código sempre que necessário para explicar a lógica ou fornecer contexto adicional.

### Formatação de Código

- Mantenha linhas de código com menos de 80 caracteres de largura.
- Quebre linhas de código longas em várias linhas quando necessário para melhorar a legibilidade.
- Evite linhas em branco desnecessárias e espaços em branco no final das linhas de código.

### Diretrizes Adicionais

- Siga as diretrizes de codificação específicas da linguagem de programação que você está utilizando.
- Mantenha o código limpo e organizado, evitando duplicações e complexidade desnecessária.
- Seja consistente com o estilo de código existente no projeto e respeite as convenções já estabelecidas.

Ao seguir estas regras de uniformidade de código, ajudará a manter um código-base limpo, legível e fácil de manter para toda a equipe de desenvolvimento.

## Regras para realizar Commits Semânticos

Commits semânticos são uma convenção para nomear os commits de uma forma padronizada, que fornece informações claras sobre as alterações realizadas no código. Isso ajuda a entender rapidamente o propósito de cada commit e facilita a navegação no histórico do repositório. Aqui está um guia básico para fazer commits semânticos:

1. **Tipos de commit**:

Comece definindo os tipos de commit que você usará. Alguns exemplos comuns incluem:

- `feat`: Adição de novas funcionalidades ou implementação de recursos.
  - Exemplo: `feat: Adiciona botão de login`

- `fix`: Correção de bugs ou solução de problemas no código.
  - Exemplo: `fix: Corrige erro de validação no formulário de cadastro`

- `docs`: Alterações na documentação, como atualizações em README ou guias de uso.
  - Exemplo: `docs: Atualiza documentação do projeto`

- `style`: Modificações relacionadas à estilização do código, como formatação ou semântica de estilos.
  - Exemplo: `style: Ajusta formatação do código conforme estilo definido`

- `refactor`: Refatorações no códig   -fonte para melhorar sua estrutura ou legibilidade.
  - Exemplo: `refactor: Refatora lógica de autenticação de usuário`

- `test`: Adição, modificação ou correção de testes automatizados.
  - Exemplo: `test: Adiciona teste para função de busca`

- `chore`: Alterações no processo de desenvolvimento ou configuração do projeto.
  - Exemplo: `chore: Atualiza dependências do projeto`

- `build`: Alterações relacionadas ao sistema de construção ou automação do projeto.
  - Exemplo: `build: Configura script de construção do projeto`

- `ci`: Configuração ou funcionamento dos sistemas de integração contínua (CI).
  - Exemplo: `ci: Configura pipeline de integração contínua com GitHub Actions`

- `perf`: Melhorias de desempenho ou otimizações no código.
  - Exemplo: `perf: Otimiza função de ordenação de dados`

- `revert`: Reversão de uma alteração anterior.
  - Exemplo: `revert: Reverte commit anterior que causou instabilidade no sistema`

- `release`: Preparação do código para um novo lançamento.
  - Exemplo: `release: Prepara versão 1.0.0 para lançamento`

- `deprecation`: Marcação de uma funcionalidade como obsoleta.
  - Exemplo: `deprecation: Marca função de login por email como obsoleta`

- `security`: Correção de vulnerabilidades de segurança no código.
  - Exemplo: `security: Corrige vulnerabilidade de injeção de SQL`

- `dependency`: Atualizações ou alterações nas dependências do projeto.
  - Exemplo: `dependency: Atualiza biblioteca de manipulação de datas para versão mais recente`

2. **Escopo** (opcional):
   - Em seguida, você pode adicionar um escopo opcional para especificar a área do código afetada pela alteração. Por exemplo: `feat(authentication): adiciona autenticação por token JWT`.

3. **Descrição do commit**:
   - Após o tipo (e escopo, se aplicável), adicione uma descrição concisa e clara do que foi alterado no commit. Tente ser descritivo, mas mantenha a mensagem sucinta. Use a voz imperativa, por exemplo: "Adiciona", "Corrige", "Atualiza".

4. **Exemplo de commit semântico**:
   - Aqui está um exemplo completo de um commit semântico:

     ```bash
     feat: Adiciona botão de login
     ```

5. **Convenções de mensagem de commit**:
   - Mantenha as mensagens de commit em inglês para consistência.
   - Use letras minúsculas para o tipo de commit e inicie com uma palavra-chave.
   - Use uma linha em branco entre o tipo e a descrição do commit.
   - Limite a linha de mensagem de commit a 72 caracteres ou menos.

6. **Exemplo prático**:
   - Suponha que você fez uma alteração para adicionar uma nova funcionalidade de busca ao seu aplicativo. Seu commit semântico poderia ser:

     ```bash
     feat: Adiciona funcionalidade de busca
     ```

Ao seguir essas práticas, você tornará seus commits mais claros e informativos, facilitando a colaboração com outros membros da equipe e a revisão do histórico do projeto.

## Enviando Pull Requests

Se você deseja contribuir com código para o projeto, siga estas etapas ao enviar uma solicitação de pull request (PR):

1. Fork o repositório e crie uma nova branch para a sua contribuição.
2. Faça suas alterações e certifique-se de seguir as diretrizes de codificação do projeto.
3. Teste suas alterações para garantir que elas funcionem corretamente.
4. Envie uma solicitação de pull request para a branch principal do repositório.
5. Aguarde o feedback dos revisores e faça as alterações necessárias, se necessário.
6. Uma vez aprovado, seu pull request será mesclado à branch principal do repositório.

## Diretrizes de Contribuição

Para garantir uma colaboração eficaz e harmoniosa, pedimos que todos os colaboradores sigam as seguintes diretrizes de contribuição:

- Respeite o código de conduta do projeto e trate todos os participantes com cortesia e respeito.
- Siga as diretrizes de codificação do projeto e mantenha uma consistência no estilo de código.
- Documente suas alterações de forma clara e concisa, incluindo comentários relevantes no código, se necessário.
- Esteja aberto ao feedback e disposto a colaborar com outros colaboradores para melhorar o projeto.

Obrigado por contribuir para este projeto e por ajudar a torná-lo ainda melhor para a comunidade!
