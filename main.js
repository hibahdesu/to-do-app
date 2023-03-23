let input = document.getElementById('input');
let submit = document.getElementById('submit');

let mood = 'Submit';
let c;

window.onload = function() {
    input.focus();
}
let listData;
if (localStorage.list != null) {
    listData = JSON.parse(localStorage.list);
} else {
    listData = [];
}

submit.onclick = function() {
    let newList = {
        input: input.value
    }

    if (input.value !== '') {
        if (mood === 'Submit') {
            listData.push(newList);
        } else {
            listData[c] = newList;
            mood = 'Submit';
            submit.innerHTML = 'Submit';
        }
        clear();
    }

   localStorage.setItem('list', JSON.stringify(listData))
   
   show();
   
}
//clear
function clear() {
    input.value = '';
}

//show
function show() {
    let dolist = '';
    for (let i = 0; i < listData.length; i++) {
        dolist += `
        <div class="task-list-container">
        <div class="task-list-item">
                        <label for="" class="task-list-item-label">
                            <input type="checkbox" id="task-list">
                            <span> ${listData[i].input} </span>
                        </label>
                        
                    </div>
                    <div class="btns">
                        <button id="edit" onclick='edit(${i})'>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#07CA5C" fill="none" class="duration-300 transform transition-all" style="width: 24px; height: 24px;"><path d="M55.5 23.9v29.6a2 2 0 01-2 2h-43a2 2 0 01-2-2v-43a2 2 0 012-2h31.14"></path><path d="M19.48 38.77l-.64 5.59a.84.84 0 00.92.93l5.56-.64a.87.87 0 00.5-.24L54.9 15.22a1.66 1.66 0 000-2.35L51.15 9.1a1.67 1.67 0 00-2.36 0L19.71 38.28a.83.83 0 00-.23.49zM44.87 13.04l6.03 6.2"></path></svg> 
                        </button>
                        <button id="delete" onclick='remove(${i})'>
                            <svg id="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#F00534" fill="none" class="duration-300 transform transition-all" style="width: 24px; height: 24px;"><path d="M45.49 54.87h-27a1 1 0 01-1-1l-2-36h32.97l-2 36a1 1 0 01-.97 1zM51 17.86H13c-.28 0-.5-.16-.5-.35l.93-4.35a.49.49 0 01.5-.3h36.14a.49.49 0 01.5.3l.93 4.35c0 .19-.22.35-.5.35zM24 23.44v25M32 23.44v25M40 23.44v25"></path><path d="M25.73 12.86V7.57a1 1 0 011-1h10.54a1 1 0 011 1v5.29"></path></svg>
    
                        </button>
                         </div>
                         </div>
    `
    }
    document.querySelector('.task-list').innerHTML = dolist;
//count the items
    let count = document.querySelector('.count');
    if (listData.length > 0) {
        count.innerHTML = `<span>Todos (${listData.length})</span>`
    } else {
        count.innerHTML = `No items to show`
    }
}
show();


//delete from the list
 function remove(i) {
    listData.splice(i, 1);
    localStorage.list = JSON.stringify(listData);
    show();


 }

 //edit items in the list
 function edit(i) {
    input.value = listData[i].input;
    submit.innerHTML = 'Update';
    mood = 'Update';
    c = i;
    scroll({
        top: 0, 
        behavior: 'smooth'
    })

 }
