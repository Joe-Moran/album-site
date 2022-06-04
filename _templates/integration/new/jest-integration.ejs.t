---
to: "src/<%= path %>/<%= component %>.integration.js"
---

// testing library imports
import { render } from '@testing-library/vue';
import { byRole, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

import <%=component%> from '@/<%= path %>/<%= component %>.vue';






  const ui = {
    // place reusable ui queries here via testing-library-selector
  }





  it('Does Something', () => {
        render(<%= component %>, { propsData: defaultProps, slots: {} });

  });
