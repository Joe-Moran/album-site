import { render } from '@testing-library/vue';
import TheSoundpacksView from '@/views/TheSoundpacksView.vue';

it('Renders device path count text with singular version of "patch" when patch count = 1', () => {
  const { getAllByText } = render(TheSoundpacksView, {});
  expect(getAllByText(/1 patch/i).length).toBeGreaterThanOrEqual(1);
});

it('Renders device patch count text with plural version of "patch" when patch count > 1', () => {
  const { getAllByText } = render(TheSoundpacksView, {});
  expect(getAllByText(/[2-9] patches/i).length).toBeGreaterThanOrEqual(1);
});
