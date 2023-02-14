import mobiles from '../../assets/images/Categories/phone.png';
import fashion from '../../assets/images/Categories/fashion.png';
import electronics from '../../assets/images/Categories/electronics.png';
import home from '../../assets/images/Categories/home.png';
import travel from '../../assets/images/Categories/travel.png';
import appliances from '../../assets/images/Categories/appliances.png';
import furniture from '../../assets/images/Categories/furniture.png';
import beauty from '../../assets/images/Categories/beauty.png';
import grocery from '../../assets/images/Categories/grocery.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Dinners",
        icon: "https://i.ibb.co/2srJ6nW/icon-candlelight-dinner-min.png",
    },
    {
        name: "Cakes",
        icon: "https://i.ibb.co/0nHZ9f4/icon-cakes-min.png",
    },
    {
        name: "Proposals",
        icon: "https://i.ibb.co/2nRNFQR/icon-proposals-min.png",
    },
    {
        name: "Decorations",
        icon: "https://i.ibb.co/ZYx8tnt/icon-balloon-decorations-min.png",
    },
    {
        name: "Kids Birthday",
        icon: "https://i.ibb.co/NV2PH3g/icon-kids-birthday-min.png",
    },
    {
        name: "Balloon Box",
        icon: "https://i.ibb.co/nMWhSyT/icon-helium-balloons-min.png",
    },
    {
        name: "Anniversary",
        icon: "https://i.ibb.co/FW9MF67/couple.png",
    },
    {
        name: "Baby Shower",
        icon: "https://i.ibb.co/dGN1z6M/baby-shower.png",
    },
    {
        name: "Gifts",
        icon: "https://i.ibb.co/vVyWj1G/icon-home-surprises-min.png",
    },
]

const Categories = () => {
    return (
        <section className="  bg-white   min-w-full px-1 py-1 shadow   ">

            <div className="flex  items-center justify-between   overflow-hidden  overflow-x-auto  overflow-style scrollbar-hide ">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-10 w-10">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>


        </section>
    );
};

export default Categories;
