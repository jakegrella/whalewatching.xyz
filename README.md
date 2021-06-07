# [whalewatching.xyz](http://whalewatching.xyz)

## View the largest blockchain transactions from the past hour

In the cryptocurrency community, an account that holds a large amount of bitcoin or other cryptocurrency is known as a whale.

In the crypto space, an account that holds a large amount of bitcoin or other cryptocurrency is known as a whale. This app allows a user to view blockchain whale account transactions that exceed $500,000. This is possible because the transaction details of the listed cryptocurrencies are publicly available.

The API being used to retrieve the crypto transaction data is [whale-alert.io](https://whale-alert.io).

### Technologies Used

- [React](https://reactjs.org/) for UI Framework
- [Elastic UI](https://elastic.github.io/eui/#/) for design framework
  - I've never used Elastic UI before, but after using Ant Design recently, I really wanted to test out another design framework. Using a design framework can significantly decrease time spent on design, which is important for a project like this where I am on a time crunch.
  - Update: it took me a bit longer than anticipated to get used to how Elastic UI works, but I enjoyed working with it and learned a lot.
- Pulled crypto icons off of [Coinbase](https://www.coinbase.com/)
- [React Context API](https://reactjs.org/docs/context.html) for state management
  - Could I have used prop drilling since this is a small app? Sure. But it's messy and I don't feel that it's good practice.
  - I used this over redux because it is a smaller application and I wanted to learn more about React Context (only used it once before).
- [axios](https://github.com/axios/axios) for API call
- Used [Heroku](https://heroku.com) for backend of app to route axios call
  - Solves CORS errors
  - Allows protection of API key.
- [Vercel](https://vercel.com) for deployment
  - Why? Comfortable with it, auto-deploy on Github, easy domain linking

### Where I Would Go Next

- App needs testing. I did not have a chance to implement strong testing practices on this application. I understand the importance of both unit and integration tests, and given more time would have liked to build a full test suit to make sure the app is healthy.
- Adding error handling if a user makes too many API calls too quickly (free plan is rate-limited to 10 calls per minute)
- Make an API call when a user first loads the site that wakes the Heroku backend
- Add a stock market style ticker at the top of the site that displays the current prices of crypto assets
- Add the ability for a user to sort transactions by amount
