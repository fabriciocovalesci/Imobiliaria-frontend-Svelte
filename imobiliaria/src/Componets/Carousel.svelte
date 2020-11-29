

<script>

    let URLIMAGE1 = "http://127.0.0.1:8000/api/v1/immobile/1"

    let URLIMAGE2 = "http://127.0.0.1:8000/api/v1/immobile/2"

    let images = []

        fetch(URLIMAGE1)
        .then(response => response.json())
        .then(data => images.push(data.photo));

        fetch(URLIMAGE2)
        .then(response => response.json())
        .then(data => images.push(data.photo));

        for (const item of images) {
            console.log(item);
        }
        
    function addFoto(){
        for (const foto in images) {
            setTimeout(function(){
                let element = images[foto];
                return element
            }, 3000)   
        }
    }

</script>

<main>
    <div class='container'>
        <div class='w-screen transition-all ease-in-out duration-1000'>
            <p>carrousel</p>
            <img src={images[0]} alt="" srcset="">
        </div>
    </div>
</main>