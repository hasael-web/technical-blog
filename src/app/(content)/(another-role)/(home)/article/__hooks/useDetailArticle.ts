import { useRouter } from "next/navigation";

const useDetailArticle = () => {
  const router = useRouter();

  // get detail first
  // on success riderict to page

  const fetchDetailArticle = (id: number) => {
    router.push(`/article/${id}`);
  };

  return {
    loading: false,
    fetchDetailArticle,
  };
};

export default useDetailArticle;
