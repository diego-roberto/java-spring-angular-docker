# Prova 00477-2023

Backend em spring-boot 2.7.9, MVC, utiliza Java 1.8.
Frontend em angular 15.2.0.
Database utiliza MariaDb.

### Executando em ambiente local

Para executar essa aplicação em modo local, primeiro certifique-se que o container `traefik` está em execução.
A partir da pasta raiz do projeto, acesse a pasta docker-compose e execute o comando para iniciar o container:
> cd docker-compose
> docker-compose up -d traefik
>

O container mariadb é dependência do container do backend, então irá iniciar antes do build, automaticamente.
Senão, utilize o comando abaixo antes de executar o backend novamente:
> docker-compose up -d mariadb
>

Na raiz da pasta do backend, execute:
> mvn install
>
> mvn spring-boot:run 
> 

Para inicializar o frontend, utilize o comando:
> npm install && ng serve 
>

Cada repositório, backend e frontend, possui um README com maiores detalhes.
