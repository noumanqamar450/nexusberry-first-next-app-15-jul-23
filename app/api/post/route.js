import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    try {
        let posts = null;

        if (id !== 0) {
            posts = await prisma.post.findUnique({
                where: { id, published: true, },
                include: {
                    author: {
                        select: {
                            name: true,
                            image: true,
                        },
                    },
                    comment: true,
                },
            });
        } else {
            posts = await prisma.post.findMany({
                where: { published: true, },
                orderBy: { updatedAt: 'desc' },
                include: {
                    author: {
                        select: {
                            name: true,
                            image: true,
                        },
                    },
                    comment: true,
                },
            });
        }

        return NextResponse.json({ data: posts })

    } catch (error) {
        return NextResponse.json({ data: error })
    }

}

export async function POST(request) {

    const { title, content, image, category, published, authorId } = await request.json();

    try {

        let post = await prisma.post.create({
            data: {
                title, 
                content, 
                image, 
                category, 
                published, 
                authorId,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        return NextResponse.json({ data: post })

    } catch (error) {
        return NextResponse.json({ error })
    }

}

export async function PUT(request) {

    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    const { title, content, image, category, published, authorId } = await request.json();


    try {
        await prisma.post.update({
            where: { id },
            data: { title, content, image, category, published, authorId, updatedAt: new Date() },
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
        const res = await prisma.post.delete({
            where: { id },
        })
        return NextResponse.json({ res: true, data: res }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ res: false }, { status: 404 })
    }
}

