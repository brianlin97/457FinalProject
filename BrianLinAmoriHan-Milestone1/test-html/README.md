# Visualization Final

##Mile stone 1
**About the data**

There are 2 parts of our data.

1.Random data of the interval of new birth/death
    "data/Population Counters.csv"
    data source:U.S Census Bureau
    [Link](https://www.census.gov/popclock/)
    This data record the total population of U.S, the birth and death rate.
    We create two normal distributions to simulate the interval between 2 death or 2 birth.

2.Random choice of county to locate where that birth/death happens
    "data/Most Populous.csv"
    data source:U.S Census Bureau
    [Link](https://www.census.gov/popclock/)
    This data record each county's population. The fraction of the county's population in U.S. population
    will be used as the probability when we tried to randomly choose a county.

    API:
    [Link](https://api.census.gov/data/2017/pep/)
    data source:U.S Census Bureau
    Check the birth and death amount in each county.
    It also can be used as our basis for location simulation
