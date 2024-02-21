
(function ss() {
    //named IIFE
    console.log('entered to function ')
})();

((name) => {
    //unnamed IIFE
   console.log(`Hello ,${name} `);
}) ('user01');

