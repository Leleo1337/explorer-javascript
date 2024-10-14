export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)   
        this.load()
    }

    load(){
        this.entries = [
            {
                login: 'leleo1337',
                name: 'leandro',
                public_repos: '6',
                followers: '0'
            },
            {
                login: 'maykbrito',
                name: 'mayk brito',
                public_repos: '76',
                followers: '16000'
            }
        ]
    }
    delete(user){
        //higher-order functions
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update(){
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja remover essa linha?')
                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }
    
    createRow(){
        const tr = document.createElement('tr')
        const content = `
            <td class="user">
                <img src="https://github.com/Leleo1337.png" alt="Imagem de perfil de Leleo1337">
                <a href="https://github.com/Leleo1337" target="_blank">
                    <p>Leleo1337</p>
                    <span>Leleo1337</span>
                </a>
            </td>
            <td class="repositories">
                6
            </td>
            <td class="followers">
                0
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
        `

        tr.innerHTML = content

        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
        
    }


}