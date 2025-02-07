# Api gerenciamento de Usuários (Backend)

O sistema é uma API que oferece um CRUD de usuários, desenvolvido com Node.js e Express para gerenciar os dados em formato JSON. As informações dos usuários são armazenadas em um banco de dados MongoDB, com a gestão facilitada pelo Prisma.

## Observação importante !!!

### Essa aplicação é apenas o backend, ou seja é a primeira parte da minha aplicação, aqui eu só criei uma api, no próximo reposítório postarei o frontend, usando react para consumir essa api.

<hr>

### Linguagens e Tecnologias utilizadas

* Node.Js
* JavaScript
* Express
* Prisma
* MongoDb
* Thunder Client
* Http

## Fotos do sistema

![image](https://github.com/user-attachments/assets/0e6d446b-aa24-4a64-9cfc-bae2f4cde0f5)
<br>
Organização do Código

![image](https://github.com/user-attachments/assets/1d35d642-701c-4992-a8f9-3e109ca41392)
<br>
Método Post, cria o usuário

![image](https://github.com/user-attachments/assets/e409ccd1-b8ec-4f51-9243-6ff12d382d01)
<br>
Método Get, lista todos os usuários cadastrados

![image](https://github.com/user-attachments/assets/1a76b241-a70d-4662-90d5-8dc862e23c98)
<br>
Método Put, edita um usuário cujo o id coincida 

![image](https://github.com/user-attachments/assets/833036dc-7ee9-4462-8d03-e4becae533f8)
<br>
Método Delete, deleta um usuário cujo o id coincida 

<hr>

### Para rodar o server.js, digite o seguinte código no terminal
<pre><code>node --watch server.js</code></pre>

### Para rodar o prisma, digite o seguinte código no terminal
<pre><code>npx prisma studio</code></pre>

<hr>

![image](https://github.com/user-attachments/assets/492a5362-06e7-406d-9445-166370291169)
<br>
Prisma rodando na porta 5555, visualizando os dados do MongoDB

## Testes

Os testes foram realizados em um ambiente chamado Thunder Client tem funcionalidade semelhante ao PostMan, porém dentro da IDE do VsCode

![image](https://github.com/user-attachments/assets/4507a063-318d-4a94-9bde-ebae743d0630)
<br>
Request criadas usando métodos http (Get, Put, Delete, Post)

![image](https://github.com/user-attachments/assets/78eac864-fdaf-4ca7-b62e-84afc535b214)
<br>
Exemplo de Get
<hr>


