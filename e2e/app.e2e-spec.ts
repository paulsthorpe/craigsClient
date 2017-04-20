import { CraigsClientPage } from './app.po';

describe('craigs-client App', () => {
  let page: CraigsClientPage;

  beforeEach(() => {
    page = new CraigsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
