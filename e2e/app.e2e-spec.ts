import { RadiounPage } from './app.po';

describe('radioun App', function() {
  let page: RadiounPage;

  beforeEach(() => {
    page = new RadiounPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
