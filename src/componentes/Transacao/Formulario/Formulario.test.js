import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Validando o componente Formulario', () => {
  test('Renderizando o input', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Verificando a digitação no input', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Ao clicar no botão deve executar a função realizar transação', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');
  userEvent.click(botao);
  expect(realizarTransacao).toBeCalledTimes(1);
});
