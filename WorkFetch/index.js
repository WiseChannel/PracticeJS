document.querySelector('#load').addEventListener('click', load)

async function load() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    // fetch(url)
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(function(data) {
    //         let ul = document.querySelector('#list')

    //         let html = data.map(function(item) {
    //             return '<li>' + item.id + ' ' + item.name + ' (' + item.email +  ')</li>'
    //         })

    //         ul.insertAdjacentHTML('afterbegin', html.join(''))
    //         console.log(data)
    //     })

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

         let ul = document.querySelector('#list')
            let html = data.map(function(item) {
                return '<li>' + item.id + ' ' + item.name + ' (' + item.email +  ')</li>'   // этот код, более кроссбраузерный. Поддерживает больше браузеров
            })

            ul.insertAdjacentHTML('afterbegin', html.join(''))

}



//test git

// let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)

//          let ul = document.querySelector('#list')
//             let html = data.map(function(item) {
//                 return '<li>' + item.id + ' ' + item.name + ' (' + item.email +  ')</li>'   // этот код, более кроссбраузерный. Поддерживает больше браузеров
//             })

//             ul.insertAdjacentHTML('afterbegin', html.join(''))

// }
