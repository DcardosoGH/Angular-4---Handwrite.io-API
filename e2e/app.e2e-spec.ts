import { HandWriteAPIPage } from './app.po';

describe('hand-write-api App', () => {
  let page: HandWriteAPIPage;

  beforeEach(() => {
    page = new HandWriteAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
