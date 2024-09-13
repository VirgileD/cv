const puppeteer = require('puppeteer');


(async() => {
    const outputDir = __dirname + '/../build';
    console.log("Lauching puppeteer")
    const browser = await puppeteer.launch({ headless: false });
    console.log(await browser.version());
    console.log("Creating page")
    const page = await browser.newPage();
    console.log("Navigating page")
    await page.goto(`http://localhost:5173?${process.argv[2]}`, {
        waitUntil: 'networkidle0'
    });
    console.log("Generating pdf")
    await page.pdf({
        path: outputDir+'/cv.pdf',
        printBackground: true ,
        format: 'A4',
        border: 0,
        margin: {
            top: '1.0cm',
            right: '1.0cm',
            bottom: '1.0cm',
            left: '1.0cm',
        },
    });
    await browser.close();
})();





