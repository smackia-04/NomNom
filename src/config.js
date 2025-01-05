export const IMG_CDN_LINK = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RestList = [
    {
        name : "Bistro B2",
        image : "https://b.zmtcdn.com/data/pictures/6/18787886/5d7781a5c230949cdc3f59652cdd9069_o2_featured_v2.jpg",
        rating : "4.2",
        time : "42",
        cuisine : ["Burger", "Chinese"]
    },
    {
        name : "Capsicum Food Court",
        image : "https://b.zmtcdn.com/data/pictures/8/3900488/a6a5099c34492346ce8940b3f2479770_o2_featured_v2.jpg?output-format=webp",
        rating : "4.4",
        time : "24",
        cuisine : ["North-Indian", "South"]
    },
    {
        name : "Ananta Food Court",
        image : "https://b.zmtcdn.com/data/pictures/6/20170266/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg?output-format=webp%22%20loading=%22lazy%22%20class=%22sc-s1isp7-5%20fyZwWD%22",
        rating : "4.3",
        time : "34",
        cuisine : ["North-Indian", "South"]
    },
    {
        name : "Pizza Hut",
        image : "https://b.zmtcdn.com/data/pictures/chains/7/19498377/9979d1d417e4516c475045031bb9b4b1_o2_featured_v2.jpg?output-format=webp",
        rating : "4.1",
        time : "42",
        cuisine : ["Pizza", "Italian"]
    },
    {
        name : "Singh's Delight Restaurant",
        image : "https://b.zmtcdn.com/data/pictures/8/20363428/1b7724e06a860a3a283548372c55bdc0_o2_featured_v2.jpg",
        rating : "4.3",
        time : "27",
        cuisine : ["North-Indian", "Chinese"]
    },
    {
        name : "McDonald's",
        image : "https://b.zmtcdn.com/data/pictures/chains/8/3900048/29e3c3323d3e4230b30b130efaae9766_o2_featured_v2.jpg",
        rating : "4.4",
        time : "33",
        cuisine : ["Burger"]
    },
    {
        name : "Paprika Restaurant",
        image : "https://b.zmtcdn.com/data/pictures/5/19424445/c3e5679413d8360607dd46cafdc8cbd8_o2_featured_v2.jpg",
        rating : "4.2",
        time : "23",
        cuisine : ["North-Indian", "Chinese"]
    },
    {
        name : "Hari Vilaas",
        image : "https://b.zmtcdn.com/data/pictures/chains/3/3900243/c2c53dc54848066058ba07cb910d20cf_o2_featured_v2.jpg",
        rating : "4.4",
        time : "39",
        cuisine : ["North-Indian", "Chinese"]
    },
    {
        name : "Khadak Singh Da Dhaba",
        image : "https://b.zmtcdn.com/data/pictures/chains/3/20741683/ea9c3740becb91cc753cc79ade2e3494_o2_featured_v2.jpg",
        rating : "4.1",
        time : "32",
        cuisine : ["North-Indian", "Mughlai"]
    },
]

export function filterData(searchText, rest){
    const data = rest?.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
    return data;
}