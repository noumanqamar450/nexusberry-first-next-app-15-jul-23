import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));
    const postId = Number(searchParams.get('postId'));

    try {
        let comments = null;

        

        if (id !== 0) {
            comments = await prisma.comment.findUnique({
                where: { id },
                include: {
                    post: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
            });
        } else if (postId !== 0) {
            comments = await prisma.comment.findMany({
                orderBy: { createdAt: "desc" },
                where: { postId },
            });
        } else {
            comments = await prisma.comment.findMany({
                orderBy: { createdAt: "desc" },
                include: {
                    post: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
            });
        }

        return NextResponse.json({ data: comments })

    } catch (error) {
        return NextResponse.json({ data: error })
    }

}

export async function POST(request) {

    const { name, email, comment, postId } = await request.json();

    try {

        const comments = await prisma.comment.create({
            data: {
                name,
                email,
                comment,
                postId,
                createdAt: new Date()
            }
        });

        return NextResponse.json({ data: comments })

    } catch (error) {
        return NextResponse.json({ error })
    }

}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    try {
        const res = await prisma.comment.delete({
            where: { id },
        })
        return NextResponse.json({ res: true, data: res }, { status: 200 })
    } catch(error){
        return NextResponse.json({ res: false }, { status : 404})
    }
}
