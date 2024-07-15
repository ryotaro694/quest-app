
import Link from 'next/link';
import { ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Button
} from "@/components/ui/button"

import { BreadcrumbWithCustomSeparator } from "./components/breadcrumb"
import { Payment, columns } from "./components/quest/columns"
import { DataTable } from "./components/quest/data-table"
import { prisma } from '@/utils/prisma';

type CardProps = React.ComponentProps<typeof Card>

export default async function Home({ className, ...props }: CardProps) {
  const data = await getData()
  return (
    <main>
      <div className="py-3 mb-2">
        <h1 className="font-bold text-2xl">DashBoard</h1>
        <BreadcrumbWithCustomSeparator></BreadcrumbWithCustomSeparator>
      </div>
      <Card className={cn("w-full", "shadow-xl", className)} {...props}>
        <CardHeader>
          <CardTitle>クエストを受注する</CardTitle>
          <CardDescription>Accept a lot of Quests</CardDescription>
        </CardHeader>
      <CardContent className="container mx-auto grid gap-4">
        <DataTable columns={columns} data={data} />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href="/quest">
          <Button className="w-full">
            <ZoomIn className="mr-2 h-4 w-4" />さらに確認する
          </Button>
        </Link>
      </CardFooter>
      </Card>
    </main>
  );
}

async function getData(): Promise<Payment[]> {
  const users = await prisma.user.findMany(); 
  console.log(users)
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}
