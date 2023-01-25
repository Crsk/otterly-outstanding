import { render } from '@testing-library/react';

import { Banner } from './banner';

describe('Banner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Banner text="asda" />);
    expect(baseElement).toBeTruthy();
  });
});