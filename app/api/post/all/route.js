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
                where: { id },
                include: {
                    author: {
                        select: {
                            id: true,
                        },
                    },
                },
            });
        } else {
            posts = await prisma.post.findMany({
                orderBy: { updatedAt: 'desc'},
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
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

