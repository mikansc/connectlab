[![Crowdin](https://badges.crowdin.net/devinhouse-connectlab/localized.svg)](https://crowdin.com) ![Testes](https://github.com/mikansc/connectlab/actions/workflows/connectlab_build.yml/badge.svg?branch=main) [![Netlify Status](https://api.netlify.com/api/v1/badges/a7e33b6e-2db0-47a2-a7ce-62ddce4f2733/deploy-status)](https://app.netlify.com/sites/mikalab/deploys)

# DEVInHouse ConnectLab

### Este projeto foi criado como implementação exemplo para os alunos do curso DEVInHouse [ Intelbras ]

Aproveitei o projeto para incluir algumas ferramentas e práticas utilizadas no dia-a-dia de uma empresa real, para que os alunos tenham contato com ferramentas que, muito provavelmente, farão parte do seu trabalho quando formados.

---

## Rodar o front end localmente

Configure as variáveis de ambiente de acordo com o arquivo [`.env.example`](.env.example).

| Variável          | Descrição                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_API_URL`    | URL do Back End                                                                                                                   |
| `VITE_VIACEP_URL` | API para consulta de CEPs utilizada no sistema. (_Se alterar, precisará mudar a estrutura das respostas ao endpoint no projeto!_) |
| `VITE_OW_URL`     | API do Weather API para consulta de previsão do tempo **(não alterar)**                                                           |
| `VITE_WAPI`       | Chave API do Weather API (você precisa se cadastrar e gerar a chave). [Ver o site Weather Api](https://openweathermap.org/api)    |

- Verifique se o back end já está rodando corretamente. [Ver Backend Connectlab](https://github.com/DEVin-Intelbras/connect-lab-server-node)

- Abra o terminal na pasta raiz do projeto e execute o comando

```bash
yarn
```

- Em seguida, execute

```bash
yarn dev
```

---

## Utilizando o docker

Através do docker, você poderá subir o sistema com dados pré-populados e prontos para usar. O usuário padrão para testes é o seguinte:

| Usuário         | Senha    |
| --------------- | -------- |
| admin@teste.com | 12345678 |

Configure as variáveis de ambiente de acordo com o arquivo [`.env.example`](.env.example).

| Variável          | Descrição                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `API_URL`         | URL do Back End                                                                                                                |
| `WEATHER_API_KEY` | Chave API do Weather API (você precisa se cadastrar e gerar a chave). [Ver o site Weather Api](https://openweathermap.org/api) |
| `PORT`            | Porta do app front end                                                                                                         |

- Abra o terminal na pasta raiz do projeto e execute o comando

```bash
docker compose up -d
```

- Acesse `http://localhost:3000`
