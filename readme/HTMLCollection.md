# DOM

## HTMLCollection & NodeList

##### 2022.2.22

---

## Intro

> **DOM API가 여러 개의 결과값을 반환하기 위한** DOM Collection Object

### An `HTMLCollection` in HTML DOM is live

- It is automatically updated when the underlying document is changed.

- Node object의 상태 변화를 실시간으로 반영하는 **Live object**

  - `HTMLCollection` : 언제나 live object로 동작
  - `NodeList` : 대부분의 경우 Node object의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live object로 동작하지만, 경우에 따라 live object로 동작할 때가 있음

- Array-like object & Iterable

  - `for ... of` 문으로 순회 가능
  - `spread operator`, `Array.from` 사용하여 배열로 변환 가능

- It is a good idea to make a copy to iterate over if adding, moving, or removing nodes.
  - 예상과 다르게 동작할 때가 있어 다루기 까다롭고 실수하기 쉽다. 노드 객체의 상태 변경과 상관없이 안전하게 DOM Collection을 사용하려면 배열로 변환하여 사용할 것. 배열의 유용한 고차 함수도 사용할 수 있다.

## `HTMLCollection`

## `NodeList`

---

### Reference

- JavaScript Deep Dive
- [MDN | HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
