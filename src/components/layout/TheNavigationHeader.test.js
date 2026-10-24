import { render } from '@testing-library/vue';
import { byRole } from 'testing-library-selector';
import { createMemoryHistory, createRouter } from 'vue-router';

import TheNavigationHeader from '@/components/layout/TheNavigationHeader.vue';

const ui = {
  link: (linkName) => byRole('link', { name: linkName }),
};
const routes = [{ path: '/test-path', name: 'test-path', component: {} }];

it('Renders list items with links when passed props.navigationLinks', () => {
  const router = createRouter({ history: createMemoryHistory(), routes });
  render(TheNavigationHeader, {
    props: { navigationLinks: routes },
    global: { plugins: [router] },
  });
  expect(ui.link('test-path').get()).toBeInTheDocument();
});
