import {instance} from "./instance";

//query types
export type GetBeersQueryParams = {
  beer_name?: string
  page?: number
};

//dataTypes
interface BeerDetailedVolume {
  "value": number,
  "unit": string
}

interface BeerDetailedIngredients {
  "name": string,
  "amount": BeerDetailedVolume
}

export type BeerType = {
  "id": number,
  "name": string,
  "tagline": string,
  "first_brewed": string,
  "description": string,
  "image_url": string,
  "abv": number,
  "ibu": number,
  "target_fg": number,
  "target_og": number,
  "ebc": number,
  "srm": number,
  "ph": number,
  "attenuation_level": number,
  "volume": BeerDetailedVolume,
  "boil_volume": BeerDetailedVolume,
  "method": {
    "mash_temp": Array<{
      "temp": BeerDetailedVolume,
      "duration": number
    }>,
    "fermentation": {
      "temp": BeerDetailedVolume
    },
    "twist": null | string
  },
  "ingredients": {
    "malt": Array<BeerDetailedIngredients>,
    "hops": Array<BeerDetailedIngredients &
      {
        "add": string,
        "attribute": string
      }>
    "yeast": string
  },
  "food_pairing": string[],
  "brewers_tips": string,
  "contributed_by": string,
}

export type GetBeersResponseDataType = Array<BeerType>;


//api for beers
export const beersAPI = {
  getBeers(params: GetBeersQueryParams) {
    return instance.get<GetBeersResponseDataType>("", {
      params: {
        ...params,
      }
    })
      .then(response => response.data);
  },
}
