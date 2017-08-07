import { CBPicsPage } from './app.po';

describe('cbpics App', function() {
  let page: CBPicsPage;

  beforeEach(() => {
    page = new CBPicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
