# Redux, Saga e Typescript

## Pacotes necessários

```sh
yarn add redux react-redux redux-saga
```

```sh
yarn add @types/react-redux @types/redux-saga -D
```

## Estrutura de pastas

```txt
src
|-store (ou redux)
  |-modules (ou features)
    |-auth
      |-actions.ts (tem um type e um payload)
      |-reducer.ts (filtrar as informações para a store, conhecido como Dispatcher)
```

## Tipando as actions

Podemos tipar nossas actions utilizando o AnyAction do redux. <br>
Porém essa abordagem não nos oferece uma intellisense interessante e tipar cada action
pode ser custoso.

Um lib que ajuda bastante nesse quisto é a type-safe-actions:

```sh
yarn add typesafe-actions -D
```
