import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

test('Renderizar nome do usuário na tela', () => {
  const nomeUsuario = 'Joana Fonseca Gomes';
  render(<Cabecalho nomeUsuario={nomeUsuario} />);
  const nomeUsuarioColetado = screen.getByText(nomeUsuario);
  expect(nomeUsuarioColetado).toBeInTheDocument();
});
