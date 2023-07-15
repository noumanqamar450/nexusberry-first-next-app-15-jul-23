import { NextResponse } from 'next/server'

export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    let data = [
        {
            postId: 1,
            title: 'Dynamic Routing and Static Generation',
            slug: 'dynamic-routing-and-static-generation',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.',
            image:'https://images.pexels.com/photos/14958090/pexels-photo-14958090/free-photo-of-aerial-view-of-hills-in-the-death-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: ['Tech', 'Next Js'],
            date: 'March 08, 2023',
            userId: 1
        },
        {
            postId: 2,
            title: 'Learn How to Pre-render Pages Using Static Generation with Next.js',
            slug: 'learn-how-to-pre-render-pages-using-static-generation-with-nextjs',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.',
            image:'https://images.pexels.com/photos/14213364/pexels-photo-14213364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: ['Tech', 'Next Js', 'React Js'],
            date: 'March 16, 2023',
            userId: 2
        },
        {
            postId: 3,
            title: 'Preview Mode for Static Generation',
            slug: 'preview-mode-for-static-generation',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Venenatis cras sed felis eget velit.Consectetur libero id faucibus nisl tincidunt.Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.Volutpat consequat mauris nunc congue nisi vitae.Id aliquet risus feugiat in ante metus dictum at tempor.Sed blandit libero volutpat sed cras.Sed odio morbi quis commodo odio aenean sed adipiscing.Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod. Velit euismod in pellentesque massa placerat.Mi bibendum neque egestas congue quisque egestas diam in arcu.Nisi lacus sed viverra tellus in.Nibh cras pulvinar mattis nunc sed.Luctus accumsan tortor posuere ac ut consequat semper viverra.Fringilla ut morbi tincidunt augue interdum velit euismod.',
            image:'https://images.pexels.com/photos/13876506/pexels-photo-13876506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: ['Tech', 'Vue Js'],
            date: 'March 25, 2023',
            userId: 1
        }
    ]

    if (slug) {
        data = data.find(d => d.slug == slug);
    }

    return NextResponse.json({ data })
}