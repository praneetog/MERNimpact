document.getElementById('btn').addEventListener('click', function(){
    const name = document.getElementById("name").value
    document.getElementById("displayName").textContent = `Welcome : ${name}`
})