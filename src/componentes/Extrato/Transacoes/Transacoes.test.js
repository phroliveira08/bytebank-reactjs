import { render, screen } from '@testing-library/react';
import Transacoes from '.';
import estilos from '../Extrato.module.css';

test('Validando a renderização de atualização de props', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };
  const { rerender } = render(
    <Transacoes estilos={estilos} transacao={transacao} />
  );

  const tipoTransacao = screen.getByTestId('tipoTransacao');
  const valorTransacao = screen.getByTestId('valorTransacao');

  expect(tipoTransacao).toHaveTextContent(transacao.transacao);
  expect(valorTransacao).toHaveTextContent(transacao.valor);

  const novaTransacao = {
    transacao: 'Transferência',
    valor: 50,
  };

  rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);

  const novoTipoTransacao = screen.getByTestId('tipoTransacao');
  const novoValorTransacao = screen.getByTestId('valorTransacao');

  expect(novoTipoTransacao).toHaveTextContent(novaTransacao.transacao);
  expect(novoValorTransacao).toHaveTextContent(novaTransacao.valor);
});
