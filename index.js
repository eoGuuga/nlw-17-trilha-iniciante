const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'tomar agua todos os dias',
    checked: false,
}

let metas = [ meta ]

const cadastrarmeta = async () => {
    const meta = await input ({message: "Digite a meta: "})

    if(meta.length == 0) {
        console.log('A meta não pode ser cadastrada.')
        return
    }

    metas.push(
    {
        value: meta, checked: false
    }
)
}
const start = async () => {
    let count = 0
    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Vamos listar",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "Sair"
                }
            ]
        })



        switch(opcao){
            case "cadastrar":
                await cadastrarmeta()
                console.log(metas)
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "Sair":
                console.log("Até a proxima !")
                return
        }
    }

}

start()