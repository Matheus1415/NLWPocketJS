
# Olá, eu sou Matheus! 👋
Esse projeto é divido na pasta web e na pasta server, a pasta web conten o front-and do sistema, nela foi ultilizado react, vite e typescript, na pasta server foi ultilizado node, docker e a bliblioteca Fastify;

O projeto é um site desktop de registro de metas com progresso semanal.

Para gerenciar os dados é usado o [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)
- Estrutura das Tabelas: Você definiu duas tabelas no banco de dados: goal_completions e goals. Cada uma com suas respectivas colunas e chaves primárias/estrangeiras.
- Geração de Migração: Usou o comando npx drizzle-kit generate para gerar um arquivo de migração SQL com base no estado atual das tabelas e suas definições. Esse arquivo foi salvo na pasta .migrations.
- Execução da Migração: Após a geração da migração, você utilizou o comando npx drizzle-kit migrate para aplicar as mudanças no banco de dados, garantindo que ele esteja sincronizado com a estrutura definida no código.
## Instalação
para a instação você deve ter preveamente o [docker](https://www.docker.com/products/docker-desktop/) e o [node JS](https://nodejs.org/en/download/package-manager/current) instalado na sua maquina;

1. Clone o repositório:
   ```bash
      git clone https://github.com/Matheus1415/NLWPocketJS
   ```
2. Navegue até o diretório do servido back and do projeto:
   ```bash
      cd NLWPocketJS/server
   ```
3. Instale as dependências:
   ```bash
      npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
      npm run dev
   ```
5. Acesse a aplicação em http://localhost:3333.

6. Navegue até o diretório do front-and do projeto:
   ```bash
      cd NLWPocketJS/web
   ```
7. Instale as dependências:
   ```bash
      npm install
   ```
8. Inicie o servidor de desenvolvimento:
   ```bash
      npm run dev
   ```
9. Acesse a aplicação em http://localhost:3000.


## Comando ultilizados durante o projeto

- Criar as tabelas: *npx drizzle-kit generate*
- Rodar as migrate: *npx drizzle-kit migrate* 
- Visualizar as tabelas: *npx drizzle-kit studio* 
- Iniciar container: *docker compose up -d*
- criar container: *docker-compose up -d*


## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

