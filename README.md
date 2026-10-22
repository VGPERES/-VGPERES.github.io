# VG PERES — site institucional

Este repositório está preparado para publicar um site estático pelo GitHub Pages.

## Arquivos do site
Coloque na raiz do repositório o conteúdo extraído de `VG_PERES_site_atualizado.zip`, mantendo os caminhos:
- `index.html`
- `styles.css`
- `script.js`
- `assets/` (incluindo imagens, vídeos e antes/depois)

## Publicação
O workflow em `.github/workflows/pages.yml` publica automaticamente o conteúdo da raiz quando houver um push para `main`.

Depois que os arquivos do site estiverem no repositório:
1. Abra **Settings → Pages** e selecione **GitHub Actions** como origem, se ainda não estiver selecionado.
2. Verifique a aba **Actions** para acompanhar a publicação.
3. Quando comprar o domínio no Registro.br, configure o domínio personalizado em **Settings → Pages** e adicione o arquivo `CNAME` com o domínio escolhido. Não crie um CNAME fictício antes da compra.

## Domínio próprio
O HTML usa caminhos relativos para `styles.css`, `script.js` e `assets/`, portanto não precisa ser reescrito ao conectar um domínio próprio.
