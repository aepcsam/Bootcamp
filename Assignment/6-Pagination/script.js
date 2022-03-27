async function email() {
    let res = await fetch('./pagination.json');
    let data = await res.json();
    // console.log(data.length);


    const displayPageNav = perPage => {

        let pagination = ``
        const totalItems = data.length
        perPage = perPage ? perPage : 1
        const pages = Math.ceil(totalItems / perPage)

        // console.log(pages);

        for (let i = 1; i <= pages; i++) {

            pagination += `<a href="#" onClick="displayItems(${i},${perPage})  >${i}</a>`

        }

        const pagin = document.getElementById('pagination').innerHTML = pagination;
        // console.log(pagin);

    }


    let displayItems = (page = 1, perPage = 2) => {

        let index, offSet

        if (page == 1 || page <= 0) {
            index = 0
            offSet = perPage
                // console.log(offSet);
        } else if (page > data.length) {
            index = page - 1
            offSet = data.length;
            console.log(offSet);

        } else {
            index = page * perPage - perPage
            offSet = index + perPage;
            console.log(offSet);

        }

        function first() {
            console.log(index = page * perPage - perPage)
            offSet = index + perPage
            console.log(offSet)
        }
        first();


        const slicedItems = data.slice(index, offSet)

        const html = slicedItems.map(item =>
            `<tr>
            <td>${item.id}</td>
            <td>${item.email}</td>
            <td>${item.name}</td>
          </tr>`)

        document.querySelector('#container tbody').innerHTML = html.join('')

    }

    let perPage = 10
    displayPageNav(perPage)
    displayItems(1, perPage)

    if (displayItems(1, 10)) {
        firstEl.addEventListener('click', (e) => {
            console.log(e.type)
        })
    }

    function result() {

        const firstEl = document.querySelector('.first');
        firstEl.addEventListener('click', () => {
            displayItems(1, 10);
        })


        let btn1 = document.querySelector(".btn1");

        btn1.addEventListener('click', () => {
            displayItems(1, 10);
        });


        let btn2 = document.querySelector(".btn2");
        btn2.addEventListener('click', () => {
            displayItems(2, 10);
        });

        let btn3 = document.querySelector(".btn3");
        btn3.addEventListener('click', () => {
            displayItems(3, 10);
        })

        let btn4 = document.querySelector(".btn4");
        btn4.addEventListener('click', () => {
            displayItems(4, 10);
        })

        let btn5 = document.querySelector(".btn5");
        btn5.addEventListener('click', () => {
            displayItems(5, 10);
        })

        let btn6 = document.querySelector(".btn6");
        btn6.addEventListener('click', () => {
            displayItems(6, 10);
        })

        let btn7 = document.querySelector(".btn7");
        btn7.addEventListener('click', () => {
            displayItems(7, 10);
        })
        let btn8 = document.querySelector(".btn8");
        btn8.addEventListener('click', () => {
            displayItems(8, 10);
        })
        let btn9 = document.querySelector(".btn9");
        btn9.addEventListener('click', () => {
            displayItems(9, 10);
        })
        let btn10 = document.querySelector(".btn10");
        btn10.addEventListener('click', () => {
            displayItems(10, 10);
        })

        const last = document.querySelector('.last');
        last.addEventListener('click', () => {
            displayItems(10, 10);
        })

    }
    result();





}
email();