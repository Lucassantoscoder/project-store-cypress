<h1 align="Center"> Automação web com cypress </h1>

Nesse projeto foi feito uma simulação de testes em interface web que faz: insere login e verifica usuario, faz asserções, colocar compra no carrinho e finaliza a compra.

#### Tecnologias usadas:

<img src='https://user-images.githubusercontent.com/68041354/212432723-b4645a7f-d875-4fdc-93da-6e3d3bbd176c.png' width='42'>  <img src='https://user-images.githubusercontent.com/68041354/209408567-f1728479-0f2b-423b-9550-771b96a33373.png' width='40'>

#### Instalar Cypress e Nodejs e dependências:
Tutorial: https://medium.com/gruponewway/instalando-o-cypress-sem-mist%C3%A9rios-6d6ee66b78d8

#### Executar o cypress:
Execute: npx cypress open ou se quiser executar direto na linha de comando execute: npx cypress run
#### São 3 cenários:
1 Login / 2 Erro no valor / 3 Acesso a loja e compra.
Aqui está resulta dos testes no terminal: 

<img src='https://user-images.githubusercontent.com/68041354/212433120-2563f317-3c53-4e2a-939c-a352f1d6ec23.png' width='443'>

<img src='https://user-images.githubusercontent.com/68041354/212434252-36473643-3554-4cdf-a9b1-5befbafe0d51.png' width='443'>

#### Video report:


https://user-images.githubusercontent.com/68041354/212435108-abf81094-efa5-44d4-9d31-9fa85aaa2e06.mp4



### Algumas funções de comando cypress:
Get Cypress Info

npx cypress info

npx cypress run

npm cache clean --force

### Documentos auxiliares:
#### CYPRESS DOCS:    https://docs.cypress.io/guides/overview/why-cypress
#### NODE DOCS:       https://nodejs.org/en/docs/

Nota: algumas vezes o cypress fica sobrecarregado de cache o se por acaso nao funcionar vá na pasta cypress>file>ViewAppData> E apaga as pastas.
