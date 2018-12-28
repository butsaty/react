describe('main page', function () {    
    it('animation genre shoud have more than 0 elements', function () {
        //Arrange
        browser.get('http://localhost:8080/');

        //Act
        $('#searchInput').sendKeys("animation");
        $('#genreBtn').click();
        $('#searchBtn').click();

        //Assert
        browser.sleep(1000).then(() => {
            let elements = $$('#movieList .grid');
            expect(elements.count()).toBeGreaterThan(0);
        });
    });
});