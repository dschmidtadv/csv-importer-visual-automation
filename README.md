# csv-importer-visual-automation

If you have **thousands** of pages on your site and need to perform visual automation how can we do it?

This CSV-importer will help you to **fetch** all the base urls and reference urls from the `url.sample.csv` file and will create a `scenario.json` file.
## Workflow Diagram

[![Test](https://i.postimg.cc/h4ZnHQHs/Test.png)](https://postimg.cc/5jzDzy9Q)

## Step 1 
## npm install

 - clone repository `https://github.com/dschmidtadv/csv-importer-visual-automation`
 - `cd csv-importer-visual-automation`
 - `npm install`
    
## Step 2
##  Provide CSV file data
 - Open this [csv file](https://drive.google.com/file/d/1Jw4EjXcY4yWTghEePDJ1cnT0d1rwGrbQ/view?usp=sharing) and download it.
 - Put respective label name, url and reference url then save
 - Replace saved csv file with `data/urls.csv` file

## Step 3
## Run

 1. `npm run parse:csv` ( It will generate scenario.json file )
 2. `npm run reference` ( It will create reference screenshots )
 3. `npm run test` ( It will compare the screenshots and will provide a browser visual automation report )
