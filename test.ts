import test from 'ava';
import { Desafio } from './index';

test('Testear el método static crearArrayDeObjetos', (t) => {
  const res = Desafio.crearArrayDeObjetos([1, 2, 3, 4], 'a');
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
  t.deepEqual(res, array);
});

test('Testear el método filtrarPor', (t) => {
  const arrayOriginal = [
    { a: 100, unTexto: 'hola' },
    { a: 34, unTexto: 'chau' },
  ];
  const res = Desafio.filtrarPor(arrayOriginal, 'unTexto', 'c');
  t.deepEqual(res, [{ a: 34, unTexto: 'chau' }]);
});

test('Testear el método buscarPorProp', (t) => {
  const arrayOriginal = [
    { a: 100, unTexto: 'hola' },
    { a: 34, unTexto: 'chau' },
  ];
  const res = Desafio.buscarPorProp(arrayOriginal, 'unTexto', 'chau');
  t.deepEqual(res, { a: 34, unTexto: 'chau' });
});

test('Testear el método ordenarPor', (t) => {
  const arrayOriginal = [
    { a: 100, unTexto: 'hola' },
    { a: 34, unTexto: 'chau' },
  ];
  const res = Desafio.ordenarPor(arrayOriginal, 'a');
  t.deepEqual(res, [
    { a: 34, unTexto: 'chau' },
    { a: 100, unTexto: 'hola' },
  ]);
});
