# Notes:

- added airbnb linting rules to keep code standard high, in production would prefer to use prettier <https://prettier.io/>
- Have implemented the features: 
    * shows list of todos
    * shows todo details
    * allows user to create new todos
    * user can mark a to-do as done (persisted to the server)
    * user can filter the list according to all/done/incomplete
    * Testing - Well, not quite!!! I had a problem getting the latest versions of Jest and Enzyme working with the version of Babel that I started with, an attempt to run with an updated version of Babel caused the whole project to fail to compile, and unfortunately for such a time frame it's too risky to start investigating the Babel problem. 
    __* I have included a tests folder with example tests that you would normally expect for this project *__

# TO DO:
The 2 big things not done here are:
- Network error handling. This again is due to time constraints. The library I'm using [redux-promise-middleware](https://www.npmjs.com/package/redux-promise-middleware) does make this super simple, there are a few like it, it's not technically difficult to write your own redux async library but it's not that interesting either.
- Accessibility, This is not fully tested for use with keyboard, screen readers or other alternative access methods.

Please do not hesitate to email me or call me. 
James Smith
07847 100 344
zz.james@gmail.com
