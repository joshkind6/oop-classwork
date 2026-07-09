async function searchMineral(){

    const mineral =
    document.getElementById("search").value.trim();

    let url="../backend/Search.php";

    if(mineral!=""){

        url+="?mineral="+encodeURIComponent(mineral);

    }

    const response=await fetch(url);

    const data=await response.json();

    let output="";

    if(data.length==0){

        output=`

        <div class="empty">

            No mineral found.

        </div>

        `;

    }

    else{

        data.forEach(state=>{

            output+=`

            <div class="col-md-6 col-lg-4">

                <div class="card shadow h-100">

                    <div class="card-header">

                        ${state.state}

                    </div>

                    <div class="card-body">

                        <h5>

                            Capital

                        </h5>

                        <p>

                            ${state.capital}

                        </p>

                        <hr>

                        <h6>

                            Mineral Resources

                        </h6>

                        ${state.minerals.map(mineral=>`

                            <span class="badge bg-success">

                                ${mineral}

                            </span>

                        `).join("")}

                    </div>

                </div>

            </div>

            `;

        });

    }

    document.getElementById("results").innerHTML=output;

}

searchMineral();