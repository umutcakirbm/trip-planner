# Plan your trip: Tiqets Frontend Assignment

Thanks for applying! This assignment allows us to assess your Frontend skills, specifically the technical expertise and knowledge we look for in a fellow Frontend Developer.

## The app to be built

You will build a product searcher, where users will select a Country, City and Date, and then a list of products will be shown based on those search options.

The app is responsive to the screen width. For simplicity's sake, we'll focus on 2 sizes and refer to them as _mobile_ and _desktop_.

### Design specification

[Figma Design Link](https://www.figma.com/file/6qsa896sJurITBaw6sw1ml/Front-end-assignment?node-id=0%3A1). With this document, you should be able to understand the user flow and all UI states, as well as the CSS styles that should be applied overall.

### How it should work

There are essentially 3 main sections in the app:

### 1) Country and City filters.

- On mobile, the filters should be on top of each other. On desktop, they should be next to each other.
- Initially, neither filter will have a selected value. The City filter should be disabled, and only become enabled after a Country is selected.
- The Country filter will list all possible Countries, after selecting a Country, the City filter will list only the Cities corresponding to the selected Country.
- The data for the Countries and Cities is provided by a JSON API. [See details](#apis) below.

### 2) Date Picker

- On mobile, at least the first 4 Dates should be shown. As the viewport gets wider, then up to 7 Dates should be shown.
  - Note: the design shows 5 Dates on Mobile, as there is enough available space on devices with a 375px wide viewport, but please also consider smaller viewports.
- Initially, all Dates will be disabled. Only after selecting a City the Dates will become enabled.
- The data for the avaiable Dates is provided by a JSON API. [See API details](#apis) below.

### 3) Search Results / List of Products / Product Card

- After selecting a Date, the app should make a request to the product search JSON API (provided, [see API details](#apis) below). The response will be a list of products, which data will be used to render the list of results.
- Each product is visually represented by a Product Card. The card has a different layout between mobile and desktop.
- Each card shows: title, short description, image, and price.
- Some products include a _discount percentage_. In this case, a _pre-discount price_ should be shown in the card. This _pre-discount_ is **calculated** based on the _price_ and the _discount percentage_.
- The product image on the card has a different aspect ratio between mobile and desktop. The images should be lazy-loaded.
- Clicking the card should navigate users to the Tiqets.com page for that product.
- On mobile, the cards should be shown in a single column - in other words, on top of each other. On desktop, they should be shown in 2 columns, as shown in the [Design specification](#design-specification).
- For the layout of this list of products, **CSS Grid** should be used.
- If no products were found, show a message: "Nothing found, please try a different date".

## APIs

We provide all the JSON API endpoints.

### City and Country

```
localhost:3001/locations
```

This endpoint returns the fixed list of countries as well as the list of cities and the cities' IDs, all in a single response.

```
{
  "The Netherlands": [
    [111, "Amsterdam"],
    [222, "Rotterdam"],
    [333, "Utrecht"],
    [444, "Delft"],
    ...
  ],
  "United States": [
    [111, "New York City"],
    [222, "Seattle"],
    ...
  ],
  ...
}
```

### Dates

```
http://localhost:3001/available_dates
```

This endpoint returns the fixed list of Dates that should be shown, all in a single response.

```
{
  "dates": ["2021-07-30", "2021-07-31", ... , "2021-08-07"]
}
```

### Product Search

```
http://localhost:3001/products?date=2021-07-31&city_id=66154
```

This endpoint returns a dynamic list of products, based on the URL parameters passed.

- `city_id` - the ID of a city. Number. Required. Example: `city_id=321`.
- `date` - date, formatted in ISO. String. Required. Example: `date=2021-12-25`.

```
[
  {
    "product_url": "https://www.tiqets.com/en/new-york-c260932/one-world-observatory-skip-the-ticket-line-p974086",
    "image": "https://aws-tiqets-cdn.imgix.net/images/content/872e70b2fd394cbdb523f4c47291d185.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=70&s=b2588a1809f5506cc00ac96653e41da8",
    "id": 974086,
    "title": "One World Observatory: Skip The Ticket Line",
    "price": 31.3,
    "discount_percentage": 15,
    "summary": "Looking for the best views in town? We can do one better – how about the best views in the Western Hemisphere? The newly completed One World Trade Center stands proud as the 6th tallest building in the world, and now you can blast straight to the top and enjoy breathtaking views of New York City and beyond.",
    "city_id": 260932,
    "available_dates": [
      "2021-07-30",
      "2021-07-31",
      ...
    ]
  },
  ...
]
```

Note: the images are hosted by Imgix's CDN. [Read their documentation](https://docs.imgix.com/apis/rendering/size) on how to control the size of the image.

## General guidelines

Here's a few things that we generally expect in the delivery:

- A full implementation of the visual design and the functionality presented above.
- As few external or 3rd-party libraries as possible.
- Use of semantic, accessible markup.
- All scripting must be written in TypeScript.
- For styling, you're welcome to use any tool you prefer.

## General information

- The app was bootstrapped with Create React App.
- In this repo we're using npm, and not yarn.
- It should work in Node v12 or above.

## Development

In order to get started working:

1. Install all necessary dependencies: `npm install`.
2. Run `npm run start` to start the API server and the react app in development mode. That's it!

## Delivery

Once you have finished the assignment, please answer the questions in `COMMENTS.md`. We're curious to your findings!

To send your code to us, you can either:

1. Zip the whole directory and send us the file (please do not include the `node_modules` main directory!) or
2. Publish your code into a GitHub repository and send us the link.
   If you prefer to keep it private, you can add the **`tiqets-fe`** user as a project collaborator,
   so we can access it.
3. We should be able to run `npm install && npm run build` and get the app bundled for production use.
