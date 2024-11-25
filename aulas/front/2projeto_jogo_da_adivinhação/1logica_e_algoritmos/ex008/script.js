/*
    Crie uma lista de pacientes

    Cada paciente da lista deve conter
        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes
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
    },
]

let patientsNames = []

// jeito mais moderno
for(let patient of patients){
    patientsNames.push(patient.name)
}

// for(let i = 0; i < patients.length; i++){
//     patientsNames[i] = patients[i].name
// }

alert(patientsNames)