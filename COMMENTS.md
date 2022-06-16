Please answer these questions once you have finished the assignment.

**What did you think of the assignment?**

_First of all, it may seem like it took a long time but in my current company, I am on call person for this week so I completed this assignment whenever I find time to code._ 🔥

_I think, the assignment was great to improve my new skills about Redux Toolkit and RTK Query. I used Redux and Saga middleware with it before but I used the Redux Toolkit at first time. I see that it is super easy to handle Redux pattern with Redux Toolkit. This assignment can be developed in a easier way also but it has some tricks which are wanted to be completed. And this tricks can be decisive in the assignment._

_I think the assignment focuses more on UI/UX features. For example; Display of loading and error states on the screen, updating filter and list states by actions, mobile and desktop compatibility._

**Which part did you consider the most difficult, or did you spend most of your time on?**

_I used Redux Toolkit and RTK Query first time, so I thought about using them together. Actually I could use only RTK Query with hooks. But I wanted to create a scalable structure with generic convention. So creating the structure took some time. And creating SASS mixins for theme and generic classes took time because generally I use style libraries like Bootstrap, Material UI. But I didn't want to use 3rd party libraries for this assignment._

_Testing also took some time because I couldn't find time to write them, theme hook testing was a little difficult and solving it took some time. 🧭_

_Using CSS Grid for layout was a little difficult also because I generally use flex layout. But I adapted and created the pixel perfect layout similar with Figma design 👍 And I think grid layout easier than flex layout for some cases like responsive grid columns and rows._

**Which parts were you not able to fully implement?**

_I implemented all of the required parts in the application. I also created an affix for filter panel to be seen when the page is scrolling down. So the user can change the filter whenever he/she wants. And also there are loading/fetching spinners for filters and product listing._

_And you can switch the template to dark mode if you want to see dark template. It works related to device color scheme and listens to media event changes.🚀_

_The only thing which I couldn't complete is remaining test cases which are units and e2e. They were not required in the documentation but I think it should be requirement._

**What would you add or improve if you had more time?**

_I would like to add Storybook first. Because I love to play with components on that panel. And the other thing is technical documentation like JSDoc. It is similar to Storybook but it is not related component rendering only._

_I also would like to add NotFound page with React Router. And I would like to add docker and compose file to deploy application and deploy it on AWS or Google Cloud, etc._

_And for pagespeed optimization, I would like to use Google Pagespeed Insights with public domain name._

**What would you do differently if it was a bigger application?**

_I created this application structure thinking on it. I think, the general coding convention can be improved by updating prettier and eslint configuration. We can add commit hooks to prevent some rule errors caused by eslint. We should setup a CI/CD tool and manage deployments, versions. We can create task based environments related to task branch for QA testing. For redux pattern, I would like to use combine reducers in PageReducer. I created this structure thinking on micro frontend architecture also. So if we want to separate this application, we can separate components completely, pages with their related services can be separated, common services and root application also can be separated._
