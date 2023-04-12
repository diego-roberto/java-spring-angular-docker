# Definição do projeto
Projeto simples para amostra. Consiste em um cadastro de empresas, demonstrando um CRUD básico e fluxo de telas entre cadastro e dashboard. </br>
<img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"/>
<img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>

Backend em Java 1.8 com spring-boot 2.7.9, padrão MVC.
Frontend em angular 15.2.0.
Database utiliza MariaDb 10.2.

## Executando em ambiente local com Docker 🐋
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
Para executar essa aplicação em modo local, primeiro certifique-se que o container `traefik` está em execução. </br>
<small>Não é obrigatório.</small> </b>
A partir da pasta raiz do projeto, acesse a pasta docker-compose e execute o comando para iniciar o container:
> cd docker-compose
> docker-compose up -d traefik
>

<img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"/>
O container mariadb é dependência do container do backend, então irá iniciar antes do build, automaticamente.
Senão, utilize o comando abaixo antes de executar o backend novamente:
> docker-compose up -d mariadb
>

<img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white"/>
### Na raiz da pasta do backend, execute:
> mvn install
>
> mvn spring-boot:run 
> 

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
Para inicializar o frontend, utilize o comando:
> npm install && ng serve 
>

## Cada repositório, backend e frontend, possui um README com maiores detalhes.


# Pra que serve este projeto?
Implementar o seu projeto sem a necessidade de começar do zero. A base está pronta e funcional para implementar regras de negócio necessárias.

## Está 'containerizado'?
Parcialmente. Dei o pontapé inicial e alguns repos dentro do projeto, como o mariadb e frontend já funcionam "de boas".

## Posso usar esse projeto quando quiser, para provas, projetos particulares e ver se sirvo para ser desenvolvedor?
Sim, fique à vontade. É tudo nosso. </br>
Se precisar de ajuda, pode chamar. Vou tentar no que puder... boa sorte! </br>

### Telas do frontend

<p align="center">
  <img width="460" height="200" src="frontend/src/assets/screenshots/form-screen.png">
</p>

<p align="center">
  <img width="460" height="100" src="frontend/src/assets/screenshots/dashboard-screen.png">
</p>
