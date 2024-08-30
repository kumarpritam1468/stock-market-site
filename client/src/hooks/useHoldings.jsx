import { useQuery } from "@tanstack/react-query"

export const useHoldings = () => {
    const { data: allHoldings, isLoading } = useQuery({
        queryKey: ['holdings'],
        queryFn: async () => {
            try {
                const response = await fetch('/api/holding/all');

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry:false
    });

    return { allHoldings, isLoading };
}