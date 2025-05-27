// https://www.youtube.com/watch?v=_EuPZrr3faU&t=1111s

{/*
    Based on the provided source, here is a summary of the main features of React Query's installation and setup, as explained in the video:

React Query, also known as TanStack Query, is an **async state manager** specifically designed for managing **server data**. It handles the complexities of fetching data from a backend, which is inherently asynchronous and prone to issues due to network delays. Unlike state managers for application state (like Redux or Zustand), React Query focuses on data fetched from a remote server, such as a list of posts or the number of likes.

The video explains why using React Query is preferable to fetching data manually with the `useeffect` hook in React. Manual fetching can lead to several problems, including **race conditions** (where requests finish in an unpredictable order, potentially showing incorrect data), awkward **loading states** on page refresh, and difficulty in managing **error messages**. While these issues can be fixed manually, the solutions are often complex and easy to get wrong. React Query handles these problems automatically out-of-the-box.

The setup process in the video involves a few key steps:

1.  **Installation of Packages**: You need to install the main React Query library and the optional but useful DevTools. This is done using npm: `npm install @tanstack/react-query @tanstack/react-query-devtools`.
2.  **Setting up the `QueryClientProvider`**: To make React Query available throughout your application, you need to wrap your entire app (or the part that needs access) with the `QueryClientProvider`.
    *   This typically involves creating a dedicated provider file (e.g., `react-query-provider.tsx`).
    *   Inside this provider, you create a **single instance of the `QueryClient`**. It's important to create this instance only once and pass it to the `QueryClientProvider`. The video suggests putting the `QueryClient` instance within a `useState` hook to ensure it's not recreated on every render, which would reset the cache.
    *   The `QueryClientProvider` component takes the `QueryClient` instance via its `client` prop.
    *   In frameworks like Next.js, this provider is typically placed in a root layout file (e.g., `layout.tsx`) that wraps the entire application.
3.  **Adding the React Query DevTools**: The DevTools provide a visual interface to inspect the cache, running queries, and mutations, which is very helpful for understanding and debugging. They are added within the `QueryClientProvider`, typically with `initialIsOpen` set to `false`.

Once setup is complete, you can begin fetching data using the **`useQuery` hook**, which is the most basic way to perform a query with React Query.

*   The `useQuery` hook takes two main arguments: a **query key** and a **query function**.
*   The **query key** is an **array** that uniquely identifies the data in the cache. It can contain one or more values. It's crucial to include any variables used to fetch the data (like a category or search term) in the query key array. This ensures that React Query creates separate cache entries for different variations of the data (e.g., posts for 'technology' versus posts for 'design') and triggers a refetch automatically when these variables change.
*   The **query function** is an asynchronous function that contains the actual logic for fetching the data from your backend (e.g., using `fetch` or `axios`). React Query does not fetch the data itself; you provide the function to do it.
*   `useQuery` returns an object that provides access to the fetched `data`, as well as status flags like `isLoading` and `isError`, and the `error` object itself. These states are managed automatically by React Query.

Using `useQuery` with the proper setup automatically provides features like **caching** (showing previously fetched data instantly while fetching newer data in the background) and **automatic retries** on failed requests, leading to a much smoother and more professional user experience compared to manual data fetching. The cache is shared throughout the app via the provider, meaning different components requesting the same data with the same query key will use the same cached entry.
    */}