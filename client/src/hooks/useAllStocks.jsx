import { useQuery } from "@tanstack/react-query"

export const useAllStocks = () => {
    const {data:allStocks} = useQuery({
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
        }
    });

    return allStocks;
}