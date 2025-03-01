import Link from "next/link"; // Add this import

const NavBar = () => {
  return (
    <>
        <section className="py-4">
            <div className="container w-full max-w-full mx-4">
                <div className="grid grid-cols-2 border border-white/16 rounded-full py-2 px-4">
                    <div>logo</div>
                    <div>icon</div>
                    <Link href={"/about"}>about</Link>
                    <Link href={"/predict"}>about</Link>
                </div>
            </div>
        </section>
    
    </>
  );
}
export default NavBar;