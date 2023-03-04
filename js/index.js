const allUniverseData = () =>{
    fetch(" https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data =>showUniverseData(data.data))
  }
  
  const showUniverseData = (data) =>{
    // console.log(data)
   const container = document.getElementById('all-card');
   data.tools.forEach((singleData)=>{
    // console.log(singleData)
   const div = document.createElement('div');
   div.innerHTML =`
  <div class="col">
  <div class="card">
  <img src=${singleData.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Features</h5>
    <div class="grid grid-rows-1">
       <p>1.Natural language processing</p>
       <p>2.Contextual understanding</p>
       <p> 3.Text generation</p>
      </div>
      <hr>
      <h5 class="card-title">${singleData.name}</h5>
      <div class="d-flex justify-content-between">
      <i class="fa-thin fa-calendar-week" > ${singleData.published_in} </i>
      <i class="fas fa-arrow-right" onclick="fetchNewDetails('${singleData.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>
      
  </div>
  </div>
  </div>
  `;
   container.appendChild(div)
  })
  };
  
  const fetchNewDetails = id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>showNewsDetail(data.data))
  }
   const showNewsDetail = newsDetail =>{
    console.log(newsDetail)
    const {image_link,input_output_examples,description,pricing,features,integrations } = newsDetail;
  document.getElementById("modal-body").innerHTML = `
  <div class="container col col-md-6 d-flex flex-row gap-3 w-100">
  <div class="col">
  <div class="card ">
  <img class=" img-fluid img-thumbnail"  src=${image_link[0]}  alt="..."  />
  <h3 class="card-title text-center">${input_output_examples[0].input.slice(0,100)}...</h3>
  
  <div>
  </div>
  <p>${input_output_examples[0].output.slice(0,50) ? input_output_examples[0].output.slice(0,50) :"No! Not Yet! Take a break!!!" }...</p>
  </div>
  </div>
  <div class="col">
  <div class="card bg-danger-subtle border container">
  <p class="card-text font-weight-bold w-75%">${description.slice(0,100)}...</p>
  <div class="d-flex gap-3 ">
  <div class="text-success border rounded bg-white h-25 text-center g-0">
  <p>${pricing[0].plan}</p>
  <p>${pricing[0].price}</p>
  </div>
  <div class="text-warning border rounded bg-white h-25 text-center g-0">
  <p>${pricing[1].plan}</p>
  <p>${pricing[1].price}</p>
  </div>
  <div class="text-danger border rounded bg-white w-25 text-center g-0">
  <p >${pricing[2].plan}</p>
  <p>${pricing[2].price}</p>
  </div>
  </div>
  
  <div class="col col-md-6 d-flex -flex-row">
  <div class="col">
  <h5 class="card-title">Features</h5>
  <ul>
  <li>${features[1].feature_name}</li>
  <li>${features[2].feature_name}</li>
  <li>${features[3].feature_name}</li>
  </ul>
  </div>
  <div class="col">
  <h5 class="card-title">Integrations</h5>
  <ul>
  <li>${integrations[0]}</li>
  <li>${integrations[1]}</li>
  <li>${integrations[2]}</li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
  
  
  
  `;  
  };
  
  allUniverseData();