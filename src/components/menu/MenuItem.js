import Image from "next/image";

export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group-hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <Image src="/pizza.png" alt="pizza" width={300} height={300} className="max-h-auto max-h-24 block mx-auto" />
            </div>
            <h4 className="font-semibold text-xl my-3">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                ljksdbkv kjnskjdbnc kjbksdc
            </p>
            <button className="mt-4 bg-green-700 text-white rounded-full px-8 py-2">
                Add to cart $12
            </button>

            {/* <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                <div className=" flex flex-col h-full">
                    <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <Image src="/pizza.png" width={300} height={400} alt="food1"
                            className="object-cover" />
                    </div>

                    <div className="p-6 text-center flex-1">
                        <h3 className="text-lg font-bold text-gray-800">Veg Burger with Salad</h3>
                        <h4 className="text-xl text-gray-800 font-bold mt-3">$22</h4>
                    </div>
                    <button type="button" className="bg-green-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>
                </div>
            </div> */}
        </div>
    );
}