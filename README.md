# Porto-prox

## Sobre :memo:
Um aplicativo que, ao receber coordenadas de um ponto qualquer do Brasil, determina qual porto, Santos ou Paranaguá, está mais próximo. 

## :robot: Tecnologias Utilizadas

- JavaScript

## :gear: Como rodar o projeto
```bash
# Clone este repositorio
$ https://github.com/kendy-karakawa/Porto-prox.git
# Acesse a pasta Porto-prox
$ cd Porto-pro
# Instale as dependencias 
$ npm install
# Configure o .env
$ de acordo com .env.exemple
# No arquivo maps.mjs insira a cordenada (latitude, longitude) no formato string na variavel "origin".
$ const origin = "-15.46444753932978, -44.5272101693887"
# Rode o arquivo 
$ node maps.mjs
```