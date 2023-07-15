const { NextResponse } = require("next/server");

export async function GET(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('postId');

    let comments = [
        {
            commentId: 1,
            name:'User Name 1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 1
        },
        {
            commentId: 2,
            name: 'User Name 2',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 1
        },
        {
            commentId: 3,
            name: 'User Name 1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 2
        },
        {
            commentId: 4,
            name: 'User Name 2',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 2
        },
        {
            commentId: 5,
            name: 'User Name 3',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 2
        },
        {
            commentId: 6,
            name: 'User Name 4',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 2
        },
        {
            commentId: 7,
            name: 'User Name 1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 3
        },
        {
            commentId: 8,
            name: 'User Name 2',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 3
        },
        {
            commentId: 9,
            name: 'User Name 3',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est.',
            postId: 3
        },
    ]

    if (id) {
        comments = comments.filter(c => c.postId == id);
    }

    return NextResponse.json({ comments });

}