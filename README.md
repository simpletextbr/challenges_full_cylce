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

