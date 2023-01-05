// describe('TESTANDO ALGUMA COISA', () => {
//   it('should return one', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
// });

// describe('TESTANDO OUTRA COISA', () => {
//   test('should return Luiz', () => {
//     const nome = 'Luiz';
//     expect(nome).toBe('Luiz');
//   });
// });

import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
