# BACKEND

API em spring-boot, MVC, utiliza Java 1.8.

### Executando em ambiente local

Para executar essa aplicação em modo local, primeiro certifique-se que os containers `traefik` e `mariadb` estão em execução.
 
Na raiz da pasta do projeto, execute:
> docker-compose up mariadb 
> 
verifique os logs e certifique que o container da base, `mariadb` foi iniciado.

Para executar a API do backend, pode-se utilizar a IDE intelliJ, que possui plugin Maven integrado. 
Ou executar o comando:

> mvn spring-boot:run
>

### Configurarndo a URL do Backend no Frontend

> Procure pelo arquivo environment.ts
>
> Altere o BACKEND_URL para `http://localhost:8082`
>
> Acesse: `http://frontend.localhost/`

### Possíveis Erros:

Caso tenha problema ao executar o maven, pode ser permissão de pastas onde 
a IDE intelliJ não está acessando.
Execute os seguintes comandos dentro da pasta raiz do `backend`:

- `sudo chmod -R 777 ./target`
- `sudo chmod -R 777 ./logs`
- `sudo chmod -R 777 ./.m2`

Pode ser necessário criar o schema manualmente, para isto execute a query no console da base:

> create schema `project-java-spring_db`
> 

