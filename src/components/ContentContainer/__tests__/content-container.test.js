import { render } from '@testing-library/vue';
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue';

/**
 * @todo
 */
describe.skip('ContentContainer.vue', () => {
  /**
    * Variables
    */
  const defaultProps = {};
  let wrapper;
  let contentContainer;

  /**
    * Setup
    */
  beforeEach(() => {
    wrapper = render(ContentContainer, { propsData: defaultProps, slots: {} });
    contentContainer = wrapper.getBy(); // FILL IN HERE
  });

  afterEach(() => {
    wrapper.unmount();
    contentContainer = null;
  });

  it('Renders', () => {
    expect(contentContainer).toBeInTheDocument();
  });
});
