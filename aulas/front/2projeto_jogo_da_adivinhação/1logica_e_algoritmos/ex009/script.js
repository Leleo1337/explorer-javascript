/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC deste paciente

    Crie uma função para fazer o calculo do IMC
*/
const patients = [
    {
        name: 'Leandro',
        age: 16,
        weight: 70,
        height: 170,
    },
    {
        name: 'luiz',
        age: 23,
        weight: 66,
        height: 182,
    },
    {
        name: 'pedro',
        age: 14,
        weight: 85,
        height: 174,
    }
]

// let peso = patients[0].weight
// let altura = patients[0].height
// console.log(`LEANDRO TEM IMC DE ${(peso / ((altura / 100) ** 2)).toFixed(2)} `)

function imc(peso, altura){
    const calcIMC = (peso / ((altura / 100) ** 2)).toFixed(2)
    return calcIMC
    
}

for(let patient of patients){
    const peso = patient.weight
    const altura = patient.height
    const IMC = imc(peso,altura)

    alert(`Paciente ${patient.name} possui o IMC de: ${IMC}`)

}
