# Blog

 * Creating a way to communicate our express server through the browser (http://127.0.0.1:3000/)
 * O browser executa a operação READ quando se visita um site, com isso eles enviam uma solicitação GET para o browser mostrar o que o servidor mandar do banco [em express : app.get(endpoint, callback)]
 * endpoint é o valor que vem depois do dominio(se vc visita: http://127.0.0.1:3000/login o endpoint é "/login")
 * callback diz ao servidor o que fazer quando o endpoint solicitado corresponder com o endpoint indicado 

 ```js 

    app.get('/', function (req, res) {
    // do something here
        res.send('Hello World')
    })

 ```

 Para rodar coloca no terminal: 
    ```
    $ node server.js
    ```

 Então, para não precisar ficar fazendo isso toda vez usamos o Nodemon que reinicia o servidor automaticamente:
 (cria a pasta node_modules)
    ```
    $ npm install nodemon --save-dev
    ```

 Logo, adicionamos isso no script 

```js
 "scripts": {
    "dev": "nodemon server.js"
  }
```
e podemos rodar por meio do comando: 
    ```
    $ npm run dev
    ```