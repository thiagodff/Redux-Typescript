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

## Saga

Toda função do Saga deve ser um generator

Utilizamos o yield do generator com o call ou put

call -> para realizar uma chamada assíncrona, promises (ex: api)

put -> disparar um dispatch na aplicação

## Outros assuntos para masterizar o Redux

- Redux Persist (salva os dados da store no local storage)
- Redux dev tools (utilizado para debug, plugin para o browser e deve ser configurado na store)
- Immer (trabalhar com imutabilidade no javascript, converte uma sintaxe mutável para imutável)

## Manipulação de Dados no Reducer com o Immer

Você pode manipular os dados no reducer utilizando uma lib chamada immer, como vemos no código abaixo:

https://github.com/ARTHURPC03/Redux/blob/master/src/store/modules/cart/reducer.ts

```ts
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from "redux";
import produce from "immer";
import { ICartState, ActionTypes } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
```
