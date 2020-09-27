function loadItems()
{
    return fetch('data/data.json')
    .then(res=>res.json()) //json type
    .then(json=>json.items); // only return itmes in json file
}

function displayItems(items)
{
    const container=document.querySelector('.items');
    container.innerHTML=items.map(item=>getHTMLString(item)).join('');
}

function getHTMLString(item)
{
    return `
        <li class="item">
            <img src="${item.img}" alt="${item.type}" class="item_thumbnail">
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function setEventListener(items)
{
    const logo=document.querySelector('.logo');
    const buttons=document.querySelector('.buttons');

    logo.addEventListener('click',()=> displayItems(items));
    buttons.addEventListener('click',event=>onButtonclick(event,items));    
}

function onButtonclick(event,items)
{
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;
    

    if(key===null||value===null){
        return;
    }
    
    displayItems(items.filter(item=>item[key]===value));

}


//Main

loadItems()
.then(items=>{
    console.log(items);
    displayItems(items);
    setEventListener(items);
})
.catch(console.log);