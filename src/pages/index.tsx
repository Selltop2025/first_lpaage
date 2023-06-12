import AppBar from "@/components/AppBar";
import Form from "@/components/Form";
export default function Home() {

    return (
        <div >


            <AppBar/>


            <main className="responsive">

                <div className={"grid"}>
                    <div className={"s12 m6"}>
                        <Form/>
                    </div>

                    <div className={"s12 m6"}>
                        <br/>
                        <br/>
                        <h2> Um Novo Mundo</h2>
                        <p> Um Novo Mundo</p>
                    </div>

                </div>



            </main>
        </div>
    )

}
