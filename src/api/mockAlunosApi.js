import speed from "./speed";

const alunos = [
    {
        id: '1',
        name: 'Fernando Prudente de Matos',
    },
    {
        id: '2',
        name: 'Sheila Maria da Silva Matos',
    }
]

export default class AlunosApi{
    static getAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(alunos);
            }, speed);
        });
    }

    static save(item){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, speed);        
        });
    }
}