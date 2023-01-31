# Repositorio De Desafios Docker & Git

## Desafio Com Linguagem Go

Este desafio baseia-se em criar um hello world com a linguagem Go usando um docker porem explorando uma divisão de estagios de um dockerfile visando a diminuição do tamanho final da imagem docker gerada no final. 

Para criar a imagem utilizei o seguintes comando: 
```
$ docker build -t wesleypraca/go_challenge .
$ docker login -u <your_username>
$ docker push -t wesleypraca/go_challenge
```

**O desafio principal era criar uma imagem com menos de 2 Mb**

Você pode checar a minha imagem [Aqui](https://hub.docker.com/repository/docker/wesleypraca/go_challenge/general)

## Desafio Com Docker Compose e Node.JS 

Este desafio baseia-se na criação de uma aplicação node com acesso a um banco de dados e gestão dele podendo incluir dados no banco e lista-los na tela inicial utilizando um proxy reverso com nginx para expor ao acesso. 

Para rodar a imagem basta rodar o seguinte comando
```
$ docker-compose up -d
```

valido lembar que após isso devera ser criado a tabela no banco de dados local no docker acessando o mesmo

```
$  docker exec -it db  mysql -u nodeuser -p  
$  create table people(id int not null auto_increment, name varchar(255), primary key(id));
```

apos isso basta apenas acessar a rota "/add" para adicionar novos nomes a sua lista