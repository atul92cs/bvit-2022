let btnColor=document.querySelector('#change-color');
btnColor.addEventListener('click',()=>{
     
     let body=document.querySelector('body');
     body.style.backgroundColor='red';
});
let bikes=[{
    name:'Duke 390',
    company:'KTM'
},
{
    name:'Rc 200',
    company:'KTM'
}];
let body=document.querySelector('body');
body.addEventListener('Onload',(e)=>{
    e.preventDefault();
    let list=document.createElement('ul');
    list.id='bike-list';
    body.appendChild(list);
    bikes.forEach(bike=>{
        let {name,company}=bike;
        let listel=document.createElement('li');
        let content=`${name}-${company}`;
        let listcontent=document.createTextNode(content);
        listel.appendChild(listcontent);
        list.appendChild(listel);
        body.appendChild(list);
    });
});