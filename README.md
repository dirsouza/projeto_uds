# Projeto UDS - Açaís Personalizados
Projeto desenvolvido para conceito de avaliação pela [UDS Tecnologia](https://uds.com.br/).

Para esse projeto, as principias tecnologias utilizadas foram:

|             |Link                                           |
|-------------|-----------------------------------------------|
|Docker       |https://docs.docker.com/engine/install/ubuntu/ |
|Vue.js       |https://vuejs.org/                             |
|Vuex         |https://vuex.vuejs.org/                        |
|Vue-router   |https://router.vuejs.org/                      |
|Vuetify      |https://vuetifyjs.com/en/                      |
|Axios        |https://github.com/axios/axios                 |
|TypeScript   |https://www.typescriptlang.org/                |
|JSON Server  |https://github.com/typicode/json-server        |

> Obs.: Tendo em vista que o projeto foi desenvolvido para executar em ambiente dockerizado, as instruções a seguir, levarão em consideração que, o [Docker](https://docs.docker.com/engine/install/ubuntu/
) e [Docker Compose](https://docs.docker.com/compose/install/) já encontram-se devidamente instalados.
> Contudo, a utilização ou não do [Docker](https://docs.docker.com/engine/install/ubuntu/
) fica a critério do testador da aplicação, e nesse sentido, deve-se observar que dentro das pastas `api` e `app`, ambas possuem um arquivo `.env`, onde contém instruções relevantes para a execução das aplicações.

#### Docker
> Na raiz do projeto existe um arquivo `.env`, que contém informações inerentes as portas de acesso via `localhost`, por padrão a aplicação **Frontend** está acessível em `localhost:8080`, e a aplicação **Backend**, em `localhost:8081`.

1. Build dos projeto
    > Com o terminal, navegue até a pasta raiz do projeto (`projeto_uds`) e execute o comando abaixo. O processo de `build` é um pouco demorado devido as instalações das dependências dos projetos. Ao final do processo, deverá aparecer um `log` no terminal, informando onde a `API` estará acessível, **ignore**, pois o link mostrado é onde a mesma estará acessível dentro do container. Nesse ponto, tanto o `frontend` quanto o `backend` já deverão está acessíveis em `localhost` nas portas `8080` e `8081` respectivamente, caso as mesmas não tenham sido modificadas no arquivo `.env` da raiz projeto.
    ```bash
    docker-compose up --build
    ```

2. Derrubar os containeres
    > Para finalizar os containeres, basta executar no mesmo terminal `Ctrl + c`, por segurança, execute o comando abaixo.
    ```bash
    docker-compose down
    ```
