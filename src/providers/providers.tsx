import { ThemeProvider } from "flowbite-react";
import { RouterProvider } from "react-router-dom";
import { routes } from "../routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { customTheme } from "../config/flowbite";
interface Props {}

const queryClient = new QueryClient();

const Providers = ({}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default Providers;
