# Porto-prox

## Sobre :memo:
Um aplicativo que, ao receber coordenadas de um ponto qualquer do Brasil, determina qual porto, Santos ou Paranaguá, está mais próximo. 

## :robot: Tecnologias Utilizadas

- JavaScript

## :gear: Como rodar o projeto
```bash
# Clone este repositorio
$ git clone https://github.com/kendy-karakawa/Porto-prox.git
# Acesse a pasta Porto-prox
$ cd Porto-prox
# Instale as dependências 
$ npm install
# Configure o .env
$ cp .env.example .env
# No arquivo maps.mjs, insira a coordenada (latitude, longitude) no formato de string na variável origin.
$ const origin = "-15.46444753932978, -44.5272101693887"
# Rode o arquivo e no console irá aparecer a resposta:
$ node maps.mjs
```