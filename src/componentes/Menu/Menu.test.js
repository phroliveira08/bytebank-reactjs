import { render, screen } from '@testing-library/react';
import Menu from '.';

test('Renderizando a lista de menus', () => {
  render(<Menu />);
  const listaDeMenus = screen.queryAllByRole('link');
  expect(listaDeMenus.length).toBe(4);
});
