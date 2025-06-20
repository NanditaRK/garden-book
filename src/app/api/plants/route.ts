import {prisma} from '@/lib/prisma'
import { auth } from "../../../../auth";
import { NextResponse } from "next/server";
export async function POST(request: Request){
    const session = await auth();

    if(!session?.user || !session?.user.id){
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    try {
        const data = await request.json()

        const plant = await prisma.plant.create({
            data: {
                ...data,
                postedById: session.user.id,
            },
        });

        return NextResponse.json(plant);

    } catch (err){
        console.error("Error creating plant: ", err);
        return new NextResponse("Internal Server Error!", {status: 500});
    }
};

export async function GET (request: Request ){
    const session = await auth()

    if(!session?.user || !session?.user.id){
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    try{

        const plants = await prisma.plant.findMany({
            where: {
                postedById: session.user.id,

            },
        })

        return NextResponse.json(plants)

    } catch(err) {
        console.error("Error fetching plants", err);
        return new NextResponse("Internal Server Error!", {status: 500});
    }
}