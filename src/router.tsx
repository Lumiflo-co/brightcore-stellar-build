import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  // TanStack still performs one default "scroll to top" after the initial
  // route render, even when restoration caching is disabled. If a visitor
  // scrolls immediately after refreshing, that delayed initial reset can pull
  // them back to the hero. Skip only that first automatic reset.
  router.resetNextScroll = false;

  return router;
};
