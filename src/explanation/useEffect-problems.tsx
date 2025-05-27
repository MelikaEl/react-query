// the problems with useEffect and why use react query instead of that

// with useEffect it gets data from backend and it throws error by chance of 10%

// race condition : when we switch between tabs quickly, we see the data of another tab in another one and also we see loading on each page. This is happens because these backend requests can take a different amount of time and we have a delay there (we write a random delay manually in route.ts file). This is the case in real web server because the request can be faster or slower and the access to the database can take different amount of time, so these backend requests can't take the same amount of time

// Based on the provided sources, the section discussing why you shouldn't fetch data in `useEffect` highlights several common problems that arise from this practice. The video creator demonstrates these issues using an example page where data is fetched inside a `useEffect` hook.

// Here are the main problems discussed in that part of the video:

// *   **Race Conditions**:
//     *   When switching between categories quickly, multiple fetch requests are initiated.
//     *   These backend requests can take varying amounts of time to finish.
//     *   If a request for a later category finishes before a request for an earlier category, the UI might briefly show data for different categories one after another or even display data for the *wrong* category.
//     *   This happens because the `useEffect` hook doesn't inherently handle the cancellation of previous requests when the dependency changes.
//     *   Fixing this in `useEffect` requires implementing a "weird ignore flag" and a cleanup function to track whether a request's result should still be applied.

// *   **Empty State Flicker on Refresh**:
//     *   When the page loads, the component initially renders with the loading state set to `false`, causing it to display the "no posts found" message for a brief moment.
//     *   Only after the `useEffect` runs does the loading state correctly become `true`, replacing the empty message with a loading message.
//     *   This is considered a "weird bug" that doesn't look good.
//     *   This issue can be fixed by initializing the `isLoading` state to `true` instead of `false`.

// *   **Stuck Error Messages and Outdated Data**: (we change the 10% error chance to 90% and then when we back the chance to 10% the 90% error remains)
//     *   If an error occurs during fetching, the error message might get stuck and not disappear when the user switches categories.
//     *   Similarly, the previously successfully fetched data (posts) might not be reset properly, leading to the display of outdated data for the currently selected category.
//     *   This highlights the need to correctly manage and reset both the error state and the data state (`posts`) within the `useEffect` logic, specifically within the `try` and `catch` blocks of the fetch operation.
//     *   Fixing this involves explicitly setting the error state and post state back to `undefined` (or their initial empty states) when a new fetch starts or when an error occurs.

// The sources note that while there are solutions to all these problems using `useEffect`, they need to be explicitly remembered and are easy to get wrong. React Query, in contrast, handles these issues automatically "out of the box".

// the main feature of react query is caching, it puts all the data refetch in the catch, so when you switch back to a page that you already fryched before, you cab show the cached data first then fetch the new data in the background and then update the data also it provides automatic features like automatic revalidation and we can implement optimistic updates so that when we do an operation we see the change in the UI immidiately or infinite loading list 
