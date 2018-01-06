const routes = [
    {
        path: "/",
        state: { page: "home" }
    },
    {
        path: "/page2",
        state: { page: "page2" }
    },
    {
        // 404 wildcard route
        path: "/*:missingPath"
    }
];

export default routes;
