Project Portfolio

Abstract:

    New York City has been one of the most expensive real estate market in the world. 
    People are usually disencouraged by the high prices of Manhattan but also seek opportunities in the area because of its protect value.
    This interactive map is showing the median prices in each zipcode in New York City with the location of subway stations, park properties and bike routes. 
    I have only found the data up untill 2019 which is pre-covid period, and have some general future data till now. 
    The map is intended for the user to explore the median housing prices in each zip codes and boroughs to allow the user to see the housing price trend.
    The map also included subway stations, park properties and bike routes for the user to see which location has convient public transpotation and amenties. 
    When hovering on the location of the zip code and the subway station, the user can get more information of the local median house price and the station names and lines. 
    Users can close or open each layer as they want to see different years or information without bike routes or subway station. 
    Under the map I have concluded the median prices in each borough each year. And a bar chart showing the ever increasing prices in New York City.
    When looing into the future which means 2020, 2021 and now 2022, we can see that the housing prices is growing rapidly with an unperdictable future.
    I hope this interactive map along with the information and article can help people find trend in the housing prices in New York City and help find a good place that people can afford to consider buying house in or even invest.

Here are some pictures from the project:

    You can access it through image folder.
    You can see the final project deliverable and data cleaning from R code and some of the code I wrote for the project. I also shared some early Brainstoming in the images. 

Data:
    
    The data I used is from NYC open data, I have downloaded the NYC housing transaction from 2003 to 2019, which I clipped the too old data to save the 2016 to 2019. I have also found the data in 2020 and 2021, but after I cleaned the data, there shows too many missing zip code which is not good for showing to the public, so I decided to not include median price information in 2020 and 2021. 

    For the data aggragation part. What I did is I used R to aggreated all the sales price in that year by zip code, and find the median price in that year for each zip code. Then I merged all the median price data together and merged them with the location file. The same for the median price for each year across NYC. 

    I downloaded the NYC subway station data and the bikeline data as well as the park porperties to join it with the location file to present it on the map. 

    With the NYC zip code shapefile, I could join all the data together and create a map through QGIS, and change the color for each layers, for them to show the different price and trend through out date. 

Project Ideation:
    
    I have this idea because the housing price right now is shooting due to the Covid-19 crisis and inflation. I want me first of all and all other people to be informed by the incrreasing price in NYC, and be shocked and making good decision in where to buy or invest their properties. And thank profesor for giving me advice on adding more information on the map for people to have dynamic vision of the place where they want to go.

Project Processes:
    
    Firsr of all,  I created the map joining all the data together and chose two background that is compatible with the map. 

    Second I chose the color for each map and set the scale for each one. And thanks to the person talked to us in class that day, he and many of my classmates pointed out that it is better to have one color for every year of the map, and same scale for each year, because it is easiler to see the trends. 

    Then I added the map title, name and date, and a user guide. Initially, I wrote the user guide under the map, but after the user test section, I found out that how can people see the guide if they cannot scroll under the map, so I added it on the top. Another classmate also said that I should be able to leave some plce blank for the scrooling part, because if the map is all over the place, when you scroll you can only make the map bigger or smaller. So I added some place blank on the right. For the data referencing in the bottom of the page, it used to be very low after the recommendation I added it a little bit higher. 

    For the color of the background I decided to go with the color of the map which is orgrange and black. 

    I also added a barchart to show the price like jumping up through the laders and with the years you can see the ever increasing meidian price in NYC. At the bottom, I added the future data which is now, 2021 2022, which is even higher. The design of puttting the number up and the description down is given from a project profesor shared where they can emphysize the number and show how big the number is. 

    The introduction part is on the right to show the description and the purpose of the project. 



