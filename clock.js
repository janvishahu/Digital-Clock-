let hour=document.getElementById("hrs");
    let minute=document.getElementById("hrs");
    let second=document.getElementById("hrs");

    setInterval(() => {
        let cuuentTime=new Date();

    hrs.innerHTML = cuuentTime.getHours();
    min.innerHTML = cuuentTime.getMinutes();
    sec.innerHTML = cuuentTime.getSeconds();
        
    }, 1000);