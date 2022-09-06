const myDoc = document;

const parrafoVideos = myDoc.getElementById("video");


let cantidad_elements = parseInt(prompt("Ingrese la cantidad de videos que desea visualizar"));

for (let i = 1; i <= cantidad_elements; i++) {
    parrafoVideos.innerHTML += `<div class="mb-3 text-center">
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Video ${i}</h4>
            </div>
             <div class="card-body">
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/sGHgLvb5PYE?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            </div>
        </div>
    </div>
</div>`;
};





