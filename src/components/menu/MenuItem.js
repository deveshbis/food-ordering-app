import Image from "next/image";

export default function MenuItem() {
    return(
<div>
    <Image src="/pizza.png" alt="pizza" width={300} height={300}/>
    <h4 className="font-semibold text-xl my-3">
        Pepperoni Pizza
    </h4>
    <p className="text-gray-500 text-sm">
        ljksdbkv kjnskjdbnc kjbksdc 
    </p>
    <button className="mt-4 bg-green-700 text-white rounded-full px-8 py-2">
        Add to cart $12
    </button>
</div>
    );
}