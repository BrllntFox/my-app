import PlantForm from "@/components/shared/PlantForm";
import { connectToDatabase } from "@/lib/databases";
import {auth} from "@clerk/nextjs"
import { Image, Card, CardFooter, CardHeader, Button, Divider, CardBody, Link } from "@nextui-org/react";


export default async function Home() {
  
  return (
  
  <section className="flex my-auto">  
    <div className="flex w-[400px] h-[640px]  flex-row items-center justify-between gap-8 md:gap-16">
      <PlantForm type="Create" userId={"fakeId"}/>
     </div>

  </section>
  
  );
}
