import { ParkmePage } from './app.po';

describe('parkme App', () => {
  let page: ParkmePage;

  beforeEach(() => {
    page = new ParkmePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
