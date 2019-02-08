describe('main page', () => {
  it('animation genre shoud have more than 0 elements', () => {
    // Arrange
    browser.get('http://localhost:8080/');

    // Act
    $('#searchInput').sendKeys('animation');
    $('#genreBtn').click();
    $('#searchBtn').click();

    // Assert
    browser.sleep(1000).then(() => {
      const elements = $$('#movieList .grid');
      expect(elements.count()).toBeGreaterThan(0);
    });
  });
});
