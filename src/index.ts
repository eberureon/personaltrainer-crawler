import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const PORT = 8080;
const locations = ['München', 'Leipzig', 'Dortmund'];

interface DataObject {
  name?: string;
  website?: string;
}

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let dataList: DataObject[] = [];

  for (const location of locations) {
    await page.goto(
      `https://www.personalfitness.de/suche/region-${location}.html`,
      { waitUntil: 'networkidle2' },
    );

    await page.waitForSelector('.thumbnailgrau');
    const pageData = await page.evaluate(() => {
      const pageDataList: DataObject[] = [];
      const moreTrainer = document.querySelector('#part2');
      moreTrainer.innerHTML = moreTrainer.innerHTML.replace(/(<!--|-->)/gi, '');

      const elements = document.querySelectorAll('.caption');
      for (const element of elements) {
        // @ts-ignore
        const name = element.childNodes[1].innerText;

        if (name) {
          pageDataList.push({ name });
        }
      }

      return pageDataList;
    });

    dataList = dataList.concat(pageData);
  }

  await browser.close();
  return dataList;
};

scrape().then(value => {
  app.get('/', async (req, res) => {
    res.send(value);
  });
});

app.listen(PORT, () => {
  /* tslint:disable */
  console.log(`Access your crawler now on http://localhost:${PORT}`);
  /* tslint:enable */
});
