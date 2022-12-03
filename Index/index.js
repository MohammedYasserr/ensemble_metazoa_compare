//plant bioinformatics - chapter #2
//Fetching the data from the api
//The link is at ---> http://rest.ensembl.org/homology/id/DAPPUDRAFT_100962?compara=metazoa&content-type=application/json 

async function metazoaContentData(){
    let response = await fetch("http://rest.ensembl.org/homology/id/DAPPUDRAFT_100962?compara=metazoa&content-type=application/json") ; 
    let data = await response.json() ; 
    console.log(data) ; 
}

metazoaContentData() ; 