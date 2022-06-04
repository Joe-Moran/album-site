import { render } from '@testing-library/vue';
import { byRole } from 'testing-library-selector';

import TheNavigationHeader from '@/components/layout/TheNavigationHeader.vue';

const ui = {
  link: (linkName) => byRole('link', { name: linkName }),
};
const routes = [{ path: '/test-path', name: 'test-path' }];

it('Renders list items with links when passed props.navigationLinks', () => {
  render(TheNavigationHeader, { props: { navigationLinks: routes }, routes });
  expect(ui.link('test-path').get()).toBeInTheDocument();
});
