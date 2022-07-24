import {
  beersReducer,
  InitStateType,
  setBeers,
  setError,
  setIsFirstSearch, setIsLoading, setPageSearch,
  setQueryTitle,
  setTotalItems
} from "./beersReducer";

let state: InitStateType = {
  isLoading: false,
  isFirstSearch: true,
  kind: '',
  error: '',
  totalItems: 1,
  searchParams: {
    page: 1,
    beer_name: undefined,
  },
  beers: []
}

beforeEach(()=>{
  state = {
    isLoading: false,
    isFirstSearch: true,
    kind: '',
    error: '',
    totalItems: 1,
    searchParams: {
      page: 1,
      beer_name: undefined,
    },
    beers: []
  }
})

let mockResponse = [
  {
    id: 192,
    name: "Punk IPA 2007 - 2010",
    tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
    first_brewed: "04/2007",
    description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url: "https://images.punkapi.com/v2/192.png",
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: "liters"
    },
    boil_volume: {
      value: 25,
      unit: "liters"
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius"
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: "celsius"
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 5.3,
            unit: "kilograms"
          }
        }
      ],
      hops: [
        {
          name: "Ahtanum",
          amount: {
            value: 17.5,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Chinook",
          amount: {
            value: 15,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
      ],
      yeast: "Wyeast 1056 - American Ale™"
    },
    food_pairing: [
      "Spicy carne asada with a pico de gallo sauce",
      "Shredded chicken tacos with a mango chilli lime salsa",
      "Cheesecake with a passion fruit swirl sauce"
    ],
    brewers_tips: "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    contributed_by: "Sam Mason <samjbmason>"
  },
  {
    id: 192,
    name: "Punk IPA 2007 - 2010",
    tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
    first_brewed: "04/2007",
    description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url: "https://images.punkapi.com/v2/192.png",
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: "liters"
    },
    boil_volume: {
      value: 25,
      unit: "liters"
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: "celsius"
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: "celsius"
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: "Extra Pale",
          amount: {
            value: 5.3,
            unit: "kilograms"
          }
        }
      ],
      hops: [
        {
          name: "Ahtanum",
          amount: {
            value: 17.5,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
        {
          name: "Chinook",
          amount: {
            value: 15,
            unit: "grams"
          },
          add: "start",
          attribute: "bitter"
        },
      ],
      yeast: "Wyeast 1056 - American Ale™"
    },
    food_pairing: [
      "Spicy carne asada with a pico de gallo sauce",
      "Shredded chicken tacos with a mango chilli lime salsa",
      "Cheesecake with a passion fruit swirl sauce"
    ],
    brewers_tips: "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    contributed_by: "Sam Mason <samjbmason>"
  }
]
let mockTitle="Mock Title"
let error= {message: "Mock Message"}

it('two beers should be in state', () => {
  let action = setBeers(mockResponse)
  let newState = beersReducer(state, action)
  expect(newState.beers.length).toBeTruthy();
  expect(newState.beers.length).toBe(2);
});
it('title should should same as in mock', () => {
  let action = setQueryTitle(mockTitle)
  let newState = beersReducer(state, action)
  expect(newState.searchParams.beer_name).toBeTruthy();
});
it('errors should be in state', () => {
  let action = setError(error.message)
  let newState = beersReducer(state, action)
  expect(newState.error).toEqual(error.message);
});
it('totalItems should be more then 0', () => {
  let action = setTotalItems(2)
  let newState = beersReducer(state, action)
  expect(newState.totalItems).toBeGreaterThan(0);
});
it('first search should be false after first search', () => {
  let action = setIsFirstSearch(false)
  let newState = beersReducer(state, action)
  expect(newState.isFirstSearch).toBeFalsy();
});
it('search page should be 3', () => {
  let action = setPageSearch(3)
  let newState = beersReducer(state, action)
  expect(newState.searchParams.page).toBe(3);
});
it('isLoading should be true', () => {
  let action = setIsLoading(true)
  let newState = beersReducer(state, action)
  expect(newState.isLoading).toBeTruthy();
});
