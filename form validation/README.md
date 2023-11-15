# How To Run
1- run `npm i`
2- Open `form/index.html` and serve it using live server
3- Go to tests/test.js paste the url of the served form here 
    ```
    beforeEach(async function() {
        await driver.get('url-goes-here');
    });
    ```
4- run `npm test`