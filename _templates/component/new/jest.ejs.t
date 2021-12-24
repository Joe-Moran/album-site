---
to: "src/components/<%= path %>/__tests__/<%= h.changeCase.paramCase(name) %>.test.js"
---

import { render } from '@testing-library/vue';
import <%=name%> from '@/components/<%= path %>/<%= name %>.vue';

describe('<%= name %>.vue', () => {
  /**
    * Variables
    */
  const defaultProps = {};
  let wrapper;
  let <%=h.changeCase.camelCase(name)%>;

  /**
    * Setup
    */
  beforeEach(() => {
    wrapper = render(<%= name %>, { propsData: defaultProps, slots: {} });
    <%=h.changeCase.camelCase(name)%> = wrapper.getBy(); // FILL IN HERE
  });

  afterEach(() => {
    wrapper.unmount();
    <%=h.changeCase.camelCase(name)%> = null;
  });

  it('Renders', () => {
    expect(<%=h.changeCase.camelCase(name)%>).toBeInTheDocument();
  });
});
