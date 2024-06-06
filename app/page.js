import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div class="bg-gradient-to-br from-white to-purple-900 h-screen">
      <div className="p-40 max-xl:py-0 max-xl:mt-0">
        <div className="bg-black p-20 max-xl:p-0 shadow-2xl shadow-gray-900">
          <div className="text-6xl font-bold text-center text-white">
            Welcome to the Inventory
          </div>
          <div className="text-center py-10 text-3xl font-semibold text-white" >
            Where do you want to be navigated ?
          </div>
          <div className="flex items-end justify-center gap-5">
            <div className="text-center py-20 max-xl:py-0">
              <button>
                <Link
                  href="/order"
                  className="text-center py-10 px-20 bg-blue-600 rounded-full text-white hover:bg-green-500 transition-all duration-500 ease-in-out text-xl"
                >
                  Order List
                </Link>
              </button>
            </div>
            <div className="text-center py-10 my-auto">
              <button>
                <Link
                  href="/inventory"
                  className="text-center py-10 px-20 bg-pink-600 rounded-full text-white hover:bg-green-500 transition-all duration-500 ease-in-out text-xl"
                >
                  Inventory
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
