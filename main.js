let shop_items = document.getElementById("shop_items");
let products = [
    {
        id :"itm1",
        images :"https://cdna.artstation.com/p/assets/images/images/018/381/026/smaller_square/michael-van-der-westhuizen-assassin-s-creed-iii-remastered-custom-cover-mockup.jpg?1559154849",
        title :"ACC III",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur.",
        price : "10",
    },{
        id :"itm2",
        images :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZRwJe6Z8jGAFg7_28sp3EkgiYNm77f5ZDQ&usqp=CAU",
        title :"ACC Valhalla",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur.",
        price : "20",
    },{
        id :"itm3",
        images :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0ZXyChu6qoVnKpCO2TnuTTMIXjdcqKFvwg&usqp=CAU",
        title :"RDR II",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur.",
        price : "30",
    },{
        id :"itm4",
        images :"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/845cbd8a-6a34-4c9f-af98-90323eb003d2/d8q0gcz-c10cbce3-f09e-44df-8f90-079ee414e9bd.jpg/v1/fill/w_1600,h_1057,q_75,strp/gta_v_pc_dvd_cover_by_bora888_d8q0gcz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1NyIsInBhdGgiOiJcL2ZcLzg0NWNiZDhhLTZhMzQtNGM5Zi1hZjk4LTkwMzIzZWIwMDNkMlwvZDhxMGdjei1jMTBjYmNlMy1mMDllLTQ0ZGYtOGY5MC0wNzllZTQxNGU5YmQuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vtn2fju9IxcLvI-9MnMZzXD6XBcQ1pnqxxafdBRUQ1Q",
        title :"GTA 5",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, consequuntur.",
        price : "40",
    },
];

let generateshop = () =>
{
    return (shop_items.innerHTML = products.map((x)=>{
        let{id,images,title,desc,price} = x;
        return
        `<div id = productID-${id} class="items">
            <img width="220" height="220"
                src="${images}">
            <div class="details">
                <h3>${title}</h3>
                <p>${desc}</p>
                <div class="price_quantity">
                    <p>${price}$</p>
                    <div class="quantities">
                        <i class="bi bi-dash"></i>
                        <p>0</p>
                        <i class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
`}).join(""));
};

generateshop();
