import { useQuery } from "@tanstack/react-query"

export const useAllStocks = () => {
    const {data:allStocks, isLoading} = useQuery({
        queryKey:['allStocks'],
        queryFn: async () => {
            try {
                const response = await fetch('/api/stock/all');

                const data = await response.json();

                if(!response.ok) throw new Error(data.error || "Something Went Wrong");

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry:false
    });

    return {allStocks, isLoading};
}