import { StickyNotesPage } from './app.po';

describe('sticky-notes App', () => {
  let page: StickyNotesPage;

  beforeEach(() => {
    page = new StickyNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sn works!');
  });
});
