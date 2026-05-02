# Malubot Web App

Este é o site do Malubot para a EEMTI Profa Maria Luíza Saboia, incluindo o widget de chat para comunicação direta com a Malu.

## Configuração do Widget de Chat

Para que o widget de chat funcione, ele precisa se comunicar com o Google Apps Script que hospeda a lógica da Malu. Você precisa configurar a URL do Web App do Apps Script neste projeto.

### Passos no Google Apps Script:

1. No seu projeto do Google Apps Script (que contém o arquivo `bot_malu.gs`), clique em **Implantar** (Deploy) no canto superior direito.
2. Selecione **Nova implantação** (New deployment).
3. Em "Selecione o tipo", escolha **App da Web** (Web app).
4. Em "Descrição", escreva algo como "Web App Malu 1.0".
5. Em "Executar como", selecione **Eu** (Me).
6. Em "Quem pode acessar", selecione **Qualquer pessoa** (Anyone) para permitir que o site acesse sem exigir login do Google dos visitantes.
7. Clique em **Implantar** (Deploy).
8. Se for a primeira vez, o Google pedirá autorização. Conceda as permissões necessárias.
9. Copie a **URL do app da Web** gerada.

### Passos no React (Vite):

1. Na raiz da pasta `malubot-webapp`, crie um arquivo chamado `.env`.
2. Adicione a seguinte linha no arquivo, substituindo a URL pela que você copiou:

```env
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
```

3. Reinicie o servidor de desenvolvimento se ele estiver rodando (`npm run dev`).

## Rodando o projeto localmente

```bash
cd malubot-webapp
npm install
npm run dev
```
