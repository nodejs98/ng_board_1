import { BoardPage } from './app.po';

describe('board App', () => {
  let page: BoardPage;

  beforeEach(() => {
    page = new BoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
