import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export const useHoldings = () => {
    const queryClient = useQueryClient();

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
        retry: false
    });

    const { mutate: buyStock, isPending: buyingStock } = useMutation({
        mutationFn: async (stockData) => {
            try {
                const { name, quantity, cost } = stockData;
                console.log(JSON.stringify({ name, quantity, cost }));

                const response = await fetch('/api/holding/buy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, quantity, cost })
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Bought Stock");
            queryClient.invalidateQueries({ queryKey: ['holdings'] });
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const { mutate: sellStock, isPending: sellingStock } = useMutation({
        mutationFn: async (stockData) => {
            try {
                const { name, quantity, price } = stockData;

                const response = await fetch('/api/holding/sell', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, quantity, price })
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Sold Stock");
            queryClient.invalidateQueries({ queryKey: ['holdings'] });
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { allHoldings, isLoading, buyStock, buyingStock, sellStock, sellingStock };
}