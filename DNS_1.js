let namelist2 = [];
let conflist = [];
let pricelist2 = [];
let imglist = [];
let hreflist1 = [];
let give_items = () => {
    //give namelist
    let namelist = document.querySelectorAll(".catalog-product__name");
    for (let i = 0; i < namelist.length; i++) {
        namelist2[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[0].split('//')[0];
        conflist[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[1].split(']')[0];
    }
    console.log(namelist2)
    console.log(conflist)
    //give price
    let pricelist = document.querySelectorAll(".product-buy__price");
     for (let i = 0; i < pricelist.length; i++) {
        pricelist2[i] = pricelist[i].innerHTML.split('<')[0];
    }
    console.log(pricelist2)
    let hreflist = document.querySelectorAll(".catalog-product ");
    for (let i = 0; i < hreflist.length; i++) {
        hreflist1[i] = 'https://www.dns-shop.ru' + hreflist[i].innerHTML.split('href="')[1].split('"')[0];
    }
    console.log(hreflist1);
}
give_items();

let upload_items = () => {
    let x = '<img src="https://zooblog.ru/uploads/posts/2012-05/1336974741_6.jpg" style="margin: 5px; width: 25%; border-radius: 8px;">';
    let item = '<div style="display: flex; flex-wrap: wrap; flex-direction: row; padding: 20px; margin-bottom: 20px">';
    for (let i = 0; i < namelist2.length; i++) {
        item += '<div style="width: 40%; height: auto; border: 4px; padding: 20px">'
        item += '<img src="https://zooblog.ru/uploads/posts/2012-05/1336974741_6.jpg" style="margin: 5px; width: 40%; border-radius: 8px;"></img>';
        item += '<br>' + '<b>' + namelist2[i] + '</b>';
        item += '<br>' + pricelist2[i];
        item += '<div class="row button"><a href="'+ hreflist1[i] + '"Выбрать"</a></div>';
        item += '</div>';
    }
    document.querySelector(".products-page ").innerHTML = item;
}
upload_items();

