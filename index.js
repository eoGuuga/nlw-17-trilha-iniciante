const { select, input, checkbox} = require('@inquirer/prompts')

let meta = {
    value: 'tomar agua todos os dias',
    checked: false,
}

let metas = [ meta ]

const listarmetas = async () => {

    const respostas = await checkbox({
        message:"Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para confirmar.",
        choices: [...metas],
        instructions: false,
    }) 
    if (respostas.length == 0) {
        console.log("Nenhuma meta selecionada.")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    } )

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta 
        })

        meta.checked = true
    })

    console.log("Meta(s) concluidas.")

}

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

const metasrealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log("Não existem metas realizadas.")
        return
    }
    await select({
        message: "Metas realizadas",
        choices: [...realizadas]
    })
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
                    name:"Metas realizadas",
                    value: "realizadas"
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
                await listarmetas()
                break
            case "realizadas":
                await metasrealizadas()
                break
            case "Sair":
                console.log("Até a proxima !")
                return
        }
    }

}

start()