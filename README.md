# README #

Repositório com API desenvolvida em NodeJs com rotas Express e conectando no banco e dados NewSql MariaDB 

### What is this repository for? ###

* Sumário
* Versão 1.0
* Como rodar a aplicação?  
* Testar Endpoints
* Conectar no MariaDB

### Como rodar a aplicação? ###

* Para executar rode os comandos abaixo:

    docker-compose up -d  
    docker exec -it nodeapp /bin/bash  
    node server.js  
    
    
### Testar Endpoints ###

* Para executar rode os comandos abaixo em um terminal. 
  Arquivo json do postman esta na raiz do projeto:
    
    npm install newman  
    newman run "Node - MariaDB.postman_collection.json" -r cli,json  

### Conectar no MariaDB ###
    
    mariadb --host 127.0.0.1 -P 3306 --user root -proot
