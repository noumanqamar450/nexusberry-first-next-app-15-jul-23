import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    try {
        let users = null;
        if (id !== 0) {
            users = await prisma.user.findUnique({
                where: { id },
                include:{
                    posts: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
        } else {
            users = await prisma.user.findMany({
                orderBy: { updatedAt: "desc" },
                include: {
                    posts: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
        }

        return NextResponse.json({ data: users })

    } catch (error) {
        return NextResponse.json({ data: error })
    }

}

export async function POST(request) {

    const { name, email, image, password } = await request.json();


    try {

        let users = await prisma.user.create({
            data: {
                name,
                email,
                image,
                password,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        return NextResponse.json({ data: users })

    } catch (error) {
        return NextResponse.json({ error })
    }

}

export async function PUT(request) {
    
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));
    
    const { name, password, image } = await request.json();
    
    try {
        await prisma.user.update({
            where: { id },
            data: { name, password, image, updatedAt: new Date() },
        });
        
        return NextResponse.json({ data: 'ok' }, { status: 200 });

    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));
    
    try {
        const res = await prisma.user.delete({
            where: { id },
        })
        return NextResponse.json({ res: true, data: res }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ res: false }, { status: 404 })
    }
}
