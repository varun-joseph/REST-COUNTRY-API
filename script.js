fetch("https://restcountries.eu/rest/v2/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

let $mid_col = document.getElementById('mid-col');
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
  }
function appendData(data) {
    for(i=0;i<data.length/2;){
        //create row
        let $divRow = document.createElement('div');
        setAttribute($divRow, 'class', 'row');
        $mid_col.append($divRow);
        $rowSelector = document.querySelectorAll('#mid-col .row');
        //console.log($rowSelector);
        let k = i;
        for(j=0;j<2;j++){
            //create column
            let $divCol = document.createElement('div');
            $divCol.setAttribute('class', 'col-6 d-flex my-1');
            console.log($divCol);
            $rowSelector[i].append($divCol);
            //create div for card
            let $cardDiv = document.createElement('div');
            $cardDiv.setAttribute('class','card  ms-0');
           // $cardDiv.style.width = '15rem';
            $divCol.append($cardDiv);
            //create div for card header
            let $cardHeadDiv = document.createElement('div');
            $cardHeadDiv.setAttribute('class','card-header text-center');
            $cardHeadDiv.innerText = data[k].name;
            $cardDiv.append($cardHeadDiv);
            
            //create ul
            let $ulTag = document.createElement('ul');
            $ulTag.setAttribute('class','list-group list-group-flush');
            $cardDiv.append($ulTag);
            //create li1
            let $li1 = document.createElement('li');
            $li1.setAttribute('class','list-group-item');
            $li1.innerHTML = `<b>Capital</b> : ${data[k].capital}`;
            $ulTag.append($li1);
            //create li2
            let $li2 = document.createElement('li');
            $li2.setAttribute('class','list-group-item');
            $li2.innerHTML = `<b>Region</b> : ${data[k].region}`;
            $ulTag.append($li2);
            let $li3 = document.createElement('li');
            $li3.setAttribute('class','list-group-item');
            $li3.innerHTML = `<b>Currency code</b> : ${data[k].currencies[0].code}`;
            $ulTag.append($li3);
            let $li4 = document.createElement('li');
            $li4.setAttribute('class','list-group-item');
            $li4.innerHTML = `<b>Population</b> : ${data[k].population}`;
            $ulTag.append($li4);
            let $li5 = document.createElement('li');
            $li5.setAttribute('class','list-group-item');
            $li5.innerHTML = `<b>Lat</b> : ${data[k].latlng[0]} <b>Lng</b> : ${data[k].latlng[1]}`;
            $ulTag.append($li5);
            k++;
        }
        i++;
    }
}