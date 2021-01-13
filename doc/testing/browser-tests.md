# Testes de navegador

O AdonisJs simplifica a escrita de testes funcionais usando o navegador Chrome. Por baixo do capô, ele 
usa o [Puppeteer](https://github.com/GoogleChrome/puppeteer) para iniciar um navegador da web e executar assertions.

Neste guia, aprendemos como abrir um navegador programaticamente e executar testes como se um usuário real estivesse usando seu aplicativo.

> Como o AdonisJs usa o mecanismo do Chrome, você não pode executar seus testes em vários navegadores como o IE ou Firefox. 
> O teste entre navegadores geralmente é implementado para JavaScript de front-end, o que está fora do escopo da documentação do AdonisJs.

## Configuração
O [Puppeteer](https://github.com/GoogleChrome/puppeteer) vem com o Chromium e demora um pouco para baixar e instalar. 
Para pular a instalação do Chromium, defina a variável de ambiente `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`. Se ignorado, 
certifique-se de definir também o caminho personalizado para o Chromium. 

Como o provedor do navegador não é instalado por padrão, precisamos baixá-lo do npm:
```bash
adonis install @adonisjs/vow-browser

# Para pular o download do Chromium
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true adonis install @adonisjs/vow-browser
```

Em seguida, registre o provedor na matriz `aceProviders` do arquivo `start/app.js`:
```js
// start/app.js

const aceProviders = [
  '@adonisjs/vow-browser/providers/VowBrowserProvider'
]
```

## Exemplo Básico
Agora que configuramos o provedor, podemos usar a trait `Test/Browser` para testar em um navegador da web.

Crie um novo teste funcional executando o seguinte comando:
```bash
> adonis make:test hello-world
```

```bash
make: menu de teste
> Select the type of test to create
  Unit test
❯ Functional test
```

Resultado
```bash
create: test/functional/hello-world.spec.js
```

Em seguida, abra o arquivo de teste e cole o seguinte código:
```js
// test/function/hello-world.spec.js

'use strict'

const { test, trait } = use('Test/Suite')('Hello World')

trait('Test/Browser')

test('Visit home page', async ({ browser }) => {
  const page = await browser.visit('/')
  await page.assertHas('Adonis')
})
```

Examinando nosso arquivo de teste ...

1. Registramos a trait `Test/Browser`, que nos fornece um objeto `browser` para fazer solicitações HTTP
2. Visitamos a URL `/` raiz e salvamos a referência ao objeto da página
3. Executamos uma declaração para confirmar se a página HTML contém o texto `Adonis`

Por fim, execute todos os seus testes funcionais por meio do seguinte comando:
```bash
adonis test functional
```
Resultado
```bash
  Hello World
    ✓ Visit home page (978ms)

   PASSED

  total       : 1
  passed      : 1
  time        : 998ms
```

Seu primeiro teste de navegador PASSOU. Parabéns! 🎉

> Se o teste falhou, certifique-se de não ter alterado a saída padrão da rota raiz `/`.

## Caminho do Chromium personalizado

Se você usou a variável de ambiente `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` para instalar o provedor de navegador, 
o Chromium não é instalado por padrão e você mesmo deve passar um caminho executável para o Chromium.

1. Primeiro, baixe o [Chromium](https://chromium.woolyss.com/download/) e coloque-o em um diretório acessível em Node.js.
2. Ao usar a trait `Test/Browser`, defina seu caminho para o executável do Chromium:
```js
trait('Test/Browser', {
  executablePath: '/absolute/path/to/chromium'
})
```
Como alternativa, defina o caminho do executável como um `.env` no arquivo `.env.testing`:
```
CHROMIUM_PATH=/absolute/path/to/chromium
```

## Configuração
As seguintes opções do navegador podem ser configuradas por meio do atributo `Test/Browser`:

**opções**

| Chave                           | Descrição                                                                                               |
|---------------------------------|---------------------------------------------------------------------------------------------------------|
| `headless` <br>Booleano <true>  | Seja para executar testes no modo headless ou iniciar um navegador real.                                |
| `executablePath`<br>String      | Caminho para o executável do Chromium (necessário apenas quando você não usa o Chromium empacotado).    |
| `slowMo` <br>Number             | Número de milisegundos usado para desacelerar cada interação (pode ser usado para ver os testes em câmera lenta).|
| `dumpio` <br>Booleano <false>   | Registrar todas as mensagens do console do navegador no terminal.                                       |

```js
// Exemplo de uso
trait('Test/Browser', {
  headless: false
})
```

Para todas as outras opções, consulte a documentação 
oficial [puppeteer.launch](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions).

## API do navegador
AdonisJs adiciona um invólucro em cima do Puppeteer para torná-lo mais adequado para testes.

A API a seguir é para o navegador principal e objetos de página.

#### browser.visit
Chama o método Puppeteer [page.goto](https://pptr.dev/#?product=Puppeteer&version=v1.8.0&show=api-pagegotourl-options) e tem a mesma assinatura:

```js
test('Visit home page', async ({ browser }) => {
  const page = await browser.visit('/', {
    waitUntil: 'load'
  })

  await page.assertHas('Adonis')
})
```

Você pode acessar o objeto real da página Puppeteer por meio da propriedade `page.page`:

```js
test('Visit home page', async ({ browser }) => {
  const page = await browser.visit('/')

  // objeto da página puppeteer
  page.page.addScriptTag()
})
```

## Interações de página
Os métodos a seguir podem ser usados para interagir com uma página da web.

> Os métodos de interação da página suportam todos os [seletores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

#### type(selector, value)
Digite dentro de um elemento com o seletor fornecido:

```js
const { test, trait } = use('Test/Suite')('Hello World')

trait('Test/Browser')

test('Visit home page', async ({ browser }) => {
  const page = await browser.visit('/')

  await page
    .type('[name="username"]', 'virk')
})
```

Para digitar vários valores, chamadas de método em cadeia:
```js
await page
  .type('[name="username"]', 'virk')
  .type('[name="age"]', 22)
```

#### select(selector, value)
Selecione o valor dentro de uma caixa de seleção:
```js
await page
  .select('[name="gender"]', 'Male')
```

Para selecionar vários valores, passe uma matriz:
```js
await page
  .select('[name="lunch"]', ['Chicken box', 'Salad'])
```

#### radio(selector, value)
Selecione um botão de opção com base em seu valor:
```js
await page
  .radio('[name="gender"]', 'Male')
```

#### check(selector)
Marque uma caixa de seleção:

```js
await page
  .check('[name="terms"]')
```

#### uncheck(selector)
Desmarque a caixa de seleção:
```js
await page
  .uncheck('[name="newsletter"]')
```

#### submitForm(selector)
Envie um formulário selecionado:
```js
await page
  .submitForm('form')

// ou use um nome
await page
  .submitForm('form[name="register"]')
```

#### click(selector)
Clique em um elemento:
```js
await page
  .click('a[href="/there"]')
```

#### doubleClick(selector)
Clique duas vezes em um elemento:
```js
await page
  .doubleClick('button')
```

#### rightClick(selector)
Clique com o botão direito em um elemento:
```js
await page
  .rightClick('button')
```

#### clear(selector)
Limpe o valor de um determinado elemento:
```js
await page
  .clear('[name="username"]')
``` 

#### attach(selector, [files])
Anexe um ou vários arquivos:
```js
await page
  .attach('[name="profile_pic"]', [
    Helpers.tmpPath('profile_pic.jpg')
  ])
```

#### screenshot(saveToPath)
Salve uma captura de tela do estado atual de uma página da web:
```js
await page
  .type('[name="username"]', 'Virk')
  .type('[name="age"]', 27)
  .screenshot()
```

## Esperando por ações
Às vezes, você pode ter que esperar que uma ação tenha efeito.

Por exemplo, você pode ter que esperar que um elemento apareça na página antes de clicar nele,
ou você pode ter que esperar que uma página da web seja redirecionada e assim por diante.

Os métodos a seguir podem ser usados ​​para lidar com esses cenários.

#### waitForElement(selector, timeout = 15000)
Espere até que um elemento apareça dentro do DOM:
```js
await page
  .waitForElement('div.alert')
  .assertHasIn('div.alert', 'Success!')
```

> O tempo limite de espera padrão é 15segundos.

#### waitUntilMissing(selector)
Espere até que um elemento desapareça do DOM:
```js
await page
  .waitUntilMissing('div.alert')
  .assertNotExists('div.alert')
```

#### waitForNavigation()
Aguarde até que uma página tenha navegado adequadamente para um novo URL:
```js
await page
  .click('a[href="/there"]')
  .waitForNavigation()
  .assertPath('/there')
```

#### waitFor(closure)
Espere até que a função de fechamento passada retorne verdadeiro:
```js
await page
  .waitFor(function () {
    return !!document.querySelector('body.loaded')
  })
```

> A closure é executada no contexto do navegador e tem acesso a variáveis como `window`, `document` e assim por diante.

#### pause(timeout = 15000)
Pause a página da web por um determinado período de tempo:
```js
await page.pause()
``` 

> O tempo limite de pausa padrão é 15segundos.

## Lendo Valores
Os métodos a seguir podem ser usados para ler valores de uma página da web.

#### getText([selector])
Obtenha texto para um determinado elemento ou a página inteira:
```js
await page
  .getText()

// ou
await page
  .getText('span.username')
```

#### getHtml([selector])
Obtenha HTML para um determinado elemento ou para a página inteira:
```js
await page
  .getHtml()

// ou
await page
  .getHtml('div.header')
```

#### isVisible(selector)
Descubra se um determinado elemento é visível:
```js
const isVisible = await page
  .isVisible('div.alert')

assert.isFalse(isVisible)
```

#### hasElement (selector)
Descubra se existe um elemento no DOM:
```js
const hasElement = await page
  .hasElement('div.alert')

assert.isFalse(hasElement)
```

#### isChecked(selector)
Descubra se uma caixa de seleção está marcada:
```js
const termsChecked = await page
  .isChecked('[name="terms"]')

assert.isTrue(termsChecked)
```

#### getAttribute(selector, name)
Obtenha o valor de um determinado atributo:
```js
const dataTip = await page
  .getAttribute('div.tooltip', 'data-tip')
```

#### getAttributes(selector)
Obtenha todos os atributos de um determinado seletor de elemento:
```js
const attributes = await page
  .getAttributes('div.tooltip')
```

#### getValue(selector)
Obtenha o valor de um determinado elemento de formulário:
```js
const value = await page
  .getValue('[name="username"]')

assert.equal(value, 'virk')
```

#### getPath()
Obtenha o caminho da página da web atual:
```js
await page
  .getPath()
```

#### getQueryParams()
Obtenha os parâmetros de consulta atuais:
```js
await page
  .getQueryParams()
```

#### getQueryParam(chave)
Obtenha o valor de um único parâmetro de consulta:
```js
await page
  .getQueryParam('orderBy')
```

#### getTitle()
Obtenha o título da página da web:
```js
await page
  .getTitle()
```

## Afirmações
Uma maneira de executar asserções é ler o valor dos elementos de destino e, em seguida, declarar contra esses valores manualmente.

O cliente do navegador AdonisJS fornece vários métodos auxiliares convenientes para executar asserções de página sequenciais para 
simplificar o processo para você.

#### assertHas(expected)
Assegure que a página da web inclui o valor de texto esperado:
```js
await page
  .assertHas('Adonis')
```

#### assertHasIn(selector, expected)
Assertar que um determinado seletor contém o valor esperado:
```js
await page
  .assertHasIn('div.alert', 'Success!')
```

#### assertAttribute(selector, attribute, expected)
Afirme que o valor de um atributo é igual ao valor esperado:
```js
await page
  .assertAttribute('div.tooltip', 'data-tip', 'Some helpful tooltip')
```

#### assertValue(selector, expected)
Afirme o valor para um determinado elemento do formulário:
```js
await page
  .assertValue('[name="username"]', 'virk')
```

#### assertIsChecked(selector)
Assert uma caixa de seleção marcada:
```js
await page
  .assertIsChecked('[name="terms"]')
```

#### assertIsNotChecked(selector)
Afirmar que a caixa de seleção não está marcada:
```js
await page
  .assertIsNotChecked('[name="terms"]')
```

#### assertIsVisible(selector)
Afirme que um elemento é visível:
```js
await page
  .assertIsVisible('div.notification')
```

#### assertIsNotVisible(selector)
Afirmar que um elemento não é visível:
```js
await page
  .assertIsNotVisible('div.notification')
```

#### assertPath(value)
Afirme o valor do caminho atual:
```js
await page
  .assertPath('/there')
```

#### assertQueryParam(key, value)
Afirme o valor de um parâmetro de consulta:
```js
await page
  .assertQueryParam('orderBy', 'id')
```

#### assertExists(selector)
Assegure que existe um elemento dentro do DOM:
```js
await page
  .assertExists('div.notification')
```

#### assertNotExists(selector)
Afirmar que um elemento não existe dentro do DOM:
```js
await page
  .assertNotExists('div.notification')
```

#### assertCount(selector, expectedCount)
Afirme o número de elementos para um determinado seletor:
```js
await page
  .assertCount('table tr', 2)
```
#### assertTitle(expected)
Afirme o título da página da web:
```js
await page
  .assertTitle('Welcome to Adonis')
```

#### assertEval(selector, fn, [args], expected)
Afirma o valor de uma função executada em um determinado seletor (`fn` é executado no contexto do navegador):
```js
await page
  .assertEval('table tr', function (el) {
    return el.length
  }, 2)
```

No exemplo acima, contamos o número de `tr` dentro de uma tabela e afirmamos que a contagem é 2.

Você também pode passar argumentos (`[args]`) para o seletor `fn`:
```js
await page
  .assertEval(
    'div.notification',
    function (el, attribute) {
      return el[attribute]
    },
    ['id'],
    'notification-1'
  )
```

No exemplo acima, afirmamos sobre um determinado atributo do elemento `div.notification`. 
O atributo fornecido é dinâmico e passado como um argumento (`['id']`).

#### assertFn(fn, [args], expected)
Afirma a saída de uma determinada função ( fné executada no contexto do navegador):
```js
await page
  .assertFn(function () {
    return document.title
  }, 'Welcome to Adonis')
```

> A diferença entre `assertFn` e `assertEval` é que `assertEval` seleciona um elemento antes de executar a função.
