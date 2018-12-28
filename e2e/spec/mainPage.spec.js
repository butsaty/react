describe('main page', function () {    
    it('animation genre shoud have more than 0 elements', function () {
        browser.get('http://localhost:8080/');

        $('#searchInput').sendKeys("animation");
        $('#genreBtn').click();
        $('#searchBtn').click();

        browser.sleep(1000).then(() => {
            let elements = $$('#movieList .grid');
            expect(elements.count()).toBeGreaterThan(0);
        });
    });
});