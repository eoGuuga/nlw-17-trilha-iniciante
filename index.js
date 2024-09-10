const { select } = require('@inquirer/prompts')

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
                console.log("Vamos cadastrar")
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