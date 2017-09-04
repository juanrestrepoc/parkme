import { Parkme2Page } from './app.po';

describe('parkme2 App', () => {
  let page: Parkme2Page;

  beforeEach(() => {
    page = new Parkme2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
