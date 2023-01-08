const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector('.theme-toggler')
const orderBtn = document.querySelector('.add-order')
const closeOrder = document.querySelector('#close-order')

// Abrindo uma nova ordem
orderBtn.addEventListener('click', () =>{
    document.querySelector('.container').style.filter = 'opacity(0.2)';
    document.querySelector('.modal').style.display = 'flex';
})

//Fechando a ordem
closeOrder.addEventListener('click', () =>{
    document.querySelector('.container').style.filter ='none';
    document.querySelector('.modal').style.display = 'none';
})




menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
  
})



Orders.forEach(order =>{
    const tr = document.createElement('tr')
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning': 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>`
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})