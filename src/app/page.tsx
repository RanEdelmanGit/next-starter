import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const t = useTranslations("Welcome");
  return (
    
    <div className="container mx-auto flex flex-col space-y-10 justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>צור פרויקט</CardTitle>
          <CardDescription>
            פרוס את הפרויקט החדש שלך בלחיצה אחת.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">שם</Label>
                <Input id="name" placeholder="שם הפרויקט שלך" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">מסגרת</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="בחר" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">ביטול</Button>
          <Button>פרוס</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
