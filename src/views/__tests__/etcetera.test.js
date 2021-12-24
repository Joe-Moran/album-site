import { render } from '@testing-library/vue';
import Etcetera from '@/components/views/Etcetera/Etcetera.vue';

describe('Etcetera.vue', () => {
  /**
    * Variables
    */
  const defaultProps = {};
  let wrapper;
  let etcetera;

  /**
    * Setup
    */
  beforeEach(() => {
    wrapper = render(Etcetera, { propsData: defaultProps, slots: {} });
    etcetera = wrapper.getBy(); // FILL IN HERE
  });

  afterEach(() => {
    wrapper.unmount();
    etcetera = null;
  });

  it('Renders', () => {
    expect(etcetera).toBeInTheDocument();
  });
});
