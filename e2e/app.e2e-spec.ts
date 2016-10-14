import { Cli00Page } from './app.po';

describe('cli00 App', function() {
  let page: Cli00Page;

  beforeEach(() => {
    page = new Cli00Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
