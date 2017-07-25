import { CalculatorPage } from './app.po';

describe('calculator App', () => {
  let page: CalculatorPage;

  beforeEach(() => {
    page = new CalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
