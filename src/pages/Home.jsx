import ButtonNav from "../components/shared/ButtonNav";

function Home(){
    return(
        <section className="bg-[#1f1f1f] h-[calc(100vh-4rem)] overflow-hidden flex gap-3">
            {/**Left Div */}
            <div className="flex-[3] bg-[#1a1a1a]">

            </div>
            {/**Right Div */}
            <div className="flex-[2] bg-[#1a1a1a]">

            </div>
            <ButtonNav/>
        </section>
    )
}

export default Home;