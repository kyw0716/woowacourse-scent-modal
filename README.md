# ScentModal 모달 라이브러리

context api를 사용해 간단한 모달을 구현할 수 있는 라이브러리 입니다.

<br/>

## 설치 방법

```sh
npm install @kyw0716/woowacourse-scent-modal
```

<br/>

## 구성

- ModalProvider
- useModalStateContext
- useModalActionContext
- BottomSheet

<br/>

## 사용 방법

<br/>

### ModalProvider 사용하기

```js
import { ModalProvider } from '@kyw0716/woowacourse-scent-modal';

function App() {
  return (
    <ModalProvider>
      <UsingModalComponent />
    </ModalProvider>
  );
}
```

<br/>

### BottomSheet 템플릿 불러오기

```js
import { BottomSheet } from '@kyw0716/woowacourse-scent-modal';
```

<br/>

### context 사용하기

```js
function UsingModalComponent() {
  const { isOpen } = useModalStateContext();
  const { openModal } = useModalActionContext();

  return (
    <>
      {isOpen && <BottomSheet>모달</BottomSheet>}
      <button onClick={openModal}>모달 열기</button>
    </>
  );
}
```

<img src="./modal-example.gif" style="width: 200px;"/>

<br/>
