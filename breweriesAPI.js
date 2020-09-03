export const baseURL = "https://api.openbrewerydb.org/breweries";

// info https://www.openbrewerydb.org/documentation/01-listbreweries

export const mockBreweries = [
  {
    id: 2,
    name: "Avondale Brewing Co",
    brewery_type: "micro",
    street: "201 41st St S",
    city: "Birmingham",
    state: "Alabama",
    postal_code: "35222-1932",
    country: "United States",
    longitude: "-86.774322",
    latitude: "33.524521",
    phone: "2057775456",
    website_url: "http://www.avondalebrewing.com",
    updated_at: "2018-08-23T23:19:57.825Z",
    tag_list: []
  },
  {
    id: 44,
    name: "Trim Tab Brewing",
    brewery_type: "micro",
    street: "2721 5th Ave S",
    city: "Birmingham",
    state: "Alabama",
    postal_code: "35233-3401",
    country: "United States",
    longitude: "-86.7914000624146",
    latitude: "33.5128492349817",
    phone: "2057030536",
    website_url: "http://www.trimtabbrewing.com",
    updated_at: "2018-08-23T23:20:31.423Z",
    tag_list: []
  }
];

export const getBreweriesByName = async name => mockBreweries;
