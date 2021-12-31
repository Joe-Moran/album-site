---
to: "src/<%= path %>/__tests__/<%= h.changeCase.kebab(name) %>.test.js"
---

import { render } from '@testing-library/vue';
import { byRole, byText } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import <%=name%> from '@/<%= path %>/<%= name %>.vue';


 const ui = {
    // place reusable ui queries here via testing-library-selector
  }

it('Does something', () => {

});
