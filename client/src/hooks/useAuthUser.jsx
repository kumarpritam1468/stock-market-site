import { useQuery } from "@tanstack/react-query";

export const useAuthUser = () => {
    const {data:authUser} = useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const response = await fetch('/api/auth/me');

                const data = await response.json();

                if(!response.ok) throw new Error(data.error || "Something Went Wrong");

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        retry:false
    });

    return authUser;
}