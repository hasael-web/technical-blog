import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyArticles } from "@/mock";
import Link from "next/link";

const ListArticle = () => {
  // dummyArticles
  return (
    <div className="grid grid-cols-3 gap-y-2 gap-x-4">
      {dummyArticles.map((art, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{art.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{art.content}</p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-gray-400">
                {art.author} - {art.publishedAt}
              </p>
              <p className="text-gray-700 text-sm">
                {art.tags.map((i) => (
                  <>{i + ", "}</>
                ))}
              </p>
              <div className="w-full flex justify-end mt-3">
                {/* <Button variant="link">
                  <p className="text-sm text-blue-700 mt-2 ">
                    See Detail <span className="">{"->"}</span>
                  </p>
                </Button> */}
                <DetailArticle id={art.id} key={art.id} />
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ListArticle;

interface IDetailArticleProps {
  id: number;
}

function DetailArticle(props: IDetailArticleProps) {
  const { id } = props;
  return (
    <Link href={`/detail-artikel/${id}`}>
      <Button variant={"outline"}>See Detail</Button>
    </Link>
  );
}
