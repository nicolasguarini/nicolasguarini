---
title: 'worldwide-internet-adoption-study'
excerpt: 'Data analysis report about Internet adoption
around the world and how the price, speed and
country s development affects this data.'
service: 'data analysis and visualization'
type: 'personal'
started: '2022-07-07'
finished: '2022-09-16'
link: 'https://github.com/nicolasguarini/worldwide-internet-adoption-study'
---

This project is based on a study about the Internet adoption around the world and how the price, speed and country's development affects this data.

## Modules used
The python modules used for analyze, manipulae and visualize the data, are the following:

- [pandas](https://pypi.org/project/pandas/)
- [matplotlib](https://pypi.org/project/matplotlib/)
- [plotly](https://pypi.org/project/plotly/)
- [seaborn](https://pypi.org/project/seaborn/)
- [kaleido](https://pypi.org/project/kaleido/)

and can be installed by running the command 
```
pip install <module_name>
```

## Project structure


The `datasets/` folder contains the following files.


```python
os.listdir("datasets")
```
    ['GDP2021.csv',
     'HDR2020.csv',
     'worldwide internet prices in 2022 - IN 2022.csv',
     'worldwide internet speed in 2022 - avg speed.csv',
     'worldwide internet users - users.csv']



Datasets used for this projects:
- `worldwide internet prices in 2022 - IN 2022.csv`: Contains informations about the price, plans available, and the price of most expensive and cheapest 1 GB for every country
- `worldwide internet speed in 2022 - avg speed.csv`: Contains the average speed in Mbit per second for every country
- `worldwide internet users - users.csv`: Contains the number of internet users and the total population for every country
- `GDP2021.csv`: Contains the GDP (Gross Domestic Product) per capita for every country. This index measures a country's economic output per person and is calculated by dividing the GDP of a country by its population.
- `HDR2020.csv`: Contains the HDI (Human Development Index) for every country. This index is a summary measure of average achievement in key dimensions of human development.

Sources:
- Worldwide internet data in 2022: [kaggle.com](https://www.kaggle.com/datasets/ramjasmaurya/1-gb-internet-price)
- HDI (Human Development Index) 2019: [hdr.undp.org](https://hdr.undp.org/data-center/documentation-and-downloads)
- GDP per capita (in USD): [data.worldbank.org](https://data.worldbank.org/indicator/NY.GDP.PCAP.CD)


## Data cleaning
The datasets just presented contain a lot of data, however, we will not need all of them and some of them are not consistent, so we have to face a data cleaning process, removing the columns that we do not need and managing null or non-consistent values.

## Dataset Analysis

- **Question 1**: Is there a greater adoption of Internet in more developed countries?
- **Question 2**: Queston 2: Is there a relationship between the average price of navigation and the speed of it?
- **Question 3**: How does the high competition and variety of plans affect the price and number of users?
- **Question 4**: Is a country's low social and economic development the cause of slower internet speeds?
- **Question 5**: Which are the countries with the best ratio between Internet cost and speed? What level of development do they have? Does this convenience involve more users?
