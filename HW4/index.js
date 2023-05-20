function createPage() {

    const galery = ["https://cdn2.tu-tu.ru/image/pagetree_node_data/2/0ad42704b8fffd99ee94f38d5ed424ad/", "https://www.altamar.by/wp-content/uploads/2022/07/main-georgia.jpg", "https://blog.mydutyfree.net/images/uploaded/21.04.2021%20Georgia/%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F1.jpg", "https://www.avianews.com/wp-content/uploads/2021/04/georgia_iman_gozal_unsplash.jpg"];


    let list = document.createElement("ul");
    document.body.append(list);
    let source;

    const imgNew = function () {
        Promise.allSettled(galery)
            .then(galery.forEach(function (element) {
                let listLi = document.createElement("li");
              
                let source = document.createElement("img");
                source.setAttribute("src", element);
                source.className = "galeryClass";

                listLi.append(source);
                list.append(listLi);
                source.addEventListener('click', function (e) {
                    if (document.querySelector('a') != null) {
                        document.querySelector('a').remove();
                        document.querySelector('br').remove();
                    }
                    const aLink = document.createElement('a');
                    aLink.setAttribute("href", e.target.src);
                    aLink.innerText = e.target.src;

                    e.srcElement.parentElement.append(document.createElement('br'))
                    e.srcElement.parentElement.append(aLink);

                })

            }))


    };

    imgNew();



}

createPage()




