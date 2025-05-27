// React Query and TanStack Query refer to the same library, with TanStack Query being the current name for what was formerly known as React Query. It is an open source, full-featured, TypeScript-ready library designed for fetching, caching, synchronizing, and updating server state in web applications. It makes these tasks significantly easier



// Here are the main uses and benefits of React Query / TanStack Query as described in the sources:
// •
// Data Fetching and State Management: Its core functionality revolves around fetching and caching data from an API and handling state management.It simplifies interacting with APIs by providing caching, synchronization, and server state management out of the box.
// •
// Caching: It automatically stores fetched data to avoid redundant API calls. It caches API responses, storing fetched data locally to reduce the need for subsequent fetches. This caching mechanism improves performance and reduces the time to display requested information. When the useQuery hook is called with the same unique key and the data is still in the cache, React Query returns the cached data instead of performing a new fetch. This is particularly useful for handling frequently accessed data.
// •
// Server State Management: It manages the state of fetched data, similar to how Google handles retrieved information. It handles the state management of queries automatically, reducing the need for developers to write and maintain complex state management logic. It does this using the useQuery hook, which returns an object containing the status (loading, error, success), data, and functions to refetch.
// •
// Simplifying Data Fetching Logic: It simplifies fetching data thanks to its simple API and hooks-based approach. Compared to traditional methods like useEffect, it reduces the need for manually maintained state handling. It saves loads of time and effort compared to writing standard data fetching logic manually. It helps remove many lines of complicated code and replaces it with a few lines of TanStack Query logic.
// •
// Performance Optimization: React Query offers numerous performance optimizations. These include intelligent caching, background fetching, and automatic retries. Background fetching keeps data up-to-date while minimizing impact on user experience. 
// •
// Error Handling: It manages errors internally for easy API interaction. It provides built-in error-handling capabilities, allowing developers to handle API errors gracefully.
// •
// Mutations: While the useQuery hook is used for reading data, React Query provides the useMutation hook for "write" operations such as creating, updating, and deleting data (CRUD operations). The useMutation hook allows for easy handling of server mutations and local data updates. It offers a full-featured mutation API with transparent access to the mutation lifecycle callbacks like onMutate, onError, and onSettled. Optimistic updates are a powerful feature available with mutations, allowing the UI to update immediately while the mutation is in progress.
// •    ^^^^^^^^^
// Advanced Querying Techniques: It supports various advanced techniques for complex scenarios. These include pagination, infinite scrolling (useInfiniteQuery hook), dependent queries (enabled configuration), and parallel queries.
// •   ^^^^^^^^^^^
// Improved Developer and User Experience: It helps improve performance, develop responsive designs, and provide seamless user experiences. It significantly makes the job easier when performing CRUD operations. It offers inbuilt usability features like re-validation on focus, network status re-fetching, data pre-fetching, and revalidation based on a time interval. Additional features include scroll restoration, query cancellation, and offline mutation support. Developers often find it makes code cleaner and provides a better developer experience.
// •  ^^^^^^^^^^
// Developer Tools: TanStack Query comes with an official developer tool (TanStack Query DevTools) that displays cached data and allows manipulation, which can save development time.
// •  ^^^^^^^^^^^^^
// Backend Agnostic: It is backend-agnostic with a promise-based fetcher function, meaning you can use it with REST, GraphQL, or any other communication mechanism with libraries like Axios or Fetch API.
// •
// Integration with React Ecosystem: It offers seamless integration with the React ecosystem. Frameworks like Refine extend React Query's hooks for data-intensive applications, providing hooks like useUpdate (extended useMutation) and useList (extended useQuery). It works seamlessly with modern React frameworks like Next.js, complementing their data fetching methods.
// •
// Yes, React Query is written in TypeScript.

// by ensuring type safety for API requests and responses 
// . The library makes heavy use of generics to allow developers to define types for query data, mutation inputs, and outputs 
// .

// As a result, when using React Query with TypeScript, you can define interfaces or types for your data models and apply them directly to hooks like useQuery and useMutation, enabling better IntelliSense, error checking, and overall code quality 

// Type Safety with TypeScript: Using React Query with TypeScript enhances type safety, maintainability, and scalability. React Query relies heavily on Generics (TQueryFnData, TError, TData, TQueryKey) to ensure type safety when fetching and caching data.






//when react is moving toward server side rendering and have frameworks like next.js where we can fetch data directly in server components, is the use of react query necessary? yes, because there are many situtaions that we can't do server side rendering like optimistic updates and infinite loading and frtching data inside a component (you have to do these operations client-side )



//where should we use react query and where should we use state manager like redux or zustand ? react query manages server state but state manager like zustand or redux manages App state. Server state is everything that we fetch from a remote server whereas app state is like a global usestate within your app for example when we have something like multi-step form that doesn't need to immidiately request to the server but just needs to manage some state across multiple pages then we need state manager, but when we need to fetch data from an API we need to use react query like list of posts and numer of the likes that each post has, these are all coming from the server. 



//instead of implementing a database, I use dummy data in this path: app -> api -> posts -> data.ts
//in our server endpoints, we fetch this dummy data similar how we fetch it from a database: app -> api -> posts -> route.ts




