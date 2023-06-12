import {ChangeEvent, createRef, FormEvent, RefObject, useState} from "react";
import api from "@/extension/api";


interface FormProp {
    nome: string
    email: string
    telefone: string
    status: string
}

const Form = () => {

    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const dialofForm = createRef<HTMLDialogElement>()

    const [form, setForm] =
        useState<FormProp>({status: "Topo", email: "", nome: "", telefone: ""})

    const charge = async (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // dialofForm.current.show()
        dialofForm.current?.showModal()

    }

    const send = async () => {
        dialofForm.current?.close()
        try {
            const res = await api().post("/leads", form)
        } catch (e) {

        }


    }

    return (
        <div>
            <article>
                <h5>Informações</h5>

                <p>Envie suas informações para que nos entrar em contato com voce</p>

                <form onSubmit={submit}>

                    <div className="field label border">
                        <input required onChange={charge} name={"nome"} type="text"/>
                        <label>Nome Completo</label>
                    </div>

                    <div className="field label border">
                        <input required name={"email"} onChange={charge} type="text"/>
                        <label>Email</label>
                    </div>

                    <div className="field label border">
                        <input required name={"telefone"} onChange={charge} type="tel"/>
                        <label>Telefone</label>
                    </div>

                    <button type={"submit"} className="medium-elevate ">
                        <i>send</i>
                        <span>Enviar Dados</span>
                    </button>

                </form>

            </article>



            

                <dialog  ref={dialofForm}>
                    <h5>Default</h5>
                    <div>Some text here</div>
                    <nav className="right-align">
                        <button onClick={event => {
                            dialofForm.current?.close()
                        }} className="border">Cancel
                        </button>
                        <button onClick={send} type={"button"}>Confirm</button>
                    </nav>
                </dialog>


        </div>)

}

const OverLay = (props: any) => {

    return (<div className={"overlaym"}>{props.children}</div>)
}


export default Form