const getBtn = document.querySelector('#resbtn')

const resBtnClick = () => {
    let resNames = document.querySelectorAll('h2')
    for (i = 0; i < resNames.length; i++) {
        resNames.shift()
    }
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(res => {
        for (i = 0; i < res.data.results[0].residents.length; i++) {
            axios.get(res.data.results[0].residents[i])
            .then(res => {
                let resName = document.createElement('h2');
                resName.textContent = res.data.name;
                document.querySelector('body').appendChild(resName)
            })
        }
    })
}

getBtn.addEventListener('click', resBtnClick)